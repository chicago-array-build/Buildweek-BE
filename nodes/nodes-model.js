const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    // findBy,
    findById,
  };

function find() {
    return db('node_queries').select();
  }

async function add(query) {

  const array = ['https://plot.ly/~PlotBot/1614', 'https://plot.ly/~PlotBot/1616/', 'https://plot.ly/~PlotBot/1612', 'https://plot.ly/~PlotBot/1296', 'https://plot.ly/~PlotBot/1364']
  var rand = array[Math.floor(Math.random() * array.length)];

  const modifiedQuery = {...query, url: rand}
  const [id] = await db('node_queries').insert(modifiedQuery, 'id');
  
  return findById(id)
  }

function findById(id) {
return db('node_queries')
    .where({ id })
    .first();
}

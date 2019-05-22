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
  const modifiedQuery = {...query, url: 'https://plot.ly/~PlotBot/1616/'}
  const [id] = await db('node_queries').insert(modifiedQuery, 'id');
  
  return findById(id)
    // const [id] = await db('node_queries').insert(query, 'id');
    // const obj = findById(id)
    // const newObj = {...obj, url: 'www.thing.com'}
    // return db('node_queries')
    //   .where({ id })
    //   .update(newObj)
    //   .then(count => {
    //     if (count > 0) {
    //       return findById(id);
    //     } else {
    //       return null;
    //     }
    //   });
    // update(id)
    // return findById(id);

  }

  // function update(id) {
  //   const obj = findById(id)
  //   const newObj = {...obj, url: 'www.thing.com'}
  //   return db('node_queries')
  //     .where({ id })
  //     .update(newObj)
  //     .then(count => {
  //       if (count > 0) {
  //         return findById(id);
  //       } else {
  //         return null;
  //       }
  //     });
  // }

function findById(id) {
return db('node_queries')
    .where({ id })
    .first();
}

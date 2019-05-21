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
    const [id] = await db('node_queries').insert(query, 'id');
  
    return findById(id);
  }

function findById(id) {
return db('node_queries')
    .where({ id })
    .first();
}

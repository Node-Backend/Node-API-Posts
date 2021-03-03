const db = require('../../data/posts.js')


module.exports = {
    find,
    // findById,
    // add,
    // remove,
    // update,
    // findHubMessages
  };
  
  function find(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);
  
    let rows = db('posts')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset);
  
    return rows;
  }
  
const server = require('./api/server.js');

server.listen(5000, () => {
  console.log(`Server running at http://localhost:5000 `);
});
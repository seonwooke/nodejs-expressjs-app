const path = require('path');

function getPost(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'background2.jpeg'));
}

module.exports = {
  getPost
}
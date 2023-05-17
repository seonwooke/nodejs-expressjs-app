function getPost(req, res) {
  res.send('<div><h1>Post Title</h1></div><p>This is a post</p>');
}

module.exports = {
  getPost
}
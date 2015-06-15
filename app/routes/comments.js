var express = require('express');
var router = express.Router();
var fs = require('fs')

var comments = JSON.parse(fs.readFileSync('data/comments.json'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

router.post('/', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

module.exports = router;

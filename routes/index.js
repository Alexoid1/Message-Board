var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board' });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.post('/new', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

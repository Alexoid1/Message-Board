var express = require('express');
var router = express.Router();


let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',message:messages });
});

router.get('/new', function(req, res, next) {
  console.log('jmghjmhg')
  res.render('new', { title: 'Express' });
});

router.post('/new', function(req, res, next) {
  
  let newMessage = {
    
    text: req.body.message,
    user: req.body.full_name,
    added: new Date()
  } 
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;

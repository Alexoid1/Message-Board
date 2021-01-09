var express = require('express');
var router = express.Router();

const moment = require('moment');
const Message = require('../models/message');




// let messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];
/* GET home page. */


router.get('/', async (req, res, next) => {
  const messages = await Message.find();
  console.log(messages)
  res.render('index', { title: 'Message Board',message:messages });
});

router.get('/new', function(req, res, next) {
 
  res.render('new', { title: 'Express' });
});

router.post('/new', async (req, res, next) => {
  let newMessage = {
    
    text: req.body.message,
    user: req.body.full_name
    
  } 
  const task = new Message(newMessage);
  await task.save();
  
  
  
  res.redirect('/');
});

router.get('/delete/:id', async(req, res, next) =>{
  let { id } = req.params;
  await Message.remove({_id: id});
  res.redirect('/');
});

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = Schema({
  text: {type: String, required: true},
  image:String,
  user: {type: String, required: true},
  added: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('message', MessageSchema);
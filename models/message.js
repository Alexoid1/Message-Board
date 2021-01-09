const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = Schema({
  text: String,
  user: String,
  added: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('message', MessageSchema);
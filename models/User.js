const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  faceDescriptor: { type: Array, required: true },
});

module.exports = mongoose.model('User', userSchema);

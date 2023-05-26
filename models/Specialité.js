const mongoose = require('mongoose');
const { Schema } = mongoose;

const specialiteSchema = new Schema({
  name: { type: String, required: true }
});

const Specialitee = mongoose.model('Specialitee', specialiteSchema);

module.exports = Specialitee;

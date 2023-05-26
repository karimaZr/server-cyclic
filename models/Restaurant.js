const mongoose = require('mongoose');
const { Schema } = mongoose;

const restoSchema = new Schema({
  name: { type: String, required: true },
  adresse: { type: String, required: true },
  cords: { type: [Number], required: true }, // Changed to an array of numbers
  zone: { type: Schema.Types.ObjectId, ref: 'Zone', required: true },
  specialite: { type: Schema.Types.ObjectId, ref: 'Specialité', required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  site: { type: String, required: true },

});

const Resto = mongoose.model('Resto', restoSchema);

module.exports = Resto;

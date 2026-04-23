const mongoose = require('mongoose');
const validator = require('validator');
const {parsePhoneNumberFromString } = require('libphonenumber-js');

const clienteSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    telefone: {
         type: String,
         required: true,
         validate:{
             validator: function(v) {
                try {
                    const phone = parsePhoneNumberFromString(v, 'BR');
                    return phone && phone.isValid();
                } catch{
                    return false;
                }
             },
             message: 'Telefone inválido'
         } 
    },
    email: { type: String, required: true, trim: true, lowercase: true,unique: true ,validate: [validator.isEmail, 'Email inválido']}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Cliente', clienteSchema);

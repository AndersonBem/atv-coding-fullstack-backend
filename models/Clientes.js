const mongoose = require('mongoose');
const validator = require('validator');
const { parsePhoneNumberFromString } = require('libphonenumber-js');

const clienteSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },

    telefone: {
      type: String,
      required: true,
      trim: true,
      set: (v) => v.replace(/\D/g, ''), // remove tudo que não for número
      validate: {
        validator: function (v) {
          const somenteNumeros = v.replace(/\D/g, '');

          if (!/^\d{10,11}$/.test(somenteNumeros)) {
            return false;
          }

          const phone = parsePhoneNumberFromString(somenteNumeros, 'BR');
          return !!phone && phone.isValid();
        },
        message: 'Telefone inválido. Informe um número brasileiro com DDD.'
      }
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'Email inválido']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Cliente', clienteSchema);
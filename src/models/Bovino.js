const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  dataCompra: String,
  pesoCompra: Number,
  valorCompra: Number,
  dataNascimento: String,
  raca: String,
  brinco: Number,
  dataVenda: String,
  pesoVenda: Number,
  valorVenda: Number
  /*dataCompra: {
    type: String,
    required: true,
  },
  pesoCompra: {
    type: Number,
    required: true,
  },
  valorCompra: {
    type: Number,
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: true,
  },
  brinco: {
    type: Number,
    required: true,
  },
  dataVenda: {
    type: String,
    required: true,
  },
  pesoVenda: {
    type: Number,
    required: true,
  },
  valorVenda: {
    type: Number,
    required: true,
  },*/
  
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Bovino', ProductSchema);
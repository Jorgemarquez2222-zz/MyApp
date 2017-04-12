var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = Schema({
       nombre: String,
       price: Number,
       image: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;

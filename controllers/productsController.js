var mongoose   = require('mongoose');
var ProductModel = require('../models/product');

exports.allProducts = function(req, res) {
	ProductModel.find({}).exec(function(err, product) {
		if (err) res.status(500).json(err);

		res.status(200).json(product);
	});
};

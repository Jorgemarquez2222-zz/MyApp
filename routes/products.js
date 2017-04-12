var express         = require('express');
var router          = express.Router();
var cors = require('cors');
var app = express()
app.use(cors());
var products = require('../controllers/productsController');

router.get('/products',cors(), products.allProducts);

module.exports = router;

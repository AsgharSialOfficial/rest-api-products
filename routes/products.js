const express = require('express');
const router = express.Router();
const {getallProducts, getalltestingProducts} = require('../controllers/products')

router.route("/").get(getallProducts);
router.route("/testing").get(getalltestingProducts);

module.exports = router;


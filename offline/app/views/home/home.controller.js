var express = require('express');
var router = express.Router();

var config = require('../../../config');


router.get('/',function (req,res) {
	var list = require(config.list);
	var data = { list : list};
	res.render(__dirname+'/home',data)
})

module.exports = router;



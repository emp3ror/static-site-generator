var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
	var data = { one : 'one'};
	res.render(__dirname+'/home',data)
})

module.exports = router;
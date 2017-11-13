var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
	var data = { date : Date.now()};
	res.render(__dirname+'/post',data)
})


router.post('/',function (req,res) {
	console.log(req.body);
})
module.exports = router;
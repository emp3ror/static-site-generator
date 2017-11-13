var express = require('express');
var router = express.Router();
var fs = require('fs');
const uuidV1 = require('uuid/v1');

var list = {};

var config = require('../../../config');


router.get('/',function (req,res) {
	// console.log(list);
	var list = require(config.list);
	var data;

	var d = new Date();
	var iso = d.toISOString();

	if (typeof req.query.id !== 'undefined') {
		data = list[req.query.id];
	} else {
		data = { 
			date : iso,
			id : uuidV1()
		};
	}

	console.log(data);
	res.render(__dirname+'/post',data)
})


router.post('/',function (req,res) {
	var list = require(config.list);
	list[req.body.id] = req.body;
	var cleanText = req.body.content.replace(/<\/?[^>]+(>|$)/g, "");
	list[req.body.id].content = cleanText.substring(0,20);
	console.log(list);

	var list_stringify = JSON.stringify(list);
	//write to list
	fs.writeFile(config.list,list_stringify,function (err) {
		if (err) {
			return console.log("err while creating list");
		}
		console.log("list has been saved");
	})

	fs.writeFile(config.data+req.body.id+".json",JSON.stringify(req.body),function (err) {
		if (err) {
			return console.log("err while creating list");
		}
		console.log("list has been saved");
	})

	res.render(__dirname+'/post',req.body)
})
module.exports = router;
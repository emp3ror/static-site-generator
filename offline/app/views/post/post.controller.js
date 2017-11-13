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
		try {
			data = require(config.data+req.query.id+".json");
		} catch (err) {
			req.query.id=null;
			console.log(err);
		}
		
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

	var post_contents = JSON.stringify(req.body);
	list[req.body.id] = {
		title : req.body.title,
		image : req.body.image,
		summary : req.body.summary,
		date : req.body.date,
		tags : req.body.tags
	}
	console.log(list);

	var list_stringify = JSON.stringify(list);
	//write to list
	fs.writeFile(config.list,list_stringify,function (err) {
		if (err) {
			return console.log("err while creating list");
		}
		console.log("list has been saved");
	})

	fs.writeFile(config.data+req.body.id+".json",post_contents,function (err) {
		if (err) {
			return console.log("err while creating list");
		}
		console.log("list has been saved");
	})

	res.render(__dirname+'/post',JSON.parse(post_contents))
})
module.exports = router;
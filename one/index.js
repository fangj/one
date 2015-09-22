'use strict';

var express = require('express');
var router = express.Router();
var freader=require('./freader');

function genOne(req, res){
	var randomP=freader.getRandomParagraph();
	res.send(randomP);
}

function getCover(req,res){
	var oPath=req.body;
	var fileInfo=freader.getFileInfo(oPath.path);
	res.send(fileInfo);
}

router.get('/', genOne);
router.post('/cover', getCover);

module.exports = router;
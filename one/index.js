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

function getPara(req,res){
	var reqPara=req.body;
	var para=freader.getParagraph(reqPara.path,reqPara.pos,reqPara.len);
	res.send(para);
}

router.get('/', genOne);
router.post('/cover', getCover);
router.post('/para', getPara);

module.exports = router;
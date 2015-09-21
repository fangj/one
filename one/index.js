'use strict';

var express = require('express');
var router = express.Router();
var freader=require('./freader');

function genOne(req, res, next){
	var randomP=freader.getRandomParagraph();
	res.send(randomP);
}

router.get('/', genOne);

module.exports = router;
"use strict";

var fs=require("fs");

//取得文件长度
function getFilesizeInBytes(filename) {
 var stats = fs.statSync(filename);
 var fileSizeInBytes = stats.size;
 return fileSizeInBytes;
}

//把buf掐头去尾,得到合法的utf8字符串
function buffer2String(buf){
	var i;
	//找第一个完整字的开头位置
	var first=0;
	for (i = 0; i < 4; i++) {
	 if(buf[i]<0x80 || buf[i]>0xBF ){
	 	first=i;break;
	 }
	}
	//找最后一个完整字的开头位置
	var last=buf.length-1;
	for (i = 0; i < 4; i++) {
		var pos=buf.length-1-i;
	 if(buf[pos]<0x80 || buf[pos]>0xBF ){
	 	//console.log('found',pos,buf[pos].toString(16));
	 	last=pos;break;
	 }
	}
	console.log(buf.toString("hex"));
	console.log("first",first,"last",last);
	//返回从第一个完整字到最后一个完整字之前的字符串.
	var buf2=buf.slice(first, last);
	console.log(buf2.toString("hex"));
	var str = buf2.toString("utf8");
	return str;
}


//取得一段字符串
function getParagraph (path,position,length) {
	var fd=fs.openSync(path, "r");
	var buffer = new Buffer(length);
	fs.readSync(fd, buffer, 0, length, position);
	fs.close(fd);
	var data = buffer.toString("utf8", 0, buffer.length);
    console.log(data);
    var str=buffer2String(buffer);
    console.log("str",str);
    console.log(" ");
	return buffer;
}

module.exports={
	getFilesizeInBytes:getFilesizeInBytes,
	getParagraph:getParagraph
};
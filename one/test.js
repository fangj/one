"use strict";

var freader=require("./freader");
// var size=freader.getFilesizeInBytes("./txt/全唐诗.txt");
// console.log("size",size);


// freader.getParagraph("./txt/全唐诗.txt",67,100);
// freader.getParagraph("./txt/全唐诗.txt",68,100);
// freader.getParagraph("./txt/全唐诗.txt",69,100);
// freader.getParagraph("./txt/全唐诗.txt",70,100);
// freader.getParagraph("./txt/全唐诗.txt",167,10);
// freader.getParagraph("./txt/全唐诗.txt",168,10);
// freader.getParagraph("./txt/全唐诗.txt",169,10);
// freader.getParagraph("./txt/全唐诗.txt",170,10);

// freader.getParagraph("./txt/全唐诗.txt",12193250,100);
// var info=freader.getFileInfo("./txt/全唐诗.txt");
// console.log(info);

// var randomP=freader.getRandomParagraphFromFile("./txt/全唐诗.txt");
// console.log(randomP);

var randomP=freader.getRandomParagraph();
console.log(randomP);


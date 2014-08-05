var fs = require('fs');
var readline = require('readline');

// uncomment for debug
// var showMem = require('./showMemory');
// showMem(); // for debug

var CORPUS_HOME = "./corpus";
var EOF = "#!EOF";

var readOptions = {
		flags: 'r',
		encoding: null,
		fd: null,
		mode: 0666,
		autoClose: true
	};
var writeOptions = {
		flags: 'a+',
		encoding: null,
		mode: 0666
	};

fs.readdir(CORPUS_HOME, function(err, files) {
	if(err) throw new Error(err);
	combineFiles(files);
});

function combineFiles (files) {
	var len = files.length;
	var buf = [];
	var writeStream = fs.createWriteStream('./all.txt', writeOptions);
	for (var i = 0; i < len; i++) {
		readFile(CORPUS_HOME + "/" + files[i], function(err, text){
			if (text != EOF) {
				buf.push(text);
			} else {
				writeStream.write(Buffer.concat(buf));
				buf = [];
			}
		});
	}
};

function readFile (filePath, callback) {

	var readStream = fs.createReadStream(filePath, readOptions);
	var rl = readline.createInterface({
		input: readStream,
		output: process.stdout,
		terminal: false
	});

	var count = 0;

	rl.on('line', function (line) {
		callback(null, formatLine(line));
		count++;
	});

	rl.on('close', function(){
		console.log("end:", count);
		callback(null, EOF);
		rl.close();
	});

};

function formatLine (line) {
	line = line.split("\t\t");
	return new Buffer(line[1] + '\n');
};
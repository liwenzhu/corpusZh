var fs = require('fs');

var CORPUS_HOME = "./corpus";
fs.readdir(CORPUS_HOME, function(err, files) {
	if(err) throw new Error(err);
	combineFiles(files);
});

function combineFiles (files) {
	// console.log(files.length)
	var corpus = "";
	var len = files.length;
	// var len = 1;
	// file = files[0];
	files.forEach(function (file) {
		readFile(CORPUS_HOME + "/" + file, function(err, text){
			if(err) throw new Error(err);
			corpus += text;
			if(--len === 0)
				fs.writeFile("./all.txt", corpus, function(err){
					if(err)
						throw new Error(err);
					console.log("finished");
				});
		});
	}); // files.forEach
};

function readFile (filePath, callback) {
	fs.readFile(filePath, function(err, data){
		// console.log(data.toString());
		var text = "";
		text = formatLines(data.toString().split("\r\n"));
		// console.log("text:", text);
		callback(null, text);
		text = null;
	});
};

function formatLines (lines) {
	var text = "";
	var i, len = lines.length;
	for (i = 0; i < len; i++) {
		text += formatLine(lines[i])+'\n';
		// if(i < 3)
		// 	console.log(text);
	}
	return text;
};

function formatLine (line) {
	line = line.split("\t\t");
	return line[1];
};
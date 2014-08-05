function showMem () {
	var mem = process.memoryUsage();
	console.log('Process: heapTotal ' + format(mem.heapTotal) +
		' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
	console.log('---------------------------------------------------------')
	setTimeout(function(){
		showMem();
	}, 1000);
};

function format (bytes) {
	return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

module.exports = showMem;

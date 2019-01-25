function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(width) {
	var triangle = "";
	for (var j = 1; j <= width; j++) {
		triangle += (makeLine(j));
	} 	
	return triangle;
}

console.log(buildTriangle(10));
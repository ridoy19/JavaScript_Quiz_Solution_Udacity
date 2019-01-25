//Anonymous Function
var laugh = function (number) {
	var ha = "";
	for (var i = 0; i < number; i++) {
		ha += "ha";
	}
	return ha + "!";
}

console.log(laugh(3));
var inputs = [
	["sqrt", "MR", "M+", "M-", "C"],
	["log", "+", "9", "8", "7"],
	["sin", "-", "6", "5", "4"],
	["cos", "*", "3", "2", "1"],
	["tan", "/", "0", ".", "="]
];

var kbinds = [
	["Q", "R", ">", "<", "DELETE"],
	["L", "+", "9", "8", "7"],
	["S", "-", "6", "5", "4"],
	["C", "*", "3", "2", "1"],
	["T", "/", "0", ".", "ENTER"]
];

window.onload = function () {

	var ips = document.getElementById("inputs");
	var ct, ctid, str = "";

	for (var i = 0; i < inputs.length; i++) {
		str += "<div style=\"clear: both;\"> ";
		for (var j = 0; j < inputs[i].length; j++) {
			str += "<div class='input' onclick='input(this.innerText)' title='" + kbinds[i][j] + "' >" + inputs[i][j] + "</div>";
		}
		str += "</div>";
	}

	ips.innerHTML = str;
	box = document.getElementById("inputBox");
	document.onkeyup = function(e) {
		var ev = e || event;
		kinput(ev.key);
	}
	document.onkeydown = function (e) {
		var ev = e || event;
		if (ev.key == "Backspace" || ev.key == "/") {
			ev.preventDefault();
			if (ev.key == "Backspace") {
				box.value = box.value.slice(0, -1);
			}
		}
	}
}

var box, mem = 0;
var num1 = 0, num2 = 0;
var mfuncs = ["sin", "cos", "tan", "log", "sqrt"];
var addfs = ["MR", "M+", "M-"];
function showOutput(ip) {

	var mathf = false;
	for (var i = 0; i < mfuncs.length; i++) {
		if (mfuncs[i] == ip) {
			mathf = true;
			break;
		}
	}

	if (mathf == true) {
		box.value = ip + "(" + box.value + ")";
	} else if (ip != "=") {
		for (var i = 0; i < addfs.length; i++) {
			if (addfs[i] == ip)
				return;	
		}
		box.value += ip;
	}
}

function input(ip) {

	var iput = +box.value;
	showOutput(ip);

	switch (ip) {
		case "=":
			ins = box.value;
			for (var i = 0; i < mfuncs.length; i++) {
				while (ins.includes(mfuncs[i]))
					ins = ins.replace(mfuncs[i], "foo");
				while (ins.includes("foo"))
					ins = ins.replace("foo", ("Math." + mfuncs[i]));
			}
			console.log(ins);
			box.value = eval(ins);
			break;
		case "MR":
			temp = +box.value;
			box.value = mem;
			mem = +temp;
			break;
		case "M+":
			mem += (+box.value);
			break;
		case "M-":
			mem -= (+box.value);
			break;
		case "C":
			box.value = "";
	}
}

function kinput(key) {

	key = key.toUpperCase();

	for (var i = 0; i < kbinds.length; i++) {
		for (var j = 0; j < kbinds[i].length; j++) {
			if (key == kbinds[i][j]) {
				input(inputs[i][j]);
				return;
			}
		}
	}

}
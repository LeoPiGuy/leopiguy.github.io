var inputedWord = '';
const keyWord = "the sun is a deadly laser";
let wasClicked = false;

let memes = ["https://www.youtube.com/watch?v=g-sgw9bPV4A", " https://www.youtube.com/watch?v=L_jWHffIx5E", " https://www.youtube.com/watch?v=s8MDNFaGfT4", " https://www.youtube.com/watch?v=HEXWRTEbj1I", " https://www.youtube.com/watch?v=HMUDVMiITOU", " https://www.youtube.com/watch?v=1qN72LEQnaU", " https://www.youtube.com/watch?v=fvtQYsckLxk", " https://www.youtube.com/watch?v=wZZ7oFKsKzY", " https://www.youtube.com/watch?v=q6EoRBvdVPQ&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y", " https://www.youtube.com/watch?v=6bnanI9jXps&index=3&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y", " https://www.youtube.com/watch?v=PaFnO5LKTSs&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y&index=18", " https://www.youtube.com/watch?v=LZgeIReY04c&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y&index=102", " https://www.youtube.com/watch?v=eDxa2tmbhSg&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y&index=106", " https://www.youtube.com/watch?v=U43WUKk7MZw&index=121&list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y", " https://www.youtube.com/watch?v=MSENH3FE2As", " https://www.youtube.com/watch?v=BalhiByCRTQ", " https://www.youtube.com/watch?v=igxV7X_gzaM", " https://www.youtube.com/watch?v=VairREKPUQA", " https://www.youtube.com/watch?v=EJY8PjG9Yn4", " https://www.youtube.com/watch?v=WRqFZMljZO0", " https://www.youtube.com/watch?v=SzNAd1QGv40", " https://www.youtube.com/watch?v=dQw4w9WgXcQ", " https://www.youtube.com/watch?v=8UVNT4wvIGY", " https://www.youtube.com/watch?v=wVaQKJX3r_Q", " https://www.youtube.com/watch?v=VfCYZ3pks48", " https://www.youtube.com/watch?v=Kppx4bzfAaE", " https://www.youtube.com/watch?v=ItMJtA8vfpw", " https://www.youtube.com/watch?v=_UDcfOkOeTw", " https://www.youtube.com/watch?v=kttVCbTrDLw", " https://www.youtube.com/watch?v=fcbUm7pK5wE", " https://www.youtube.com/watch?v=PGxEFs_UvJA", " https://www.youtube.com/watch?v=7d6ZsRM36RU", " https://www.youtube.com/watch?v=A2c1f4FE8cY"];

window.onload = function() {
	document.getElementById("copy").onclick = function() {
		console.log("aye");
		wasClicked = true;
	}
}

window.addEventListener('keypress', function(key) {
	var keyPressedCharCode = key.keyCode;
	var keyPressed = String.fromCharCode(keyPressedCharCode);
	inputedWord += keyPressed.toLowerCase();
	if(inputedWord.length > keyWord.length) {
		inputedWord = inputedWord.slice(1);
	}
	if(inputedWord == keyWord) {
		alert("The Sun is a deadly laser!");
		if(wasClicked) {
			createLogin();
		} else {
			memesRandom();
		}
	}
});

function createLogin() {
	alert("You escaped the memes");
	let parent = document.getElementById("main");
	let child = document.getElementById("comingsoon");
	let input = document.createElement("input");
	let pass = document.createAttribute("type");
	let classInput = document.createAttribute("class");
	let css = document.createAttribute("style");
	let inputValue = document.createAttribute("oninput");
	pass.value = "password";
	classInput.value = "input";
	css.value = "text-align:center";
	inputValue.value = "login(this.value)";
	input.setAttributeNode(classInput);
	input.setAttributeNode(pass);
	input.setAttributeNode(css);
	input.setAttributeNode(inputValue);
	parent.replaceChild(input, child);
}

function memesRandom() {
	let length = memes.length;
	let randomInt = Math.floor(Math.random() * (((length - 1)+ 1)));
	// console.log(length);
	// console.log(randomInt);
	var width = window.outerWidth;
	var height = window.outerHeight;
	window.open(memes[randomInt], "_blank", `height=${height},width=${width}`);
		//,scrollbars=yes,toolbar=no,menubar=no,resizable=yes,location=no,directories=no,status=no,titlebar=no,left=400,top=120");
}

function login(input) {
	inputHash = hashString(input);
	if(inputHash == "901646482") {
		url = window.location.href;
		console.log(url);
		window.location.href = url + "login.html";
	}
}

//From: https://lowrey.me/implementing-javas-string-hashcode-in-javascript/
function hashString(str){  
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
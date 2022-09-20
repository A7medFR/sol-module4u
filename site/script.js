var name = ["ahmed","john","kmalj"];
function checkn(names){
	for (var i = 0; i < names.length; i++) {
	  result = names[i];
		if (result.charAt('0')=='J'||result.charAt(0)=='j') {
			console.log("Goodbye J"+result);

		}else{
			console.log("Hello "+result);
		}
	}
}
checkn(name);
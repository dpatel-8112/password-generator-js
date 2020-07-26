var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+-={}[]:;'<,>.?/'";


var lengthPassword = "";
var finalPassword = "";


function getRandom(){
	return Math.floor(Math.random() * password.length);
}

function generatePassword(x){

	if(x == 'low') lengthPassword = 8;
	if(x == 'medium') lengthPassword = 12;
	if(x == 'strong') lengthPassword = 16;


	for (var i = 0; i < lengthPassword ; i++) {

		finalPassword += password[getRandom()];
	
}
	document.getElementById('myInput').value = finalPassword;


}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Successfully !!! Copied the text: " + copyText.value);
}

function verify(){
	if(document.getElementById('pass').value != document.getElementById('confirmpass').value){
		alert('both passwords must match');
		document.getElementById('pass').value = "";
		document.getElementById('confirmpass').value = "";
	}
	else{
		window.open('first.html');
	}
}
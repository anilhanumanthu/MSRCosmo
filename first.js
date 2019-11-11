function LoginButton_Click(){
	if(document.getElementById("UserLogin").value == "user@gmail.com" && document.getElementById("PassLogin").value == "123456"){
		window.location.href = 'index.html';
		}else{
		alert("Your Mail_Id/Password mismatch occured");
		document.getElementById("UserLogin").value = "";
		document.getElementById("PassLogin").value = "";
	}
}
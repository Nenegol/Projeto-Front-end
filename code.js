var objPeople = [
	{
		username: 'Ricardo',
		password: 'ola'
	},
	{
		username: 'Pereira',
		password: '456'
	},
	{
		username: 'Rodrigo',
		password: '789'
	}
]

function registerUser() {
	var registerUsername = document.getElementById('newUsername').value
	var registerPassword = document.getElementById('newPassword').value
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	for(var f = 0; f < objPeople.length; f++) {
		if(registerUsername == objPeople[f].username) {
      alert('That username is alreat in user, please choose another')
			break
		} else if (registerPassword.length < 3) {
      alert('That is to short, include 3 or more characters')
			break
		}else{
      objPeople.push(newUser)
      console.log(objPeople)
      alert("Register done")
      openPage("Login")
      break
    }
  }
  document.getElementById("newUsername").value=""
  document.getElementById("newPassword").value=""

}

function login(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
  var l = true
	for(var k = 0; k < objPeople.length; k++) {
    if(username == objPeople[k].username && password == objPeople[k].password){
      alert(username + ' is logged in!!!')
      console.log(username + ' is logged in!!!')
      openPage("Home")
      x()
      l=false
      break
    }else{
      console.log('incorrect username or password')
      var l = true
      openPage("Login")
      
    }
  }
  if (l == true){
    alert('incorrect username or password')

  }
  document.getElementById("username").value=""
  document.getElementById("password").value=""

}

/*
// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('username').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value
  var erro = false
	// loop through all the user pbjects and confrim if the username and password are correct
	for(var f = 0; f < objPeople.length; f++) {
		// check to 
		if(username == objPeople[f].username && password == objPeople[f].password) {
        console.log(username + ' is logged in!!!')
        openPage("Home")
        x()
        erro=false
        break
      
			// stop the statement if result is found true - this was a return in the video, break is best practice here
    } 
    else {
      // error if username and password don't match
      console.log('incorrect username or password')
      openPage("Login")
      erro=true
    }   
  }
  if(erro==true){
    alert('incorrect username or password')
  }
}

// register functionality
function registerUser() {
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var f = 0; f < objPeople.length; f++) {
		// check if new username is equal to any already created usernames
		if(registerUsername == objPeople[f].username) {
			// alert user that the username is take
      alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 3) {
			// alert user that the password is to short
      alert('That is to short, include 3 or more characters')
			// stop the statement if result is found true
			break
		}else{
      // push new object to the people array
      objPeople.push(newUser)
      // console the updated people array
      console.log(objPeople)
      alert("Register done")
      openPage("Login")
      break
    }
	}
}
*/
function openPage(pageName) {
    let i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
    document.getElementById(pageName).style.display = "block";
}

function x() {
  var element = document.getElementById("show");
  element.classList.remove("hidden");
  document.getElementById("lg").style.display="none";
  document.getElementById("about").style.display="none";
}

function y() {
  var username = document.getElementById('username').value
  var element = document.getElementById("show");
  element.classList.add("hidden");
  console.log(username + ' logged out.')
  document.getElementById("lg").style.display="block";
  document.getElementById("about").style.display="block";
  openPage("Login")

}

function done(){
  var email = document.getElementById('email').value
  if (email == ''){
    openPage("Recovery")
  }else{
    alert("Email sent")
    openPage("Login")
  }
}

function updateP(){
  var q = document.getElementById("password").value
  var s = document.getElementById("cpassword").value
  var s1 = document.getElementById("cpassword2").value
  for(var p = 0; p < objPeople.length; p++){
    if (s==s1){
      objPeople[p].password=s
      alert("Password changed!")
      console.log(objPeople)
      break
    }else{
      alert("Old password is wrong!")
      break      
    }
  }
  document.getElementById("cpassword").value=""
  document.getElementById("cpassword2").value=""
  document.getElementById("opassword").value=""
}

var adm = [
	{
		userad: 'admin',
		passad: 'admin'
	}
]
function logad(){
	var us = document.getElementById('adminusername').value
	var pa = document.getElementById('adminpassword').value
  if(us==adm[0].userad && pa == adm[0].passad ){
    openPage("edit")
  }else{
    alert("Wrong credentials")
  }
  document.getElementById("adminusername").value=""
  document.getElementById("adminpassword").value=""

}

function admin(){
  openPage("Back");
}


/*FAVORITES*/


/*F-Movies*/

bm1 = document.getElementById("bm1")
function a1(bm1){
  document.getElementById("m1").style.display="block"
  alert("Added to Favorites")
}

bm1 = document.getElementById("bm1")
function r1(bm1){
  document.getElementById("m1").style.display="none"
  alert("Removed from Favorites")
}

bm2 = document.getElementById("bm2")
function a2(bm2){
  document.getElementById("m2").style.display="block"
  alert("Added to Favorites")
}

bm2 = document.getElementById("bm2")
function r2(bm2){
  document.getElementById("m2").style.display="none"
  alert("Removed from Favorites")
}

bm3 = document.getElementById("bm3")
function a3(bm3){
  document.getElementById("m3").style.display="block"
  alert("Added to Favorites")
}

bm3 = document.getElementById("bm3")
function r3(bm3){
  document.getElementById("m3").style.display="none"
  alert("Removed from Favorites")
}

bm4 = document.getElementById("bm4")
function a4(bm4){
  document.getElementById("m4").style.display="block"
  alert("Added to Favorites")
}

bm4 = document.getElementById("bm4")
function a4(bm4){
  document.getElementById("m4").style.display="none"
  alert("Added to Favorites")
}

bm5 = document.getElementById("bm5")
function a5(bm5){
  document.getElementById("m5").style.display="block"
  alert("Added to Favorites")
}

bm5 = document.getElementById("bm5")
function r5(bm5){
  document.getElementById("m5").style.display="none"
  alert("Removed from Favorites")
}

bm6 = document.getElementById("bm6")
function a6(bm6){
  document.getElementById("m6").style.display="block"
  alert("Added to Favorites")
}

bm6 = document.getElementById("bm6")
function r6(bm6){
  document.getElementById("m6").style.display="none"
  alert("Removed from Favorites")
}

/*F-Directors*/
bd1 = document.getElementById("bd1")
function d1(bd1){
  document.getElementById("d1").style.display="block"
  alert("Added to Favorites")
}

bd1 = document.getElementById("bd1")
function dr1(bd1){
  document.getElementById("d1").style.display="none"
  alert("Removed from Favorites")
}

bd2 = document.getElementById("bd2")
function d2(bd2){
  document.getElementById("d2").style.display="block"
  alert("Added to Favorites")
}

bd2 = document.getElementById("bd2")
function dr2(bd2){
  document.getElementById("d2").style.display="none"
  alert("Removed from Favorites")
}

bd3 = document.getElementById("bd3")
function d3(bd3){
  document.getElementById("d3").style.display="block"
  alert("Added to Favorites")
}

bd3 = document.getElementById("bd3")
function dr3(bd3){
  document.getElementById("d3").style.display="none"
  alert("Removed from Favorites")
}

bd4 = document.getElementById("bd4")
function d4(bd4){
  document.getElementById("d4").style.display="block"
  alert("Added to Favorites")
}

bd4 = document.getElementById("bd4")
function dr4(bd4){
  document.getElementById("d4").style.display="none"
  alert("Removed from Favorites")
}

bd5 = document.getElementById("bd5")
function d5(bd5){
  document.getElementById("d5").style.display="block"
  alert("Added to Favorites")
}

bd5 = document.getElementById("bd5")
function dr5(bd5){
  document.getElementById("d5").style.display="none"
  alert("Removed from Favorites")
}

bd6 = document.getElementById("bd6")
function d6(bd6){
  document.getElementById("d6").style.display="block"
  alert("Added to Favorites")
}

bd6 = document.getElementById("bd6")
function dr6(bd6){
  document.getElementById("d6").style.display="none"
  alert("Removed from Favorites")
}

/*F-Actors*/

ba1 = document.getElementById("ba1")
function aa1(ba1){
  document.getElementById("a1").style.display="block"
  alert("Added to Favorites")
}

ba1 = document.getElementById("ba1")
function ra1(ba1){
  document.getElementById("a1").style.display="none"
  alert("Removed from Favorites")
}

ba2 = document.getElementById("ba2")
function aa2(ba2){
  document.getElementById("a2").style.display="block"
  alert("Added to Favorites")
}

ba2 = document.getElementById("ba2")
function ra2(ba2){
  document.getElementById("a2").style.display="none"
  alert("Removed from Favorites")
}

ba3 = document.getElementById("ba3")
function aa3(ba3){
  document.getElementById("a3").style.display="block"
  alert("Added to Favorites")
}

ba3 = document.getElementById("ba3")
function ra3(ba3){
  document.getElementById("a3").style.display="none"
  alert("Removed from Favorites")
}
ba4 = document.getElementById("ba4")
function aa4(ba4){
  document.getElementById("a4").style.display="block"
  alert("Added to Favorites")
}

ba4 = document.getElementById("ba4")
function ra4(ba4){
  document.getElementById("a4").style.display="none"
  alert("Removed from Favorites")
}
ba5 = document.getElementById("ba5")
function aa5(ba5){
  document.getElementById("a5").style.display="block"
  alert("Added to Favorites")
}

ba5 = document.getElementById("ba5")
function ra5(ba5){
  document.getElementById("a5").style.display="none"
  alert("Removed from Favorites")
}

ba6 = document.getElementById("ba6")
function aa6(ba6){
  document.getElementById("a6").style.display="block"
  alert("Added to Favorites")
}

ba6 = document.getElementById("ba6")
function ra6(ba6){
  document.getElementById("a6").style.display="none"
  alert("Removed from Favorites")
}


/*F-Studios*/

bs1 = document.getElementById("bs1")
function as1(bs1){
  document.getElementById("s1").style.display="block"
  alert("Added to Favorites")
}

bs1 = document.getElementById("bs1")
function rs1(bs1){
  document.getElementById("s1").style.display="none"
  alert("Removed from Favorites")
}

bs2 = document.getElementById("bs2")
function as2(bs2){
  document.getElementById("s2").style.display="block"
  alert("Added to Favorites")
}

bs2 = document.getElementById("bs2")
function rs2(bs2){
  document.getElementById("s2").style.display="none"
  alert("Removed from Favorites")
}

bs3 = document.getElementById("bs3")
function as3(bs3){
  document.getElementById("s3").style.display="block"
  alert("Added to Favorites")
}

bs3 = document.getElementById("bs3")
function rs3(bs3){
  document.getElementById("s3").style.display="none"
  alert("Removed from Favorites")
}

bs4 = document.getElementById("bs4")
function as4(bs4){
  document.getElementById("s4").style.display="block"
  alert("Added to Favorites")
}

bs4 = document.getElementById("bs4")
function rs4(bs4){
  document.getElementById("s4").style.display="none"
  alert("Removed from Favorites")
}

bs5 = document.getElementById("bs5")
function as5(bs5){
  document.getElementById("s5").style.display="block"
  alert("Added to Favorites")
}

bs5 = document.getElementById("bs5")
function rs5(bs5){
  document.getElementById("s5").style.display="none"
  alert("Removed from Favorites")
}

bs6 = document.getElementById("bs6")
function as6(bs6){
  document.getElementById("s6").style.display="block"
  alert("Added to Favorites")
}

bs6 = document.getElementById("bs6")
function rs6(bs6){
  document.getElementById("s6").style.display="none"
  alert("Removed from Favorites")
}




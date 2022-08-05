const firebaseConfig = {
  apiKey: "AIzaSyBFzIbCQCbS0HknKT2csWcHJB-aHc7pbu4",
  authDomain: "youchat-9170b.firebaseapp.com",
  databaseURL: "https://youchat-9170b-default-rtdb.firebaseio.com",
  projectId: "youchat-9170b",
  storageBucket: "youchat-9170b.appspot.com",
  messagingSenderId: "850636408989",
  appId: "1:850636408989:web:1aa4efcea384c178772c74"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

window.addEventListener("load", function(){
  setTimeout(function(){
document.getElementById("loader").style.display = "none";
document.getElementById("body").style.overflow = "auto";
document.getElementById("toggle").style.position = "fixed";

  },4000)

})
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  sessionStorage.removeItem("email_reset");
  sessionStorage.removeItem("pass_reset");
} else {
console.log("youchat.com loaded successfully");
}
var toggle_btn;
var big_wrapper;
var hamburger_menu;
var sun;
var moon;

function declare() {
  toggle_btn = document.querySelector(".toggle");
  big_wrapper = document.querySelector(".big-wrapper");
  sun = document.querySelector('.fa-sun');
  moon = document.querySelector('.fa-moon')
}
declare();
let dark = false;


function change() {
  // Clone the wrapper
  dark = !dark;
  if (dark) {
big_wrapper.classList.remove("light");
    big_wrapper.classList.add("dark");
    moon.style.display = "none";
    sun.style.display =  "inline";
  } else {
    big_wrapper.classList.remove("dark");
    big_wrapper.classList.add("light");
    moon.style.display = "inline";
    sun.style.display =  "none";
  }
  document.body.classList.add("stop-scrolling");
  big_wrapper.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    declare();
    events();
  });
};


function closes(){
  document.getElementById("mod").style.display = "none";
document.getElementById("int-email").value = "";
document.getElementById("int-pass").value ="";
sessionStorage.removeItem("email_reset");
sessionStorage.removeItem("pass_reset");
document.getElementById("int-new").value = "";
document.getElementById("int-con").value ="";
document.getElementById("new-pass").value = "";
document.getElementById("con-pass").value ="";
document.getElementById("body").style.overflow = "auto";
};

function del(){
 reason = "Delete";
text = "delete your account";
 header = "Delete Account";
show(reason,text,header);
}

function change_email(){
  var text1 = "Please fill all the fields in order to change your email";
  var text11 = "New email and confirm email in not matching";
 reason = "Email";
 header = "Email Change";
 var new_email= document.getElementById("int-new").value;
 var con_email = document.getElementById("int-con").value;
 if (new_email == "" || con_email == ""){
document.querySelector('.pop-error').style.right = "10px";
document.querySelector('.body p').innerHTML =  text1;
console.log(text1)
setTimeout(function(){
  document.querySelector('.pop-error').style.right = "-100%";
},6000)
 }
else  if (new_email != con_email){
  document.querySelector('.pop-error').style.right = "10px";
  document.querySelector('.body p').innerHTML =  text11;
  setTimeout(function(){
    document.querySelector('.pop-error').style.right = "-100%";
  },6000)
}
else {

  sessionStorage.setItem("email_reset",con_email);
  show(reason,text,header,new_email,con_email);
}
}

function change_pass(){
  var text2 = "Please fill all the fields in order to change your password";
  var text22 = "New password and confirm password in not matching";
reason = "Password";
 text = "change your account password";
 header = "Password Change";
 var new_pass= document.getElementById("new-pass").value;
 var con_pass = document.getElementById("con-pass").value;
 if (new_pass == "" || con_pass== ""){
  document.querySelector('.pop-error').style.right = "10px";
  document.querySelector('.body p').innerHTML =  text2;
  setTimeout(function(){
    document.querySelector('.pop-error').style.right = "-100%";
  },6000)
 }

else  if (new_pass != con_pass){
  document.querySelector('.pop-error').style.right = "10px";
  document.querySelector('.body p').innerHTML =  text22;
  setTimeout(function(){
    document.querySelector('.pop-error').style.right = "-100%";
  },6000)
}

else {
  sessionStorage.setItem("pass_reset",con_pass);
  show(reason,text,header,new_pass,con_pass);
}
}

function show(reason,text,header){
var modal = document.getElementById("mod");
var popup = document.getElementById("up");
var head = document.querySelector('.headers');
var texter = document.querySelector('.textarea')
modal.style.display = "block";
texter.innerHTML = text;
head.innerHTML = header;
document.getElementById("body").style.overflow = "hidden";
}


function submit(reason){
var int_email = document.getElementById("int-email");
var int_pass = document.getElementById("int-pass");
var why = reason;
var pass =sessionStorage.getItem("pass_reset");
var emails = sessionStorage.getItem("email_reset");
var modal = document.getElementById("mod");
var text3 = "All fields required to submit";
if (int_email.value == "" || int_pass.value== ""){
  document.querySelector('.pop-error').style.right = "10px";
  document.querySelector('.body p').innerHTML =  text3;
  setTimeout(function(){
    document.querySelector('.pop-error').style.right = "-100%";
  },6000)
}

else {

if (why == "Email"){

if (int_email.value == "" || int_pass.value == ""){
  var text3 = "No account found with that email or password";
  document.querySelector('.pop-error').style.right = "10px";
  document.querySelector('.body p').innerHTML =  text3;
  setTimeout(function(){
    document.querySelector('.pop-error').style.right = "-100%";
  },6000)
}
else  {

 var credential= firebase.auth.EmailAuthProvider.credential(int_email.value , int_pass.value);
  const user = firebase.auth().currentUser;
  user.reauthenticateWithCredential(credential).then(() => {
    user.updateEmail(emails).then(() => {
      int_email.value = "";
      int_pass.value = "";
      modal.style.display = "none";
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    console.error(error);
  });
}
}

 else if (why == "Password"){

  var credential= firebase.auth.EmailAuthProvider.credential(int_email.value , int_pass.value);
  const user = firebase.auth().currentUser;
  user.reauthenticateWithCredential(credential).then(() => {
    user.updatePassword(pass).then(() => {
      int_email.value = "";
      int_pass.value = "";
      modal.style.display = "none";
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    console.error(error);
  });
}
else {
  document.getElementById("mod2").style.display = "block";
}
}
}


function deletes(){
  var int_email = document.getElementById("int-email").value;
var int_pass = document.getElementById("int-pass").value;
const user = firebase.auth().currentUser;
  var credential= firebase.auth.EmailAuthProvider.credential("abhinavsen2022@gmail.com" , "abhi@1234");
  user.reauthenticateWithCredential(credential).then(() => {
    user.delete().then(() => {
      modal.style.display = "none";
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    console.error(error);
  });
}
function ogk(){
  document.querySelector('.pop-error').style.right = "-100%";
}
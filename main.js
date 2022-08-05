const firebaseConfig = {
  apiKey: "AIzaSyBFzIbCQCbS0HknKT2csWcHJB-aHc7pbu4",
  authDomain: "youchat-9170b.firebaseapp.com",
  databaseURL: "https://youchat-9170b-default-rtdb.firebaseio.com",
  projectId: "youchat-9170b",
  storageBucket: "youchat-9170b.appspot.com",
  messagingSenderId: "850636408989",
  appId: "1:850636408989:web:1aa4efcea384c178772c74",
};

var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
    document.getElementById("body").style.overflow = "auto";
  }, 4000);
});
function dark() {
  var big_wrapper = document.getElementById("wrapper");
  var sun_i = document.getElementById("sun-i");
  var moon_i = document.getElementById("moon-i");
  big_wrapper.classList.add("dark");
  big_wrapper.classList.remove("light");
  moon_i.style.display = "none";
  sun_i.style.display = "block";
}
function light() {
  var big_wrapper = document.getElementById("wrapper");
  var sun_i = document.getElementById("sun-i");

  var moon_i = document.getElementById("moon-i");
  big_wrapper.classList.add("light");
  big_wrapper.classList.remove("dark");
  moon_i.style.display = "block";
  sun_i.style.display = "none";
}


window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").classList.add('padding');
    document.getElementById("body").style.overflow = "auto";
  }, 4000)

})
function address() {
  window.location = "https://goo.gl/maps/TtaLcEVrCpJB6env9";
}
function mail() {
  window.location.href = "mailto:youchat@crew.com?";
}
function tel() {
  window.location.href = "tel: 0123456789";
}
function send() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var sub = document.getElementById("sub").value;
  var text = document.getElementById("text").value;

  if (name == "" || mail == "" || sub == "" || text == "") {
    document.getElementById("text-er").innerHTML = "Please fill al the fields in order to send your form";
    document.getElementById("error").style.right = "10px";
    setTimeout(function () {
      document.getElementById("error").style.right = "-100%";
    }, 7000)
  }
  else {
    document.getElementById("error").style.right = "-100%";
    var templateParams = {
      name: name,
      subject: sub,
      email: mail,
      message: text,
    };
    emailjs
      .send(
        "service_spz5k0f",
        "contact_form_id",
        templateParams,
        "77KLKTlxEoWRo5Yor"
      )
      .then(
        function (response) {
          document.getElementById("text").value = "";
          document.getElementById("sub").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("name").value = "";
          document.getElementById("mod").style.display = "block";
          document.getElementById("name-holder").innerHTML = name;
          document.getElementById("email-holder").innerHTML = mail;
        },
        function () {
          document.getElementById("text-er").innerHTML = "Oops! there was an error. Please try again after some time";
          document.getElementById("error").style.right = "10px";
          setTimeout(function () {
            document.getElementById("error").style.right = "-100%";
          }, 7000)
        }
      );
  }
}
function slose() {
  document.getElementById("error").style.right = "-100%"
}
function slose2(){
  document.getElementById("mod").style.display = "none";
}
function con(){
  document.getElementById("mod").style.display = "none";
}
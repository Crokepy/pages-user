const logEmail = document.querySelector(".log-email");
const logPass = document.querySelector(".log-pass");
const log = document.querySelector(".log");

// console.log(saveMail);

var mailr = "";
var passr = "";

log.addEventListener("click", () => {
  mailr = logEmail.value;
  passr = logPass.value;
  if ((mailr === saveMail) & (passr === savePass)) {
    console.log("alfin");
  } else {
    console.log("B)");
  }
});

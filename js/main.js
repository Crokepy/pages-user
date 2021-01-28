const mail = document.querySelector(".email");
const pass = document.querySelector(".pass");
const boton = document.querySelector(".registred");

var saveMail = "";
var savePass = "";

boton.addEventListener("click", () => {
  saveMail = mail.value;
  savePass = pass.value;
  sessionStorage.setItem("setMailSave", saveMail);
  sessionStorage.setItem("setPassSave", savePass);
  open("log.html");
});

const mail = document.querySelector(".email");
const pass = document.querySelector(".pass");
const boton = document.querySelector(".registred");

boton.addEventListener("click", () => {
  var saveMail = mail.value;
  var savePass = pass.value;
  console.log(saveMail);
  console.log(savePass);
});

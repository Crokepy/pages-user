const logEmail = document.querySelector(".log-email");
const logPass = document.querySelector(".log-pass");
const botonLog = document.querySelector(".button-log");
const True = document.querySelector(".true");

// console.log(saveMail);

var mailr = "";
var passr = "";

var mailSave = sessionStorage.getItem("setMailSave");
var passSave = sessionStorage.getItem("setPassSave");

botonLog.addEventListener("click", () => {
  console.clear();
  mailr = logEmail.value;
  passr = logPass.value;
  if ((mailSave === mailr) & (passSave === passr)) {
    console.log("Inicio de sesion logrado");
    Reflect.set(True.style, "color", "green");
    Reflect.set(True, "textContent", "Haz iniciado sesion exitosamente");
  } else {
    Reflect.set(True, "textContent", "Tu correo o contraseña son incorrectos");
    Reflect.set(True.style, "color", "red");
    console.log("correo o contraseña incorrectos");
  }
});

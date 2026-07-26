document.addEventListener("DOMContentLoaded", () => {

  const MESSAGES = {
    passwordMismatch: "The passwords must match"
  };

  /* Variable block*/
  const pass = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");

  /* Function to verify if both passwords fields match*/
  function checkPasswords() {
    if (pass.value !== confirmPass.value) {
      confirmPass.setCustomValidity(MESSAGES.passwordMismatch);
    } else {
      confirmPass.setCustomValidity("");
    }
  }

  /*Calling the function*/
  pass.addEventListener("input", checkPasswords);
  confirmPass.addEventListener("input", checkPasswords);
});
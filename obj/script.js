function checkFormInputs() {
  let isFormValid = true;

  const fullName = document.getElementById("fullname").value.trim();
  const emailAddress = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  const fullNameError = document.getElementById("fullnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  if (fullName.length < 5) {
    fullNameError.textContent =
      "Please enter a full name with at least 5 characters.";
    isFormValid = false;
  }

  if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
    emailError.textContent = "Invalid email format. Include both '@' and '.'.";
    isFormValid = false;
  }

  if (pass.length < 6) {
    passwordError.textContent =
      "Password should have a minimum of 6 characters.";
    isFormValid = false;
  }

  if (pass !== confirmPass) {
    confirmPasswordError.textContent =
      "Password and confirmation do not match.";
    isFormValid = false;
  }

  return isFormValid;
}

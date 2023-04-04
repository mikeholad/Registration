function validateForm() {
    var firstName = document.getElementById("firstName");
    var middleName = document.getElementById("middleName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var hasError = false;

    // Validate first name, middle name, and last name
    if (!firstName.value || !middleName.value || !lastName.value) {
      firstName.style.backgroundColor = "red";
      middleName.style.backgroundColor = "red";
      lastName.style.backgroundColor = "red";
      hasError = true;
    } else {
      firstName.style.backgroundColor = "";
      middleName.style.backgroundColor = "";
      lastName.style.backgroundColor = "";
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailPattern)) {
      email.style.backgroundColor = "red";
      hasError = true;
    } else {
      email.style.backgroundColor = "";
    }

    // Validate password
    var passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.value.match(passwordPattern)) {
      password.style.backgroundColor = "red";
      hasError = true;
    } else {
      password.style.backgroundColor = "";
    }

    if (hasError) {
      alert("Please fix errors before submitting.");
      return false;
    } else {
      alert("Registration successful!");
      return true;
    }
  }
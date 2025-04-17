const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = '';
  return true;
}

function validateEmail() {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!regex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validatePhone() {
  const regex = /^[0-9]{10,15}$/;
  if (phoneInput.value.trim() === '') {
    phoneError.textContent = "Phone number is required.";
    return false;
  } else if (!regex.test(phoneInput.value)) {
    phoneError.textContent = "Enter a valid phone number.";
    return false;
  }
  phoneError.textContent = '';
  return true;
}

function validatePassword() {
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = "Password is required.";
    return false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = '';
  return true;
}


nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
    setTimeout(() => successMessage.textContent = '', 4000);
  } else {
    successMessage.textContent = '';
  }
});

const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Clear previous error messages
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Check if fields are empty
  if (firstNameInput.value === '') {
    firstNameError.textContent = 'First Name is required';
  }

  if (lastNameInput.value === '') {
    lastNameError.textContent = 'Last Name is required';
  }

  if (emailInput.value === '') {
    emailError.textContent = 'Email is required';
  }

  if (passwordInput.value === '') {
    passwordError.textContent = 'Password is required';
  }

  if (confirmPasswordInput.value === '') {
    confirmPasswordError.textContent = 'Confirm Password is required';
  }

  // If there are no errors, submit the form
  if (!firstNameError.textContent && !lastNameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
    form.submit();
  }
});
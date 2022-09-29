'use strict'

let button = document.querySelector('.btn');


button.addEventListener('click', (e) => {

  //Данные для Email
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  let email = document.querySelector('input[type="email"]');
  let email_required = document.querySelector('.email_required');
  let email_attention = document.querySelector('.email_attention');
  let email_valid = document.querySelector('.email_valid');
  let email_title = document.querySelector('.email_title');

  //Данные для password
  let password = document.querySelector('input[type="password"]');
  let password_required = document.querySelector('.password_required');
  let password_attention = document.querySelector('.password_attention');
  let password_length = document.querySelector('.password_length');
  let password_title = document.querySelector('.password_title');

  //Данные для agreement
  let argeement = document.querySelector('input[type="checkbox"]');
  let argeement_required = document.querySelector('.argeement_required');
  let argeement_attention = document.querySelector('.argeement_attention');

  //Проверка Email
  if (email.value === "") {
    email_title.style.color = 'red';
    email.style.borderColor = 'red';
    email_required.style.color = 'red';
    email_attention.style.display = 'block';
  }
  else if (isEmailValid(email.value)) {
    email_title.style.color = '#787878';
    email.style.borderColor = '#787878';
    email_required.style.color = '#787878';
    email_valid.style.display = 'none';
    email_attention.style.display = 'none';
  } else {
    email_title.style.color = 'red';
    email.style.borderColor = 'red';
    email_required.style.color = 'red';
    email_valid.style.display = 'block';
    email_attention.style.display = 'none';
  }
  function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
  }

  //Проверка password
  if (password.value === "") {
    password_title.style.color = 'red';
    password.style.borderColor = 'red';
    password_required.style.color = 'red';
    password_attention.style.display = 'block';
  }
  else if (password.value.length < 8 && password.value !== "") {
    password_title.style.color = 'red';
    password.style.borderColor = 'red';
    password_required.style.color = 'red';
    password_length.style.display = 'block';
    password_attention.style.display = 'none';
  } else {
    password_title.style.color = '#787878';
    password.style.borderColor = '#787878';
    password_required.style.color = '#787878';
    password_length.style.display = 'none';
    password_attention.style.display = 'none';
  }

  //Проверка agreement
  if (argeement.checked) {
    argeement_required.style.color = '#787878';
    argeement_attention.style.display = 'none';
  }
  else {
    argeement_required.style.color = 'red';
    argeement_attention.style.display = 'block';
  }

  if (isEmailValid(email.value) && password.value.length > 8 && password.value !== "" && argeement.checked) {
    console.log('email:', email.value);
    console.log('password:', password.value);
  }
});

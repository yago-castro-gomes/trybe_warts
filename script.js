const email = document.getElementById('email');
const password = document.getElementById('password');
const submitLogin = document.getElementById('entrar');
const submitForm = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

submitForm.disabled = true;

function check() {
  const box = checkBox.checked ? submitForm.disabled = false : submitForm.disabled = true;

  return box;
}

function verify() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', verify);
checkBox.addEventListener('click', check);

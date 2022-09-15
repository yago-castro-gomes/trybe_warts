const email = document.getElementById('email');
const password = document.getElementById('password');
const submitForm = document.getElementById('entrar');

function verifica() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submitForm.addEventListener('click', verifica);

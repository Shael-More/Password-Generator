const passwordBtn = document.getElementById('password');

function generatePass() {
  let password = '';
  let length = 8;

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const allchar = upperCase + lowerCase + number;

  console.log(allchar);

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += Math.floor(Math.random() * number.length);

  while (length > password.length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }

  passwordBtn.value = password;
}

function copyPass() {
  passwordBtn.select();
  document.execCommand('copy');
}

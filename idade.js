// idade.js
const anoNascimento = 2001;
const mesNascimento = 11; // novembro
const diaNascimento = 3;

const hoje = new Date();
let idade = hoje.getFullYear() - anoNascimento;

const mesAtual = hoje.getMonth() + 1;
const diaAtual = hoje.getDate();

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
  idade--;
}

document.getElementById('idade').textContent = idade;

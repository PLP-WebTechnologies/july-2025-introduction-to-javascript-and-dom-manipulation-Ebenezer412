// Parte 1: Variáveis e Condicional
const inputNumero = document.getElementById('numero');
const btnVerificar = document.getElementById('verificarBtn');
const resultadoParImpar = document.getElementById('resultadoParImpar');

btnVerificar.addEventListener('click', () => {
  const valor = Number(inputNumero.value);

  if (isNaN(valor)) {
    resultadoParImpar.textContent = 'Por favor, digite um número válido.';
    return;
  }

  // Verifica se o número é par ou ímpar
  if (valor % 2 === 0) {
    resultadoParImpar.textContent = `O número ${valor} é par.`;
  } else {
    resultadoParImpar.textContent = `O número ${valor} é ímpar.`;
  }
});

// Parte 2: Funções personalizadas

// Função que gera saudação personalizada
function saudarUsuario(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

// Função que retorna a soma de dois números
function somar(a, b) {
  return a + b;
}

const btnSaudar = document.getElementById('btnSaudar');
const saudacao = document.getElementById('saudacao');

btnSaudar.addEventListener('click', () => {
  const mensagem = saudarUsuario('Aluno');
  saudacao.textContent = mensagem;
  // Exemplo de uso da função somar
  console.log('Exemplo de soma: 5 + 3 =', somar(5, 3));
});

// Parte 3: Loops

const btnContagem = document.getElementById('btnContagem');
const listaContagem = document.getElementById('listaContagem');

btnContagem.addEventListener('click', () => {
  listaContagem.innerHTML = ''; // Limpa lista

  // Exemplo 1: loop for para contagem regressiva de 10 a 1
  for (let i = 10; i > 0; i--) {
    const li = document.createElement('li');
    li.textContent = i;
    listaContagem.appendChild(li);
  }

  // Exemplo 2: loop while para adicionar mais elementos
  let count = 1;
  while (count <= 5) {
    const li = document.createElement('li');
    li.textContent = `Item extra ${count}`;
    listaContagem.appendChild(li);
    count++;
  }
});

// Parte 4: Manipulação DOM

const btnAlterarCor = document.getElementById('btnAlterarCor');
const btnCriarElemento = document.getElementById('btnCriarElemento');
const container = document.getElementById('container');

btnAlterarCor.addEventListener('click', () => {
  // Alterna classe para mudar cor do fundo do body
  document.body.classList.toggle('fundo-alternado');
});

btnCriarElemento.addEventListener('click', () => {
  // Cria um novo parágrafo e adiciona ao container
  const p = document.createElement('p');
  p.textContent = 'Este é um novo parágrafo criado dinamicamente!';
  container.appendChild(p);
});

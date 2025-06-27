alert('Bem-vindo ao jogo da média!');

let quantidade = parseInt(prompt('Ola! Quantos números você deseja digitar?'));

let soma = 0;

for (let i = 1; i <= quantidade; i++) {
  let numero = parseFloat(prompt('Digite o número ' + i + ':'));
  soma += numero;
}

let media = soma / quantidade;

alert('A média dos números é: ' + media);

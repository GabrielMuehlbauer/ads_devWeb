//Variáveis

/* Tipagem dinâmica: Não precisa declarar o tipo de uma variável */
variavel = 'String';
variavel = '1';

/* 
    let: Pertence ao escopo
    var: Variavel global
*/

let nome = 'Gabriel'; //String
let opcao = true; //boolean
let decimal = 8.5; //float
let inteiro = 10; //int

//Array é dinâmico podendo conter diferentes tipos de variaveis
let array = [10, 4, 5, 2, opcao, 'palavra']; //Array(Vetor)
console.log(array);

let resultado = decimal + inteiro;
console.log(resultado);

//Atribuindo elementos do HTML a variaveis JS
let objeto = document.querySelector('h1');
console.log(objeto.textContent); //textContent: Conteúdo do elemento

//Aleterando o conteúdo do objeto
objeto.textContent = 'Novo texto'; //Não altera o HTML

//funções
function soma(num1, num2){
    let resultado = num1 + num2

    console.log(`Soma: ` + resultado);
}

soma(8, 10);

//if else
if (opcao === true) {
    console.log('É verdade!');
}





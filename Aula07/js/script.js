// Selecionar o elemento h1 e alterar texto
let titulo = document.getElementById('titulo');
titulo.innerText = "Bem vindo ao meu site!!!";

// Selecionar elementos com classe texto e alterar cores
let texto = document.getElementsByClassName('texto');
texto[0].style.color = "blue";
texto[1].style.color = "green";

// Selecionar primeiro parágrafo com querySelector e fazer alteração no texto
let p1 = document.querySelector('.texto');
p1.innerText = "Este é o novo texto!"

// Selecionar todos os parágrafos com querySelectorAll imprimir número de parágrafos no console
let todosP = document.querySelectorAll('p');
console.log(todosP.length);
//Aula 1 - Introdução ao JS

var nome = "Gabriel Paulino";
var n1 = 5;
var n2 = 3;
var frase = "Teste de String";
var tamanho;
//alert(nome + " tem " + idade + " anos");

//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Teste", "Replace"));

var frase2 = frase.replace("Teste", "Replace");

console.log(frase2.toLowerCase());

//alert(frase.replace("Teste", "Replace"));


//Aula 2 - Array e Dicionario

var lista = ["maçã", "pera", "laranja"];

console.log(lista);


//imprimir apenas o maça

console.log(lista[0]);

//inserir a uva na lista - push

lista.push("uva");
lista.push(3);

console.log(lista);

//remover um elemento da lista - pop

lista.pop();

console.log(lista);

//tamanho da lista

console.log(lista.length);

//inverter a ordem da lista
//utiliza-se o metodo reverse
tamanho = lista.length;

console.log("o tamanho da lista é de " + tamanho + " elementos");

// inverter a ordem dos elementos
//da array

console.log(lista.reverse());

//converter array para string
//elementos separados por ','
//"não personalizado"

console.log("os elementos da lista são: " + lista.toString());

//imprimir 1o caracter da string

console.log("a primeira letra da string é : " + lista.toString()[0]);

//converter array para strin
//elementos separados por "_"
//"pode ser  personalizado"

console.log("os elementos da lista são: " + lista.join("_"));

// Dicionario

/*var fruta = { nome: "maça", cor: "vermelha" };

console.log(fruta);

console.log(fruta.nome);*/

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];

console.log(frutas);

console.log(frutas[1].nome);





//! Classes 

class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class todoList extends List {
    constructor() {
        super();
        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
    /*

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }*/
}

const MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


//! Var, Const & Let

// Var: variavel pode ser reatribuido um novo valor, um novo tipo
var a = 3;
a = 'Gabriel';
console.log(a);

//Const: constante não pode ser reatribuido outro valor, read only
const b = 5;
//b = 6; caso descomente essa linha causa um erro
console.log(b);

//No entanto pode-se fazer mutações exemplo:
const usuario = { nome: 'Leonardo' };
console.log(usuario);
usuario.nome = 'Sandra';
console.log(usuario);
// o  constante nome manteve-se, apenas foi alterado o conteúdo do nome

//let: variável de escopo

teste(10);

function teste(x) {
    let y = 2
    if (x > 5) {
        //as variaveis do tipo escopo podem ser reatribuidas
        let y = 'Gabriel';
        console.log(x, y);
    }
}

//console.log(y); não irá funcionar pois a variavel y foi definida dentro do escopo da funcao teste

//! Operações em Arrays

const array = [1, 3, 6];

//operação map: percorre o vetor e retorna um vetor alterado de acordo com a lógica
//a função function recebe cada um dos ITENS (1, 3, 5, 9, 11 e 15) e seus respectivos INDECES
const newArray = array.map(function (item, index) {
    return 2 * item + (index + 1);
})
console.log(newArray);


//operação reduce: consome todos os itens do array e transforma o em um únio
//ideal para fazer soma de todos os elementos dentro de um array

const soma = array.reduce(function (total, next) {
    return total + next;
    //1a iteração
    //total = 0; next = 1
    //2a iteração
    //total = 1; next = 3
    //3a iteração (ultima)
    //total = 4; next = 6
});

console.log(soma);

//operação filter: serve para fazer um filtro em uma determinada array, por exemplo obter apenas os elementos que são pares:

const pares = array.filter(function (item) {
    return item % 2 === 0;
    // retorno true ou false é obrigatório!

});

console.log(pares);

//operação find: quando deseja-se verificar se existe alguma informação dentro do array ou quando deseja-se buscar por tal informação, exemplo:

const procurar = array.find(function (item) {
    return item === 3;
    //retorna UNDEFINED quando não se encontra o item desejado
});

console.log(procurar);


//! Arrow functions

// Usa-se a arraw functions normalmente quando encontram-se funcoes chamando outras funções, para diminuir o código

const vetor = [1, 3, 4, 5, 6];
const novoVetor = vetor.map(item => item * 2);
console.log(novoVetor);

/*
const teste2 = () => {
    return 'Arrow function I';
}*/

const teste2 = () => 'Arrow function II';

console.log(teste2());


// Arrow function para retornar objeto necessita-se de ()
const obj = () => ({
    nome: 'Gabriel',
    sexo: 'M',
    dataNasc: '03/09/1990',
    estadoCivil: 'Solteiro'
});
console.log(obj());


//!Valores Padrão para funcões em js

//Dada uma função que necessita-se de dois parâmetros de entrada, ou mais e quando se chama essas funções não são passados esses valores, ocorre o erro NaN, para corrigir este erro é possivel atribuir valores padrões nessas funções, ao fim de substituir esses valores não recebidos pelo chamador da função, exemplo:
//Evita-se erros
function somaa(a = 3, b = 6) {
    //os valores padrões definidos são:
    //a = 3 e b = 6
    return a + b;
}

const soma2 = (a = 3, b = 6) => a + b;
console.log(soma2(1));
console.log(soma2());


//!Desestruturação de objetos em js


const user = {
    nome: 'Gabriel',
    idade: 29,
    endereco: {
        cidade: 'Sorocaba',
        estado: 'SP',
    },
    altura: 1.80,
};

console.log(user);

/*
const nome = user.nome;
const idade = user.idade;
const cidade = user.endereco.cidade;*/

//Desestruturação de objetos :
const { nome, idade, endereco: { cidade } } = user;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(user);


//!Operadores rest/spread

//Precisa-se instalar um novo pacote

//@babel/plugin-proposal-object-rest-spread

//REST

const pessoa = {
    nome1: 'Gabriel Paulino',
    idade: 29,
    empresa: 'Etec Ap'
};

//Armazena o nome na variavel pessoa
//Armazena idade e empresa na variavel resto
//Serve para dividir objetos, arrays e funcoes.

const { nome1, ...resto } = pessoa;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a1, b1, ...c1] = arr;
console.log(a1); // contrem 1
console.log(b1); // contem 2
console.log(c1); // contem o resto 3,4



//Se deseja escalar uma funcao de adicao
//1o : a+b ; 2o: a+b+c; 3o a+b+c+d; etc
/*
function adicao(a2, b2, c2) {
    return a2 + b2 + c2;
}*/

//Utiliza-se da seguinte maneira:

function adicao(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(adicao(1, 2, 3));

//SPREAD
//unir duas arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


//Criar novo obj usuario2, mudando apenas uma das propriedades;

const usuario1 = {
    nome: 'Gabis',
    idade: 29,
    empresa: 'Etec AP'
};

const usuario2 = { ...usuario1, nome: 'Leo' };

console.log(usuario2);


//! Templete Literals

const nom3 = 'Gabriel'
const idad = 29;

//Sintaxe ruim:
console.log('Meu nome é ' + nom3 + ' e tenho ' + idad + ' anos');

//Proposta de melhoria: Templete Literals
console.log(`Meu nome é ${nom3} e tenho ${idad} anos.`);


//!Object Short Syntax:

const name = 'Gabis';
const age = 29;

const person = {
    name: name,
    age: age,
    empresa: 'Etec AP'
};

console.log(person);

// Pode se escrever o objeto person da seguinte maneira: (desde que o nome das propriedades sejam iguais!)

const person2 = {
    name,
    age,
    empresa: 'Etec AP'
};

console.log(person2);











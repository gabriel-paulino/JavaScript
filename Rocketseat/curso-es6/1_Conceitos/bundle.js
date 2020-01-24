"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//! Classes 
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var todoList =
/*#__PURE__*/
function (_List) {
  _inherits(todoList, _List);

  function todoList() {
    var _this;

    _classCallCheck(this, todoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(todoList).call(this));
    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(todoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
    /*
      addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }*/

  }]);

  return todoList;
}(List);

var MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); //! Var, Const & Let
// Var: variavel pode ser reatribuido um novo valor, um novo tipo

var a = 3;
a = 'Gabriel';
console.log(a); //Const: constante não pode ser reatribuido outro valor, read only

var b = 5; //b = 6; caso descomente essa linha causa um erro

console.log(b); //No entanto pode-se fazer mutações exemplo:

var usuario = {
  nome: 'Leonardo'
};
console.log(usuario);
usuario.nome = 'Sandra';
console.log(usuario); // o  constante nome manteve-se, apenas foi alterado o conteúdo do nome
//let: variável de escopo

teste(10);

function teste(x) {
  var y = 2;

  if (x > 5) {
    //as variaveis do tipo escopo podem ser reatribuidas
    var _y = 'Gabriel';
    console.log(x, _y);
  }
} //console.log(y); não irá funcionar pois a variavel y foi definida dentro do escopo da funcao teste
//! Operações em Arrays


var array = [1, 3, 6]; //operação map: percorre o vetor e retorna um vetor alterado de acordo com a lógica
//a função function recebe cada um dos ITENS (1, 3, 5, 9, 11 e 15) e seus respectivos INDECES

var newArray = array.map(function (item, index) {
  return 2 * item + (index + 1);
});
console.log(newArray); //operação reduce: consome todos os itens do array e transforma o em um únio
//ideal para fazer soma de todos os elementos dentro de um array

var soma = array.reduce(function (total, next) {
  return total + next; //1a iteração
  //total = 0; next = 1
  //2a iteração
  //total = 1; next = 3
  //3a iteração (ultima)
  //total = 4; next = 6
});
console.log(soma); //operação filter: serve para fazer um filtro em uma determinada array, por exemplo obter apenas os elementos que são pares:

var pares = array.filter(function (item) {
  return item % 2 === 0; // retorno true ou false é obrigatório!
});
console.log(pares); //operação find: quando deseja-se verificar se existe alguma informação dentro do array ou quando deseja-se buscar por tal informação, exemplo:

var procurar = array.find(function (item) {
  return item === 3; //retorna UNDEFINED quando não se encontra o item desejado
});
console.log(procurar); //! Arrow functions
// Usa-se a arraw functions normalmente quando encontram-se funcoes chamando outras funções, para diminuir o código

var vetor = [1, 3, 4, 5, 6];
var novoVetor = vetor.map(function (item) {
  return item * 2;
});
console.log(novoVetor);
/*
const teste2 = () => {
    return 'Arrow function I';
}*/

var teste2 = function teste2() {
  return 'Arrow function II';
};

console.log(teste2()); // Arrow function para retornar objeto necessita-se de ()

var obj = function obj() {
  return {
    nome: 'Gabriel',
    sexo: 'M',
    dataNasc: '03/09/1990',
    estadoCivil: 'Solteiro'
  };
};

console.log(obj()); //!Valores Padrão para funcões em js
//Dada uma função que necessita-se de dois parâmetros de entrada, ou mais e quando se chama essas funções não são passados esses valores, ocorre o erro NaN, para corrigir este erro é possivel atribuir valores padrões nessas funções, ao fim de substituir esses valores não recebidos pelo chamador da função, exemplo:
//Evita-se erros

function somaa() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  //os valores padrões definidos são:
  //a = 3 e b = 6
  return a + b;
}

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma2(1));
console.log(soma2()); //!Desestruturação de objetos em js

var user = {
  nome: 'Gabriel',
  idade: 29,
  endereco: {
    cidade: 'Sorocaba',
    estado: 'SP'
  },
  altura: 1.80
};
console.log(user);
/*
const nome = user.nome;
const idade = user.idade;
const cidade = user.endereco.cidade;*/
//Desestruturação de objetos :

var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(user); //!Operadores rest/spread
//Precisa-se instalar um novo pacote
//@babel/plugin-proposal-object-rest-spread
//REST

var pessoa = {
  nome1: 'Gabriel Paulino',
  idade: 29,
  empresa: 'Etec Ap'
}; //Armazena o nome na variavel pessoa
//Armazena idade e empresa na variavel resto
//Serve para dividir objetos, arrays e funcoes.

var nome1 = pessoa.nome1,
    resto = _objectWithoutProperties(pessoa, ["nome1"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a1 = arr[0],
    b1 = arr[1],
    c1 = arr.slice(2);
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

function adicao() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(adicao(1, 2, 3)); //SPREAD
//unir duas arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); //Criar novo obj usuario2, mudando apenas uma das propriedades;

var usuario1 = {
  nome: 'Gabis',
  idade: 29,
  empresa: 'Etec AP'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Leo'
});

console.log(usuario2); //! Templete Literals

var nom3 = 'Gabriel';
var idad = 29; //Sintaxe ruim:

console.log('Meu nome é ' + nom3 + ' e tenho ' + idad + ' anos'); //Proposta de melhoria: Templete Literals

console.log("Meu nome \xE9 ".concat(nom3, " e tenho ").concat(idad, " anos.")); //!Object Short Syntax:

var name = 'Gabis';
var age = 29;
var person = {
  name: name,
  age: age,
  empresa: 'Etec AP'
};
console.log(person); // Pode se escrever o objeto person da seguinte maneira: (desde que o nome das propriedades sejam iguais!)

var person2 = {
  name: name,
  age: age,
  empresa: 'Etec AP'
};
console.log(person2);

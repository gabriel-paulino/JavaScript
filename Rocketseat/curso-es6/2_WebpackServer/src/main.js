/* WEBPACK: Serviço que possibilita trabalhar com varios arquivos arquivos .js, imagens, json e converte-lo em um unico arquivo bundle.js */

//Este comando instala as dependencias do webpack no arquivo packege.json
//TODO  no terminal executar: yarn add webpack webpack-cli -D 

//Testando o WEBPACK

//SoaDefault nao precisa estar dentro da chaves pois foi exportada como Default, podendo renomea-la no arquivo importado
import SomaDefault, { sub } from './functions';

console.log(SomaDefault(1, 2));
console.log(sub(4, 2));


//Exporta todas as funções do arquivo funcoes.js em um objeto definido como objFuncao
import * as objFuncao from './funcoes';

console.log(objFuncao);

console.log(objFuncao.soma(4, 2));
console.log(objFuncao.sub(4, 2));
console.log(objFuncao.mul(4, 2));
console.log(objFuncao.div(4, 2));


//AULA 01
/*

//Requisição Ajax Assíncrona servidor backend: 
//acesso ao Ajax para obter informação de algum servidor
var xhr = new XMLHttpRequest();


//Para abrir, buscar url , método GET, url onde desejo buscar os dados
xhr.open('GET', 'https://api.github.com/users/gabriel-paulino');
xhr.send(null);

//Assincrona, leva um tempo até o servidor forneceber as informações ao main.js
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {// 4 significa que a resposta da requisição voltou para o solicitante
        console.log(JSON.parse(xhr.responseText)); // Conversão da Requisição Jason
    }

}*/


//AULA 02

//Promisses são códigos que não vão influenciar na linha do tempo do código javascript,
//são funções que vão devolver o valor de resultado, seja de sucesso ou erro, só depois de um tempo
/*
var minhaPromisse = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/gabriel-paulino');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }

        }

    });
}

minhaPromisse()
    .then(function (response) {
        console.log(response); //.then invoca o resolve e mostra a resposta da requisição
    })
    .catch(function (error) {  // .catch invoca o reject, quando o status não é codigo 200
        console.warn(error);
    });
*/

//AULA 03
//Sintaxe simplificada usando o axios 

//usando o método get, pode ser, post, put, delete, 
//passagem de parâmetros também nessa mesma linha
axios.get('https://api.github.com/users/gabriel-paulino')
    .then(function (response) {
        console.log(response.data.avatar_url);
    })
    .catch(function (error) {
        console.warn(error);
    });
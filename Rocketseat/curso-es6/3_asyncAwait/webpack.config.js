//Arquivo de configuração do webpack

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //Arquivo principal (aquele que vc escreve o código)
    output: { // Para qual lugar e arquivo devo enviar o arquivo convertido
        path: __dirname + '/public', //__dirname refere-se à uma variavel global que indica a raiz da pasta
        filename: 'bundle.js', //nome do arquivo
    },
    devServer: {
        //contentBase caminho para executar o servidor
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [{// Regras de como o arquivo deve se comportar ao adicionar novos arquivos .js
            test: /\.js$/, // Indica se o arquivo termina com .js
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }
        ],

    },
};
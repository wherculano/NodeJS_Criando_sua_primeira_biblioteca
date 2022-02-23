const chalk = require('chalk')
const pegarArquivo = require('./index')

const caminho = process.argv

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegarArquivo(caminhoDoArquivo[2])
    console.log(chalk.yellow('Lista de links\n'), resultado)
}

processaTexto(caminho)
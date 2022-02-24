const chalk = require('chalk')
const pegarArquivo = require('./index')
const validarURLs = require('./validacao-http')

const caminho = process.argv

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegarArquivo(caminhoDoArquivo[2])
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('Links validados\n'), await validarURLs(resultado))
    }else{
        console.log(chalk.yellow('Lista de links\n'), resultado)
    }
}

processaTexto(caminho)
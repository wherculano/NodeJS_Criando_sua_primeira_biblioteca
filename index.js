const chalk = require('chalk');
const fs = require('fs');  // File System

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'Nenhum arquivo ou diretório encontrado.'))
}

function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm  //Global e Multilinha
    const arrayResultados = []
    let temp;
    while ((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]] : temp[2]})
    }

    return arrayResultados.length === 0 ? 'Não há links a serem tratados' : arrayResultados
}


// Exemplo async/await
async function pegarArquivo(caminhoDoArquivo){
    encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extrairLinks(texto)
    }catch(erro){
        tratarErro(erro)
    }finally{
        console.log(chalk.yellow('\noperação concluída com sucesso!\n'));
    }
    
}

module.exports = pegarArquivo

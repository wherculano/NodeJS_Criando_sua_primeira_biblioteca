const chalk = require('chalk');
const fs = require('fs')  // File System

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'Nenhum arquivo ou diretório encontrado.'))
}

function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro){
            tratarErro(erro)
        }
        console.log(chalk.green(texto))
    })
}

pegarArquivo('./arquivos/texto1.md')

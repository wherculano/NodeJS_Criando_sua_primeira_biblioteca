import chalk from 'chalk'
import fs from 'fs'

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Arquivo ou diretório não encontrado.'))
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.blue(texto))
    })
}

pegaArquivo('./arquivos/texto.md')
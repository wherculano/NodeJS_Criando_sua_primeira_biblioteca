import chalk from "chalk"
import fs from 'fs'

function trataErro(erro){
    throw new Error(erro)
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.promises.readFile(caminhoDoArquivo,encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)  // ou catch((erro) => trataErro(erro))
}
pegaArquivo('./arquivos/texto.md')

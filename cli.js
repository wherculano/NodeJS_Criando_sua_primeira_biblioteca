import pegaArquivo from "./aula_006_regex.js";
import chalk from "chalk";
import fs from 'fs';

const caminho = process.argv;

function imprimeResultado(resultado, identificador=''){
    console.log(
        chalk.blueBright("Lista de Links:"), 
        chalk.yellow.bgBlack(identificador),
        resultado)
}

async function processaArquivo(argumentos){
    const caminho = argumentos[2]

    try{
        fs.lstatSync(caminho)
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(`Arquivo ou Diretorio '${erro.path}' não encontrado.`)
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        imprimeResultado(resultado)
    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`)
            imprimeResultado(lista, nomeDoArquivo)
        })
    }
}

processaArquivo(caminho)
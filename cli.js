import pegaArquivo from "./aula_006_regex.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http_validacao.js";


const caminho = process.argv;

async function imprimeResultado(valida, resultado, identificador=''){
    if(valida){
        console.log(
            chalk.blueBright("Lista Validada:"), 
            chalk.yellow.bgBlack(identificador),
            await listaValidada(resultado)
        )
    } else{
        console.log(
            chalk.blueBright("Lista de Links:"), 
            chalk.yellow.bgBlack(identificador),
            resultado
        )
    }
}

async function processaArquivo(argumentos){
    const caminho = argumentos[2]
    const valida = argumentos[3] === '--valida'

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
        imprimeResultado(valida, resultado)
    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`)
            imprimeResultado(valida, lista, nomeDoArquivo)
        })
    }
}

processaArquivo(caminho)
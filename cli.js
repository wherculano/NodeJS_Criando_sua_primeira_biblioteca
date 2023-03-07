import pegaArquivo from "./aula_006_regex.js";
import chalk from "chalk";


const caminho = process.argv;

async function processaArquivo(caminho){
    const resultado = await pegaArquivo(caminho);
    console.log(chalk.yellow("Lista de Links:\n"), resultado)
}

processaArquivo(caminho[2])
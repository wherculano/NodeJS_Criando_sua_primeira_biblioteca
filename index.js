const chalk = require('chalk');
const fs = require('fs')  // File System

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'Nenhum arquivo ou diretório encontrado.'))
}

// Exemplo async/await
async function pegarArquivo(caminhoDoArquivo){
    encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    }catch(erro){
        tratarErro(erro)
    }finally{
        console.log(chalk.yellow('\noperação concluída com sucesso!\n'));
    }
    
}

// Exemplo de Promises (mais antigo)
// function pegarArquivo(caminhoDoArquivo){
//     encoding = 'utf-8'
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro) => tratarErro(erro))
// }

// Exemplo sincrono
// function pegarArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             tratarErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

pegarArquivo('./arquivos/texto1.md')

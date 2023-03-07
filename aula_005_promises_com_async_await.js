import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Arquivo ou diretório não encontrado."));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.blue(texto));
  } catch (erro) {
    trataErro(erro);
  } finally{
    // independente de qual bloco acima foi executado, finally SEMPRE será executado.
    console.log(chalk.yellow("Operação finalizada!"))
  }
}

pegaArquivo("./arquivos/texto.md")

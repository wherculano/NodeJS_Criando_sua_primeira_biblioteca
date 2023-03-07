import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((captura) => ({[captura[1]]: captura[2] }));
  return resultados.length !== 0 ? resultados : "Não há links no arquivo!";
}


function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Arquivo ou diretório não encontrado."));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  } 
}

export default pegaArquivo;

/* Explicação da RegEx
\[: Início de um link em Markdown, denotado pelo caractere [.

([^[\]]*?): Grupo de captura e serve para extrair o texto âncora do link. A expressão dentro do grupo significa "qualquer caractere que não seja [ ou ], 
repetido zero ou mais vezes, de forma não-gulosa". Isso significa que a regex vai tentar casar com o menor número possível de caracteres que satisfaça 
a condição, para evitar capturar texto desnecessário.

\]: isso indica o fim do texto âncora do link em Markdown, que é denotado pelo caractere ].

\(: isso indica o início da URL do link em Markdown, que é denotado pelo caractere (.

(https?:\/\/[^\s?#.].[^\s]*): esse trecho é outro grupo de captura, e serve para extrair a URL do link. Ele começa casando com http:// ou https:// 
(o s é opcional), seguido por um ou mais caracteres que não sejam espaços em branco, ?, # ou . (representados pela classe de caracteres negados [^\s?#.]), 
seguidos por zero ou mais caracteres que não sejam espaços em branco. Isso garante que a regex vai capturar toda a URL até o final, sem pegar texto desnecessário.

\): isso indica o fim da URL do link em Markdown, que é denotado pelo caractere ).

Em resumo, essa regex pode ser usada para extrair todos os links formatados em Markdown de um texto, capturando tanto o texto âncora quanto a URL correspondente.
*/

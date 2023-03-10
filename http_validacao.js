import chalk from "chalk";

function extraiLinks(arrayLinks){
    return arrayLinks.map((objetoLinks) => Object.values(objetoLinks).join())
}

async function checaStatus(listaURLs){
    const arrayStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`
            } catch(erro){
                return manejaErros(erro)
            }
        })
    )
    return arrayStatus;
}

function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return "Link não encontrado!"
    }else{
        return "Ocorreu algum erro!"
    }
}
export default async function listaValidada(listaDeLinks){
    const lista = extraiLinks(listaDeLinks)
    const status = await checaStatus(lista)
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status_code: status[indice]
    }))
}
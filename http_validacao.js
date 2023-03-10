function extraiLinks(arrayLinks){
    return arrayLinks.map((objetoLinks) => Object.values(objetoLinks).join())
}

async function checaStatus(listaURLs){
    const arrayStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status
        })
    )
    return arrayStatus;
}

export default async function listaValidada(listaDeLinks){
    const lista = extraiLinks(listaDeLinks)
    const status = await checaStatus(lista)
    return status
}
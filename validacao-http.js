const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
// const fetch = require('node-fetch')  // versao antiga

async function checarStatus(arrayURLs){
    const arrayStatus = await Promise
        .all(arrayURLs.map(async url => {
            const resp = await fetch(url)
            return resp.status
    }))
    return arrayStatus
}

function gerarArrayDeLinks(arrayLinks){
    //map retorna um novo array, mas como Object.values também retorna um array,
    // é preciso usar o join para 'unir' os arrays e se tornarem um só
   return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join()) 
}


async function validarURLs(arrayLinks){
    const arrayURLs = gerarArrayDeLinks(arrayLinks)
    const arrayStatus = await checarStatus(arrayURLs)
    return arrayStatus
}

module.exports = validarURLs

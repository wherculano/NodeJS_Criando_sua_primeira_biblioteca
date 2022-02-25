const pegarArquivo = require('../index')

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegarArquivo::', () => {
    it('it must be a function', () => {
        expect(typeof pegarArquivo).toBe('function')
    })
    it('it must return array "resultados"', async () => {
        const resultado = await pegarArquivo('./test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('it must return "Não há links a serem tratados"', async () => {
        const resultado = await pegarArquivo('./test/arquivos/texto_semlink.md')
        expect(resultado).toBe("Não há links a serem tratados")
    })
    it('it must return "Nenhum arquivo ou diretório encontrado."', () => {
        async function capturarErro(){
            await pegarArquivo('./test/arquivos')
            exepct(capturarErro).toThrowError(/Nenhum arquivo ou diretório encontrado./)
        }       
    })
})

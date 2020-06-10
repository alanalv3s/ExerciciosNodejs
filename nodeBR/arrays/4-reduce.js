const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let ValorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length -1; index++) {
        ValorFinal == callback(ValorFinal, this[index], this);
    }
    return ValorFinal
}

async function main () {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        // [20.2, 30.3, 40.5]
        console.log('pesos', pesos)
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // })

        const minhaLista = [
            ['Alan', 'Alves'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = minhaLista.reduce((anterior, proximo) => {
            return anterior.concat(proximo)
        },[])
        .join(', ')
        console.log('total', total)

    } catch (error) {
        console.log("DEU RUIM", error)
    }
}

main ()
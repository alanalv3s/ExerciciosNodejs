/*
0 Obter um usuario
1 Obter o telefone de um usuario pelo ID
2 Obter endereço pelo ID
*/
// Importar um módulo interno do node 
const util = require('util')
const obterEndereçoAsync = util.promisify(obterEndereço)

function obterUsuario() {
    // quando der pau -> reject
    // quando ok -> resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU MUITO RUIM'))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '1151546',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereço(id, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
// Quando der ok => .then
// Quando der pau => .catch
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then((result) => {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then((resultado) => {
        const endereço = obterEndereçoAsync(resultado.usuario.id)
        return endereço.then((result) => {
            return {
                ...resultado,
                endereço: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereço.rua}, ${resultado.endereço.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone} 
            `
        )
    })
    .catch(function (error) {
        console.log('DEU RUIM', error)
    })

// obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.error('DEU RUIM EM USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.error('DEU RUIM EM TELEFONE', error)
//             return;
//         }
//         obterEndereço(usuario.id, function resolverEndereço(error2, endereço){
//             if (error2) {
//                 console.error('DEU RUIM EM ENDEREÇO', error)
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereço.rua}, ${endereço.numero},
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)
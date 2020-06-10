/*
0 Obter um usuario
1 Obter o telefone de um usuario pelo ID
2 Obter endereço pelo ID
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(id, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1151546',
            ddd: 11
        })
    }, 2000);
}

function obterEndereço(id, callback) {
    setTimeout(() => {
return callback(null, {
    rua: 'dos bobos',
    numero: 0
})
    }, 2000);
}

function resolverUsuario(erro, usuario) {

    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('DEU RUIM EM USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM EM TELEFONE', error)
            return;
        }
        obterEndereço(usuario.id, function resolverEndereço(error2, endereço){
            if (error2) {
                console.error('DEU RUIM EM ENDEREÇO', error)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereço.rua}, ${endereço.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)
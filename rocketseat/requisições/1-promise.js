// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
// segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade >= 18) {
                resolve("O usuário é maior de idade")
            }
            else {
                reject('ERRO: usuário menor de idade')
            }
        }, 2000);
    })
}

checaIdade(18)
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.warn(error)
})
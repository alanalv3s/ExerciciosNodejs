const usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function retornaHabilidades(usuarios) {
    for(let usuario of usuarios) {
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
    }
}

retornaHabilidades(usuarios)
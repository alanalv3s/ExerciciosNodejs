const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Map
const idade = usuarios.map(users => users.idade)
console.log(idade)

// Filter
const ageFilter = usuarios.filter(users => users.idade >= 18 && users.empresa === 'Rocketseat')
console.log(ageFilter)

// Find
const findGoogle = usuarios.find(users => users.empresa === 'Google')
console.log(findGoogle)

// Unindo operações
const calculate = usuarios.map(users => ({ ...users, idade: users.idade * 2 })).filter(users => users.idade <= 50)
console.log(calculate)
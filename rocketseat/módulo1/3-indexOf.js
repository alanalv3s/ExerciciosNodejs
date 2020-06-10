function temHabilidade(skills) {
    const temJS = skills.indexOf("Javascript")
    if (temJS != -1) {
        return console.log('Tem Javascript!')
    }
    else (
        console.log("Não tem habilidade com Javascript!")
    )
}
var skills = ["Javascrpt", "ReactJS", "React Native"];
temHabilidade(skills);
getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = msg => {
    const name = msg.from.first_name
    const responses = [
        `Ih, ${name}... Conheço esse comandou louco aí não!`,
        `Pessoal ta me pedindo cada coisa estranha...`,
        `Ta pensando que eu sou oq, ${name}? Sei de tudo dessa vida não...`,
        `Eu não tenho esse comando, ${name}.`,
        `Eu conheço muitos comandos, mas este eu vou ficar te devendo, ${name}...`,
        `Tu fala e ainda pede comando que eu não conheço? Cê é bruxão memo, hein, ${name}!!! -_-`,
        `${name}, esse comando eu só executo quando nenhum político está roubando...`,
        `Eu sei que você gostaria que eu fosse o Jarvis, ${name}... Mas eu não conheço esse comando não`,
        `O cara que me programou é imbecil demais pra me ensinar esse comando, ${name}... Reclame com ele...`,
        `Pessoalzinho acha que virou festa... Cada pedido que me aparece... Né, ${name}? -_-`,
        `Me pede pra correr, pra saltar de um avião... Me pede pra acertar a mega-sena, menos isso aí que você quer, ${name}...`,
        `Ahhhhh, que delícia de comando, ${name}... Você quer um suquinho de laranja? -_- Sei esses comandos de granola n...`,
        `Tanta coisa pra pessoa me pedir e ele vem pedir isso?`,
        `Comando não encontrado, ${name}.`,
        `Por gentileza, ${name}, não me encha o saco! Não conheço esse comando`,
        `Não tenho esse comando, ${name}`,
        `Pô... Queria ter esse comando aí pra te ajudar, ${name}...`,
        `Acho que isso que você quer... Você mesmo terá que fazer, ${name}`,
        `Comandos... Comandos... Comandos... Comandos... Vou te mandar um comando pra ver se você conhece /naoMeEnchaOSaco, ${name}`,
    ];

    const randomInt = getRandomInt(0, responses.length);
    return responses[randomInt];
}
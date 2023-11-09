/* Classificador de nível de herói*/
/*
Istruções de uso:
1 - Utilizar o comando "node js/main.js" no terminal para iniciar o programa.
2 - As entradas de dados, como nome de usuário, de herói e pontos de xp podem ser feitas direto pelo terminal.
3 - Caso as mensagens "Nome de usuário inválido, verifique se você digitou corretamente!" ou "Nome de herói inválido, verifique se você digitou corretamente!"
    apareçam, possivelmente os campos ficaram em branco, é só reiniciar o código usando o comando "node js/main.js" e digitar um nome válido.
*/

console.log("")
console.log("Olá usuário, seja bem-vindo ao classificador de nível de herói!")

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Primeiramente, digite seu nome: ', (userName) => {
    if (userName == "") {
        console.log("")
        console.log("Nome de usuário inválido, verifique se você digitou corretamente!");
        process.exit()

    } else {
        console.log("")
        console.log("Muito bem " + userName + " vamos começar!");
        rl.question('Qual é o nome do seu herói? ', (heroName) => {

            if (heroName == "") {
                console.log("")
                console.log("Nome de herói inválido, verifique se você digitou corretamente!")
                process.exit()
            } else {
                console.log("")
                rl.question("Qual é a quantidade de XP do herói " + heroName + "? ", (xpPoints) => {

                    let message = "O herói " + heroName + " está com " + xpPoints + " pontos de experiência, o que coloca ele no ranking: "

                    if (xpPoints <= 1000) {
                        rankingHero = "Ferro"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 1001 && xpPoints <= 2000) {
                        rankingHero = "Bronze"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 2001 && xpPoints <= 5000) {
                        rankingHero = "Prata"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 5001 && xpPoints <= 7000) {
                        rankingHero = "Ouro"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 7001 && xpPoints <= 8000) {
                        rankingHero = "Platina"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 8001 && xpPoints <= 9000) {
                        rankingHero = "Ascendente"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else if (xpPoints >= 9001 && xpPoints <= 10000) {
                        rankingHero = "Imortal"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")

                    } else {
                        rankingHero = "Radiante"
                        console.log("")
                        console.log(message + rankingHero)
                        console.log("")
                    }

                    switch (rankingHero) {
                        case "Ferro":
                            console.log("O ranking Ferro enquadra heróis com até 1.000 pontos de experiência")
                            console.log("")
                            break
                        case "Bronze":
                            console.log("O ranking Bronze enquadra heróis com pontuação entre 1.001 e 2.000 pontos de experiência")
                            console.log("")
                            break
                        case "Prata":
                            console.log("O ranking Prata enquadra heróis com pontuação entre 2.001 e 5.000 pontos de experiência")
                            console.log("")
                            break
                        case "Ouro":
                            console.log("O ranking Ouro enquadra heróis com pontuação entre 5.001 e 7.000 pontos de experiência")
                            console.log("")
                            break
                        case "Platina":
                            console.log("O ranking Platina enquadra heróis com pontuação entre 7.001 e 8.000 pontos de experiência")
                            console.log("")
                            break
                        case "Ascendente":
                            console.log("O ranking Ascendente enquadra heróis com pontuação entre 8.001 e 9.000 pontos de experiência")
                            console.log("")
                            break
                        case "Imortal":
                            console.log("O ranking Imortal enquadra heróis com pontuação entre 9.001 e 10.000 pontos de experiência")
                            console.log("")
                            break

                        case "Radiante":
                            console.log("O ranking Radiante enquadra heróis com pontuação acima de 10.000 pontos de experiência")
                            console.log("")


                    }
                    process.exit();
                });
            }
        });
    }
});







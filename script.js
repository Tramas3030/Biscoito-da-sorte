const btnOpen = document.querySelector("#btnOpen");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);

btnOpen.addEventListener('click', openCookie);
btnReset.addEventListener('click', resetCookie);

function toogleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function openCookie() {
    toogleScreen();

    switch(randomNumber) {
        case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."; break;
        case 1: screen2.querySelector("p").innerText = "Nunca desista de continuar tentando!"; break;
        case 2: screen2.querySelector("p").innerText = "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo."; break;
        case 3: screen2.querySelector("p").innerText = "É em meio a dificuldade que se encontra a oportunidade."; break;
        case 4: screen2.querySelector("p").innerText = "O êxito é ir de frustração a frustração sem perder a animação."; break;
        case 5: screen2.querySelector("p").innerText = "Mesmo que algo pareça difícil, nunca desista antes de tentar."; break;
        case 6: screen2.querySelector("p").innerText = "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso."; break;
        case 7: screen2.querySelector("p").innerText = "Que os dias bons se tornem rotina, e os ruins se tornem raros."; break;
        case 8: screen2.querySelector("p").innerText = "Cada dificuldade ultrapassada te faz mais forte."; break;
        case 9: screen2.querySelector("p").innerText = "Você não vai encontrar ninguém para sorrir por ti, então não deixe de sorrir."; break;
        case 10: screen2.querySelector("p").innerText = "Mesmo que nem todo dia seja bom, há algo de bom todo dia."; break;
    }
}

function resetCookie() {
    randomNumber = Math.round(Math.random() * 10);

    toogleScreen();
}
const x = document.querySelector(".x");
const o = document.querySelector(".o");
const boxes = document.querySelectorAll(".box");
const botoes = document.querySelectorAll("#botoes button");
const msg = document.querySelector("#msg");
const textodamsg = document.querySelector("#msg p");
const jogo = document.querySelector("#jogo")
let segundoJogador; 


let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(){
        let el = checkEl(player1, player2)
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            if(player1 == player2){
            player1++;
            } 
            if(segundoJogador == "player-ia") {
                computerplayer();
                player2++;
            }
            else {
            player2++;
            }
            quemGanhou()
        }
    })
}

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        segundoJogador = this.getAttribute("id");
        
        for(let j = 0; j < botoes.length; j++) {
            botoes[j].style.display = "none";
        }

        setTimeout(function(){ 
            jogo.classList.remove("esconder")
         }, 500)
    })
}

function checkEl(player1, player2) {
    if(player1 == player2) {
        el = x;
    } else {
        el = o;
    } 
    return el
}

function quemGanhou() {
    let b1 = document.getElementById("bloco-1")
    let b2 = document.getElementById("bloco-2")
    let b3 = document.getElementById("bloco-3")
    let b4 = document.getElementById("bloco-4")
    let b5 = document.getElementById("bloco-5")
    let b6 = document.getElementById("bloco-6")
    let b7 = document.getElementById("bloco-7")
    let b8 = document.getElementById("bloco-8")
    let b9 = document.getElementById("bloco-9")
    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            vencedor("x");
        }
            else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
                vencedor("o");
            }
    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            vencedor("x");
        }
            else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
                vencedor("o");
            }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            vencedor("x");
        }
            else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
                vencedor("o");
            }
    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            vencedor("x");
        }
            else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
                vencedor("o");
            }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            vencedor("x");
        }
            else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
                vencedor("o");
            }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            vencedor("x");
        }
            else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
                vencedor("o");
            }
    }
    //diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            vencedor("x");
        }
            else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
                vencedor("o");
            }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            vencedor("x");
        }
            else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
                vencedor("o");
            }
    }
    //velha
    let contador = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++;
        }
    }
    if(contador == 9) {
        vencedor("velha");
    }
}

function vencedor(vencedor) {
    const socrex = document.querySelector("#score-x");
    const socreo = document.querySelector("#score-o");
    if(vencedor == "x") {
        socrex.textContent = parseInt(socrex.textContent) + 1;
        textodamsg.innerHTML = "O jogador 1 venceu!";
        msg.classList.remove("esconder");
    } else if(vencedor == "o") {
        socreo.textContent = parseInt(socreo.textContent) + 1;
        textodamsg.innerHTML = "O jogador 2 venceu!";
        msg.classList.remove("esconder");
    } else {
        textodamsg.innerHTML = "Deu velha!";
        msg.classList.remove("esconder");
    }
    
    setTimeout(() => { msg.classList.add("esconder") }, 2000)
    
    player1 = 0; player2 = 0;
    
    let removerbox = document.querySelectorAll(".box div");
    
    for(let i = 0; i < removerbox.length; i++) {
        removerbox[i].parentNode.removeChild(removerbox[i])
    }
}

function computerplayer() {
    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for(let i = 0; i < boxes.length; i++){

        let numAleatorio = Math.floor(Math.random() * 5);
        
        if(boxes[i].childNodes[0] == undefined){
            if(numAleatorio <= 1){
                //aumenta a aleatoriedade dos quadrados a serem preenchidos, o valor <= 1 é mais improvável, dessa forma a lógica vai rodando os quadrados vazios até o numAleatorio conseguir <=1
                boxes[i].appendChild(cloneO);
                contador++;
                break
            }
        }
        else {
            preenchido++;
        }
    }

    if(contador == 0 && preenchido < 9) {
    computerplayer();
    }
}
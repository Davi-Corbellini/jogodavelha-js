var jogadas = 0;


function fazerJogada(div) {
    let divAtual = div;
    let imagem = divAtual.querySelector('img');

    if (jogadas % 2 === 0) {
        imagem.src = "x.png";
    } else {
        imagem.src = "bola.jpg";
    }

    jogadas++;
    divAtual.onclick = null;

    if (jogadas >= 5) {
        var temVencedor = verificarVencedor();
        if (temVencedor) {
            let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            ids.forEach(id => {
                let div = document.getElementById(id.toString());
                if (div) {
                    div.onclick = null;
                }
            });

        }
    }
    console.log(verificarVencedor())
    if (jogadas === 9 && verificarVencedor() == false) {
        const para1 = document.getElementById('p1')
        para1.innerHTML="Empate"
    }

}


function verificarVencedor() {

    const p1 = document.getElementById('p1')
    var vencedor = false;

    const tabuleiro = [
        [document.getElementById('img1'), document.getElementById('img4'), document.getElementById('img7')],
        [document.getElementById('img2'), document.getElementById('img5'), document.getElementById('img8')],
        [document.getElementById('img3'), document.getElementById('img6'), document.getElementById('img9')]
    ];

    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0].src.includes('x.png') && tabuleiro[i][1].src.includes('x.png') && tabuleiro[i][2].src.includes('x.png')) {
            p1.innerHTML = "Jogador X venceu"
            vencedor = true;
            return vencedor;
        }
        else if (tabuleiro[i][0].src.includes('bola.jpg') && tabuleiro[i][1].src.includes('bola.jpg') && tabuleiro[i][2].src.includes('bola.jpg')) {
            p1.innerHTML = "Jogador O venceu"
            vencedor = true;
            return vencedor;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (tabuleiro[0][i].src.includes('x.png') && tabuleiro[1][i].src.includes('x.png') && tabuleiro[2][i].src.includes('x.png')) {
            p1.innerHTML = "Jogador X venceu"
            vencedor = true;
            return vencedor;
        }
        else if (tabuleiro[0][i].src.includes('bola.jpg') && tabuleiro[1][i].src.includes('bola.jpg') && tabuleiro[2][i].src.includes('bola.jpg')) {
            p1.innerHTML = "Jogador O venceu"
            vencedor = true;
            return vencedor;
        }
    }

    if (tabuleiro[0][0].src.includes('x.png') && tabuleiro[1][1].src.includes('x.png') && tabuleiro[2][2].src.includes('x.png')) {
        p1.innerHTML = "Jogador X venceu"
        vencedor = true;
        return vencedor;
    }
    else if (tabuleiro[0][0].src.includes('bola.jpg') && tabuleiro[1][1].src.includes('bola.jpg') && tabuleiro[2][2].src.includes('bola.jpg')) {
        p1.innerHTML = "Jogador O venceu"
        vencedor = true;
        return vencedor;
    }

    else if (tabuleiro[0][2].src.includes('x.png') && tabuleiro[1][1].src.includes('x.png') && tabuleiro[2][0].src.includes('x.png')) {
        p1.innerHTML = "Jogador X venceu";
        vencedor = true;
        return vencedor;
    }
    else if (tabuleiro[0][2].src.includes('bola.jpg') && tabuleiro[1][1].src.includes('bola.jpg') && tabuleiro[2][0].src.includes('bola.jpg')) {
        p1.innerHTML = "Jogador O venceu"
        vencedor = true;
        return vencedor;
    }

    else {
        return false;
    }

}

function reiniciar() {
    jogadas = 0;
    let ids = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"]
    const imgs = document.querySelectorAll('img')
    imgs.forEach(img => {

        for (let j = 0; j <= ids.length; j++) {
            if (img.id === ids[j]) {
                img.src = "";
            }
        }

        let divIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        divIds.forEach(id => {
            let div = document.getElementById(id.toString());
            if (div) {
                div.onclick = function () {
                    fazerJogada(this);
                };
            }
        });

    });
    let p1 = document.getElementById('p1')
    p1.innerHTML = "";
}


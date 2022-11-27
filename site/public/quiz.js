var soma = []
var totalPontos = 0
var idUsuario = sessionStorage.ID_USUARIO
var fkAlbum = 0


function iniciar() {
    fase1.style.display = "block"
    fase0.style.display = "none"
}

function responder1() {

    var opcoes = document.getElementsByName("option");
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {

            soma.push(Number((opcoes[i]).value))
        }
        opcoes[i].checked = false
    }

    if (soma[0] == undefined) {
        alert('Insira uma opção')
    } else {
        fase2.style.display = "block"
        fase1.style.display = "none"
    }

}

function responder2() {

    var opcoes = document.getElementsByName("option");
    console.log(opcoes)
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {

            soma.push(Number((opcoes[i]).value))
        }
        opcoes[i].checked = false 
    }

    if (soma[1] == undefined) {
        alert('Insira uma opção')
    } else {
        fase3.style.display = "block"
        fase2.style.display = "none"
    }

}

function responder3() {
    var opcoes = document.getElementsByName("option");
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {

            soma.push(Number((opcoes[i]).value))
        }
        opcoes[i].checked = false
    }

    if (soma[2] == undefined) {
        alert('Insira uma opção')
    } else {
        fase4.style.display = "block"
        fase3.style.display = "none"
    }

}

function responder4() {
    var opcoes = document.getElementsByName("option");
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {

            soma.push(Number((opcoes[i]).value))
        }
        opcoes[i].checked = false
    }

    if (soma[3] == undefined) {
        alert('Insira uma opção')
    } else {
        fase5.style.display = "block"
        fase4.style.display = "none"
    }

}

function responder5() {
    
    var opcoes = document.getElementsByName("option");
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {

            soma.push(Number((opcoes[i]).value))
        }
        opcoes[i].checked = false
    }

    if (soma[4] == undefined) {
        alert('Insira uma opção')
    } else {
        fase11.style.display = "block"
        fase5.style.display = "none"
    }

    for (let index = 0; index < soma.length; index++) {
        totalPontos += soma[index]
        console.log(totalPontos)
    }

    if (totalPontos == 5) {
        // Taylor Swift
        fkAlbum = 1
    } else if (totalPontos == 6) {
        // Fearless
        fkAlbum = 2
    } else if (totalPontos == 7) {
        // Speak Now
        fkAlbum = 3
    } else if (totalPontos == 8 || totalPontos == 9) {
        // RED
        fkAlbum = 4
    } else if (totalPontos == 10 || totalPontos == 11) {
        // 1989
        fkAlbum = 5
    } else if (totalPontos == 12 || totalPontos == 13) {
        // Reputation
        fkAlbum = 6
    } else if (totalPontos == 14 || totalPontos == 15) {
        // Lover
        fkAlbum = 7
    } else if (totalPontos == 16 || totalPontos == 17) {
        // Folklore
        fkAlbum = 8
    } else if (totalPontos == 18) {
        // Evermore
        fkAlbum = 9
    } else if (totalPontos == 19 || totalPontos == 20) {
        // Midnights
        fkAlbum = 10
    }
    // alert(fkAlbum)
    fetch("/usuarios/inserir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            totalPontosServer: totalPontos,
            usuarioServer: idUsuario,
            fkAlbumServer: fkAlbum
            
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

// coloquei a função resultado aqui no then pq o then e quando ele terminar a "ação" fetch
            resultado() 
            console.log(resposta)

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
    });

  
}
    

function resultado() {


    fetch(`/usuarios/resultado/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                // aqui estou setando a imagem da capa do album em que o usuario tirar de acordo com a resposta do meu back end que está la no banco.
                img_resultado.src=resposta[0].foto
                id_nome_album.innerHTML=resposta[0].nomeAlbum
                id_single.innerHTML=resposta[0].nome
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });



}


function mostrar() {
    window.location.href = "./grafico.html"
}

function voltar() {
    window.location.href = "indexLogin.html"
}





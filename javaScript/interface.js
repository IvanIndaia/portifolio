let jogador1 = ''
let jogador2 = ''

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    console.log(event.target)
    
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTime == 0) {
                alert(`O Jogo Acabou! \n O vencedor foi o: ${jogador1}`)
                zerarTabuleiro()
            } else {
                alert(`O Jogo Acabou! \n O vencedor foi o: ${jogador2}`)
                zerarTabuleiro()
            }
        }, 10)
    }
    updateSquares(position)

}


function updateSquares(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}   
// Função acima simplificada
//
// function updateSquares() {

//     let squares = document.querySelectorAll(".square")
    
//     squares.forEach((square) => {
//         let position = square.id
//         let symbol = board[position]

//         if(symbol != '') {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }
//     })

// }

function iniciarJogo() {
    
    // let stage = document.getElementsByClassName('.stage')
    // $('.stage')
    // stage.
    let stg  = $('.square')
    stg.css({
        "visibility": "visible"
    })

    zerarTabuleiro()

    jogador1 = prompt("Digite o nome do Jogador 1")
    jogador2 = prompt("Digite o nome do Jogador 2")
    
}

function zerarTabuleiro() {

    let O = document.querySelectorAll(".o")
    let X = document.querySelectorAll(".x")
    
    O.forEach((classO) => { classO.remove()})
    X.forEach((classX) => { classX.remove()})
}
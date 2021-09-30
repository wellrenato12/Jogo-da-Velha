//garantir o documento seja carregado antes de algum evento do usuário(DOMContentLoaded)
document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event){
    // console.log(event.target)

    let square = event.target
    let position = square.id

    if(handleMove(position)){
        setTimeout(() => {
            winner()
        }, 20);
    }
    else if(handleMove(position) && gameDraw){
        setTimeout(() => {
            alert('Deu velha!!!')
        },20)
    }
    updateSquare(position)
}

function winner(){
    if(playerTime == 0){
        alert(`A rodada terminou! O ganhador foi o jogador ${playerTime +1 } - 🔴`)
        addScorePlayer(playerTime)
    }
    else{
        alert(`A rodada terminou! O ganhador foi o jogador ${playerTime +1} - ❌ `)
        addScorePlayer(playerTime)
    }
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

//Função limpar tabuleiro

function cleanBoard(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.innerHTML = ''
    })
}

let startGame = document.getElementById('start-game')

startGame.addEventListener('click', () =>{
    alert('\n                                    REGRA:\n\n Vence o Jogador que ganhar 5 rodadas primeiro.')
})
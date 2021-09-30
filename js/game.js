//tabuleiro
let board = [
    '', '', '', '', '', '', '', '', ''
]
//vez do jogador
let playerTime = 0
//simbolo do jogador
let symbols = [
    'o', 'x'
]
//Iniciar uma variável para guardar os turnos
let turn = 1
//Objeto contendo a pontuação de cada jogador
let scorePlayers = {
    player1: 0,
    player2: 0
}
//jogadas de vitória
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//Inicar o fim do jogo como falso
let gameOver = false

//Inicar o empate como falso
let gameDraw = false

function handleMove(position){
    if(gameOver == true){
        return // Caso o gameOver for verdadeiro, não continuará a função e o clique no board nao surtirá efeito;
    }

    if(gameDraw == true){ //Verificar o empate
        return gameOver = true
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }

    return gameOver
}

function playerTurn(){
    if(turn % 2 == 0){
        playerTime = 0
        turn ++
    }
    else{
        playerTime = 1
        turn ++
    }
}

function isWin(){
    for(let i = 0; i<winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true
        }
        else if(board[0] != '' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != '' && board[8] != ''){
            gameDraw = true //Se todos os boards estiverem preenchidos e não houver um ganhador, o empate retornara como verdadeiro
        }
    }

    return false
}

let scorePlayer1 = document.getElementById('scorePlayer1')
let scorePlayer2 = document.getElementById('scorePlayer2')

scorePlayer1.innerHTML = ` = ${scorePlayers.player1}`
scorePlayer2.innerHTML = ` = ${scorePlayers.player2}`

function addScorePlayer(playerTime){
    if(playerTime == 0){
        scorePlayers.player1 ++
        scorePlayer1.innerHTML = `= ${scorePlayers.player1}`
        if(scorePlayers.player1 == 5){
            alert(`Fim de jogo! O ganhador foi o jogador ${playerTime +1} - 🔴`)
            scorePlayer1.innerHTML = `= ${scorePlayers.player1} <br> <h3>CAMPEÃO!</h3>`
            let isDisable = document.getElementById('btn-reset').disabled = true
            restart = isDisable
        }
    }
    else{
        scorePlayers.player2 ++
        scorePlayer2.innerHTML = `= ${scorePlayers.player2}`
        if(scorePlayers.player2 == 5){
            alert(`Fim de jogo! O ganhador foi o ${playerTime +1} - ❌`)
            scorePlayer2.innerHTML = `= ${scorePlayers.player2} <br> <h3>CAMPEÃO!</h3>`
            let isDisable = document.getElementById('btn-reset').disabled = true
            restart = isDisable
        }
    }
}

function removeScorePlayer(){
    scorePlayers.player1 = 0
    scorePlayer1.innerHTML = `= ${scorePlayers.player1}`
    scorePlayers.player2 = 0
    scorePlayer2.innerHTML = `= ${scorePlayers.player2}`
}

let restart = document.getElementById('btn-reset');

restart.addEventListener('click',playAgain);

function playAgain(){
  
    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
    gameDraw = false
    // playerTime = 0
    playerTurn()
    console.log(turn)
    console.log(playerTime)
    
  
    cleanBoard()
} 

let resetGame = document.getElementById('btn-new-game')

resetGame.addEventListener('click', newGame)

function newGame(){
    playAgain()
    removeScorePlayer()
    let isEnabled = document.getElementById('btn-reset').disabled = false
    restart = isEnabled
}
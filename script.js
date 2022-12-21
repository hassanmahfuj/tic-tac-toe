let flag = 1;

function fill(btnname) {
    let btn = document.getElementById(btnname);
    btn.disabled = true;
    if(flag == 1) {
        btn.value = "X";
        flag = 0;
    } else {
        btn.value = "O";
        flag = 1;
    }
    checkGame();
}

function checkGame() {
    let b1 = document.getElementById("b1").value;
    let b2 = document.getElementById("b2").value;
    let b3 = document.getElementById("b3").value;
    let b4 = document.getElementById("b4").value;
    let b5 = document.getElementById("b5").value;
    let b6 = document.getElementById("b6").value;
    let b7 = document.getElementById("b7").value;
    let b8 = document.getElementById("b8").value;
    let b9 = document.getElementById("b9").value;

    let board = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ]
    
    // check rows
    for(let i=0; i<board.length; i++) {
        if(board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            if(board[i][0] == "X" || board[i][0] == "O") {
                finishGame(board[i][0]);
                return;
            }
        }
    }

    // check columns
    for(let j=0; j<3; j++) {
        if(board[0][j] == board[1][j] && board[0][j] == board[2][j]) {
            if(board[0][j] == "X" || board[0][j] == "O") {
                finishGame(board[0][j]);
                return;
            }
        }
    }

    // check diagonal
    if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        if(board[0][0] == "X" || board[0][0] == "O") {
            finishGame(board[0][0]);
            return;
        }
    }

    if(board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        if(board[0][2] == "X" || board[0][2] == "O") {
            finishGame(board[0][2]);
            return;
        }
    }

    for(let a=0; a<3; a++) {
        for(let b=0; b<3; b++) {
            if(board[a][b] == "") {
                return;
            }
        }
    }
    document.getElementById("winner").innerHTML = "Match Tied";
    
}

function finishGame(winner) {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    console.log(winner);
    document.getElementById("winner").innerHTML = "Player " + winner + " Win";
}

function resetGame() {
    location.reload();
}
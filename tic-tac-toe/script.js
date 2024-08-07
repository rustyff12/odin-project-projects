const gameBoard = document.querySelector(".game-container");

const playerOneScore = document.querySelector("#player-one-name");
const playerTwoScore = document.querySelector("#player-two-name");

const startGame = document.querySelector("#startGame");
const restartGame = document.querySelector("#restartGame");
const test1 = document.querySelector("#grid-1");
const test2 = document.querySelector("#grid-9");

let playerOneTurn = true;
let playerTwoTurn = false;

gameBoard.addEventListener("click", (e) => {
    startGame.classList.add("disabled");
    const disableAll = () => {
        gameBoard.classList.add("disabled");
    };

    const boxId = e.target.id;
    const row = e.target.getAttribute("data-row");
    const col = e.target.getAttribute("data-col");

    const toDisable = document.querySelector(`#${boxId}`);
    toDisable.classList.add("disabled");
    if (playerOneTurn) {
        toDisable.textContent = Player1.icon;
        playerOneTurn = false;
        playerTwoTurn = true;
        GameBoard.gameBoard[row][col] = Player1.icon;
    } else if (playerTwoTurn) {
        toDisable.textContent = Player2.icon;
        playerOneTurn = true;
        playerTwoTurn = false;
        GameBoard.gameBoard[row][col] = Player2.icon;
    }

    const checkState = checkWin(GameBoard.gameBoard);
    const gameState = document.querySelector("#game-state");

    if (checkState === "X") {
        playerOneScore.classList.add("hidden");
        playerTwoScore.classList.add("hidden");
        gameState.classList.remove("hidden");
        gameState.textContent = "Player 1 wins!";
        Player1.score += 1;
        disableAll();
    } else if (checkState === "O") {
        playerOneScore.classList.add("hidden");
        playerTwoScore.classList.add("hidden");
        gameState.classList.remove("hidden");
        gameState.textContent = "Player 1 wins!";
        Player2.score += 1;
        disableAll();
    } else if (checkState === "T") {
        playerOneScore.classList.add("hidden");
        playerTwoScore.classList.add("hidden");
        gameState.classList.remove("hidden");
        gameState.textContent = "Game is tied!";
        disableAll();
    }
});

const GameBoard = {
    gameBoard: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ],
};

const Player1 = {
    name: "",
    icon: "X",
    score: 0,
};

const Player2 = {
    name: "",
    icon: "O",
    score: 0,
};

startGame.addEventListener("click", () => {
    gameBoard.classList.remove("disabled");

    const playerOneTextInput = document.querySelector("#player1").value;
    const playerTwoTextInput = document.querySelector("#player2").value;
    Player1.name = playerOneTextInput;
    Player2.name = playerTwoTextInput;
    playerOneScore.textContent = playerOneTextInput
        ? `${Player1.name}: ${Player1.score}`
        : `Player 1: ${Player1.score}`;
    playerTwoScore.textContent = playerTwoTextInput
        ? `${Player2.name}: ${Player2.score}`
        : `Player 2: ${Player2.score}`;
});

const checkWin = (grid) => {
    const winConditions = [
        // Rows
        [grid[0][0], grid[0][1], grid[0][2]],
        [grid[1][0], grid[1][1], grid[1][2]],
        [grid[2][0], grid[2][1], grid[2][2]],
        // Columns
        [grid[0][0], grid[1][0], grid[2][0]],
        [grid[0][1], grid[1][1], grid[2][1]],
        [grid[0][2], grid[1][2], grid[2][2]],
        // Diagonals
        [grid[0][0], grid[1][1], grid[2][2]],
        [grid[0][2], grid[1][1], grid[2][0]],
    ];

    // Check for win
    for (const condition of winConditions) {
        if (condition.every((cell) => cell === "X")) {
            return "X";
        } else if (condition.every((cell) => cell === "O")) {
            return "O";
        }
    }

    // Check for empty cells
    for (const row of grid) {
        if (row.includes(" ")) {
            return false; // Game is ongoing
        }
    }

    return "T"; // Tie, no empty cells and no winner
};

restartGame.addEventListener("click", () => {
    const playerOneTextInput = document.querySelector("#player1").value;
    const playerTwoTextInput = document.querySelector("#player2").value;
    const gameState = document.querySelector("#game-state");

    playerOneScore.classList.remove("hidden");
    playerTwoScore.classList.remove("hidden");
    gameState.classList.add("hidden");
    gameBoard.classList.remove("disabled");
    startGame.classList.remove("disabled");

    playerOneScore.textContent = playerOneTextInput
        ? `${Player1.name}: ${Player1.score}`
        : `Player 1: ${Player1.score}`;
    playerTwoScore.textContent = playerTwoTextInput
        ? `${Player2.name}: ${Player2.score}`
        : `Player 2: ${Player2.score}`;

    GameBoard.gameBoard = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];

    document.querySelectorAll(".game-box").forEach((element) => {
        element.textContent = "";
        if (element.classList.contains("disabled")) {
            element.classList.remove("disabled");
        }
    });
    playerOneTurn = true;
    playerTwoTurn = false;
});

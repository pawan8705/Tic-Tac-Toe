let btns = document.querySelectorAll(".btn");
let newgame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let slide2 = document.querySelector(".win-container");
let msg = document.querySelector("#winner");
let game = document.querySelector(".gamepart");
let turnO = true;
let winningtable = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let resetgame = () => {
    turnO = true;
    enable();
    slide2.classList.add("hide1");
    game.classList.remove("hide1");
};
let disable = () => {
    for (let box of btns) {
        box.disabled = true;
    }
};
let enable = () => {
    for (let box of btns) {
        box.disabled = false;
        box.innerText = "";
    }
};
btns.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winner();
    });

    let showwinner = (winner) => {
        msg.innerText = `Congratulations ${winner} you won the game`;
        slide2.classList.remove("hide1");
        game.classList.add("hide1");
        disable();
    }
    let winner = () => {
        for (let value of winningtable) {
            let pos1 = btns[value[0]].innerText;
            let pos2 = btns[value[1]].innerText;
            let pos3 = btns[value[2]].innerText;

            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 == pos3) {
                    showwinner(pos1);
                }
            }
        }
    }
});

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
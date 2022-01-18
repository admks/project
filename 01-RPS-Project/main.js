let playerPoint = 0;
let computerPoint = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer i");

let selectionArr = document.querySelectorAll(".selection button"); //
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

let kagit = "fas fa-hand-paper";
let makas = "fas fa-hand-scissors";
let tas = "fas fa-hand-rock";
let ply = player.firstChild.className;
let comp = computer.className;

console.log(selectionArr)

for (let i = 0; i < selectionArr.length; i++) {
    selectionArr[i].onclick = (e) => {
        player.innerHTML = `<i class="${e.target.className}"></i>`
        let arr = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];


        let rndm = Math.floor(Math.random() * arr.length) // 0 , 1 , 2
        computer.className = arr[rndm]

        ply = player.firstChild.className;
        comp = computer.className;
        if (ply === tas && comp === makas) {

            playerPoint++
            console.log("biz")
            // biz kazanıyoruz. 
        } else if((ply === makas && comp === kagit)) {
            playerPoint++
            console.log("biz")
            // biz kazanıyoruz. 
        } else if ((ply === kagit && comp === tas)) {
            playerPoint++
            console.log("biz")
            // biz kazanıyoruz. 
        }else if (ply === makas && comp === tas) {
            computerPoint++
            console.log("pc")
            // computer kazandı.
        } else if (ply === kagit && comp === makas) {
            computerPoint++
            console.log("pc")
            // computer kazandı.
        } else if (ply === tas && comp === kagit){
            computerPoint++
            console.log("pc")
            // computer kazandı.
        }else {
            // berabere
            console.log("berabere")
        }

        playerScore.innerHTML = playerPoint;
        computerScore.innerHTML = computerPoint;
    }
    console.log(player.firstChild.className)

}

// computer1 = () => {
//     let arr = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
//     let rndm = Math.floor(Math.random() * arr.length)
//     computer.className = arr[rndm]
// }

// function compare() {
//     /// player ın firstchild ının className i Kaya ise ve computer ın firstchild ının className i makas ise

// }


// rock.onclick = (e) => {
//     console.log(e.target.className)
//     player.innerHTML = `
//     <i class="${e.target.className}"></i>
//     `
//     computer1()
// }
// paper.onclick = (e) => {
//     console.log(e.target.className)
//     player.innerHTML = `
//     <i class="${e.target.className}"></i>
//     `
//     computer1()
// }
// scissors.onclick = (e) => {
//     console.log(e.target.className)
//     player.innerHTML = `
//     <i class="${e.target.className}"></i>
//     `
//     computer1()
// }
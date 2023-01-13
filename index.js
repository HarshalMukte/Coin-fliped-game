const flipButton = document.querySelector(".flipBtn")
const resetBtn = document.querySelector(".resetBtn")
const coin = document.querySelector(".coin")
const tail = document.querySelector(".tail")
const head = document.querySelector(".head")
const headScoreNumber = document.querySelector(".headScoreNumber")
const tailScoreNumber = document.querySelector(".tailScoreNumber")
let scores = [0,0]

//Functions
const flipCoinFunction = () => {
    const random = Math.round(Math.random())
    coin.classList.add("active")
    flipButton.setAttribute("disabled", "disabled")
    setTimeout(() => {
        coin.classList.remove("active")
        flipButton.removeAttribute("disabled", "disabled")
        if (random === 0) {
            tail.classList.add("inActive")
            head.classList.remove("inActive")
        }else{
            head.classList.add("inActive")
            tail.classList.remove("inActive")
        }
        setScores(random)
    }, 3000);
}

const setScores = (random) => {
    random === 0 ? scores[0] = scores[0] + 1 : scores[1] = scores[1] + 1 
   random === 0 ? headScoreNumber.innerText = scores[0] : tailScoreNumber.innerText = scores[1]
}

//Events Listeners
flipButton.addEventListener("click", () => {
    flipCoinFunction()
})

resetBtn.addEventListener("click", () => {
    scores[0] = 0
    scores[1] = 0
    headScoreNumber.innerText = scores[0]
    tailScoreNumber.innerText = scores[1]
})


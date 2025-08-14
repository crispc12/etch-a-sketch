const container = document.querySelector("#container")
// const tama = 100;
const btn = document.querySelector("#btn1");

function drawGrid(tama){
    for (let i = 0; i < tama*tama; i++) {
        let square = document.createElement("div")
        square.setAttribute("class", "square")
        square.style.width = "calc(100vmin / " + tama + ")"
        square.style.height = "calc(100vmin / " + tama + ")"
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blueviolet";
        })
        container.appendChild(square)
    }
}
btn.addEventListener("click", () => {
    container.removeChild(square);
    let tama = prompt("¿De qué dimensión quieres el grid?")
    // container.removeChild(square)
    drawGrid(tama);
})
const incrementBtn = document.getElementById("increment-btn")
const countDisplayText = document.getElementById("count-display")

let currentCount = 0

incrementBtn.addEventListener('click', () => {
    currentCount ++
    countDisplayText.innerHTML = currentCount
})
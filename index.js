let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalTime = 0
let count = 0

function increment() {
    count += 5
    countEl.textContent = `${count}'`
}

function save() {
    totalTime += count;
    saveEl.textContent = `Total input time: ${totalTime}'`
    count = 0
    countEl.textContent = `${count}'`
}

function reset() {
    count = 0
    totalTime = 0
    saveEl.textContent = "Total input time: "
}

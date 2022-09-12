let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalTime = 0
let count = 0

// Increment the count by 5 and update the counter on screen
function increment() {
    count += 5
    countEl.textContent = `${count}'`
}

// Save the current count, add it to the total time, display the total timem and reset the counter.
function save() {
    totalTime += count;
    saveEl.textContent = `Total input time: ${totalTime}'`
    count = 0
    countEl.textContent = `${count}'`
}

// Reset both the counter and total time.
function reset() {
    count = 0
    totalTime = 0
    saveEl.textContent = "Total input time: "
}

let totalEl = document.getElementById("total-el");
let netEl = document.getElementById("net-el");
let countEl = document.getElementById("count-el");
let timesSavedEl = document.getElementById("times-saved-el");
let timesSaved = 0;
let totalTime = 0;
let netTime = 0;
let count = 0;

// Increment counter by 5 minutes and update HTML element
function increment() {
    count += 5;
    countEl.textContent = `${count}'`;
}

// Decrement counter by 5 minutes and update HTML element
function decrement() {
    count -= 5;
    countEl.textContent = `${count}'`;
}

// Save counter to total time, if the counter is above 0. Also updates the relevant HTML elements
function save() {
    if (count > 0) {
        totalTime += count;
        timesSaved += 1;
        netTime = Math.floor(totalTime * 0.67);
        totalEl.textContent = `Total input time: ${totalTime}'`;
        netEl.textContent = `Net input time: ${netTime}'`;
        timesSavedEl.textContent = `Times saved: ${timesSaved}`;
        count = 0;
        countEl.textContent = `${count}'`;
    }
}

//Reset all counters and HTML elements
function reset() {
    count = 0;
    totalTime = 0;
    timesSaved = 0;
    countEl.textContent = `${count}'`;
    totalEl.textContent = "Total input time: ";
    netEl.textContent = "Net input time: ";
    timesSavedEl.textContent = `Times saved: `;
}

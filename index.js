let totalEl = document.getElementById("total-el");
let netEl = document.getElementById("net-el");
let countEl = document.getElementById("count-el");
let totalTime = 0;
let netTime = 0;
let count = 0;

function increment() {
    count += 5;
    countEl.textContent = `${count}'`;
}

function save() {
    totalTime += count;
    netTime = Math.floor(totalTime * 0.67);
    totalEl.textContent = `Total input time: ${totalTime}'`;
    netEl.textContent = `Net input time: ${netTime}'`;
    count = 0;
    countEl.textContent = `${count}'`;
}

function reset() {
    count = 0;
    totalTime = 0;
    totalEl.textContent = "Total input time: ";
    netEl.textContent = "Net input time: ";
}

// Set variables to target specific HTML elements on the page
let totalEl = document.getElementById("total-el");
let netEl = document.getElementById("net-el");
let countEl = document.getElementById("count-el");
let timesSavedEl = document.getElementById("times-saved-el");

// Set empty counters for different functionality
let timesSaved = 0; // Counts how many times the SAVE button was clicked
let totalTime = 0; // Counts how much total time was saved
let netTime = 0; // Counts how much net time was saved 
let netTimeRatio = 0.67; // Sets ratio between total time and net time
let count = 0; // The live counter which is used to save the total time

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
    
    // Check if counter is above 0 before saving, to avoid getting a negative total input time
    if (count > 0) {
        totalTime += count;
        timesSaved += 1;
        netTime = Math.floor(totalTime * netTimeRatio);
        totalEl.textContent = `Total input time: ${totalTime}'`;
        netEl.textContent = `Net input time: ${netTime}'`;
        timesSavedEl.textContent = `Times saved: ${timesSaved}`;
        count = 0;
        countEl.textContent = `${count}'`;
    } 
    // Reset counter if it's negative, but don't save it.
    else {
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

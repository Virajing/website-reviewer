function showDateAndTime() {
    let datePara = document.getElementById('date-time');
    let date = new Date();
    datePara.textContent = date.toLocaleString();
}

document.addEventListener("DOMContentLoaded", showDateAndTime);

function getRandomMarks() {
    let random = Math.floor(Math.random() * 11); // Generates a random integer between 0 and 10
    console.log(random);
    document.getElementById('mark').textContent = `Marks for reviewing website (out of 10): ${random}`;
    let appreciationMessage = '';
    if (random >= 8) {
        appreciationMessage = 'Great Job!';
    } else if (random >= 5) {
        appreciationMessage = 'Good Effort!';
    } else {
        appreciationMessage = 'Keep Trying!';
    }
    document.getElementById('appreciation').textContent = appreciationMessage;
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    getRandomMarks();
}

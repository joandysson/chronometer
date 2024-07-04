let timerInterval;
let timeInSeconds = 0;

const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');

startButton.addEventListener('click', () => {
    if (startButton.textContent === 'Iniciar') {
        startTimer();
    } else {
        stopTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

timerDisplay.addEventListener('input', (e) => {
    const [minutes, seconds] = e.target.textContent.split(':').map(Number);
    if (!isNaN(minutes) && !isNaN(seconds)) {
        timeInSeconds = minutes * 60 + seconds;
    }
});

function startTimer() {
    startButton.textContent = 'Parar';
    timerInterval = setInterval(() => {
        timeInSeconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.textContent = 'Iniciar';
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateDisplay();
}

function updateDisplay() {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const seconds = String(timeInSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Inicializa o display
updateDisplay();

const timer = document.getElementById('timer');
const count = function () {
    if (timer.textContent >= 1) {
        timer.textContent --;
    } else if (timer.textContent === '0') {
        alert("Вы победили в конкурсе!")
    }
}

setInterval(count,1000);


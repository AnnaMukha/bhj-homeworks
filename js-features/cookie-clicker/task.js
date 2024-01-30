const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function () {
	const currentClickTime = new Date();
	clickerCounter.textContent++;

	if (clickerCounter.textContent % 2 === 0) {
		cookie.width = 200;
	} else {
		cookie.width = 150;
	}
}
function toogleMode() {
    pauseBtn.classList.toggle("pause");
    let pauseBtn = document.getElementById("togglePause");

    if (pauseBtn.classList.contains("pause")) {
        pauseBtn.innerText = "pause";
    } else {
        pauseBtn.innerText = "play-arrow";
    }
}
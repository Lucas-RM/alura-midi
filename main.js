const keyList = document.querySelectorAll('.tecla');
const audioList = document.querySelectorAll('.sounds');

keyList.forEach((tecla, i) => {
    
    const sound = audioList[i];
    tecla.addEventListener("click", function (event) {
        sound.play();
        console.log('O elemento clicado foi o ' + this.innerHTML);
    });
    
    /*
    tecla.onclick = function () {
        sound.play();
        console.log(tecla);
    };
    */
});
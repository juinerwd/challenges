const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const addText = 'We Love Programming!';

let idx = 1;
let speed = 300 / speedEl.value;
/* console.log(speed); */

/* setInterval(writeText, 100); */
writeText();

function writeText(){
    textEl.innerText = addText.slice(0, idx);

    idx++

    if(idx > addText.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}


speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

/* }
for(const empty of empties) {
    
} */

function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(e) {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    /* if (e.target.className == "empty") {
        e.target.style.background = "#fff";
    } */
}

function dragEnter(e) {
    e.preventDefault();
    if (e.target.className == "empty") {
        e.target.style.background = "#2E2E2B";
        e.target.style.border = "3px #fff solid";
        e.target.style.borderStyle = "dashed";
    }
}

function dragLeave(e) {
    this.className = 'empty';
    if (e.target.className == "empty") {
        e.target.style.background = "#fff";
        e.target.style.border = "3px #000 solid";
    }
}

function dragDrop(e) {
    this.className = 'empty';
    this.append(fill);
    if (e.target.className == "empty") {
        e.target.style.border = "3px #000 solid";
        /* e.target.style.borderStyle = "solid"; */
    }
    console.log('Esta es');
}
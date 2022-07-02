let buttons = document.getElementsByClassName('button');
let mySlides = document.getElementsByClassName('mySlides');
let page = Math.ceil(mySlides.length / 4);
let l = 0;
let movePer = 275;
let maxMove = 825;

let righ_mover = () => {
    l += movePer;
    if (mySlides.length == 0) {
        l = 0;
    }
    for (const i of mySlides) {
        if (l > maxMove) {
            l -= movePer;
        }
        i.style.left = '-' + l + 'px';
    }
    dot_mover(l/movePer);
}

let left_mover = () => {
    l -= movePer;
    if (l <= 0) {
        l = 0;
    }
    for (const i of mySlides) {
        if (page > 1) {
            i.style.left = '-' + l + 'px';
        }
    }
    dot_mover(l/movePer);
}

buttons[1].onclick = () => { righ_mover(); };
buttons[0].onclick = () => { left_mover(); };

// hanle dot move

let dots = document.getElementsByClassName('dot');

let dot_mover = (index) => {
    for (const dot of dots) {
        dot.classList.remove("active");
    }
    dots[index].classList.add("active");
    l = movePer * index;
    if (l > maxMove) {
        l = maxMove;
    }
    for (const i of mySlides) {
        i.style.left = '-' + l + 'px';
    }
}


dots[0].onclick = () => {
    dot_mover(0);
}
dots[1].onclick = () => {
    dot_mover(1);
};
dots[2].onclick = () => {
    dot_mover(2);
};
dots[3].onclick = () => {
    dot_mover(3);
};

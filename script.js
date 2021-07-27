const step = document.querySelector(".progress");
const circle = document.querySelectorAll(".circle");
const prevButon = document.querySelector(".btn-1")
const nextButon = document.querySelector(".btn-2")

let activeCircle = 1;

nextButon.addEventListener("click", next);
function next() {
    activeCircle++;

    if (activeCircle > circle.length) {
        activeCircle = circle.length;
    }

    refresh();
}

prevButon.addEventListener("click", prev);
function prev() {
    activeCircle--;

    if (activeCircle < 1) {
        activeCircle = 1;
    }

    refresh();
}

function refresh() {
    circle.forEach((circ, idx) => {
        if (idx < activeCircle) {
            circ.classList.add("active");
        } else {
            circ.classList.remove("active")
        }
    });

    const actives = document.querySelectorAll(".active");

    step.style.width = (actives.length - 1) / (circle.length - 1) * 100 + "%";
    if (activeCircle === 1) {
        prevButon.disabled = true
    
    } else if (activeCircle === circle.length) {
        nextButon.disabled = true
    } else {
        prevButon.disabled = false;
        nextButon.disabled = false;
    }
 
}



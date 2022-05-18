let allBox = document.querySelectorAll(".box");
let answerBox = document.querySelectorAll(".inline");

let draggedElm;

allBox.forEach(function(box) {



    box.addEventListener("dragstart", function(e) {
        e.target.style.opacity = "0.4";

        draggedElm = e.target;

        console.log(this.innerHTML);
    })
    box.addEventListener("dragend", function(e) {
        e.target.style.opacity = "1.0";
    })
})

answerBox.forEach(function(elm) {

    elm.addEventListener("dragover", function(e) {
        console.log("over");
        event.preventDefault();
    })
    elm.addEventListener("drop", function(e) {
        console.log("dropped");
        if (draggedElm.dataset.set === e.target.parentElement.innerText) {
            console.log("match");
            e.target.prepend(draggedElm);
            draggedElm.style.opacity = "1.0";

        } else {
            draggedElm.style.opacity = "1.0";
        }
        return false;
    })

})
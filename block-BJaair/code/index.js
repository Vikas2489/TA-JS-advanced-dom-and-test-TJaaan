let form = document.querySelector("form");
let main = document.querySelector("main");


let cardsData = JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;

    cardsData.push({ title, category });
    localStorage.setItem("cards", JSON.stringify(cardsData));
    createUI(cardsData, main);
});



function handleEdit(event, info, id, label) {
    let elm = event.target;
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        }
    });
    input.addEventListener("blur", (e) => {
        let updatedValue = e.target.value;
        cardsData[id][label] = updatedValue;
        createUI();
        localStorage.setItem("cards", JSON.stringify(cardsData));
    })

    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
    input.focus();
}

function createUI(data = cardsData, root = main) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    cardsData.forEach((cardInfo, index) => {
        let div = document.createElement("div");
        div.classList.add("card");
        let p = document.createElement("p");
        p.addEventListener("dblclick", (event) => { handleEdit(event, cardInfo.title, index, "title") });
        p.innerText = cardInfo.title;
        let h2 = document.createElement("h2");
        h2.addEventListener("dblclick", (event) => { handleEdit(event, cardInfo.category, index, "category") });
        h2.innerText = cardInfo.category;
        div.append(p, h2);
        fragment.appendChild(div);
    })
    root.append(fragment);
}



createUI(cardsData, main);





































































// My Method but i failed to update the local Storage, after editing.


// let form = document.querySelector("form");
// let main = document.querySelector("main");


// function createCards(title, category) {
//     let div = document.createElement("div");
//     div.classList.add("card");
//     let p = document.createElement("p")
//     p.innerText = title;
//     let h2 = document.createElement("h2");
//     h2.innerText = category;
//     div.append(p, h2);
//     main.append(div);
// }


// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let title = form.elements.title.value;
//     let category = form.elements.category.value;
//     if (title !== "" && category !== "") {
//         localStorage.setItem(title, category);
//         createCards(title, category);


//         // Adding event listeners on User Card
//         let p = document.querySelectorAll("p");
//         let h2 = document.querySelectorAll("h2");
//         let cards = document.querySelectorAll(".card");

//         let updatedValue1, updatedValue2;


//         p.forEach(function(elm) {
//             elm.addEventListener("dblclick", () => { handleInput(elm) })
//         })

//         h2.forEach(function(elm) {
//             elm.addEventListener("dblclick", () => { handleInput(elm) })
//         })
//         form.elements.title.value = "";
//         form.elements.category.value = "";


//     } else if (title === "") {
//         alert("Title Cannot be empty!");
//     } else if (category === "") {
//         alert('Category cannot be empty');
//     }
// })



// function handleInput(elm) {
//     let input = document.createElement("input");
//     input.type = "text";
//     input.value = elm.innerText;
//     elm.replaceWith(input);


//     input.focus();
//     input.addEventListener("blur", () => {
//         updatedValue2 = input.value;
//         elm.innerText = updatedValue2;
//         input.replaceWith(elm);

//         let updateLocal = elm.innerText;
//         console.log(updateLocal, localStorage);
//     })

//     input.addEventListener("keydown", (event) => {
//         if (event.keyCode === 13) {
//             input.blur();
//         }
//     })

// }



// // LocalStorage
// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     createCards(key, value);
// }
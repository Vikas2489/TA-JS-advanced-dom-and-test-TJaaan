let form = document.querySelector("form");
let main = document.querySelector("main");


function createCards(title, category) {
    let div = document.createElement("div");
    div.classList.add("card");
    let p = document.createElement("p")
    p.innerText = title;
    let h2 = document.createElement("h2");
    h2.innerText = category;
    div.append(p, h2);
    main.append(div);
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = form.elements.title.value;
    let category = form.elements.category.value;
    if (title !== "" && category !== "") {
        localStorage.setItem(title, category);
        createCards(title, category);




        // Adding event listeners User Card
        let p = document.querySelectorAll("p");
        let h2 = document.querySelectorAll("h2");
        let cards = document.querySelectorAll(".card");

        let updatedValue1, updatedValue2;

        p.forEach(function(elm) {
            elm.addEventListener("dblclick", () => {
                let input = document.createElement("input");
                input.type = "text";
                input.value = elm.innerText;

                elm.replaceWith(input);

                input.focus();
                input.addEventListener("blur", () => {
                    updatedValue1 = input.value;
                    elm.innerText = updatedValue1;
                    input.replaceWith(elm);
                    localStorage.setItem(updatedValue1, );
                })
            })
        })


        h2.forEach(function(elm) {
            elm.addEventListener("dblclick", () => {
                let input = document.createElement("input");
                input.type = "text";
                input.value = elm.innerText;

                elm.replaceWith(input);


                input.focus();
                input.addEventListener("blur", () => {
                    updatedValue2 = input.value;
                    elm.innerText = updatedValue2;
                    input.replaceWith(elm);

                })

            })
        })






    } else if (title === "") {
        alert("Title Cannot be empty!");
    } else if (category === "") {
        alert('Category cannot be empty');
    }
})

LocalStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    createCards(key, value);
}




// localStorage.setItem(updatedValue1, updatedValue2);

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     createCards(key, value);
// }
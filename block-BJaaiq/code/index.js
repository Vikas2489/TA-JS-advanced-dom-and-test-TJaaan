let ul = document.querySelector("ul");



window.addEventListener("scroll", () => {
    while (true) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;


        document.body.append(quotes.forEach(function(elm) {
            let li = document.createElement("li");
            li.innerText = elm.quoteText;
            let span = document.createElement("span");
            span.innerText = elm.quoteAuthor;
            li.append(span);
            ul.append(li);
        }))
    }
})






// function populate() {
//     while (true) {
//         let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//         if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
//         document.body.insertAdjacentHTML("beforeend", );
//     }
// }

// window.addEventListener('scroll', populate);

// populate();
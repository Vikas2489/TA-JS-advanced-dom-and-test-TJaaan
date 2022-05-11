let ul = document.querySelector("ul");

let max = 3;
let index = 0;

function addQuotes() {
    for (let i = 0; i < max; i++) {
        let li = document.createElement("li");
        let blockQuote = document.createElement("blockquote");
        blockQuote.innerText = quotes[index].quoteText;
        let cite = document.createElement("cite");
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockQuote, cite);
        ul.append(li);
        index++;
    }
}

console.log(max);

document.addEventListener("scroll", () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    if (clientHeight + scrollTop >= scrollHeight && index < quotes.length) {
        addQuotes();
    }
})

window.addEventListener("DOMContentLoaded", () => {
    alert('The content is loaded!');
    addQuotes();
})
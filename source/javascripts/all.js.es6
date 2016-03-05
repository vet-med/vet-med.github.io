document.addEventListener('DOMContentLoaded', function() {
    let quotes = document.getElementsByClassName("quotes")

    let quotes1 = quotes[0]
    let idxs = Array(quotes1.children.length).fill().map((x, i) => i) // [0,1,2,3,4...13]

    let idx1 = idxs[Math.floor(Math.random() * idxs.length)]
    quotes1.children[idx1].className = "quote-visible"
    idxs.splice(idx1, 1)

    let quotes2 = quotes[1]
    let idx2 = idxs[Math.floor(Math.random() * idxs.length)]
    quotes2.children[idx2].className = "quote-visible"
}, false);

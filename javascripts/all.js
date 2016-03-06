"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var quotes = document.getElementsByClassName("quotes");

    var quotes1 = quotes[0];
    var idxs = Array(quotes1.children.length).fill().map(function (x, i) {
        return i;
    }); // [0,1,2,3,4...13]

    var idx1 = idxs[Math.floor(Math.random() * idxs.length)];
    quotes1.children[idx1].className = "quote-visible";
    idxs.splice(idx1, 1);

    var quotes2 = quotes[1];
    var idx2 = idxs[Math.floor(Math.random() * idxs.length)];
    quotes2.children[idx2].className = "quote-visible";
}, false);
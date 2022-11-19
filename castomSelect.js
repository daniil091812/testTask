import {CreateSelector} from "./CreateSelector.js";

let leftContainer = document.querySelector(".left_container")
let selects = document.querySelectorAll("select");
let a = new CreateSelector(123, "ffkfk").create();
let a2 = new CreateSelector(123, "ffkfk").create();
let arr = [];
arr.push(a);
arr.push(a2);
let i = 0;
console.log(a);
selects.forEach(el => {
    el.replaceWith(arr[i])
    i++
});

// selects[0].append(a)

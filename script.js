//your JS code here. If required.
let select = document.querySelector("#colorSelect");
let button = document.querySelector("form input");

button.addEventListener("click", (e) => {
    e.preventDefault();
    select.remove(select.selectedIndex);
})
// const inbe = document.getElementById("inbt");


const btn = document.querySelector(".btn3");

const ul = document.getElementById("rootmap");

const inputs = document.querySelector(".inbt");



// console.log(btn, ul);

window.onload = function () {
    inputs.focus();
};

btn.onclick = function () {
    if (inputs.value === "") {

        console.log("kkkkkkkkkk");
    } else {
        const li = document.createElement("li");

        li.className = "item";

        const links = document.createElement("a");
        links.className = "spanbtn";

        const trr = document.createTextNode("X");



        const texttext = document.createTextNode(inputs.value);

        links.appendChild(trr);
        li.appendChild(texttext);
        li.appendChild(links);
        ul.appendChild(li);
        inputs.value = "";

    }
};

document.addEventListener('click', function (e) {
    if (e.target.className === "spanbtn") {
        // console.log('ok ok ok');

        e.target.parentElement.remove();

    }
});
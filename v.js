const inbe = document.getElementById("inbt");

const btn = document.querySelector(".btn3");

const ul = document.getElementById("rootmap");

const inputs = document.querySelector(".inbt");

const inputs2 = document.querySelector(".btn2");

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

document.addEventListener("click", function (e) {
  if (e.target.className === "spanbtn") {
    // console.log('ok ok ok');

    e.target.parentElement.remove();
  }
});

//remove all Tasks

inputs2.onclick = function (e) {
  ul.innerHTML = "";
};

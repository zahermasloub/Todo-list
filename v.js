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

    // const trr = document.;

    const texttext = document.createTextNode(inputs.value);

    links.innerHTML = '<i class="fas fa-trash-alt"></i>';
    li.appendChild(texttext);
    li.appendChild(links);
    ul.appendChild(li);
    inputs.value = "";
    inputs.focus();
  }
};

document.addEventListener("click", function (e) {
  if (e.target.className === "fas fa-trash-alt") {
    // console.log('ok ok ok');

    e.target.parentElement.parentElement.remove();
    console.log(e.target);
  }
});

//remove all Tasks

inputs2.onclick = function (e) {
  ul.innerHTML = "";
};

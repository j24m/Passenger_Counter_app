let increment = document.querySelector("#increment-btn");
let counter = document.querySelector("#count");
let btnSave = document.querySelector("#save-btn");
let saveEl = document.querySelector("#save-el");
let count = 0;
increment.addEventListener("click", incrementHandler);

function incrementHandler() {
  count += 1;
  counter.innerText = count;
}

btnSave.addEventListener("click", save);

function save() {
  let countStr = ` ${count} - `;
  saveEl.innerText += countStr;
  counter.innerText = 0;
  count = 0;
}

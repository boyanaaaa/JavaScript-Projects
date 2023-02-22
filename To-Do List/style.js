const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");



formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})


function toDoList(){
    let newTask = inputEl.value;

    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<i class="fa-solid fa-circle-check">`
    liEl.appendChild(checkBtn);

    const trashBtn = document.createElement("div");
    trashBtn.innerHTML =  `<i class="fa-solid fa-trash">`;
    liEl.appendChild(trashBtn);

    checkBtn.addEventListener('click', () => {
        liEl.classList.toggle("checked");
        updateLocalStorage()
    })

    trashBtn.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage()
    })

    updateLocalStorage()
}


// to save data on localStorage, but the code below is not enought
function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    let list = []
    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list));
}

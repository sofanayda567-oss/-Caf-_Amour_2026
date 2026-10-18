const burger = document.querySelector(".burger");
const nav = document.querySelector("#main-nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


const form = document.querySelector("#reviewForm");
const list = document.querySelector("#reviewsList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const review = document.querySelector("#review").value.trim();

    if (!name || !review) {
        alert("Заполни все поля!");
        return;
    }

    const item = document.createElement("p");
    item.textContent = name + ": " + review;

    list.appendChild(item);
    form.reset();

    alert("Спасибо за отзыв!");
});


document.querySelectorAll("main section").forEach((section) => {
    section.classList.add("reveal");
});

console.log("Café Amour працює!");
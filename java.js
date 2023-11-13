const rating_cards = document.querySelectorAll(".ratings span");
const botão = document.querySelector(".botão");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(" .rating_section");
const agradecimento = document.querySelector(".agradecimento");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
           active.classList.remove ("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})
botão.addEventListener("click", (e) =>{
    if (rate) {
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        agradecimento.classList.remove("hidden");
    }
})
const btnEl = document.querySelector(".btn");

const closeIconEl = document.querySelector(".close-icon");
const popupContainerEl = document.querySelector(".popup-container")

const containerEl = document.querySelector(".container")

btnEl.addEventListener("click", ()=> {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=> {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");

});
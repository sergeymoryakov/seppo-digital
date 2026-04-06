const BURGER_OPENED_CLASSNAME = "menu-burger-open";
const BURGER_BTN_OPENED_CLASSNAME = "btn-menu-burger-open";
// const BODY_FIXED_CLASSNAME_2 = "body-fixed";
const POPUP_OPENED_CLASSNAME = "popup-order-open";
const BODY_FIXED_CLASSNAME = "body-fixed";

// const bodyNode2 = document.querySelector("body");
const burgerNode = document.querySelector(".js-menu-burger");
const burgerBtnNode = document.querySelector(".js-btn-menu-burger");
const burgerContentNode = document.querySelector(".js-menu-burger-content");

const bodyNode = document.querySelector("body");
const popupNode = document.querySelector(".js-popup");
const btnOpenNode = document.querySelector(".js-btn-order");
const popupContentNode = document.querySelector(".js-popup-order-content");
const btnCloseNode = document.querySelector(".js-btn-order-close");

burgerBtnNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(burgerContentNode);

    if (isClickOutsideContent) {
        toggleBurger();
    }
});

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    // bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(popupContentNode);

    if (isClickOutsideContent) {
        togglePopup();
    }
});

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

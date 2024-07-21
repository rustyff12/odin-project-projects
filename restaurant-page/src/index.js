import pageLoad from "./pageLoad";
import "./styles.css";
const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

function init() {
    // initial page load
    pageLoad(contentDiv, "home");

    // Event listeners
    homeButton.addEventListener("click", () => pageLoad(contentDiv, "home"));
    menuButton.addEventListener("click", () => pageLoad(contentDiv, "menu"));
    aboutButton.addEventListener("click", () => pageLoad(contentDiv, "about"));
}
init();

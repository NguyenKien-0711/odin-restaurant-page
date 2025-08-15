import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";
const homeBtn = document.getElementById("home-page");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
const displayController = () => {
    homeBtn.addEventListener("click", () => {
        homePage();
    })
    menuBtn.addEventListener("click", () => {
        menuPage();
    })
    aboutBtn.addEventListener("click", () => {
        aboutPage();
    })
}
export { homePage, displayController };
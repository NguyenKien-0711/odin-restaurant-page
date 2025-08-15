import { mainContent } from "./homePage";
import { resetPage } from "./resetPage";
import phoPic from "./assets/pho.jpg"
const menuPage = () => {
    resetPage();

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "THIS IS OUR MENU!";
    mainContent.appendChild(menuTitle);

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");
    mainContent.appendChild(menuSection);

    const menuItem_first = document.createElement("div");
    menuItem_first.classList.add("menu-item");
    menuSection.appendChild(menuItem_first);

    const image_first = document.createElement("img");
    image_first.classList.add("image");
    image_first.src = phoPic;
    menuItem_first.appendChild(image_first);

    const menuItem_second = document.createElement("div");
    menuItem_second.classList.add("menu-item");
    menuSection.appendChild(menuItem_second);

    const image_second = document.createElement("img");
    image_second.classList.add("image");
    image_second.src = phoPic;
    menuItem_second.appendChild(image_second);

    const menuItem_third = document.createElement("div");
    menuItem_third.classList.add("menu-item");
    menuSection.appendChild(menuItem_third);

    const image_third = document.createElement("img");
    image_third.classList.add("image");
    image_third.src = phoPic;
    menuItem_third.appendChild(image_third);

    const menuItem_fourth = document.createElement("div");
    menuItem_fourth.classList.add("menu-item");
    menuSection.appendChild(menuItem_fourth);

    const image_fourth = document.createElement("img");
    image_fourth.classList.add("image");
    image_fourth.src = phoPic;
    menuItem_fourth.appendChild(image_fourth);
}

export { menuPage }
import { mainContent } from "./homePage";
import { resetPage } from "./resetPage";
const aboutPage = () => {
    resetPage();
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "ABOUT OUR RESTAURANT!";
    mainContent.appendChild(aboutTitle);

    const aboutContent = document.createElement("p");
    aboutContent.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.
    Perspiciatis eius asperiores vero possimus et voluptates, commodi itaque animi. 
    Quos, laudantium velit sunt blanditiis quod aut temporibus assumenda praesentium autem vel.`

    aboutContent.classList.add("welcome-content");
    mainContent.appendChild(aboutContent);
}
export { aboutPage };
import { resetPage } from "./resetPage";

const mainContent = document.querySelector(".content");
const homePage = () => {
    resetPage();
    const welcomeTitle = document.createElement("h1");
    welcomeTitle.textContent = "WELCOME TO OUR RESTAURANT!";
    mainContent.appendChild(welcomeTitle);

    const welcomeContent = document.createElement("p");
    welcomeContent.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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

    welcomeContent.classList.add("welcome-content");
    mainContent.appendChild(welcomeContent);
}
export { mainContent, homePage };
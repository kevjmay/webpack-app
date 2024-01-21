import createHome from "./home-page";
import createMenu from "./menu";
import createContact from "./contact";

const switchTab = () => {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');

    homeButton.addEventListener('click', () => {
        clearTabContent();
        createHome();
    });

    menuButton.addEventListener('click', () => {
        clearTabContent();
        createMenu();
    });

    contactButton.addEventListener('click', () => {
        clearTabContent();
        createContact();
    });
}

const clearTabContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('#pageContent');
    content.removeChild(pageContent);
}

export default switchTab;

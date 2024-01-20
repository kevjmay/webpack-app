const createNav = () => {

    const content = document.querySelector('#content');
    content.style.backgroundImage = "url('../src/assests/hero-image.jpg')";
    const navBar = document.createElement('nav');
    navBar.classList.add('navBar');
    navBar.innerHTML = `
        <ul>
            <li id="home">Home</li>
            <li id="menu">Menu</li>
            <li id="contact">Contact</li>
        </ul>
        `;
    content.appendChild(navBar);
};

export default createNav;
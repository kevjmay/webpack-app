const createMenu = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    pageContent.classList.add('welcome-content');

    const menuHeader = document.createElement('H1');
    menuHeader.textContent = 'Menu';
    pageContent.appendChild(menuHeader);

    content.appendChild(pageContent);
    initializeMenu(pageContent);
}

const initializeMenu = (pageContent) => {
    const menu = [
        {
            name: "Espresso",
            description: "Strong black shot of coffee",
            price: "£2.60"
        },
        {
            name: "Americano",
            description: "Double shots espresso with hot water",
            price: "£2.90"
        },
        {
            name: "Cappuccino",
            description: "Equal parts of Espresso, steamed and milk froth",
            price: "£3.30"
        },
        {
            name: "Chai Latte",
            description: "Blend of black tea and spices such as cinnamon, cardamom, ginger, cloves and black peppercorns",
            price: "£3.50"
        },
        {
            name: "Dity Chai Latte",
            description: "A Chai Latte mixed with a shot of Espresso",
            price: "£3.80"
        },
        {
            name: " English Breakfast Tea",
            description: "Traditional mug of English Breakfast Tea",
            price: "£2.20"
        },
    ];

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('grid');
        menuItem.innerHTML = `
            <p>${item.name}</p>
            <p>${item.description}</p>
            <p>${item.price}</p>
            `;

            pageContent.appendChild(menuItem);
    });
}

export default createMenu;
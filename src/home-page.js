const createHome = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('welcome-content');
    pageContent.innerHTML = `
    
        <h1>The Garden Cafe</h1>
        <p>Enjoy a wide selection of ethically sourced coffee from our the around!</p>
        <div>
            <ul class="opening-hours"> 
                <h2>Opening Hours:</h2>
                <br>
                <li>Monday: Closed</li>
                <li>Tuesday: Closed</li>
                <li>Wednesday: 09:00 - 15:00</li>
                <li>Thursday: 09:00 - 15:00</li>
                <li>Friday: 09:00 - 15:00</li>
                <li>Saturday: 08:00 - 15:00</li>
                <li>Sunday: 08:00 - 13:00</li>
            </ul>
        </div>
        <p><strong>Address: </strong>Floral Clock, Palmeira Avenue, Hove, BN3 3AB</p>
        
        `;
    
    content.appendChild(pageContent);

};

export default createHome;
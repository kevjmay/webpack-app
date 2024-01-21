const createContact = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    pageContent.classList.add('welcome-content');
    pageContent.innerHTML = `
    
        <h1>The Garden Cafe</h1>
        <div><strong>Floral Clock, Palmeira Avenue, Hove, BN3 3AB</strong></div>
        <div>Contact Us:</div>
        <div>Telophone: 01273243243</div>
        <div>Mobile: 07956575995</div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2650564418877!2d-0.16503068236838578!3d50.82625416193308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585408d85144b%3A0x54291f6538c1761e!2sThe%20Flower%20Stand!5e0!3m2!1sen!2slt!4v1705839386295!5m2!1sen!2slt" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        content.appendChild(pageContent);
}

export default createContact;
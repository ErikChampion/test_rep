document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `Thank you, ${name}! Your message has been received.`;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
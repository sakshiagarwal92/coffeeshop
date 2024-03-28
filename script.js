document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent successfully!');
    this.reset();
});

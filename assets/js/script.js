function sendMail(event) {
    
    event.preventDefault(); // Prevent the form from submitting traditionally
    var submitButton = document.getElementById("submit");

     // Simple JavaScript validation
     var name = document.getElementById("contact-name").value.trim();
     var email = document.getElementById("contact-email").value.trim();
     var subject = document.getElementById("subject").value.trim();
     var message = document.getElementById("contact-message").value.trim();
 
     if (!name || !email || !subject || !message) {
         alert('Please fill in all required fields.');
         return; // Stop the form submission
     }
    var params = {
        from_name: document.getElementById("contact-name").value,
        phone_number: document.getElementById("contact-phone").value,
        from_email: document.getElementById("contact-email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("contact-message").value
    };

    emailjs.send("service_7ijnibq", "template_i2ytvv8", params)
        .then(function() {
            alert('Your message has been sent!');
            document.getElementById("contact-form").reset();
            submitButton.disabled = false;

        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
            document.getElementById("contact-form").reset();
            submitButton.disabled = false;

        });
}

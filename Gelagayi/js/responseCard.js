function showResponse(event, actionType, formId, responseCardId) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form and response card elements
    const form = document.getElementById(formId);
    const responseCard = document.getElementById(responseCardId);
    
    // Set message based on action type
    let message;
    switch(actionType) {
        case 'Sign Up':
            message = "Thank you for signing up! Please check your email for verification.";
            break;
        case 'Log In':
            message = "Welcome back! You are now logged in.";
            break;
        case 'Book Service':
            message = "Your service has been booked! Confirmation will be sent shortly.";
            break;
        case 'Contact Us':
            message = "Your message has been sent! We'll get back to you soon.";
            break;
    }

    // Set the message in the response card
    responseCard.innerText = message;

    // Hide the form and show the response card
    form.style.display = "none"; // Hide the form
    responseCard.classList.add('show'); // Add class for animation
    responseCard.style.display = "flex"; // Show the card
}

// Function to return to the form
function returnToForm(formId, responseCardId) {
    const form = document.getElementById(formId);
    const responseCard = document.getElementById(responseCardId);
    
    // Show the form and hide the response card
    form.style.display = "block"; // Show the form
    responseCard.style.display = "none"; // Hide the card
    responseCard.classList.remove('show'); // Remove the animation class
}
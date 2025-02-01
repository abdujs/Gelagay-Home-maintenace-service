// Purpose: To show a response card after a form submission and return to the form

function showResponse(event, actionType, formId, responseCardId) {
    event.preventDefault(); 

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
    form.style.display = "none"; 
    responseCard.classList.add('show'); 
    responseCard.style.display = "flex"; 
}

// Function to return to the form
function returnToForm(formId, responseCardId) {
    const form = document.getElementById(formId);
    const responseCard = document.getElementById(responseCardId);
    
    // Show the form and hide the response card
    form.style.display = "block"; 
    responseCard.style.display = "none"; 
    responseCard.classList.remove('show'); 
}
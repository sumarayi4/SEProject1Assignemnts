// Function to change text when buttons are clicked
function changeText(text) {
    const textElement = document.getElementById("changeableText");
    textElement.innerText = text;
}

// Function to validate input field
function validateInput() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("errorMessage");

    if (inputField.value !== "correct") {
        errorMessage.innerText = "Invalid input. Please enter 'correct'.";
    } else {
        errorMessage.innerText = "";
    }
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

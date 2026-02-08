// 1. Select the elements
const button = document.getElementById('actionBtn');
const heading = document.getElementById('main-heading');
const input = document.getElementById('userInput');
const messagePara = document.getElementById('message');

// 2. Define the Event Handler function
function handleInteraction() {
    const textValue = input.value;
    
    if (textValue.trim() === "") {
        messagePara.textContent = "Please enter some text first!";
        messagePara.style.color = "red";
    } else {
        // Change heading content dynamically
        heading.textContent = `Welcome, ${textValue}!`;
        messagePara.textContent = "Success! The DOM has been updated.";
        messagePara.style.color = "green";
    }
}

// 3. Attach the Event Listener
button.addEventListener('click', handleInteraction);
function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const currentAnswer = answers[index];

    // Toggle visibility of the answer
    if (currentAnswer.style.display === "block") {
        currentAnswer.style.display = "none";
    } else {
        currentAnswer.style.display = "block";
    }
}

// Predefined questions and answers
const faq = {};

// Function to display the message in the chat log
function displayMessage(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;  // Auto-scroll to the latest message
}

// Function to check if the user's input matches any predefined question
function getBotReply(userInput) {
    const lowerCaseInput = userInput.trim().toLowerCase();
    for (let question in faq) {
        if (question.toLowerCase().includes(lowerCaseInput)) {
            return faq[question];
        }
    }
    return "Sorry, I couldn't find an answer to your question. Please try again.";
}

// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Display user message
    displayMessage(userInput, 'user');

    // Get bot response and display it
    const botReply = getBotReply(userInput);
    displayMessage(botReply, 'bot');

    // Clear input field
    document.getElementById('user-input').value = '';
}

// Optional: Trigger sendMessage on pressing Enter key
function checkInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
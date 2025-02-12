// Select the necessary elements
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

// Function to send user message and bot reply
function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== "") {
        // Add user message to chat
        chatBox.innerHTML += `<p class="user-message">${userMessage}</p>`;
        userInput.value = ""; // Clear input field

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate bot's response after a short delay
        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            chatBox.innerHTML += `<p class="bot-message">${botReply}</p>`;

            // Scroll to bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

// Function to generate bot's response
function getBotReply(userMessage) {
    const message = userMessage.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! How can I help you with your health today?";
    } else if (message.includes("exercise") || message.includes("workout")) {
        return "Exercise is key to staying healthy! Try some simple yoga or stretching.";
    } else if (message.includes("diet") || message.includes("food")) {
        return "A balanced diet is important! Make sure to include fruits, veggies, and protein in your meals.";
    } else {
        return "I’m not sure about that. Could you ask something else?";
    }
}

// Event listener for send button
sendButton.addEventListener("click", sendMessage);

// Allow 'Enter' key to send message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

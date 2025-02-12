// Select the necessary elements
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

// Function to send the user message and bot reply
function sendMessage() {
    const userMessage = userInput.value.trim(); // Get user message

    if (userMessage !== "") {
        // Add user message to the chat box (right side, blue bubble)
        chatBox.innerHTML += `<p class="user-message">${userMessage}</p>`;
        userInput.value = ""; // Clear the input field

        // Scroll chat box to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate bot's response after a short delay
        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            chatBox.innerHTML += `<p class="bot-message">${botReply}</p>`;

            // Scroll chat box to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // 1 second delay for bot reply
    }
}

// Function to generate bot's response based on user input
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

// Add event listener to the send button
sendButton.addEventListener("click", sendMessage);

// Optional: Allow pressing 'Enter' to send the message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const chatBox = document.getElementById("chat-box");

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage(userMessage, "user");
            userInput.value = "";

            setTimeout(() => {
                const botReply = getBotReply(userMessage);
                addMessage(botReply, "bot");
            }, 1000);
        }
    }

    function addMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotReply(userMessage) {
        const msg = userMessage.toLowerCase();
        if (msg.includes("hi") || msg.includes("hello")) return "💖 Hello! How can I assist you today?";
        if (msg.includes("exercise")) return "🏋️‍♀️ Exercise is great! Try some yoga or a quick workout.";
        if (msg.includes("diet")) return "🥗 A balanced diet is key! Eat more greens & proteins.";
        return "🤔 I'm still learning! Ask me another health-related question.";
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", event => {
        if (event.key === "Enter") sendMessage();
    });
});

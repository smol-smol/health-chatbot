document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    // 🔥 Predefined chatbot responses
    const responses = {
        "hello": "Hello! 😊 How can I assist you today?",
        "hi": "Hey there! How are you feeling today? 💖",
        "who are you": "I'm HerMonic, your friendly health assistant! 🌸 Here to guide you on wellness, diet, and self-care!",
        "what's your name": "I’m HerMonic! 💕 Your personal health and wellness companion!",
        "diet": "A balanced diet is key! 🥗 Include fruits, veggies, and protein in your meals.",
        "exercise": "Staying active is important! 🏋️‍♀️ Even a 30-minute walk can make a difference.",
        "water": "Hydration is essential! 💧 Try to drink at least 8 glasses of water daily.",
        "sleep": "Good sleep = Good health! 😴 Aim for 7-9 hours per night for a fresh mind and body.",
        "stress": "Feeling stressed? 🌿 Try deep breathing, yoga, or listening to calming music.",
        "thank you": "You're welcome! Stay happy and healthy! 💖",
        "bye": "Goodbye! Take care and prioritize your wellness! 🌸"
    };

    // ✨ Function to add messages to the chat
    function addMessage(sender, message) {
        let msgDiv = document.createElement("div");
        msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        
        // Typing effect for bot
        if (sender === "bot") {
            msgDiv.innerHTML = "Typing...";
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;

            setTimeout(() => {
                msgDiv.innerHTML = message;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);
        } else {
            msgDiv.innerHTML = message;
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // 🚀 Function to handle user input
    function handleUserInput() {
        let input = userInput.value.trim().toLowerCase();
        if (input === "") return;

        addMessage("user", input);
        userInput.value = "";

        // ✨ Find bot response
        let botResponse = responses[input] || "I'm not sure about that 🤔, but I can help with health-related queries!";
        setTimeout(() => addMessage("bot", botResponse), 1000);
    }

    // 📩 Send message on button click
    sendButton.addEventListener("click", handleUserInput);

    // ⏎ Send message on Enter key
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    // 👋 HerMonic’s Introduction
    setTimeout(() => addMessage("bot", "💖 Hi there! I’m **HerMonic**, your personal health assistant! 🌸 I'm here to help you with wellness, self-care, and healthy habits. How can I assist you today?"), 500);
});

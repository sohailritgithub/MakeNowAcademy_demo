// Chatbox state
let chatOpen = false;
let chatEntries = [];

// Toggle chatbox
function toggleChatbox() {
  chatOpen = !chatOpen;
  const chatbox = document.getElementById("chatbox");
  if (chatOpen) {
    chatbox.style.display = "flex";
  } else {
    chatbox.style.display = "none";
  }
}

// Close chatbox
function closeChatbox() {
  chatOpen = false;
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = "none";
}

// Handle chat input
function handleChatInput(input) {
  if (input === "Are you a beginner?") {
    chatEntries = [
      ...chatEntries,
      {
        id: chatEntries.length + 1,
        type: "user",
        message: "Yes, I am a beginner",
      },
      {
        id: chatEntries.length + 2,
        type: "bot",
        message: "Okay, I will suggest you some courses",
      },
    ];
  } else if (input === "Looking for a job?") {
    chatEntries = [
      ...chatEntries,
      {
        id: chatEntries.length + 1,
        type: "user",
        message: "Yes, I am looking for a job",
      },
      {
        id: chatEntries.length + 2,
        type: "bot",
        message: "Okay, I will suggest you some courses, that will help you",
      },
    ];
  }
  renderChat();
}

// Render chat messages
function renderChat() {
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";

  // Loop through chatEntries and create HTML for each

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatEntries.forEach((entry) => {
    const chatMessage = document.createElement("div");
    const span = document.createElement("span");

    chatMessage.classList.add("chat-message");
    if (entry.type === "user") {
      chatMessage.classList.add("user");
    } else {
      chatMessage.classList.add("bot");
    }
    span.innerHTML = entry.message;
    chatMessage.appendChild(span);
    chatMessages.appendChild(chatMessage);
  });
}

// Page loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatboxClose = document.getElementById("chatbox-close");

  // Attach event listeners
  chatbotBtn.addEventListener("click", toggleChatbox);
  chatboxClose.addEventListener("click", closeChatbox);

  // Initial render
  renderChat();
});

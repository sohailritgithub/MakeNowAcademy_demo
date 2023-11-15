let chatOpen = false;
let chatEntries = [];
let firstRender = true;

function toggleChatbox() {
  chatOpen = !chatOpen;
  const chatbox = document.getElementById("chatbox");
  if (chatOpen) {
    chatbox.style.display = "flex";
  } else {
    chatbox.style.display = "none";
  }
}

function closeChatbox() {
  chatOpen = false;
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = "none";
}

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

function renderChat() {
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";

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

document.addEventListener("DOMContentLoaded", () => {
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatboxClose = document.getElementById("chatbox-close");

  chatbotBtn.addEventListener("click", toggleChatbox);
  chatboxClose.addEventListener("click", closeChatbox);

  renderChat();
});

const animateContent = document.querySelector("#animate-content");
const container = document.querySelector("#container");

function checkScroll() {
  console.log(firstRender);
  if (window.pageYOffset > container.offsetTop - 500) {
    animateContent.setAttribute("data-animate", "true");
    if (firstRender) {
      chatbox.style.display = "flex";
      firstRender = false;
    }
  } else {
    animateContent.setAttribute("data-animate", "false");
  }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

checkScroll();

const scriptTag = document.getElementById("chatbot");

// Read the data attributes
const adminId = scriptTag.getAttribute("data-admin-id");
const token = scriptTag.getAttribute("api-key");

let userBubbleColor;

// Reset body styles
document.body.style.margin = '0';
document.body.style.fontFamily = 'sans-serif';
document.body.style.backgroundColor = '#f1f1f1';
document.body.style.height = '100vh';
document.body.style.width = '100%';

// === TOGGLE BUTTON === //
const toggleBtn = document.createElement('button');
toggleBtn.id = 'toggleBtn';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.width = '60px';
toggleBtn.style.height = '60px';
toggleBtn.style.borderRadius = '40%';
toggleBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.display = 'flex';
toggleBtn.style.alignItems = 'center';
toggleBtn.style.justifyContent = 'center';
toggleBtn.style.transition = 'all 0.3s ease';
toggleBtn.style.transform = 'scale(1)';

// Hover animation for toggle button
toggleBtn.addEventListener('mouseenter', () => {
  toggleBtn.style.transform = 'scale(1.1)';
  toggleBtn.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
});

toggleBtn.addEventListener('mouseleave', () => {
  toggleBtn.style.transform = 'scale(1)';
  toggleBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
});

const icon = document.createElement('span');
icon.textContent = '💬';
icon.style.fontSize = '24px';
icon.style.color = 'white';
icon.style.transition = 'transform 0.1s ease';
toggleBtn.appendChild(icon);
document.body.appendChild(toggleBtn);

// === CONTAINER === //
const container = document.createElement('div');
container.style.width = '330px';
container.style.height = '450px'; 
container.style.borderRadius = '4px';
container.style.border = '1px solid #ffffffff';
container.style.overflow = 'hidden';
container.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.backgroundColor = '#fff';
container.style.position = 'fixed';
container.style.bottom = '90px';
container.style.right = '30px';
container.style.zIndex = '2000';
container.style.display = 'none';
container.style.opacity = '0';
container.style.transform = 'translateY(20px) scale(0.95)';
container.style.transition = 'all 0.3s ease';
document.body.appendChild(container);

// === PAGES === //
// Chat Page
const chatPage = document.createElement('div');
chatPage.id = 'chatPage';
chatPage.style.display = 'flex';
chatPage.style.flexDirection = 'column';
chatPage.style.flex = '1';
chatPage.style.height = '385px';
chatPage.style.opacity = '1';
chatPage.style.transition = 'opacity 0.3s ease';

// Email Page
const emailPage = document.createElement('div');
emailPage.style.display = 'none';
emailPage.style.flexDirection = 'column';
emailPage.style.height = '385px';
emailPage.style.width = '330px';
emailPage.style.padding = '16px';
emailPage.style.color = 'white';
emailPage.style.opacity = '0';
emailPage.style.transition = 'opacity 0.3s ease';
emailPage.innerHTML = `
  <h3 style="margin-top: 0; color: #146e20ff;">Contact us via Email</h3>
  <div style="margin-bottom: 12px;">
    <label style="display: block; margin-bottom: 4px; color: #146e20ff; font-size: 14px;">Your Email</label>
    <input type="email" style="width: 80%; padding: 8px 12px; border-radius: 8px; border: none; background: #d2d2d8ff; color: #333; transition: all 0.2s ease;">
  </div>
  <div style="margin-bottom: 12px;">
    <label style="display: block; color: #146e20ff; margin-bottom: 4px; font-size: 14px;">Message</label>
    <textarea style="width: 80%; height: 120px; padding: 8px 12px; border-radius: 8px; border: none; background: #d2d2d8ff; color: #333; transition: all 0.2s ease; resize: vertical;"></textarea>
  </div>
  <button style="background: #015F63; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; transition: all 0.2s ease; font-weight: 500;">Send Email</button>
`;

// WhatsApp Page
const whatsappPage = document.createElement('div');
whatsappPage.style.display = 'none';
whatsappPage.style.flexDirection = 'column';
whatsappPage.style.height = '385px';
whatsappPage.style.padding = '16px';
whatsappPage.style.color = 'white';
whatsappPage.style.textAlign = 'center';
whatsappPage.style.opacity = '0';
whatsappPage.style.transition = 'opacity 0.3s ease';
whatsappPage.innerHTML = `
  <div style="margin-top: 40px; margin-bottom: 20px; transition: transform 0.3s ease;">
    <span style="font-size: 48px;">💬</span>
  </div>
  <h3 style="margin-bottom: 8px; transition: color 0.2s ease;">Chat with us on WhatsApp</h3>
  <p style="font-size: 14px; color: #aaa; margin-bottom: 24px; transition: color 0.2s ease;">We'll connect you directly to our support team</p>
  <button style="background: #25D366; color: white; border: none; padding: 12px 24px; border-radius: 24px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center; margin: 0 auto; transition: all 0.2s ease;">
    <span style="font-size: 20px; margin-right: 8px;">📱</span> Open WhatsApp
  </button>
`;

// === HEADER === //
const header = document.createElement('div');
header.id = "header";
header.style.color = 'white';
header.style.padding = '12px';
header.style.display = 'flex';
header.style.height = '40px';
header.style.flexDirection = 'column';
header.style.gap = '6px';
header.style.transition = 'background-color 0.3s ease';

const titleRow = document.createElement('div');
titleRow.style.display = 'flex';
titleRow.style.alignItems = 'center';

const logo = document.createElement('img');
logo.id = 'logo';
logo.style.width = '40px';
logo.style.height = '40px';
logo.style.borderRadius = '50%';
logo.style.objectFit = 'cover';
logo.style.marginRight = '10px';
logo.style.transition = 'all 0.3s ease';
titleRow.appendChild(logo);

const titleStatusWrapper = document.createElement('div');
titleStatusWrapper.style.display = 'grid';
titleStatusWrapper.style.gridTemplateColumns = '1fr';
titleStatusWrapper.style.flexDirection = 'row';
titleStatusWrapper.style.alignItems = 'center';
titleStatusWrapper.style.gap = '8px';

const title = document.createElement('div');
title.id = 'chatTitle';
title.style.fontWeight = 'bold';
title.style.fontSize = '16px';
title.style.transition = 'color 0.3s ease';

const status = document.createElement('div');
status.innerHTML = '<span style="display:inline-block;width:10px;height:10px;background:#0f0;border-radius:50%;margin-right:4px;transition:background 0.3s ease;"></span>Online';
status.style.fontSize = '12px';
status.style.color = '#e0e0e0';
status.style.transition = 'color 0.3s ease';

titleStatusWrapper.appendChild(title);
titleStatusWrapper.appendChild(status);
titleRow.appendChild(titleStatusWrapper);
header.appendChild(titleRow);
chatPage.appendChild(header);

// === CHAT BODY === //
const chatBody = document.createElement('div');
chatBody.id = 'chatBody';
chatBody.style.flex = '1';
chatBody.style.height = '320px';
chatBody.style.padding = '16px';
chatBody.style.overflowY = 'auto';
chatBody.style.display = 'flex';
chatBody.style.flexDirection = 'column';
chatBody.style.transition = 'background-color 0.3s ease';

// Initial bot message
const botBubbleMsg = document.createElement('div');
botBubbleMsg.id = 'botBubbleMsg';
botBubbleMsg.textContent = "Hey! 😊 I'm here to chat about how AI can help your business grow. What's on your mind?";
botBubbleMsg.style.padding = '12px 16px';
botBubbleMsg.style.color = 'white';
botBubbleMsg.style.borderRadius = '20px';
botBubbleMsg.style.maxWidth = '80%';
botBubbleMsg.style.alignSelf = 'flex-start';
botBubbleMsg.style.margin = '10px 0';
botBubbleMsg.style.fontSize = '11px';
botBubbleMsg.style.opacity = '0';
botBubbleMsg.style.transform = 'translateY(10px)';
botBubbleMsg.style.transition = 'all 0.3s ease';
chatBody.appendChild(botBubbleMsg);

chatPage.appendChild(chatBody);

// === INPUT AREA === //
const inputArea = document.createElement('div');
inputArea.id = 'inputArea';
inputArea.style.display = 'flex';
inputArea.style.height = '40px';
inputArea.style.alignItems = 'center';
inputArea.style.padding = '10px';
// inputArea.style.borderTop = '1px solid #333';
inputArea.style.background = '#1C1C1E';
inputArea.style.gap = '8px';
inputArea.style.transition = 'background-color 0.3s ease';

const inputWrapper = document.createElement('div');
inputWrapper.style.display = 'flex';
inputWrapper.style.flex = '1';
inputWrapper.style.alignItems = 'center';
inputWrapper.style.background = '#2C2C2E';
inputWrapper.style.borderRadius = '20px';
inputWrapper.style.padding = '4px 8px';
inputWrapper.style.transition = 'all 0.2s ease';

const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.placeholder = 'Type your Message';
inputBox.style.flex = '1';
inputBox.style.background = 'transparent';
inputBox.style.border = 'none';
inputBox.style.color = 'white';
inputBox.style.fontSize = '11px';
inputBox.style.outline = 'none';
inputBox.style.transition = 'all 0.2s ease';

// Focus effects for input
inputBox.addEventListener('focus', () => {
  inputWrapper.style.boxShadow = '0 0 0 2px rgba(1, 95, 99, 0.3)';
  inputWrapper.style.transform = 'scale(1.02)';
});

inputBox.addEventListener('blur', () => {
  inputWrapper.style.boxShadow = 'none';
  inputWrapper.style.transform = 'scale(1)';
});

const micIcon = document.createElement('span');
micIcon.textContent = '🎤';
micIcon.style.cursor = 'pointer';
micIcon.style.marginLeft = '8px';
micIcon.style.fontSize = '18px';
micIcon.style.transition = 'transform 0.2s ease';

micIcon.addEventListener('mouseenter', () => {
  micIcon.style.transform = 'scale(1.2)';
});

micIcon.addEventListener('mouseleave', () => {
  micIcon.style.transform = 'scale(1)';
});

inputWrapper.appendChild(inputBox);
inputWrapper.appendChild(micIcon);
inputArea.appendChild(inputWrapper);

// Send Button
const sendBtn = document.createElement('button');
sendBtn.id = 'sendBtn';
sendBtn.innerHTML = '<img src="/send.png" alt="Send" style="width: 20px; height: 20px; transition: transform 0.2s ease;">';
sendBtn.style.border = 'none';
sendBtn.style.borderRadius = '12px';
sendBtn.style.padding = '8px';
sendBtn.style.cursor = 'pointer';
sendBtn.style.color = 'white';
sendBtn.style.fontSize = '14px';
sendBtn.style.transition = 'all 0.2s ease';

// Hover effect for send button
sendBtn.addEventListener('mouseenter', () => {
  sendBtn.style.transform = 'scale(1.1)';
  sendBtn.querySelector('img').style.transform = 'translateX(2px)';
});

sendBtn.addEventListener('mouseleave', () => {
  sendBtn.style.transform = 'scale(1)';
  sendBtn.querySelector('img').style.transform = 'translateX(0)';
});

inputArea.appendChild(sendBtn);
chatPage.appendChild(inputArea);

// Add pages to container
container.appendChild(chatPage);
container.appendChild(emailPage);
container.appendChild(whatsappPage);

// === FOOTER TABS === //
const footer = document.createElement('div');
footer.id = 'footer';
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around';
footer.style.height = '50px';
footer.style.background = '#111';
footer.style.borderTop = '1px solid #333';
footer.style.transition = 'background-color 0.3s ease';

const tabs = [
  { icon: '🤖', label: 'Chatbot', page: 'chat' },
  { icon: '📨', label: 'Email', page: 'email' },
  { icon: '📱', label: 'WhatsApp', page: 'whatsapp' }
];

tabs.forEach(tab => {
  const tabEl = document.createElement('div');
  tabEl.style.display = 'flex';
  tabEl.style.flexDirection = 'column';
  tabEl.style.alignItems = 'center';
  tabEl.style.justifyContent = 'center';
  tabEl.style.color = '#bbb';
  tabEl.style.fontSize = '12px';
  tabEl.style.cursor = 'pointer';
  tabEl.style.padding = '12px 12px';
  tabEl.style.transition = 'all 0.3s ease';
  tabEl.style.borderTop = '2px solid transparent';
  tabEl.style.flex = '1';
  tabEl.style.fontFamily = 'sans-serif';

  const icon = document.createElement('span');
  icon.textContent = tab.icon;
  icon.style.fontSize = '20px';
  icon.style.marginBottom = '4px';
  icon.style.transition = 'transform 0.2s ease';

  const label = document.createElement('span');
  label.textContent = tab.label;
  label.style.fontWeight = '300';
  label.style.transition = 'color 0.2s ease';

  tabEl.appendChild(icon);
  tabEl.appendChild(label);

  // Hover effects for tabs
  tabEl.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    label.style.color = '#01B4B8';
  });

  tabEl.addEventListener('mouseleave', () => {
    if (!tabEl.classList.contains('active')) {
      icon.style.transform = 'scale(1)';
      label.style.color = '#bbb';
    }
  });

  tabEl.addEventListener('click', () => {
    // Hide all pages with fade out
    [chatPage, emailPage, whatsappPage].forEach(page => {
      page.style.opacity = '0';
      setTimeout(() => {
        page.style.display = 'none';
      }, 150);
    });

    // Show selected page with fade in
    setTimeout(() => {
      let selectedPage;
      if (tab.page === 'chat') selectedPage = chatPage;
      if (tab.page === 'email') selectedPage = emailPage;
      if (tab.page === 'whatsapp') selectedPage = whatsappPage;
      
      selectedPage.style.display = 'flex';
      setTimeout(() => {
        selectedPage.style.opacity = '1';
      }, 10);
    }, 150);

    // Update active tab styling
    document.querySelectorAll('.footer-tab').forEach(t => {
      t.style.color = '#bbb';
      t.style.borderTop = '2px solid transparent';
      t.style.fontWeight = 'normal';
      t.style.backgroundColor = 'transparent';
      t.classList.remove('active');
    });

    tabEl.style.color = '#01B4B8';
    tabEl.style.fontWeight = 'bold';
    tabEl.style.borderTop = '2px solid #01B4B8';
    tabEl.style.backgroundColor = '#1a1a1a';
    tabEl.classList.add('active');
  });

  tabEl.classList.add('footer-tab');
  footer.appendChild(tabEl);
});

// Set first tab as active by default
if (footer.firstChild) {
  footer.firstChild.style.color = '#01B4B8';
  footer.firstChild.style.fontWeight = 'bold';
  footer.firstChild.style.borderTop = '2px solid #01B4B8';
  footer.firstChild.style.backgroundColor = '#1a1a1a';
  footer.firstChild.classList.add('active');
}

container.appendChild(footer);

// === POWERED BY === //
const powered = document.createElement('div');
powered.id = 'powered';
powered.innerHTML = 'Powered by : <strong>Chat Supplies</strong>';
powered.style.fontSize = '10px';
powered.style.height = '10px';
powered.style.color = '#015F63';
powered.style.background = '#ffffffff';
powered.style.textAlign = 'center';
powered.style.padding = '4px 0';
powered.style.transition = 'color 0.3s ease';
container.appendChild(powered);

function showTypingIndicator() {
  const typingBubble = document.createElement('div');
  typingBubble.className = 'typing-indicator';
  typingBubble.style.backgroundColor = window.bot_bubble_color || '#015F63';
  typingBubble.style.color = 'white';
  typingBubble.style.padding = '12px 16px';
  typingBubble.style.borderRadius = '20px';
  typingBubble.style.maxWidth = '70%';
  typingBubble.style.alignSelf = 'flex-start';
  typingBubble.style.margin = '10px 0';
  typingBubble.style.fontSize = '14px';
  typingBubble.style.opacity = '0';
  typingBubble.style.transform = 'translateY(10px)';
  typingBubble.style.transition = 'all 0.3s ease';
  typingBubble.style.display = 'flex';
  typingBubble.style.gap = '4px';

  // Create 3 animated dots
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('span');
    dot.style.width = '6px';
    dot.style.height = '6px';
    dot.style.background = 'white';
    dot.style.borderRadius = '50%';
    dot.style.display = 'inline-block';
    dot.style.animation = `blink 1.4s infinite both`;
    dot.style.animationDelay = `${i * 0.2}s`; // staggered animation
    typingBubble.appendChild(dot);
  }

  chatBody.appendChild(typingBubble);

  // Animate in
  setTimeout(() => {
    typingBubble.style.opacity = '1';
    typingBubble.style.transform = 'translateY(0)';
  }, 10);

  chatBody.scrollTop = chatBody.scrollHeight;
  return typingBubble;
}

// Add CSS animation globally
const style = document.createElement('style');
style.textContent = `
@keyframes blink {
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
}
`;
document.head.appendChild(style);

// === FUNCTIONALITY === //
function sendMessage() {
  const text = inputBox.value.trim();
  if (!text) return;

  // User bubble with animation
  const userMsgBubble = document.createElement('div');
  userMsgBubble.className = 'userMsgBubble';
  userMsgBubble.textContent = text;
  userMsgBubble.style.backgroundColor = window.user_bubble_color || '#e2e8f0';
  console.log(window.user_bubble_color);
  
  userMsgBubble.style.padding = '12px 16px';
  userMsgBubble.style.borderRadius = '20px';
  userMsgBubble.style.maxWidth = '70%';
  userMsgBubble.style.alignSelf = 'flex-end';
  userMsgBubble.style.margin = '5px 0';
  userMsgBubble.style.fontSize = '11px';
  userMsgBubble.style.opacity = '0';
  userMsgBubble.style.transform = 'translateY(10px) scale(0.95)';
  userMsgBubble.style.transition = 'all 0.3s ease';
  chatBody.appendChild(userMsgBubble);

  setTimeout(() => {
    userMsgBubble.style.opacity = '1';
    userMsgBubble.style.transform = 'translateY(0) scale(1)';
  }, 10);

  inputBox.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Typing indicator
  const typingBubble = showTypingIndicator();

  const headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
    "x-api-key": token,
  };

  fetch("https://api.chatsupplies.com/chat/message", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      message: text,
      chatbot_id: adminId,
      session_id: "string"
    })
  })
    .then(res => {
      if (!res.ok) throw new Error("Request failed: " + res.status);
      return res.json();
    })
    .then(data => {
      typingBubble.style.opacity = '0';
      typingBubble.style.transform = 'translateY(-10px)';
      setTimeout(() => typingBubble.remove(), 300);

      if (data.response) {
        let botResponse = data.response;

        try {
          if (typeof botResponse === "string") {
            botResponse = JSON.parse(botResponse);
          }

          // Convert markdown to HTML
          let html = marked.parse(botResponse.response || "");

          // Put HTML into a temp div
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;

          // Remove headings
          tempDiv.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(el => el.remove());

          // Extract plain text
          let plainText = tempDiv.textContent || "";

          // Add disclaimers if any
          if (botResponse.disclaimers) {
            plainText += " " + botResponse.disclaimers;
          }

          // Cleanup spaces
          plainText = plainText.replace(/\s+/g, " ").trim();

          appendBotMessage(plainText);
        } catch (e) {
          appendBotMessage(data.response); // fallback
        }
      } else {
        appendBotMessage("Sorry, I didn't get a response.");
      }
    })
    .catch(err => {
      typingBubble.style.opacity = '0';
      typingBubble.style.transform = 'translateY(-10px)';
      setTimeout(() => typingBubble.remove(), 300);
      console.error("Fetch error:", err);
      appendBotMessage("Sorry, there was an error. Please try again.");
    });
}

function appendBotMessage(text) {
  const botMsg = document.createElement('div');
  botMsg.className = 'botMsg';
  botMsg.style.backgroundColor = window.bot_bubble_color || '#015F63';
  botMsg.textContent = text;
  botMsg.style.color = 'white';
  botMsg.style.padding = '12px 16px';
  botMsg.style.borderRadius = '20px';
  botMsg.style.maxWidth = '70%';
  botMsg.style.alignSelf = 'flex-start';
  botMsg.style.margin = '10px 0';
  botMsg.style.fontSize = '11px';
  botMsg.style.opacity = '0';
  botMsg.style.transform = 'translateY(10px) scale(0.95)';
  botMsg.style.transition = 'all 0.3s ease';
  chatBody.appendChild(botMsg);

  setTimeout(() => {
    botMsg.style.opacity = '1';
    botMsg.style.transform = 'translateY(0) scale(1)';
  }, 10);

  chatBody.scrollTop = chatBody.scrollHeight;
}

function fetchChatHistory() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/chat/history', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const messages = JSON.parse(xhr.responseText);
        messages.forEach(msg => {
          const div = document.createElement('div');
          div.textContent = msg.text;
          div.style.color = 'white';
          div.style.padding = '12px 16px';
          div.style.borderRadius = '20px';
          div.style.maxWidth = '70%';
          div.style.alignSelf = msg.sender === 'bot' ? 'flex-start' : 'flex-end';
          div.style.margin = '10px 0';
          div.style.fontSize = '16px';
          div.style.opacity = '0';
          div.style.transform = 'translateY(10px)';
          div.style.transition = 'all 0.3s ease';
          chatBody.appendChild(div);
          
          // Animate message in
          setTimeout(() => {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
          }, 10);
        });
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    };
    xhr.send();
}

inputBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function fetchChatbotConfig(token, adminId) {
  const url = `https://api.chatsupplies.com/chatbots/getChatbotConfig?api_key=${token}&chatbot_id=${adminId}`;

  fetch(url, {
    method: "POST",
    headers: { accept: "application/json" },
    body: "",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log("Chatbot config fetched successfully:", data);
      const config = data[0];

      // Parse color scheme safely
      let colorScheme = {};
      try {
        colorScheme = JSON.parse(config.color_scheme);
      } catch {
        colorScheme = {};
      }

      // Apply styles with transitions
      const header = document.getElementById("header");
      if (header) header.style.backgroundColor = colorScheme.primary || "#a5a5a5";
const baseUrl = "https://api.chatsupplies.com";
      const logo = document.getElementById("logo");
      if (logo) logo.src = `${baseUrl}${config.logo_url}`;

      const sendBtn = document.getElementById("sendBtn");
      if (sendBtn) sendBtn.style.backgroundColor = colorScheme.primary || "#a5a5a5";

       const powered = document.getElementById("powered");
      if (powered) powered.style.color = colorScheme.primary || "#a5a5a5";

 const toggleBtn = document.getElementById("toggleBtn");
      if (toggleBtn) toggleBtn.style.backgroundColor = colorScheme.primary || "#a5a5a5";

      const userMsgBubble = document.getElementById("userMsgBubble");
      if (userMsgBubble) userMsgBubble.style.color = colorScheme.userTextColor || "#fff8f8ff";

      const chatTitle = document.getElementById("chatTitle");
      if (chatTitle) chatTitle.textContent = config.name || "Chatbot";

      const chatBody = document.getElementById("chatBody");
      if (chatBody) chatBody.style.backgroundColor = config.window_background_color || "#2023d3";

      const inputArea = document.getElementById("inputArea");
      if (inputArea) inputArea.style.backgroundColor = config.window_background_color || "#f1f1f1";

      const botBubbleMsg = document.getElementById("botBubbleMsg");
      if (botBubbleMsg) {
        botBubbleMsg.style.backgroundColor = config.bot_bubble_color || "#2023d3";
        // Animate initial message
        setTimeout(() => {
          botBubbleMsg.style.opacity = '1';
          botBubbleMsg.style.transform = 'translateY(0)';
        }, 300);
      }
      // Store bubble colors
      window.user_bubble_color = config.user_bubble_color || "#15bfbf";
      window.bot_bubble_color = config.bot_bubble_color || "#29990a";

      console.log("Colors loaded → User:", window.user_bubble_color, "Bot:", window.bot_bubble_color);
    })
    .catch((err) => {
      console.error("Failed to fetch chatbot config:", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchChatbotConfig(token, adminId);
});

sendBtn.addEventListener('click', () => {
  if (inputBox.value.trim()) {
    sendMessage();
  }
});

toggleBtn.addEventListener('click', () => {
  if (container.style.display === 'none') {
    container.style.display = 'flex';
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0) scale(1)';
      icon.style.transform = 'rotate(360deg)';
    }, 10);
  } else {
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px) scale(0.95)';
    icon.style.transform = 'rotate(0deg)';
    setTimeout(() => {
      container.style.display = 'none';
    }, 300);
  }
});
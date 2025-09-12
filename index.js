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
document.body.style.width = '100vw';

// === TOGGLE BUTTON === //
const toggleBtn = document.createElement('button');
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.width = '60px';
toggleBtn.style.height = '60px';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.backgroundColor = '#015F63';
toggleBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.display = 'flex';
toggleBtn.style.alignItems = 'center';
toggleBtn.style.justifyContent = 'center';

const icon = document.createElement('span');
icon.textContent = '💬';
icon.style.fontSize = '24px';
icon.style.color = 'white';
toggleBtn.appendChild(icon);
document.body.appendChild(toggleBtn);

// === CONTAINER === //
const container = document.createElement('div');
container.style.width = '430px';
container.style.height = '600px';
container.style.borderRadius = '16px';
container.style.overflow = 'hidden';
container.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.backgroundColor = 'colorScheme.botTextColor';
container.style.position = 'fixed';
container.style.bottom = '90px';
container.style.right = '30px';
container.style.zIndex = '1000';
container.style.display = 'none';
document.body.appendChild(container);

// === PAGES === //
// Chat Page
const chatPage = document.createElement('div');
chatPage.id = 'chatPage';
chatPage.style.display = 'flex';
chatPage.style.flexDirection = 'column';
chatPage.style.height = '100%';

// Email Page
const emailPage = document.createElement('div');
emailPage.style.display = 'none';
emailPage.style.flexDirection = 'column';
emailPage.style.height = '100%';
emailPage.style.padding = '16px';
emailPage.style.color = 'white';
emailPage.innerHTML = `
  <h3 style="margin-top: 0;">Contact us via Email</h3>
  <div style="margin-bottom: 12px;">
    <label style="display: block; margin-bottom: 4px; font-size: 14px;">Your Email</label>
    <input type="email" style="width: 100%; padding: 8px 0; border-radius: 4px; border: none; background: #2C2C2E; color: white;">
  </div>
  <div style="margin-bottom: 12px;">
    <label style="display: block; margin-bottom: 4px; font-size: 14px;">Message</label>
    <textarea style="width: 100%; height: 120px; padding: 8px 0; border-radius: 4px; border: none; background: #2C2C2E; color: white;"></textarea>
  </div>
  <button style="background: #015F63; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">Send Email</button>
`;

// WhatsApp Page
const whatsappPage = document.createElement('div');
whatsappPage.style.display = 'none';
whatsappPage.style.flexDirection = 'column';
whatsappPage.style.height = '100%';
whatsappPage.style.padding = '16px';
whatsappPage.style.color = 'white';
whatsappPage.style.textAlign = 'center';
whatsappPage.innerHTML = `
  <div style="margin-top: 40px; margin-bottom: 20px;">
    <span style="font-size: 48px;">💬</span>
  </div>
  <h3 style="margin-bottom: 8px;">Chat with us on WhatsApp</h3>
  <p style="font-size: 14px; color: #aaa; margin-bottom: 24px;">We'll connect you directly to our support team</p>
  <button style="background: #25D366; color: white; border: none; padding: 12px 24px; border-radius: 24px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
    <span style="font-size: 20px; margin-right: 8px;">📱</span> Open WhatsApp
  </button>
`;

// === HEADER === //
const header = document.createElement('div');
header.id = "header";
header.style.color = 'white';
header.style.padding = '16px 16px';
header.style.display = 'flex';
header.style.animation =
header.style.flexDirection = 'column';
header.style.gap = '6px';

const titleRow = document.createElement('div');
titleRow.style.display = 'flex';
titleRow.style.alignItems = 'center';

const logo = document.createElement('img');
logo.src = '/logo.jpeg';
logo.style.width = '40px';
logo.style.height = '40px';
logo.style.borderRadius = '50%';
logo.style.objectFit = 'cover';
logo.style.marginRight = '10px';
titleRow.appendChild(logo);

// New container for title and status
const titleStatusWrapper = document.createElement('div');
titleStatusWrapper.style.display = 'grid';
titleStatusWrapper.style.gridTemplateColumns = '1fr';
titleStatusWrapper.style.flexDirection = 'row';
titleStatusWrapper.style.alignItems = 'center';
titleStatusWrapper.style.gap = '8px'; // spacing between title and status

const title = document.createElement('div');
title.id = 'chatTitle';
// title.textContent = 'DevsInn Technologies';
title.style.fontWeight = 'bold';
title.style.fontSize = '16px';

const status = document.createElement('div');
status.innerHTML = '<span style="display:inline-block;width:10px;height:10px;background:#0f0;border-radius:50%;margin-right:4px;"></span>Online';
status.style.fontSize = '12px';
status.style.color = '#e0e0e0';

titleStatusWrapper.appendChild(title);
titleStatusWrapper.appendChild(status);

titleRow.appendChild(titleStatusWrapper);
header.appendChild(titleRow);
chatPage.appendChild(header);

// === CHAT BODY === //
const chatBody = document.createElement('div');
chatBody.id = 'chatBody';
chatBody.style.flex = '1';
chatBody.style.padding = '16px';
chatBody.style.overflowY = 'auto';
chatBody.style.display = 'flex';
chatBody.style.flexDirection = 'column';

// Initial bot message
const message = document.createElement('div');
message.className = 'botMsg';
message.textContent = "Hey! 😊 I'm here to chat about how AI can help your business grow. What's on your mind?";
message.style.color = 'white';
message.style.padding = '12px 16px';
message.style.borderRadius = '20px';
message.style.maxWidth = '80%';
message.style.alignSelf = 'flex-start';
message.style.margin = '10px 0';
message.style.fontSize = '14px';
chatBody.appendChild(message);

chatPage.appendChild(chatBody);
// === INPUT AREA === //
const inputArea = document.createElement('div');
inputArea.style.display = 'flex';
inputArea.style.alignItems = 'center';
inputArea.style.padding = '10px';
inputArea.style.borderTop = '1px solid #333';
inputArea.style.background = '#1C1C1E';
inputArea.style.gap = '8px';

const inputWrapper = document.createElement('div');
inputWrapper.style.display = 'flex';
inputWrapper.style.flex = '1';
inputWrapper.style.alignItems = 'center';
inputWrapper.style.background = '#2C2C2E';
inputWrapper.style.borderRadius = '20px';
inputWrapper.style.padding = '6px 12px';

const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.placeholder = 'Type your Message';
inputBox.style.flex = '1';
inputBox.style.background = 'transparent';
inputBox.style.border = 'none';
inputBox.style.color = 'white';
inputBox.style.fontSize = '14px';
inputBox.style.outline = 'none';

const micIcon = document.createElement('span');
micIcon.textContent = '🎤';
micIcon.style.cursor = 'pointer';
micIcon.style.marginLeft = '8px';
micIcon.style.fontSize = '18px';

inputWrapper.appendChild(inputBox);
inputWrapper.appendChild(micIcon);
inputArea.appendChild(inputWrapper);

// Send Button
const sendBtn = document.createElement('button');
sendBtn.id = 'sendBtn';
sendBtn.innerHTML = '<img src="/send.png" alt="Send" style="width: 20px; height: 20px;">';
sendBtn.style.border = 'none';
sendBtn.style.borderRadius = '12px';
sendBtn.style.padding = '10px';
sendBtn.style.cursor = 'pointer';
sendBtn.style.color = 'white';
sendBtn.style.fontSize = '16px';
inputArea.appendChild(sendBtn);

chatPage.appendChild(inputArea);

// Add pages to container
container.appendChild(chatPage);
container.appendChild(emailPage);
container.appendChild(whatsappPage);

// === FOOTER TABS === //
const footer = document.createElement('div');
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around';
footer.style.padding = '10px 0';
footer.style.background = '#111'; // Slightly lighter black
footer.style.borderTop = '1px solid #333';

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
  tabEl.style.padding = '6px 12px';
  tabEl.style.transition = 'all 0.3s ease';
  tabEl.style.borderTop = '2px solid transparent';
  tabEl.style.flex = '1';
  tabEl.style.fontFamily = 'sans-serif';
  tabEl.style.borderRadius = '8px 8px 0 0';

  const icon = document.createElement('span');
  icon.textContent = tab.icon;
  icon.style.fontSize = '20px';
  icon.style.marginBottom = '4px';

  const label = document.createElement('span');
  label.textContent = tab.label;
  label.style.fontWeight = '600';

  tabEl.appendChild(icon);
  tabEl.appendChild(label);

  tabEl.addEventListener('click', () => {
    // Hide all pages
    chatPage.style.display = 'none';
    emailPage.style.display = 'none';
    whatsappPage.style.display = 'none';

    // Show selected page 
    if (tab.page === 'chat') chatPage.style.display = 'flex';
    if (tab.page === 'email') emailPage.style.display = 'flex';
    if (tab.page === 'whatsapp') whatsappPage.style.display = 'flex';

    // Update active tab styling
    document.querySelectorAll('.footer-tab').forEach(t => {
      t.style.color = '#bbb';
      t.style.borderTop = '2px solid transparent';
      t.style.fontWeight = 'normal';
      t.style.backgroundColor = 'transparent';
    });

    tabEl.style.color = '#01B4B8';
    tabEl.style.fontWeight = 'bold';
    tabEl.style.borderTop = '2px solid #01B4B8';
    tabEl.style.backgroundColor = backgroundColor;
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
}

container.appendChild(footer);


// === POWERED BY === //
const powered = document.createElement('div');
powered.innerHTML = 'Powered by : <strong>Devsinn Technologies</strong>';
powered.style.fontSize = '10px';
powered.style.color = '#015F63';
powered.style.background = '#ffffffff';
powered.style.textAlign = 'center';
powered.style.padding = '4px 0';
container.appendChild(powered);


// === FUNCTIONALITY === //
function sendMessage() {
   const text = inputBox.value.trim();
  if (!text) return;
  
    const userMsg = document.createElement('div');
    userMsg.className = 'userMsgBubble';
  userMsg.textContent = text;
  userMsg.style.backgroundColor = userBubbleColor;
  userMsg.style.color = 'white';
  userMsg.style.padding = '12px 16px';
  userMsg.style.borderRadius = '20px';
  userMsg.style.maxWidth = '70%';
  userMsg.style.alignSelf = 'flex-end';
  userMsg.style.margin = '10px 0';
  userMsg.style.fontSize = '14px';
  chatBody.appendChild(userMsg);

  inputBox.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
const headers = {
  "accept": "application/json",
  "Content-Type": "application/json",
  "x-api-key": token,
};
  
  // Send to API
  fetch("https://api.chatsupplies.com/chat/message", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      message: text,
      chatbot_id: adminId,
      session_id: "string" // or your actual session id
    })
  })
    .then(res => {
      console.log(res)
      if (!res.ok) throw new Error("Request failed: " + res.status);
      return res.json();
    })
 .then(data => {
  if (data.response) {
    appendBotMessage(data.response);
  } else {
    appendBotMessage("Sorry, I didn't get a response.");
  }
})
.catch(err => {
  console.error("Fetch error:", err);
  appendBotMessage("Sorry, there was an error. Please try again.");
});
}
function appendBotMessage(text) {
  const botMsg = document.createElement('div');
  botMsg.className = 'botMsg';
  botMsg.textContent = text;
  botMsg.style.color = 'white';
  botMsg.style.padding = '12px 16px';
  botMsg.style.borderRadius = '20px';
  botMsg.style.maxWidth = '70%';
  botMsg.style.alignSelf = 'flex-start';
  botMsg.style.margin = '10px 0';
  botMsg.style.fontSize = '14px';
  chatBody.appendChild(botMsg);
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
          // div.style.backgroundColor = msg.sender === 'bot' ? '#666' : '#333';
          div.style.color = 'white';
          div.style.padding = '12px 16px';
          div.style.borderRadius = '20px';
          div.style.maxWidth = '70%';
          div.style.alignSelf = msg.sender === 'bot' ? 'flex-start' : 'flex-end';
          div.style.margin = '10px 0';
          div.style.fontSize = '16px';
          chatBody.appendChild(div);
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
    method: 'POST',
    headers: {
      'accept': 'application/json'
    },
    body: '' // empty body as in the curl
  })
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log("Chatbot config fetched successfully:", data);
  

    let colorScheme = JSON.parse(data[0].color_scheme);
    document.getElementById("header").style.backgroundColor = colorScheme.primary || '#a5a5a5ff';
    document.getElementById("sendBtn").style.backgroundColor = colorScheme.primary || '#a5a5a5ff';
    document.querySelector(".botMsg").style.backgroundColor = data[0].bot_bubble_color || '#df0808ff';
    document.getElementById("chatTitle").textContent = data[0].name || 'Chatbot';
    userBubbleColor = data[0].user_bubble_color || '#15bfbfff'
    // document.querySelector(".userMsgBubble").style.backgroundColor = ;
    document.getElementById("chatBody").style.backgroundColor = data[0].window_background_color || '#000000ff';
    // You can update the UI or use this data however you like
  })
  .catch(err => {
    console.error("Failed to fetch chatbot config:", err);
  });
}
fetchChatbotConfig(token, adminId);



// sendBtn.addEventListener('click', sendMessage);
sendBtn.addEventListener('click', () => {
  if (inputBox.value.trim()) {
    sendMessage();
  }
});

toggleBtn.addEventListener('click', () => {
  container.style.display = container.style.display === 'none' ? 'flex' : 'none';
});
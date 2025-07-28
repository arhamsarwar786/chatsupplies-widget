
// Reset body styles
document.body.style.margin = '0';
document.body.style.fontFamily = 'sans-serif';
document.body.style.backgroundColor = '#f1f1f1';
document.body.style.height = '100vh';

// === TOGGLE BUTTON === //
const toggleBtn = document.createElement('button');
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.width = '60px';
toggleBtn.style.height = '60px';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.backgroundColor = '#41D3E1';
// toggleBtn.style.border = '4px solid blue';
toggleBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.display = 'flex';
toggleBtn.style.alignItems = 'center';
toggleBtn.style.justifyContent = 'center';

// Icon inside the button
const icon = document.createElement('span');
icon.textContent = '💬'; // Replace with image if preferred
icon.style.fontSize = '24px';
icon.style.color = 'white';
toggleBtn.appendChild(icon);
document.body.appendChild(toggleBtn);

// === CHATBOT CONTAINER === //
const container = document.createElement('div');
container.style.width = '360px';
container.style.height = '360px';
container.style.borderRadius = '20px';
container.style.overflow = 'hidden';
container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.backgroundColor = 'white';
container.style.position = 'fixed';
container.style.top = '67%';
container.style.left = '87%';
// container.style.Bottom = '400px';
// container.style.right = '2px';
container.style.transform = 'translate(-50%, -50%)';
container.style.zIndex = '1000';
container.style.display = 'none'; // Hidden by default
document.body.appendChild(container);

// === HEADER === //
const header = document.createElement('div');
header.style.backgroundColor = '#3AB8BD';
header.style.color = 'white';
header.style.padding = '10px 15px';
header.style.display = 'flex';
header.style.alignItems = 'center';

const logo = document.createElement('div');
logo.textContent = 'Devsinn\nTechnologies';
logo.style.backgroundColor = 'white';
logo.style.color = 'black';
logo.style.fontWeight = 'bold';
logo.style.fontSize = '8px';
logo.style.padding = '4px 6px';
logo.style.lineHeight = '8px';
logo.style.marginRight = '10px';
logo.style.borderRadius = '3px';
header.appendChild(logo);

const title = document.createElement('span');
title.textContent = 'Chatbot';
title.style.fontSize = '20px';
title.style.fontWeight = 'bold';
header.appendChild(title);

container.appendChild(header);

// === CHAT BODY === //
const chatBody = document.createElement('div');
chatBody.style.backgroundColor = 'black';
chatBody.style.flex = '1';
chatBody.style.padding = '10px';
chatBody.style.overflowY = 'auto';
chatBody.style.display = 'flex';
chatBody.style.flexDirection = 'column';
container.appendChild(chatBody);


// Initial chatbot message
const message = document.createElement('div');
message.textContent = 'Hello! How can I help you today?';
message.style.backgroundColor = '#333';
message.style.color = 'white';
message.style.padding = '12px 16px';
message.style.borderRadius = '20px';
message.style.maxWidth = '70%';
message.style.alignSelf = 'flex-start';
message.style.margin = '10px 0';
message.style.fontSize = '16px';
chatBody.appendChild(message);

// === INPUT AREA === //
const inputArea = document.createElement('div');
inputArea.style.display = 'flex';
inputArea.style.alignItems = 'center';
inputArea.style.gap = '5px';
inputArea.style.backgroundColor = 'white';
inputArea.style.borderTop = '1px solid #ddd';
inputArea.style.borderBottomLeftRadius = '20px';
inputArea.style.borderBottomRightRadius = '20px';
inputArea.style.padding = '10px';

// Attachment
const fileBtn = document.createElement('button');
fileBtn.textContent = '📎';
fileBtn.style.background = 'none';
fileBtn.style.border = 'none';
fileBtn.style.fontSize = '20px';
fileBtn.style.cursor = 'pointer';
inputArea.appendChild(fileBtn);

// Microphone
const micBtn = document.createElement('button');
micBtn.textContent = '🎤';
micBtn.style.background = 'none';
micBtn.style.border = 'none';
micBtn.style.fontSize = '20px';
micBtn.style.cursor = 'pointer';
inputArea.appendChild(micBtn);

// Input box
const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.placeholder = 'Type a message...';
inputBox.style.flex = '1';
inputBox.style.padding = '10px 16px';
inputBox.style.borderRadius = '16px';
inputBox.style.border = 'none';
inputBox.style.backgroundColor = '#eee';
inputBox.style.fontSize = '16px';
inputBox.style.outline = 'none';
inputArea.appendChild(inputBox);

// Send button
const sendBtn = document.createElement('button');
sendBtn.textContent = 'Send';
sendBtn.style.backgroundColor = '#3AB8BD';
sendBtn.style.color = 'white';
sendBtn.style.border = 'none';
sendBtn.style.padding = '10px 16px';
sendBtn.style.borderRadius = '12px';
sendBtn.style.fontWeight = 'bold';
sendBtn.style.cursor = 'pointer';
inputArea.appendChild(sendBtn);

container.appendChild(inputArea);

// === FOOTER === //
const footer = document.createElement('div');
footer.style.padding = '10px';
footer.style.fontSize = '12px';
footer.style.color = 'gray';
footer.style.textAlign = 'center';

const footerText = document.createElement('em');
footerText.innerHTML = 'Created by <span style="color:#3AB8BD;font-style:italic;">Devsinn Technologies</span>';
footer.appendChild(footerText);
container.appendChild(footer);

// === MESSAGE HANDLING === //
function sendMessage() {
  const newMsg = document.createElement('div');
  newMsg.textContent = inputBox.value;
  newMsg.style.backgroundColor = '#333';
  newMsg.style.color = 'white';
  newMsg.style.padding = '12px 16px';
  newMsg.style.borderRadius = '20px';
  newMsg.style.maxWidth = '70%';
  newMsg.style.alignSelf = 'flex-end';
  newMsg.style.margin = '10px 0';
  newMsg.style.fontSize = '16px';
  chatBody.appendChild(newMsg);
  inputBox.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
   // === AJAX: Send message to API ===
 const xhr = new XMLHttpRequest();
 xhr.open('POST', '/api/chat/send', true);
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && xhr.status === 200) {
     const response = JSON.parse(xhr.responseText);
     if (response.reply) {
       appendBotMessage(response.reply);
     }
   }
 };
 xhr.send(JSON.stringify({ message: messageText }));
}

// === HELPER: Append Bot Message === //
function appendBotMessage(text) {
    const botMsg = document.createElement('div');
    botMsg.textContent = text;
    botMsg.style.backgroundColor = '#666';
    botMsg.style.color = 'white';
    botMsg.style.padding = '12px 16px';
    botMsg.style.borderRadius = '20px';
    botMsg.style.maxWidth = '70%';
    botMsg.style.alignSelf = 'flex-start';
    botMsg.style.margin = '10px 0';
    botMsg.style.fontSize = '16px';
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // === AJAX: Fetch Chat History on Open === //
function fetchChatHistory() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/chat/history', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const messages = JSON.parse(xhr.responseText);
        messages.forEach(msg => {
          const div = document.createElement('div');
          div.textContent = msg.text;
          div.style.backgroundColor = msg.sender === 'bot' ? '#666' : '#333';
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
  if (e.key === 'Enter' && inputBox.value.trim()) {
    sendMessage();
  }
});

sendBtn.addEventListener('click', () => {
  if (inputBox.value.trim()) {
    sendMessage();
  }
});

// === TOGGLE BUTTON FUNCTION === //
toggleBtn.addEventListener('click', () => {
  container.style.display = container.style.display === 'none' ? 'flex' : 'none';
});

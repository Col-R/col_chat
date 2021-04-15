// dom queries
const chatList = document.querySelector('.chat-list');
const newMessage = document.querySelector('.new-chat');
const newUsername = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg')
const channel = document.querySelector ('.chat-rooms');

//messages
newMessage.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newMessage.message.value.trim();
    chatroom.addChat(message)
        .then(()=> newMessage.reset())
        .catch(err => console.log(err));
});

// username
newUsername.addEventListener('submit', e =>{
    e.preventDefault();
    const newUser = newUsername.name.value.trim();
    chatroom.updateName(newUser)
    newUsername.reset();
    updateMsg.innerText = `Your name was changed to ${newUser}`;
    setTimeout(()=> updateMsg.innerText = '', 3000);
});

//update the text channel
channel.addEventListener('click', e=>{
    // e.preventDefault;
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateChannel(e.target.getAttribute('id'));
        chatroom.getChats(chat=>chatUI.render(chat))
    }
});

// check local storage for previous username
const username = localStorage.username ? localStorage.username : 'anonymous';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats & render
chatroom.getChats(data => chatUI.render(data));

// dom queries
const chatList = document.querySelector('.chat-list');
const newMessage = document.querySelector('.new-chat');

newMessage.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newMessage.message.value.trim();
    chatroom.addChat(message)
        .then(()=> newChatForm.reset())
        .catch(err => console.log(err));
});

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'cole');

// get chats & render
chatroom.getChats(data => chatUI.render(data));

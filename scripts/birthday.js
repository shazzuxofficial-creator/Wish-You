document.addEventListener("DOMContentLoaded", () => {
    // Read URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Extract parameters or use defaults if they don't exist
    const receiver = urlParams.get('receiver');
    const sender = urlParams.get('sender');
    const message = urlParams.get('message');

    // Default Fallbacks ("Lily" and "John")
    if (receiver) {
        document.getElementById('receiverName').innerText = receiver;
        document.title = `Happy Birthday, ${receiver}!`;
    } else {
        document.getElementById('receiverName').innerText = "Lily";
    }

    if (sender) {
        document.getElementById('senderName').innerText = sender;
    } else {
        document.getElementById('senderName').innerText = "John";
    }

    if (message) {
        document.getElementById('wishMessage').innerText = message;
    }
});

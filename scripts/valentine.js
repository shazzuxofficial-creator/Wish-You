document.addEventListener("DOMContentLoaded", () => {
    // 1. URL LOGIC 
    const urlParams = new URLSearchParams(window.location.search);
    
    const receiver = urlParams.get('receiver');
    const sender = urlParams.get('sender');
    const message = urlParams.get('message');

    if (receiver) {
        document.getElementById('receiverName').innerText = receiver;
        document.title = `Happy Valentine's Day, ${receiver}!`;
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

    // 2. ANIMATION LOGIC (Updated to open only once and hide text)
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const instructionText = document.getElementById('instructionText');

    envelopeWrapper.addEventListener('click', () => {
        // Use 'add' instead of 'toggle' so it cannot be closed again
        envelopeWrapper.classList.add('open');
        
        // Hide the instruction text completely so it doesn't overlap the letter
        instructionText.style.display = 'none';
    });
});

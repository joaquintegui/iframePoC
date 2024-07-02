document.getElementById('sendMessageInput').addEventListener('change', (event) => {
    const message = {
    topic: 'modalInput',
    value: event.target.value
}
window.parent.postMessage(message, '*');
});


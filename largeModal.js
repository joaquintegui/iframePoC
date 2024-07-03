const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const oppId = urlParams.get('oppId')

document.getElementById('sendMessageInput').addEventListener('change', (event) => {
    const message = {
    topic: 'modalInput',
    value: event.target.value,
    oppId: oppId
}
window.parent.postMessage(message, '*');
});


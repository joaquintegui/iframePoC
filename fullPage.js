const urlParams = new URLSearchParams(queryString);
const oppId = urlParams.get('oppId')

document.getElementById('openLargeModalButton').addEventListener('click', function() {
    const message = {
        topic: 'openLargeModal'
    };

    window.parent.postMessage(message, '*');
});

document.getElementById('openSmallModalButton').addEventListener('click', function() {
    const message = {
        topic: 'openSmallModal',
        oppId: oppId,
    };

    window.parent.postMessage(message, '*');
});

window.addEventListener("message", (event) => {
    const data = event.data;
    if(data.topic == 'modalInput' && data.oppId == oppId ){
        document.getElementById('LargeModalInput').innerHTML = data.value;
    }
});

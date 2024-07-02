document.getElementById('openLargeModalButton').addEventListener('click', function() {
    const message = {
        topic: 'openLargeModal'
    };

    window.parent.postMessage(message, '*');
});

document.getElementById('openSmallModalButton').addEventListener('click', function() {
    const message = {
        topic: 'openSmallModal'
    };

    window.parent.postMessage(message, '*');
});

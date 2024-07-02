document.getElementById('sendMessageButton').addEventListener('click', function() {
  const message = {
      topic: 'openModal'
  };

  window.parent.postMessage(message, '*');
});

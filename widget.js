const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const oppId = urlParams.get('oppId')

document.getElementById('sendMessageButton').addEventListener('click', function() {
  const message = {
      topic: 'openModal',
      oppId: oppId
  };

  window.parent.postMessage(message, '*');
});

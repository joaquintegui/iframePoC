const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const oppId = urlParams.get('oppId')
console.log('run');

document.getElementById('openLargeModalButton').addEventListener('click', function() {
    const message = {
        topic: 'openLargeModal',
        oppId: oppId,
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
    console.log(data.oppId);
    console.log(oppId);

    if(data.topic == 'modalInput' && data.oppId == oppId ){
        document.getElementById('LargeModalInput').innerHTML = data.value;
    }
});

document.getElementById('openModalInIframe').addEventListener('click', function() {
    console.log('modalopen');
    document.getElementById('modal').classList.add('open');
    document.body.classList.add('jw-modal-open');

    const message = {
        topic: 'openInternalModal',
        oppId: oppId,
    };

    window.parent.postMessage(message, '*');
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');

    const message = {
        topic: 'closeInternalModal',
        oppId: oppId,
    };

    window.parent.postMessage(message, '*');
});


var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(
             sleep(duration).then(() => poll(promiseFn, duration)))

// Greet the World every second
poll(() => new Promise(() => console.log('Still Running')), 1000)

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'do you really want to quit?';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

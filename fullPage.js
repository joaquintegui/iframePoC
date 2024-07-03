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

document.getElementById('openLargeModalButton').addEventListener('click', function() {
    document.getElementById('modal').classList.add('open');
    document.body.classList.add('jw-modal-open');
});

var sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
var poll = (promiseFn, duration) => promiseFn().then(
             sleep(duration).then(() => poll(promiseFn, duration)))

// Greet the World every second
poll(() => new Promise(() => console.log('Still Running')), 1000)

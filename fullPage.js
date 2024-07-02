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

window.addEventListener("message", (event) => {
    console.log('funciona?');
    console.log(JSON.stringify(event));
    const data = event.data;
    if(data.topic == 'modalInput'){
        console.log('funciona');
        console.log(data.value);
        document.getElementById('LargeModalInput').innerHTML = data.value;
    }
});

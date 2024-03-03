window.addEventListener('load', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const frame = urlParams.get('frame')
    const pframe = document.getElementById("pframe");
    pframe.src = frame;
})  

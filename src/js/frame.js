window.addEventListener('load', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const frame = urlParams.get('frame')
    const pframe = document.getElementById("pframe");
    console.log(frame)
    if (frame != null) {
        this.localStorage.setItem("frameSrc", frame)
        this.window.location.href = "/frame.html";
    } else {
        pframe.src = this.localStorage.getItem("frameSrc");
    }
    
})  

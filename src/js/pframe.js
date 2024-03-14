window.addEventListener('load', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const frame = urlParams.get('frame')
    const pframe = document.getElementById("pframe");
    console.log(frame)
    if (frame != null) {
        this.localStorage.setItem("pframeSrc", frame)
        this.window.location.href = "/pframe.html";
    } else {
        pframe.src = __uv$config.prefix + __uv$config.encodeUrl(this.localStorage.getItem("pframeSrc"));
    }
    
})  

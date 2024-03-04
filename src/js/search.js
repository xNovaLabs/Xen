const searchField = document.getElementById("searchField");
const searchButton = document.getElementById("searchButton");


searchButton.addEventListener('click', function() {
    const url = search(searchField.value, "lmao");
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
})  

searchField.onkeydown = function(e){
    if(e.keyCode == 13){
        const url = search(searchField.value, "lmao");
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    }
 };
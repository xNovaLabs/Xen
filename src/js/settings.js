const save = document.getElementById("saveButton")
const title = document.getElementById("title")
const panicSave = document.getElementById("panicButtonSave")
const panicLink = document.getElementById("panicLink")
const panic = document.getElementById("panic")
const favicon = document.getElementById("favicon")


save.addEventListener("click", function() {
    localStorage.setItem("title", title.value)
    localStorage.setItem("favicon", favicon.value)
})

panicSave.addEventListener("click", function() {
    localStorage.setItem("panicButton", panic.value)
    if (panicLink.value.includes("https://") || panic.value.includes("http://") ) {
        localStorage.setItem("panicLink", panicLink.value)
    } else {
        localStorage.setItem("panicLink", "https://" + panicLink.value)
    }
    
})


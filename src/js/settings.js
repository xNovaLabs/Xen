const save = document.getElementById("saveButton")
const title = document.getElementById("title")
const panicSave = document.getElementById("panicButtonSave")
const panicLink = document.getElementById("panicLink")
const panic = document.getElementById("panic")
const favicon = document.getElementById("favicon")
const dropdownButton = document.getElementById('dropdownDefaultButton');


save.addEventListener("click", function() {
    localStorage.setItem("title", title.value)
    localStorage.setItem("favicon", favicon.value)
    if (dropdownButton.querySelector('span').textContent  == "google") {
        localStorage.setItem("title", "Google")
        localStorage.setItem("favicon", "https://www.google.com/favicon.ico")
    } else if (dropdownButton.querySelector('span').textContent  == "canvas") {
        localStorage.setItem("title", "Canvas")
        localStorage.setItem("favicon", "https://gisd.instructure.com/favicon.ico")
    } else if (dropdownButton.querySelector('span').textContent  == "gmail") {
        localStorage.setItem("title", "Gmail")
        localStorage.setItem("favicon", "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico")
    }
    
    
})

panicSave.addEventListener("click", function() {
    localStorage.setItem("panicButton", panic.value)
    if (panicLink.value.includes("https://") || panic.value.includes("http://") ) {
        localStorage.setItem("panicLink", panicLink.value)
    } else {
        localStorage.setItem("panicLink", "https://" + panicLink.value)
    }
    
})


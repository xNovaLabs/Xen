const save = document.getElementById("saveButton")
const title = document.getElementById("title")
const favicon = document.getElementById("favicon")


save.addEventListener("click", function() {
    localStorage.setItem("title", title.value)
    console.log("hello")
    localStorage.setItem("favicon", favicon.value)
})
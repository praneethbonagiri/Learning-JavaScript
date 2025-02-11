const saveButton = document.getElementById("save-button")
const inputName = document.getElementById("input-name")

const outputName = document.getElementById("output-name")

saveButton.addEventListener("click", () => {
    const username = inputName.value
    //console.log(username)

    // we can directly use localStorage object
    localStorage.setItem("name", username)
})

window.addEventListener("load", () => {
    const localName = localStorage.getItem("name")

    if (localName == undefined) {
        return
    }

    outputName.innerText = localName
})
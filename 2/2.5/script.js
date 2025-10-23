const textField = document.createElement("input")
const confirmButton = document.createElement("input")
const output = document.createElement("p")

document.body.appendChild(textField)
document.body.appendChild(confirmButton)
document.body.appendChild(output)

confirmButton.setAttribute("type", "button")
confirmButton.setAttribute("onclick", "confirmFunc()")
confirmButton.value = "Confirm"
textField.setAttribute("type", "text")
textField.setAttribute("placeholder", "Skriv et tall")


function confirmFunc(){
    let tall = []
    for (let i = 1; i <= textField.value; i++){
        tall.push(i)
    }
    output.textContent = tall
}






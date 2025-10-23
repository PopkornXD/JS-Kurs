const brukernavn = document.createElement("input")
const passord = document.createElement("input")
const bekreft = document.createElement("input")

document.body.appendChild(brukernavn)
document.body.appendChild(passord)
document.body.appendChild(bekreft)


brukernavn.setAttribute("type", "text")
brukernavn.setAttribute("placeholder", "brukernavn")
passord.setAttribute("type", "text")
passord.setAttribute("placeholder", "passord")
bekreft.setAttribute("type", "button")
bekreft.setAttribute("onclick", "sjekk()")
bekreft.setAttribute("value", "bekreft")

function sjekk(){
    if (passord.value == "1234" || passord.value == "passord"){
        alert("Du har dårlig passord")
    }
}


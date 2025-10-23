let heroes = [
  "Luke Skywalker",
  "Tony Stark",
  "Steve Rogers",
  "Diana Prince",
  "Harry Potter",
  "Frodo Baggins",
  "Indiana Jones",
  "Mario",
  "Zelda",
  "Lara Croft",
  "Kratos",
  "Nathan Drake",
  "Geralt of Rivia",
];


let søkefelt = document.createElement("input")
søkefelt.setAttribute("type", "text")
søkefelt.setAttribute("oninput", "update()")
document.body.appendChild(søkefelt)

update()

function update(){
    let pTags = document.querySelectorAll('p')
    pTags.forEach(p => {
        if (p.className == "heroes") p.remove()
    })
    heroes.map ((hero) => {
        if (hero.includes(søkefelt.value)){
            let hero_text = document.createElement("p")
            hero_text.setAttribute("class", "heroes")
            hero_text.textContent = hero
            document.body.appendChild(hero_text)
        }
    })
}
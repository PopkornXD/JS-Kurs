//* Oppgave 1:
// console.log("Hello World")


//* Oppgave 2:
// let name = "Iver";

// console.log(`Hallo ${name}`)


//* Oppgave 3:
// const pi = 3.14;
// let radius = 5;
// const omkrets = 2*pi*radius;

// console.log(`for radius ${radius} er omkretsen ${omkrets}`)


//* Oppgave 4:
// let person = {
//     fornavn: "Iver",
//     Etternavn: "Johnson",
//     Alder: 17,
//     Bursdag: new Date(2008, 0, 22),
//     erOver18: false,
//     favorittFarge: "Blå"
// };
// console.log(person);
// console.log(`Hallo ${person.fornavn} ${person.Etternavn}`)


//* Oppgave 5:
// let navn = "Iver";
// let navnLengde = navn.length;

// console.log(`Hallo ${navn}. Ditt navn har ${navnLengde} bokstaver`);


//* Oppgave 6:
// let person = {
//     fornavn: "Iver",
//     Etternavn: "Johnson",
//     Alder: 17,
//     Bursdag: new Date(2008, 0, 22),
//     erOver18: false,
//     favorittFarge: "Blå"
// };
// console.log(`Hei, mitt navn er ${person.fornavn} ${person.Etternavn}. Jeg er ${person.Alder} år gammel og har bursdag ${person.Bursdag.toLocaleDateString()}. Min favorittfarge er ${person.favorittFarge}.`)


//* Oppgave 7:
// let tall1 = prompt("Skriv et tall")
// let tall2 = prompt("Skriv et annet tall")

// let tallListe = [tall1, tall2].sort()

// if (tallListe[1] - tallListe[0] != 0) {
//     console.log(`${tallListe[1]} er større enn ${tallListe[0]}`)
// } else {
//     console.log(`${tallListe[1]} og ${tallListe[0]} er like store`)
// }


//* Oppgave 8:
// let alder = prompt("Hvor gammel er du?")

// if (alder >= 18) {
//     console.log("Du er kvalifisert til å stemme")
// } else {
//     console.log("Du er ikke kvalifisert til å stemme ennå")
// }


//* Oppgave 9:
// let triedPassword = prompt("Skriv inn passordet")
// let password = "passord123"

// if (triedPassword == password) {
//     console.log("Tilgang innvilget")
// } else {
//     console.log("Tilgang nektet")
// }


//* Oppgave 10:
// if (new Date().getDay() == 5){
//     console.log("Det er fredag!")
//     if (new Date().getHours() == 15 && new Date().getMinutes() == 30){
//         console.log("God helg - sees på mandag! Husk stol på fredag da")
//     }
// }


//* Oppgave 11:
// let counter = 0
// const counterDisplay = document.getElementById("counter")

// function handleOnClick() {
//     counter++
//     counterDisplay.textContent = counter
// }


//* Oppgave 12:
// function changeColor(color) {
//     document.body.style.backgroundColor = color
// }


//* Oppgave 13:
// const textBox = document.getElementById("textBox")

// function changeFont(font){
//     textBox.style.fontFamily = font
// }

// function changeFontSize(size){
//     textBox.style.fontSize = size
// }

// function changeFontColor(color){
//     textBox.style.color = color
// }

// function changeBackgroundColor(color){
//     textBox.style.backgroundColor = color
// }


//* UTFORDRING - Kalkulator:
// const result = document.getElementById("result")
// let tall1 = document.getElementById("tall1")
// let tall2 = document.getElementById("tall2")

// function updateResult(){
//     console.log(parseFloat(tall1.value) + parseFloat(tall2.value))
//     result.value = parseFloat(tall1.value) + parseFloat(tall2.value)
// }






function sjekkKjøre() {
    if (document.getElementById("numberInp").value >= 25) {
        console.log("Du kan øvelseskjøre")

    } else if (document.getElementById("trafikaltJa").checked && document.getElementById("numberInp").value >= 16){
        console.log("Du kan øvelseskjøre")
    } else {
        console.log("Du kan ikke øvelseskjøre")
    }
}
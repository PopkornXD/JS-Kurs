

function sendInn() {
    let hendvendelse = {
        navn: document.getElementById("navnId").value,
        epost: document.getElementById("epostId").value,
        tema: document.getElementById("temaId").value,
        melding: document.getElementById("meldingId").value
    }
    console.log(hendvendelse)
}

function avbryt(){
    document.getElementById("navnId").value = ""
    document.getElementById("epostId").value = ""
    document.getElementById("temaId").value = ""
    document.getElementById("meldingId").value = ""
}
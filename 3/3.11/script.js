const aksjeListe = [
  {
    navn: "TechCorp",
    prisPerAksje: 80,
    sektor: "teknologi",
    antallAksjerTilgjengelig: 1000,
  },
  {
    navn: "HealthMed",
    prisPerAksje: 150,
    sektor: "helse",
    antallAksjerTilgjengelig: 5000,
  },
  {
    navn: "EduLearn",
    prisPerAksje: 40,
    sektor: "utdanning",
    antallAksjerTilgjengelig: 0,
  },
  {
    navn: "FoodYum",
    prisPerAksje: 200,
    sektor: "mat",
    antallAksjerTilgjengelig: 3000,
  },
  {
    navn: "EcoPower",
    prisPerAksje: 60,
    sektor: "energi",
    antallAksjerTilgjengelig: 1500,
  },
  {
    navn: "AutoDrive",
    prisPerAksje: 120,
    sektor: "transport",
    antallAksjerTilgjengelig: 2500,
  },
  {
    navn: "FinWealth",
    prisPerAksje: 90,
    sektor: "finans",
    antallAksjerTilgjengelig: 4000,
  },
  {
    navn: "InnoTech",
    prisPerAksje: 85,
    sektor: "teknologi",
    antallAksjerTilgjengelig: 1800,
  },
  {
    navn: "MediCare",
    prisPerAksje: 140,
    sektor: "helse",
    antallAksjerTilgjengelig: 4500,
  },
  {
    navn: "TeachSmart",
    prisPerAksje: 35,
    sektor: "utdanning",
    antallAksjerTilgjengelig: 300,
  },
  {
    navn: "TasteGood",
    prisPerAksje: 220,
    sektor: "mat",
    antallAksjerTilgjengelig: 2800,
  },
];





function finnSektorer(){
  let sektorer = []
  aksjeListe.map((aksje) => {
      if (!sektorer.includes(aksje.sektor)){
          sektorer.push(aksje.sektor)
      }
  })
  return sektorer
}

function billigeAksjer(){
  let aksjerUnder100 = []
  aksjeListe.map((aksje) => {
    if (aksje.prisPerAksje < 100){
      aksjerUnder100.push(aksje)
    }
  })
  return aksjerUnder100
}

function tilgjengelig0(){
  let aksjer0Tilgjengelig = []
  aksjeListe.map((aksje) => {
    if (aksje.antallAksjerTilgjengelig == 0){
      aksjer0Tilgjengelig.push(aksje)
    }
  })
  return aksjer0Tilgjengelig
}

function markedsverdi(){
  let verdi = 0
  aksjeListe.map((aksje) => {
    verdi += aksje.prisPerAksje * aksje.antallAksjerTilgjengelig
  })
  return verdi
}

console.log(finnSektorer())
console.log(billigeAksjer())
console.log(tilgjengelig0())
console.log(markedsverdi())



let pokemons = [
  { 
    name: "Pikachu", 
    type: "Electric", 
    abilities: ["Static", "Lightning Rod"], 
    healthPoints: 35, 
    attackPoints: 55 
  },
  { 
    name: "Charmander", 
    type: "Fire", 
    abilities: ["Blaze", "Solar Power"], 
    healthPoints: 39, 
    attackPoints: 52 
  },
  { 
    name: "Squirtle", 
    type: "Water", 
    abilities: ["Torrent", "Rain Dish"], 
    healthPoints: 44, 
    attackPoints: 48 
  },
  { 
    name: "Bulbasaur", 
    type: "Grass/Poison", 
    abilities: ["Overgrow", "Chlorophyll"], 
    healthPoints: 45, 
    attackPoints: 49 
  },
  { 
    name: "Jigglypuff", 
    type: "Fairy/Normal", 
    abilities: ["Cute Charm", "Friend Guard"], 
    healthPoints: 115, 
    attackPoints: 45 
  },
  { 
    name: "Raichu", 
    type: "Electric", 
    abilities: ["Static", "Lightning Rod"], 
    healthPoints: 60, 
    attackPoints: 90 
  },
  { 
    name: "Blastoise", 
    type: "Water", 
    abilities: ["Torrent", "Rain Dish"], 
    healthPoints: 79, 
    attackPoints: 83 
  },
  { 
    name: "Venusaur", 
    type: "Grass/Poison", 
    abilities: ["Overgrow", "Chlorophyll"], 
    healthPoints: 80, 
    attackPoints: 82 
  },
  { 
    name: "Charizard", 
    type: "Fire/Flying", 
    abilities: ["Blaze", "Solar Power"], 
    healthPoints: 78, 
    attackPoints: 84 
  },
  { 
    name: "Clefairy", 
    type: "Fairy", 
    abilities: ["Cute Charm", "Magic Guard"], 
    healthPoints: 70, 
    attackPoints: 45 
  }
];

let typemons = {
    "Fire": [],
    "Electric": [],
    "Fairy": [],
    "Flying": [],
    "Grass": [],
    "Poison": [],
    "Water": [],
    "Normal": []
}

let healthymons = []

let sortedbyattackmons = []

pokemons.sort((a,b) => a.attackPoints - b.attackPoints).map((pokemon) => {
    let types = pokemon.type.split("/")

    for (let type of types) {
        typemons[type].push(pokemon)
    }

    if (pokemon.healthPoints > 60){
        healthymons.push(pokemon)
    }
    
    sortedbyattackmons.push(pokemon)
}) 

console.log("Pokemons fordelt etter type", typemons)
console.log("Pokemons over 60HP", healthymons)
console.log("Pokemons sortert etter attack (lavest-høyest)", sortedbyattackmons)
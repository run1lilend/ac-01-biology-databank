const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lipids = require("./databank/lipids.json");
const nucleic_acids = require("./databank/nucleic_acids.json");
const cells = require("./databank/cells.json");
const carbonhydrates = require("./databank/carbohydrates.json");
const enzymes = require("./databank/enzymes.json")
const organic_compounds = require("./databank/organic_compounds.json")
const inorganic_compounds = require("./databank/inorganic_compounds.json")
const vitamins = require("./databank/vitamins.json")
const periodic_table = require("./periodic_table.json")
const proteins = require("./databank/proteins.json")


console.log("AC-01 (EVETRA Biology Database) starting.")

function helpcommand() {
    console.log(`"/help" for commands.`)
  }

  function askQuestion() {
    rl.question('/', (answer) => {
      if (answer == "show lipids") {
        console.log(lipids)
      }
      else if (answer == "show nucleic acids") {
        console.log(nucleic_acids)
      }
      else if (answer == "show cells") {
        console.log(cells)
      }
      else if (answer == "show carbonhydrates") {
        console.log(carbonhydrates)
      }
      else if (answer == "show enzymes") {
        console.log(enzymes)
      }
      else if (answer == "show organic compounds") {
        console.log(enzymes)
      }
      else if (answer == "show inorganic compounds") {
        console.log(inorganic_compounds)
      }
      else if (answer == "show vitamins") {
        console.log(vitamins)
      }
      else if (answer == "periodic table") {
        console.log(periodic_table)
      }
      else if (answer == "show proteins") {
        console.log(periodic_table)
      }
      else if (answer == "help") {
        console.log('\x1b[32m%s\x1b[0m', `
            AC-01 Biology Databank Help Menu v0.01

        show lipids - "It shows the lipids."
        show nucleic acids - "It shows the nucleic acids."
        show carbonhydrates - "It shows the carbonhydrates."
        show cells - "It shows the cells."
        show enzymes - "It shows the enzymes."
        show inorganic compounds - "It shows the inorganic compounds."
        show organic compounds - "It shows the organic compounds."
        periodic table - "It shows the periodic table."
        show proteins - "It shows the proteins."


Version v0.01(as published) - Made By lilend
        `)
      }
      else {
        console.log(`Data not found. "help" for commands`)
      }
      askQuestion();
    });
  }
  
setTimeout(helpcommand, 2000)
setTimeout(askQuestion, 3500);

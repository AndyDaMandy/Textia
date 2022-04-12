//Things that need to be done:
//Adding all target to items and support skills
//begin game balancing
//Adjust strings to use template literals
//enmity system? Ando should get hit more.
//Item descriptions needed in battle?
//Need to create an armor system! Maybe....
//new enemies needed, new branching paths as well.
//new places to fight enemies.
//new items, shop etc.
//shop needs to have branch for weapons, possibly armor
//clean up battle selection functions a bit, make them less chunky.

let inventory = [];
let weaponsOwned = [];
let armorOwned = [];
let accesoriesOwned = [];
let keyItems = [];
let enemyParty = [];
let currentParty = [];
let reserveParty = [];

//==================================
// all testing goes below
//important! Enemy skills/steal items go in the classes file.
let savedParty = "";
ando.weapon = woodSword;
ando.skills.push(basher);
marie.skills.push(fire);
ando.skills.push(iceSlash);
marie.support.push(cure);
//marie.support.push(defBoost);
ari.weapon = ironDaggers;
ari.skills.push(steal);
ari.skills.push(quickSlashes);
gabriel.weapon = tomeofLife;
gabriel.skills.push(water);
gabriel.support.push(cureAll);
//weaponsOwned.push(excalibur);

function toggleChests(){
    opened.hidden = true;
};

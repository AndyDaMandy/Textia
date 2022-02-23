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
let savedParty = currentParty;
ando.weapon = woodSword;
ando.skills.push(basher);
marie.skills.push(fire);
ando.skills.push(iceSlash);
marie.support.push(cure);
//marie.support.push(defBoost);
ari.weapon = ironSpear;
//ari.skills.push(fire);
//weaponsOwned.push(excalibur);

function toggleChests(){
    opened.hidden = true;
};

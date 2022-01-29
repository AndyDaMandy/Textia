let ando = {
  name: "Ando",
  hp: 10,
  mp: 5,
  pAtk: 5,
  pDef: 5,
  mAtk: 1,
  mDef: 2,
  skills: [],
  type: "player"
};
let marie = {
  name: "Marie",
  hp: 8,
  mp: 10,
  pAtk: 2,
  pDef: 2,
  mAtk: 6,
  mDef: 5,
  skills: [],
  type: "player"
};
//========================================
//enemies go here
let iceman = {
  name: "Ice Man",
  hp: 8,
  mp: 10,
  pAtk: 2,
  pDef: 2,
  mAtk: 6,
  mDef: 5,
  eSkills: [],
  type: "enemy"
};

//========================
// event listeners go here
//===========================
let inventory = [];
let weaponsOwned = [];
let armorOwned = [];
let accesoriesOwned = [];
let keyItems = [];
// function save (){};
// Query Selectors
function showStats (x) {
//console.log("Your current party contains " + x[0].name + ", " + x[1].name);
const stats = document.createElement("h3");
const node = document.createTextNode("Your current party contains " + x[0].name + ", " + x[1].name);
stats.appendChild(node);
const element = document.getElementById("container");
element.appendChild(stats)
  console.log("Here are their stats:");
let statsLog = document.getElementById("menu-items");  
  for (let i = 0; i < currentParty.length; i++){
    debugger;
    let li = document.createElement("li");
    li.innerHTML = "Name: " + x[i].name;
    statsLog.appendChild(li);
    li = document.createElement("li")
    li.innerHTML = "HP: " + x[i].hp;
    statsLog.appendChild(li);
    li = document.createElement("li")
    console.log("MP: " + x[i].mp);
    console.log("Physical Attack: " + x[i].pAtk);
    console.log("Phsyical Defense: " + x[i].pDef);
    console.log("Magic Attack: " + x[i].mAtk);
    console.log("Magic Defense: " + x[i].mDef);
    console.log("Skills: " + x[i].skills);
  }
};



//=======================================
//======================================
//Menu functionality

let menu = ["Items", "Stats", "Save"];
//=====================================

let enemyParty = [];
let currentParty = [];
//======================================
// all testing goes below
currentParty = [ando, marie];
enemyParty = [iceman.name, iceman.name, iceman.name];

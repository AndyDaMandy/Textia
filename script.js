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
const element = document.getElementById("container");
let stats = document.getElementById("party-status")
let statsLog = document.getElementById("menu-items");  
if (statsLog != ""){
  
  statsLog.innerHTML = "";
}
stats.innerHTML ="Your current party contains " + x[0].name + ", " + x[1].name;
document.getElementById("line-1").innerHTML = "Here are their stats:";
  for (let i = 0; i < currentParty.length; i++){
    let li = document.createElement("li");
    li.innerHTML = "Name: " + x[i].name;
      statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "HP: " + x[i].hp;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "MP: " + x[i].mp;
      statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Physical Attack: " + x[i].pAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Phsyical Defense: " + x[i].pDef;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Attack: " + x[i].mAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Defense: " + x[i].mDef;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Skills: " + x[i].skills;
     statsLog.appendChild(li);
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

//Characters go here
let ando = {
  name: "Ando",
  level: 1,
  hp: 10,
  mp: 5,
  pAtk: 5,
  pDef: 5,
  mAtk: 1,
  mDef: 2,
  skills: [],
  weapon: "Test",
  type: "player"
  };
let marie = {
  name: "Marie",
  level: 1,
  hp: 8,
  mp: 10,
  pAtk: 2,
  pDef: 2,
  mAtk: 6,
  mDef: 5,
  skills: [],
  weapon: "Test",
  type: "player"
  };
//========================================
//enemies go here
const iceman = {
  name: "Ice Man",
  level: 1,
  hp: 8,
  mp: 5,
  pAtk: 1,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  eSkills: [],
  type: "enemy"
  };

//===================================
/*
Elements, the elemental system is system. Fire and ice are opposites, thunder/water are opposites.
*/
//==================================
const iceEl = {
  element: "Ice",
  des: "Ice Element, strong against Fire"
  };
const fireEl = {
  element: "Fire",
  des: "Fire Element, strong against Ice."
  };
const thunEl = {
  element: "Thunder",
  des: "Thunder Element, strong against Water."
  };
const watEl = {
  element: "Water",
  des: "Water Element, strong against Thunder"
  };
//============================
//Skills
//===========================
const fire = {
  name: "Fire",
  type: "Magic",
  element: fireEl,
  des: "Hits enemy with magic-based fire damage",
  pow: 1
  };
const basher = {
  name: "Basher",
  type: "Physical",
  des: "Deals phsyical damage to 1 enemy",
  pow: 1
  };
const iceSlash = {
  name: "Ice Slash",
  type: "Phsyical",
  des: "Deals phsyical and ice damage to 1 enemy",
  element: iceEl,
  pow: 1
}
//======================================
//Items go here
const potion = {
  name: "Potion",
  type: "Healing",
  des: "Heals 5 points of HP.",
  pow: 5
  };
const magicPotion = {
  name: "Magic Potion",
  type: "Healing",
  des: "Heals 5 points of MP.",
  pow: 5
};
//=======================================
// Weapons go here
const woodSword = {
  name: "Wooden Sword",
  type: "Sword",
  des: "A basic wooden sword",
  atr: "Physical",
  pow: 1
  };
const woodStaff = {
  name: "Wooden Staff",
  type: "Staff",
  des: "A basic Staff",
  atr: "Magical",
  pow: 1
  };
//======================================
//Menu items
function showStats (x) {
  const element = document.getElementById("stats-menu");
  let stats = document.getElementById("party-status")
  let statsLog = document.getElementById("menu-items");
  let statsLine = document.getElementById("stats-line");
  //checks if this has been run before and clears the content ahead of it.
  if (statsLog != ""){
  
  statsLog.innerHTML = "";
  }
  stats.innerHTML ="Your current party: " + x[0].name + ", " + x[1].name;
  document.getElementById("line-1").innerHTML = "Here are their stats:";
  for (let i = 0; i < currentParty.length; i++){
    let li = document.createElement("li");
    li.innerHTML = "Name: " + x[i].name;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "Level: " + x[i].level;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "Weapon: " + x[i].weapon.name + " - " + "Type: " + x[i].weapon.type + " - " + "Attribute: " + x[i].weapon.atr + " - " + x[i].weapon.des + " Power: " + x[i].weapon.pow;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "HP: " + x[i].hp;
      statsLog.appendChild(li);
      li = document.createElement("li");
    li.innerHTML = "MP: " + x[i].mp;
      statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Physical Attack: " + x[i].pAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Physical Defense: " + x[i].pDef;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Attack: " + x[i].mAtk;
     statsLog.appendChild(li);
      li = document.createElement("li")
    li.innerHTML = "Magic Defense: " + x[i].mDef;
     statsLog.appendChild(li);
      li = document.createElement("li");
  let skillsList = [];
    for (let b = 0; b < x[i].skills.length; b++){
      skillsList.push(x[i].skills[b].name);
    };
   let joined = skillsList.join(", ");
    li.innerHTML = "Skills: " + joined;       
    statsLog.appendChild(li);
  };
  statsLine.hidden = false;
  };
function showInventory() {
  let inventorySlot = document.getElementById("inventory-items");
  if (inventorySlot != ""){
  
    inventorySlot.innerHTML = "";
  }
  let inventoryMenu = document.getElementById("inventory-menu");
  let pusher = function (item) { 
    let li = document.createElement("li");
    li.innerHTML = item.name + ": " + "Type: " + item.type + " - " + item.des + " - Power:" + item.pow;
    inventorySlot.appendChild(li)};
    inventory.forEach(pusher);
  inventoryMenu.hidden = false;
  };
function save () {

  };

let shop = document.getElementById("shop");
let moneyShow = document.getElementById("money");
let shopButton = document.getElementById("shop-button");
function openShop(){
  moneyShow.innerHTML = "$" + money;
  shop.hidden = false;
  };
function closeShop() {
  shop.hidden = true;
};
//=======================================
//======================================
//Menu functionality, must go below each menu item

let menu = document.getElementById("open-menu");
function openMenu(){
  document.getElementById("save-button").hidden = false;
  document.getElementById("inventory-button").hidden = false;
  document.getElementById("show-stats").hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function closeMenu() {
  document.getElementById("save-button").hidden = true;
  //inventory
  document.getElementById("inventory-button").hidden = true;
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //party stats
    document.getElementById("show-stats").hidden = true;
    document.getElementById("party-status").innerHTML = "";
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  document.getElementById("close-menu").hidden = true;
  };
/*
The game flow will be simple. The game will go through "Areas", each one being a div. Each Div will be a town/level or pass through. By toggling the hidden property in html we can hide the divs as necessary. The progression will be linear, at least for now....
A gamestate value will be assigned to each area/location, thus allowing the travel function to take you through each level. Battles will need to be manually accessed I think...
*/
//Battle Mode
let battleState = false;
const battleMode = document.getElementById("battle-mode");
const commands = document.getElementById("commands");
const enemyPlace = document.getElementById("enemies");
const partyPlace = document.getElementById("party");
const info = document.getElementById("info");
const end = document.getElementById("end");
//calcs go above battle func
function attack (char, target){
};
function skills(skill, char, target){
};
function levelUp(char){};
function clearBattle() {
  adv.hidden = false;
  battleState = false;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  //I think this needs a better way of deciding where to go after a battle....
};
function endBattle(loc) {
 // if (enemyParty.length === 0) {};
 let endButton = document.createElement("button");
 endButton.innerHTML = "End Battle";
 endButton.addEventListener('click', function (x) {debugger; x = loc; clearBattle(); move(x)});
 end.appendChild(endButton);
};
function battle(en, location) {
  adv.hidden = true;
  battleState = true;
  battleMode.hidden = false;
  mainMenu.hidden = true;
  enemyParty = en;
  let p = document.createElement("h4");
  p.innerHTML = "Enemies: " + enemyParty[0].name;
  enemyPlace.appendChild(p);
  //loads x as enemy party
  let p2 = document.createElement("h4");
  p2.innerHTML = "Party: " + currentParty[0].name + ", " + currentParty[1].name;
  partyPlace.appendChild(p2);
  // start phase
  let p3 = document.createElement("p");
  p3.innerHTML = enemyParty.length + " enemies appeared!"
  info.appendChild(p3);
  let p4 = document.createElement("p");
  p4.innerHTML = currentParty[0].name + "'s turn." + "Please select a command: ";
  info.appendChild(p4);
  // Phase 1
  if {}
  //loads character party as is and adds as new elements
  //loads functions for level up and such
  //final function hides buttons, etc.
  //There needs to be a way to return to the previous state once a battle is open, perhaps a new button opens up
  endBattle(location);
};
//=====================================
// Area 1
const townOne = document.getElementById("town-1");
//Forest 1, Forest 1-1, 1-2
const forestOne = document.getElementById("forest-1");
const forestOneOne = document.getElementById("forest-1-1");
const forestOneTwo = document.getElementById("forest-1-2");

//=====================================
let inventory = [];
let weaponsOwned = [];
let armorOwned = [];
let accesoriesOwned = [];
let keyItems = [];
let enemyParty = [];
let currentParty = [];
let money;
let gameState;
//===================================
//Game State and game flow will go here:
function gameFlow (state) {
//Area 1
  if (state === 0) {
  townOne.hidden = false;
  forestOne.hidden = true;
  shopButton.hidden = false;
  };
//Forest 1
  if (state === 1) {
    debugger;
  townOne.hidden = true;
  forestOne.hidden = false;
  forestOneOne.hidden = false;
  forestOneTwo.hidden = true;
  shopButton.hidden = true;
  closeShop();
  };
//Forest 1-2
  if (state === 2){
    forestOneOne.hidden = true;
    forestOneTwo.hidden = false;
  }
};
function move (state) {
  gameState = state;
  gameFlow(gameState);
};
//==================================
// all testing goes below
currentParty = [ando, marie];
enemyParty = [iceman];
ando.skills.push(basher);
marie.skills.push(fire);
ando.skills.push(iceSlash);

//======================================
// Start Game , must go below everything else
//======================================
const begin = document.getElementById("begin");
const start = document.getElementById("start-game");
const mainMenu = document.getElementById("main-menu");
const adv = document.getElementById("adv-mode");
function startGame(){
  adv.hidden = false;
  mainMenu.hidden = false;
  menu.hidden = false;
  shopButton.hidden = false;
  begin.hidden = true;
  gameState = 0;
  move(gameState);
  money = 100;
  ando.weapon = woodSword;
  marie.weapon = woodStaff;
  inventory.push(potion);
  inventory.push(potion);
  inventory.push(magicPotion);
  };
function loadGame(){

};
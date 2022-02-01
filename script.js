//https://github.com/ZaDarkSide/simpleStorage
//simple storage documentation above
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
  effect: function (x) {x.hp + 5;},
  cost: 5
  };
const magicPotion = {
  name: "Magic Potion",
  type: "Healing",
  des: "Heals 5 points of MP.",
  effect: function (x) {x.mp + 5},
  cost: 5
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
    li.innerHTML = item.name + ": " + "Type: " + item.type + " - " + item.des;
    inventorySlot.appendChild(li)};
    inventory.forEach(pusher);
  inventoryMenu.hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function save () {
  simpleStorage.set("ando", ando);
  simpleStorage.set("marie", marie);
  simpleStorage.set("currentParty", currentParty);
  simpleStorage.set("inventory", inventory);
  simpleStorage.set("money", money);
  simpleStorage.set("gamestate", gameState);
  simpleStorage.set("gamecheck", gameCheck);
  document.getElementById("save-menu").hidden = false;
  };

let shop = document.getElementById("shop");
let moneyShow = document.getElementById("money");
let shopButton = document.getElementById("shop-button");
function openShop(){
  moneyShow.innerHTML = "$" + money;
  shop.hidden = false;
  shopFlow();
  openMenu(); 
  showInventory();
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
  //hide save
  document.getElementById("save-menu").hidden = true;
  document.getElementById("close-menu").hidden = true;
  };
/*
The game flow will be simple. The game will go through "Areas", each one being a div. Each Div will be a town/level or pass through. By toggling the hidden property in html we can hide the divs as necessary. The progression will be linear, at least for now....
A gamestate value will be assigned to each area/location, thus allowing the travel function to take you through each level. Battles will need to be manually accessed I think...
*/
//Battle Mode
let battleState = 0;
const battleMode = document.getElementById("battle-mode");
const commands = document.getElementById("commands");
const enemyPlace = document.getElementById("enemies");
const partyPlace = document.getElementById("party");
const info = document.getElementById("info");
const end = document.getElementById("end");
const change = document.getElementById("p-com");
//calcs go above battle func
function targetSelect (){
  debugger;
  let targ = [];
  let count = 0;
  function createTarg (x){
   let btn = document.createElement("button");
   btn.innerHTML = x.name;
   btn.addEventListener('click', function (){targ.push(count)})
   count++;
  }
  if (targ.length > 1){
   let p = document.createElement("p");
    p.innerHTML = "Which enemy will you select?";
    enemyParty.forEach(createTarg);
  } else {
      targ.push(0);
  };
  function targConv(y) {
    if (y.length === 1){
      return enemyParty[y[0]];
    }
  }
};
function attackCalc (char, target){
};
function skills(skill, char, target){
};
function levelUp(char){};
function clearBattle() {
  adv.hidden = false;
  battleState = 0;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  //I think this needs a better way of deciding where to go after a battle....
};
function endBattle(loc) {
 // if (enemyParty.length === 0) {};
 let endButton = document.createElement("button");
 endButton.innerHTML = "End Battle";
 endButton.addEventListener('click', function (x) {x = loc; clearBattle(); move(x)});
 end.appendChild(endButton);
};
function battle(en, location) {
  //battleState controls battle flow.
  // 0 = battle off, 1 == player 1 phase. 2 == player 2 phase. 3 == enemy 1 phase, 4 = enemy 2 phase, 3 == enemy 4 phase, 5 == turn end.
  adv.hidden = true;
  battleState = 1;
  battleMode.hidden = false;
  mainMenu.hidden = true;
  enemyParty = en;
   if (enemyParty.length === 1){
    let p = document.createElement("h4");
    p.innerHTML = "Enemies: " + enemyParty[0].name;
    enemyPlace.appendChild(p);
    }
    if (enemyParty.length === 2) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name;
        enemyPlace.appendChild(p);
      }
    if (enemyParty.length === 3) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name + ", " + enemyParty[2].name;
        enemyPlace.appendChild(p);
      }
  //loads x as enemy party
  let p2 = document.createElement("h4");
  p2.innerHTML = "Party: " + currentParty[0].name + ", " + currentParty[1].name;
  partyPlace.appendChild(p2);
  // start phase
  let p3 = document.createElement("p");
  p3.innerHTML = enemyParty.length + " enemies appeared!"
  info.appendChild(p3);
  battleMove(battleState);
  // Phase 1
  //sets each button to move forward with phase 1
  //loads character party as is and adds as new elements
  //loads functions for level up and such
  //final function hides buttons, etc.
  //There needs to be a way to return to the previous state once a battle is open, perhaps a new button opens up
  endBattle(location);
};
function battleMove(x) {
  if (x === 0){
    clearBattle();
    endBattle();
  };
  if (x === 1){
    //first it adds the character's turn and commands:
      let p4 = document.createElement("p");
        p4.innerHTML = currentParty[0].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){targetSelect();});
      let skl = document.createElement("button");
      skl.innerHTML = "Skills";
      let itm = document.createElement("button");
      itm.innerHTML = "Items";
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
     // button.addEventListener('click', function (){});
      
  };
  if (x === 2){
    let p4 = document.createElement("p");
      p4.innerHTML = currentParty[1].name + "'s turn." + "Please select a command: ";
      info.appendChild(p4);
  };
  if (x === 3){
        let p4 = document.createElement("p");
      p4.innerHTML = currentParty[2].name + "'s turn." + "Please select a command: ";
      info.appendChild(p4); 
  };

}
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
let shopState;
//===================================
//Game State and game flow will go here:
function gameFlow (state) {
//Area 1
  if (state === 0) {
  townOne.hidden = false;
  forestOne.hidden = true;
  shopButton.hidden = false;
  shopState = 0;
  };
//Forest 1
  if (state === 1) {
  townOne.hidden = true;
  forestOne.hidden = false;
  forestOneOne.hidden = false;
  forestOneTwo.hidden = true;
  shopButton.hidden = true;
  closeShop();
  };
//Forest 1-2
  if (state === 2){
    forestOne.hidden = false;
    forestOneOne.hidden = true;
    forestOneTwo.hidden = false;
  }
};
function move (state) {
  gameState = state;
  gameFlow(gameState);
};
//shop functions
function purchaser (itemVal){
  if (money >= itemVal.cost) {
    document.getElementById("broke").hidden = true;
    inventory.push(itemVal);
    money -= itemVal.cost;
    document.getElementById("money").innerHTML = "$" + money;
  } else {
    document.getElementById("broke").hidden = false;
  }
};
let shopItems = document.getElementById("shop-items");
function shopFlow (){
  if (shopItems.length != 0){
    shopItems.innerHTML = "";
  }
  //additional shops can be added easily
  function pusher (item) {
   let btn = document.createElement("button");
   btn.innerHTML = item.name + ": cost: " + item.cost;
   btn.addEventListener('click', function (x) {x =item ; purchaser(x); openMenu(); showInventory();});
    shopItems.appendChild(btn);
  }
  // Shop 1 - Area Town
    if (shopState === 0){
    let shopOne = [potion, magicPotion];
    shopOne.forEach(pusher);
    }

}
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
let gameCheck = false;
function startGame(){
  adv.hidden = false;
  mainMenu.hidden = false;
  menu.hidden = false;
  shopButton.hidden = false;
  begin.hidden = true;
  gameState = 0;
  move(gameState);
  money = 30;
  ando.weapon = woodSword;
  marie.weapon = woodStaff;
  inventory.push(potion);
  inventory.push(potion);
  inventory.push(magicPotion);
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
 ando = simpleStorage.get("ando", ando);
 marie = simpleStorage.get("marie", marie);
 currentParty = simpleStorage.get("currentParty", currentParty);
  inventory =  simpleStorage.get("inventory", inventory);
  money =  simpleStorage.get("money", money);
 gameState = simpleStorage.get("gamestate", gameState);
  move(gameState);
  adv.hidden = false;
  mainMenu.hidden = false;
  menu.hidden = false;
  begin.hidden = true;
};
 function check() {
   debugger;
  gameCheck = simpleStorage.get("gamecheck", gameCheck);
  if (gameCheck  === true)
  document.getElementById("continue").hidden = false;
   
}
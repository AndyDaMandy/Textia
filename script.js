//https://github.com/ZaDarkSide/simpleStorage
//Things that need to be done:
//Adding all target to items and support skills
//begin game balancing
//enmity system? Ando should get hit more.
//Item descriptions needed in battle?
//need to set up some randomness to attack damage.
//Need to create an armor system! Maybe....
//new enemies needed, new branching paths as well.
//need to set up a proper random function for battle calculation.
//new places to fight enemies.
//new items, shop etc.
//shop needs to have branch for weapons, possibly armor
//clean up battle selection functions a bit, make them less chunky.
//Characters go here. chp and chmp are "current hp and mp" respectively
class Player {
  constructor(name, level, hp, chp, mp, cmp, pAtk, pDef, mAtk, mDef, exp, buff, skills, support, weapon, type) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.chp = chp;
    this.mp = mp;
    this.cmp = cmp;
    this.pAtk = pAtk;
    this.pDef = pDef;
    this.mAtk = mAtk;
    this.mDef = mDef;
    this.exp = exp;
    this.buff = buff;
    this.skills = skills;
    this.support = support;
    this.weapon = weapon;
    this.type = type;
  }
  };
  //name, level, hp, chp, mp, cmp, pAtk, pDef, mAtk, mDef, exp, buff, skills, support, weapon, type
let ando = new Player('Ando', 1, 15, 15, 5, 5, 10, 4, 1, 2, 0, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player');
let marie = new Player('Marie', 1, 10, 10, 13, 13, 2, 2, 10, 5, 0, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player')
let julie = new Player('Julie', 3, 14, 14, 7, 7, 10, 5, 3, 6, 30, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player')
let ari = new Player('Ari', 1, 8, 8, 6, 6, 10, 2, 7, 3, 0, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player');
//Elements, the elemental system is system. Fire and ice are opposites, thunder/water are opposites.
class Element {
  constructor(element, des){
    this.element = element;
    this.des - des;
  }
}
const iceEl = new Element('Ice', 'Ice Element, strong against Fire');
const fireEl = new Element('Fire', 'Fire Element, strong against Ice.');
const thunEl = new Element('Thunder', 'Thunder Element, strong against Water.');
const watEl = new Element('Water', 'Water Element, strong against Thunder.');
//========================================
//enemies go here
class Enemy {
  constructor(name, level, hp, mp, pAtk, pDef, mAtk, mDef, weakness, exp, money, eSkills, type){
    this.name = name;
    this.level = level;
    this.hp = hp,
    this.mp = mp;
    this.pAtk = pAtk,
    this.pDef = pDef,
    this.mAtk = mAtk,
    this.mDef = mDef,
    this.weakness = weakness;
    this.exp = exp;
    this.money = money;
    this.eSkills = eSkills,
    this.type = type;
  }
};
const iceman = new Enemy ('Ice Man', 1, 8, 5, 5, 2, 1, 1, fireEl, 1, 1, [], 'Frost');
//if an enemy is flying, bows hit for extra damage.
const bat = new Enemy('Bat', 1,7, 3, 4, 2, 1, 1, "None", 1, 1, [], 'Flying');
const familiar = new Enemy('Familiar', 1, 55, 3, 10, 4, 0, 2, thunEl, 1, 0, [], 'Familiar');
const goblin = {
  name: "Goblin",
  level: 1,
  hp: 10,
  mp: 5,
  pAtk: 5,
  pDef: 2,
  mAtk: 1,
  mDef: 1,
  weakness: iceEl,
  exp: 1,
  money: 1,
  eSkills: [],
  type: "Goblin"
  };
const potatoThief = {
  name: "Potato Thief",
  level: 1,
  hp: 15,
  mp: 5,
  pAtk: 5,
  pDef: 2,
  mAtk: 1,
  mDef: 1,
  weakness: "None",
  exp: 1,
  money: 2,
  eSkills: [],
  type: "Goblin"
  };
const livingTree = {
  name: "Living Tree",
  level: 1,
  hp: 70,
  mp: 5,
  pAtk: 9,
  pDef: 4,
  mAtk: 1,
  mDef: 1,
  weakness: fireEl,
  exp: 15,
  money: 20,
  eSkills: [],
  type: "enemy"
  };
//============================
//Skills
//===========================

class Skill {
  constructor(name, type, element, des, pow, cost, target){
    this.name = name;
    this.type = type;
    this.element = element;
    this.des = des;
    this.pow = pow;
    this.cost = cost;
    this.target = target;
  }
};
const thunder = new Skill('Thunder', 'Magic', thunEl, 'Hits enemy with weak magic-based thunder damage', 4, 5, 'Single');
//need a way to show a skill hits all or not....
const water = new Skill('Water','Magic', watEl, 'Hits enemy with weak magic-based water damage', 4, 6, 'All');
const volley = new Skill('Volley', 'Physical', null, 'Hits all enemies with arrows', 3, 6, 'All');
const fire = {
  name: "Fire",
  type: "Magic",
  element: fireEl,
  des: "Hits enemy with magic-based fire damage",
  pow: 2,
  cost: 3
  };
const basher = {
  name: "Basher",
  type: "Physical",
  des: "Deals physical damage to 1 enemy",
  pow: 4,
  cost: 3,
  target: 'Single'
  };
const slashAll = {
    name: "Slash All",
    type: "Physical",
    des: "Deals physical damage to all enemies",
    pow: 4,
    cost: 5,
    target: 'All'
    };
const iceSlash = {
  name: "Ice Slash",
  type: "Physical",
  des: "Deals physical and ice damage to 1 enemy",
  element: iceEl,
  pow: 1,
  cost: 2
  };
const waterArrow = {
  name: "Water Arrow",
  type: "Physical",
  des: "Deals physical and water damage to 1 enemy",
  element: watEl,
  pow: 1,
  cost: 2
  };
//Support Skils
const cure = {
  name: "Cure",
  type: "Healing",
  des: "Heals target character for 5 HP",
  element: watEl,
  pow: 5,
  cost: 2,
  target: 'Single'
  };
const cureAll = new Skill('Cure All', 'Healing', 'None', 'Heals all allies', 5, 5, 'All');
const atkBoost = {
  name: "Attack Boost",
  type: "Attack Buff",
  des: "Boosts attack for 1 turn.",
  pow: 1,
  cost: 2
  };
const defBoost = {
  name: "Defense Boost",
  type: "Defense Buff",
  des: "Boosts attack for 1 turn.",
  pow: 1,
  cost: 2
  };
//======================================
//Items go here
const potion = {
  name: "Potion",
  type: "Healing",
  des: "Heals 5 points of HP.",
  effect: 5,
  cost: 5
  };
const highpotion = {
    name: "High Potion",
    type: "Healing",
    des: "Heals 10 points of HP.",
    effect: 10,
    cost: 10
    };
const magicPotion = {
  name: "Magic Potion",
  type: "mHealing",
  des: "Heals 5 points of MP.",
  effect: 5,
  cost: 8
  };
const revivalPotion = {
  name: "Revival Potion",
  type: "Rev",
  des: "Revives ally with 5 points of hp.",
  effect: 5,
  cost: 15
  };
//=======================================
// Weapons go here
//characters can only equip certain types of weapons, enforced by the equip screen.
class Weapon {
  constructor(name, type, des, atr, pow, element){
    this.name = name;
    this.type = type;
    this.des = des;
    this.atr = atr;
    this.pow = pow;
    this.element = element;
  }
}
const iceStaff = new Weapon('Ice Staff', 'Staff', 'A basic staff imbued with Ice Magic','Magical', 2, iceEl);
const flameSword = {
  name: "Flame Sword",
  type: "Sword",
  des: "A basic sword imbued with Fire Magic",
  atr: "Physical",
  element: fireEl,
  pow: 3,
}
const woodSword = {
  name: "Wooden Sword",
  type: "Sword",
  des: "A basic wooden sword",
  atr: "Physical",
  pow: 1,
  };
const ironSword = {
    name: "Iron Sword",
    type: "Sword",
    des: "An iron sword",
    atr: "Physical",
    pow: 3,
    };
const woodStaff = {
  name: "Wooden Staff",
  type: "Staff",
  des: "A basic Staff",
  atr: "Magical",
  pow: 1,
  };
const woodBow = {
  name: "Wooden Bow",
  type: "Bow",
  des: "A basic Bow and Arrow set",
  atr: "Physical",
  pow: 1,
  };
const sparkBow = {
    name: "Spark Bow",
    type: "Bow",
    des: "A weak bow imbued with Thunder",
    atr: "Physical",
    element: thunEl,
    pow: 2,
    };
const ironSpear = new Weapon('Iron Spear', 'Spear', 'A simple spear with an iron tip', 'Physical', 3);
const iceSpear = new Weapon('Ice Spear', 'Spear', 'A spear imbued with Ice Magic', 'Physical', 3, iceEl);
const excalibur = new Weapon('Excalibur', 'Sword','The most powerful blade in the world','Physical',1000);

//======================================
//Menu items
//showStats needs to be refactored to generate buttons

//new menu for swapping party members
function swapChars(){
  //equip
  document.getElementById("equip-screen").hidden = true;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //inventory
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //party stats
  document.getElementById("stats-menu").hidden = true;
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
    //formation menu
    document.getElementById("formation-menu").hidden = true;
  //save remove
  document.getElementById("save-menu").hidden = true;
  //start next
  
  document.getElementById("reserve-chars").innerHTML = "";
  document.getElementById("main-chars").innerHTML = "";
  document.getElementById("swap-menu").hidden = false;
  let btnGen = (char) => {
    let btn = document.createElement("button");
    btn.textContent = char.name;
    btn.addEventListener('click', () => {swapper(char)});
    document.getElementById("reserve-chars").appendChild(btn);
  }
  if (reserveParty.length > 0) {
    reserveParty.forEach(btnGen);
  } else {
    document.getElementById("reserve-chars").textContent = "There are no reserve characters availabe to swap. How did you find this button?";
  }
};
const swapper = (char) => {
  document.getElementById("reserve-chars").innerHTML = "";
  document.getElementById("main-chars").innerHTML = "";
  let arr
  let newarr;
  let btnGen = (old) => {
    let btn = document.createElement("button");
    btn.textContent = old.name;
    btn.addEventListener('click', () => {
      debugger;
      document.getElementById("main-chars").textContent = old.name + " has been swapped with " + char.name;
      arr = currentParty.splice(currentParty.indexOf(old), 1);
      newarr = reserveParty.splice(reserveParty.indexOf(char), 1);
      reserveParty.push(arr[0]);
      currentParty.push(newarr[0]);
    });
    document.getElementById("main-chars").appendChild(btn);
  }
  currentParty.forEach(btnGen);
}

function partyFormation(){
  document.getElementById("equip-screen").hidden = true;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //save remove
  document.getElementById("save-menu").hidden = true;
  //formation
  document.getElementById("formation-menu").hidden = true;
  //inventory
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //hide swap
  //party stats
  document.getElementById("stats-menu").hidden = true;
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  document.getElementById("swap-menu").hidden = true;
    //save remove
    document.getElementById("save-menu").hidden = true;
  //repeats for how many party members are available
  document.getElementById("print-party").innerHTML = "";
  document.getElementById("select-party").innerHTML = "";
  document.getElementById("formation-menu").hidden = false;
  let partyClone = [];
  currentParty.map((x) =>{partyClone.push(x)});
  let final = [];
  //const index = partyClone.map(object => object.name).indexOf(partymem.name);
    let pusher = (x) => {final.push(x)};
  for (let i = 0; i < partyClone.length; i++){
    let btn = document.createElement("button");
    btn.textContent = partyClone[i].name;
    btn.addEventListener('click', () => {
      pusher(partyClone[i]); 
    let update = document.createElement("p");
    update.innerText = partyClone[i].name + " has been added!";
    document.getElementById("print-party").appendChild(update);
    btn.hidden = true;
    });
    document.getElementById("select-party").appendChild(btn);
  };
  function finalCheck(){
    document.getElementById("print-party").innerHTML = "";
    if (final.length != partyClone.length){
      alert("Sorry, you can't make your party smaller! Finish selecting please!")
    } else {
    currentParty = final;
    let names = currentParty.map((x) => x.name);
    let finalOutput = document.createElement("p");
    finalOutput.innerText = "Your final party order: " + names.join(", ");
    document.getElementById("print-party").appendChild(finalOutput);
    }
  }
 let finish = document.createElement("button");
finish.textContent = "Finish Selection";
finish.addEventListener('click', () => {finalCheck();})
document.getElementById("select-party").appendChild(finish);
}

function showStats(){
  //equip
  document.getElementById("equip-screen").hidden = true;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //save remove
  document.getElementById("save-menu").hidden = true;
  //formation
  document.getElementById("formation-menu").hidden = true;
  //inventory
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //hide swap
  document.getElementById("swap-menu").hidden = true;
    //save remove
    document.getElementById("save-menu").hidden = true;

  document.getElementById("stats-menu").hidden = false;
  let statsLog = document.getElementById("menu-items");
  let partyBtns = document.getElementById("party-btns");
  partyBtns.innerHTML = "";
 // partyStats.innerHTML ="Your current party: ";
  if (statsLog != ""){ 
    statsLog.innerHTML = "";
    }
  let btnGen = (char) => {
    let btn = document.createElement("button");
    btn.textContent = char.name;
    btn.addEventListener('click', () => {showStatus(char)});
    partyBtns.appendChild(btn);
  }
  currentParty.forEach(btnGen);
  if (reserveParty.length >= 1){
    reserveParty.forEach(btnGen);
  }
}
function showStatus (x) {
  document.getElementById("stats-menu").hidden = false;
  let statsLog = document.getElementById("menu-items");
  if (statsLog != ""){ 
  statsLog.innerHTML = "";
  }
  let li = document.createElement("li");
  li.textContent = "Name: " + x.name;
    statsLog.appendChild(li);
    li = document.createElement("li");
  li.textContent = "Level: " + x.level;
    statsLog.appendChild(li);
    li = document.createElement("li");
  li.textContent = "Weapon: " + x.weapon.name + " - " + "Type: " + x.weapon.type + " - " + "Attribute: " + x.weapon.atr + " - " + x.weapon.des + " - Power: " + x.weapon.pow;
    statsLog.appendChild(li);
    li = document.createElement("li");
  li.textContent = "HP: " + x.hp;
    statsLog.appendChild(li);
    li = document.createElement("li");
  li.textContent = "MP: " + x.mp;
    statsLog.appendChild(li);
    li = document.createElement("li")
  li.textContent = "Physical Attack: " + x.pAtk;
   statsLog.appendChild(li);
    li = document.createElement("li")
  li.textContent = "Physical Defense: " + x.pDef;
   statsLog.appendChild(li);
    li = document.createElement("li")
  li.textContent = "Magic Attack: " + x.mAtk;
   statsLog.appendChild(li);
    li = document.createElement("li")
  li.textContent = "Magic Defense: " + x.mDef;
   statsLog.appendChild(li);
    li = document.createElement("li");
  let skillsList = [];
  for (let b = 0; b < x.skills.length; b++){
    skillsList.push(x.skills[b].name);
  };
  let joined = skillsList.join(", ");
  li.textContent = "Skills: " + joined;       
  statsLog.appendChild(li);
  li = document.createElement("li");
  let supportList = [];
  for (let b = 0; b < x.support.length; b++){
    supportList.push(x.support[b].name);
  };
 let joined2 = supportList.join(", ");
  li.textContent = "Support Skills: " + joined2;       
  statsLog.appendChild(li);
};
function showInventory() {
  //equip
  document.getElementById("equip-screen").hidden = true;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //formation
  document.getElementById("formation-menu").hidden = true;
  //party stats
  document.getElementById("stats-menu").hidden = true;
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  //hide swap
  document.getElementById("swap-menu").hidden = true;
    //save remove
    document.getElementById("save-menu").hidden = true;

  let inventorySlot = document.getElementById("inventory-items");
  if (inventorySlot != ""){
  
    inventorySlot.innerHTML = "";
  }
  let cash = document.createElement("p");
  cash.textContent = "Money: $"+ money;
  inventorySlot.appendChild(cash);
  let inventoryMenu = document.getElementById("inventory-menu");
  let pusher = function (item) { 
    if (item.type === "Sword" || item.type === "Bow" || item.type === "Staff" || item.type === "Spear"){
      let li2 = document.createElement("li");
      li2.textContent = item.name + ": " + "Type: " + item.type + " - Power: " + item.pow + " - " + item.des;
      inventorySlot.appendChild(li2)
  } else {
    let li = document.createElement("li");
    li.textContent = item.name + ": " + "Type: " + item.type + " - " + item.des;
    inventorySlot.appendChild(li)
    }
  };
    inventory.forEach(pusher);
    weaponsOwned.forEach(pusher);
  inventoryMenu.hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function equipSelect(char, weapon){
  //clears equip items, only shows characters/ creates a back button...
  //needs to swap the items.
  if (document.getElementById("equip-party").innerHTML 
  != ""){
    document.getElementById("equip-party").innerHTML = "";
    
  }
  if (document.getElementById("equipped-text").innerHTML != ""){
    document.getElementById("equipped-text").innerHTML = "";
  }
  let btn = document.createElement("button");
    btn.textContent = char.name + " - Equipped: " + char.weapon.name;
    btn.addEventListener('click', function(){
      weaponsOwned.push(char.weapon);
      let equipped = document.createElement("p");
      equipped.textContent = char.name + " equipped " +  weapon.name + "!"
      document.getElementById("equipped-text").appendChild(equipped);
      char.weapon = weapon;
      weaponsOwned.splice(weaponsOwned.indexOf(weapon), 1);
      equip();
    });
    document.getElementById("equip-party").appendChild(btn);
    

}
function equip (){
  document.getElementById("equip-screen").hidden = false;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //formation
  document.getElementById("formation-menu").hidden = true;
  //inventory
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //party stats
  document.getElementById("stats-menu").hidden = true;
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  //hide save
  document.getElementById("save-menu").hidden = true;
  //hide swap
  document.getElementById("swap-menu").hidden = true;
  let checker = function (weapon){
   // function needs to branch based on the character...
      if (weapon.type === "Sword"){
        let button = document.createElement("button");
        button.textContent = weapon.name;
        button.addEventListener('click', () => { equipSelect(ando, weapon); });
        document.getElementById("equipment").appendChild(button);
      }
      if (weapon.type === "Staff"){
        let button4 = document.createElement("button");
        button4.textContent = weapon.name;
        button4.addEventListener('click', () => { equipSelect(marie, weapon); });
        document.getElementById("equipment").appendChild(button4);
      }
      if (weapon.type === "Bow"){
        let button3 = document.createElement("button");
        button3.textContent = weapon.name;
        button3.addEventListener('click', () => { equipSelect(julie, weapon); });
        document.getElementById("equipment").appendChild(button3);
      }
      if (weapon.type === "Spear"){
        let button2 = document.createElement("button");
        button2.textContent = weapon.name;
        button2.addEventListener('click', () => {equipSelect(ari, weapon); });
        document.getElementById("equipment").appendChild(button2);
      }
  }
 weaponsOwned.forEach(checker);
  document.getElementById("close-menu").hidden = false;
}
function save () {
  simpleStorage.set("ando",  JSON.stringify(ando));
  simpleStorage.set("marie", JSON.stringify(marie));
  simpleStorage.set("julie", JSON.stringify(julie));
  simpleStorage.set("ari", JSON.stringify(ari));
  simpleStorage.set("currentParty", currentParty);
  simpleStorage.set("reserveParty", reserveParty);
  simpleStorage.set("inventory", inventory);
  simpleStorage.set("weaponsOwned", weaponsOwned);
  simpleStorage.set("money", money);
  simpleStorage.set("opened", JSON.stringify(document.getElementsByClassName("opened")));
  simpleStorage.set("opened", opened);
  simpleStorage.set("gamestate", gameState);
  simpleStorage.set("gamecheck", gameCheck);
 // simpleStorage.set("chest", chests.hidden = true);
  document.getElementById("save-menu").hidden = false;
  };
//Global shop variables
  let shop = document.getElementById("shop");
  let moneyShow = document.getElementById("money");
  let shopButton = document.getElementById("shop-button");
  //initializes money earlier;
  let money;
function openShop(){
  moneyShow.textContent = "$" + money;
  shop.hidden = false;
  shopFlow();
  openMenu(); 
  showInventory();
  };
function closeShop() {
  shop.hidden = true;
  closeMenu();
  };
//=======================================
//======================================
//Menu functionality, must go below each menu item
let menu = document.getElementById("open-menu");
function openMenu(){
  document.getElementById("save-button").hidden = false;
  document.getElementById("equip-button").hidden = false;
  document.getElementById("inventory-button").hidden = false;
  if (reserveParty.length > 0) {document.getElementById("swap-team").hidden = false}
  document.getElementById("show-stats").hidden = false;
  document.getElementById("formation-button").hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function closeMenu() {
  document.getElementById("save-button").hidden = true;
  //equip
  document.getElementById("equip-button").hidden = true;
  document.getElementById("equip-screen").hidden = true;
  document.getElementById("equipment").innerHTML = "";
  document.getElementById("equip-party").innerHTML = "";
  //formation
  document.getElementById("formation-button").hidden = true;
  document.getElementById("formation-menu").hidden = true;
  //inventory
  document.getElementById("inventory-button").hidden = true;
  document.getElementById("inventory-menu").hidden = true;
  document.getElementById("inventory-items").innerHTML = "";
  //party stats
  document.getElementById("stats-menu").hidden = true;
    document.getElementById("show-stats").hidden = true;
    document.getElementById("line-1").innerHTML = "";
    document.getElementById("menu-items").innerHTML = "";
  //hide save
  document.getElementById("save-menu").hidden = true;
  document.getElementById("close-menu").hidden = true;
  //hide swap
  document.getElementById("swap-team").hidden = true;
  document.getElementById("swap-menu").hidden = true;
  };
/*
The game will go through "Areas", each one being a div. Each Div will be a town/level or pass through. By toggling the hidden property in html we can hide the divs as necessary. The progression will be linear, at least for now....
A gamestate value will be assigned to each area/location, thus allowing the travel function to take you through each level. Battles will include a statepost variable which decides where the battle takes you afterward.
*/
//Battle Mode
let battleState = 0;
//global variable that holds enemy hp for targetting
let enHp = [];
let pHp = [];
let pMp = [];
//dead party global variable
let deadTeam = [];
const battleMode = document.getElementById("battle-mode");
const commands = document.getElementById("commands");
const enemyPlace = document.getElementById("enemies");
const partyPlace = document.getElementById("party");
const info = document.getElementById("info");
const end = document.getElementById("end");
let holder = document.getElementById("p-stats");
const change = document.getElementById("p-com");
let pStats = document.getElementById("p-stats");
let itemSlot = document.getElementById("item-slot");
let skillSlot = document.getElementById("skill-slot");
let choice = 0;
//all those variables are id selectors.
//calcs go above battle func
// targetting functions go above the battle selectors
function checkLose(){
  if (currentParty.length < 1){
    battleMove(8);
    }  else {
      battleMove(1);
    }
  };
function checkWin(){
  if (enemyParty.length < 1){
    battleMove(0);
    }
  };
function backBtn (x){
  let back = document.createElement("button");
    back.innerHTML = "Back";
    back.addEventListener('click', function (y) {y = x; info.innerHTML = ""; battleMove(y)});
    change.appendChild(back);
  };
function targetBtn(partymem, target, flow, skill,){
  change.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  if (skill != undefined){
    if (skill.target === "All"){
      let btn1 = document.createElement("button");
      btn1.textContent = "All";
     btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target;  skill1 = skill; flow1 = flow; attackCalc(pl, 0, flow1, skill1);});
      change.appendChild(btn1);
    }
    else if (enemyParty.length === 1){
    let btn1 = document.createElement("button");
      btn1.textContent = enemyParty[0].name;
     btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(pl, 0, flow1, skill1);});
      change.appendChild(btn1);
      } 
   else if (enemyParty.length === 2){
    let btn1 = document.createElement("button");
      btn1.textContent = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.textContent = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 1, flow1, skill1);});
        change.appendChild(btn2);
      } 
   else if (enemyParty.length === 3){
      let btn1 = document.createElement("button");
      btn1.textContent = enemyParty[0].name;
      btn1.addEventListener('click', function () { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, flow1, skill1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.textContent = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 1, flow1, skill1);});
        change.appendChild(btn2);
          let btn3 = document.createElement("button");
          btn3.textContent = enemyParty[2].name;
          btn3.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 2, flow1, skill1);});
          change.appendChild(btn3);
      }
  } else {
 if (enemyParty.length === 1){
   let btn1 = document.createElement("button");
    btn1.textContent = enemyParty[0].name;
    btn1.addEventListener('click', function (pl, y, flow1) { pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
    change.appendChild(btn1);
  } 
 if (enemyParty.length === 2){
    let btn1 = document.createElement("button");
      btn1.textContent = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, flow1) {pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.textContent = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, flow1) {pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 1, flow1);});
        change.appendChild(btn2);
      } 
  if (enemyParty.length === 3){
      let btn1 = document.createElement("button");
      btn1.textContent = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 0, flow1);});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.textContent = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 1, flow1);});
        change.appendChild(btn2);
          let btn3 = document.createElement("button");
          btn3.textContent = enemyParty[2].name;
          btn3.addEventListener('click', function (pl, y, flow1) {choice = 0; pl = partymem; y = target; flow1 = flow; attackCalc(partymem, 2, flow1);});
          change.appendChild(btn3);
    }
  }
  };
function attackCalc (char, target, flow, skill){
  info.innerHTML = "";
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }
  //branch for skill
  let elementalBoost = 0;
    if (skill != undefined){
      char.cmp -= skill.cost;
      if (skill.type === "Magic"){ 
        //the idea here is to create an all target calculation branch in the attack calc for both skills. Needs a lot of code atm
        //I should consider adding a separate function for all calcs? This is getting a bit bloated.
        if (skill.target === "All"){
          //placed this above the for loop to prevent casting showing more times.
          let applyFinal = [];
          let enemyCopy = enemyParty;
          let enCopy = enHp;
          let survivors = [];
          let survivorHp = [];
          let p3 = document.createElement("p");
          p3.textContent = char.name + " cast " + skill.name + "!"
          info.appendChild(p3);
          enemyParty.map((en, index) => {
            if (en.weakness === skill.element) {
              elementalBoost += 2;
                }
            let pa = char.mAtk + char.weapon.pow + skill.pow + elementalBoost - en.mDef;
          pa -= 2;
          let minpa = pa - 4;
          let thp = enCopy[index];
          let damage = clamp(pa, minpa, pa);
           if (damage <= 0){damage = 0};
          let final = thp - damage ;
          applyFinal.push(final);
          if (final <= 0) {
            if (en.weakness === skill.element) {
            let pEl = document.createElement("p");
            pEl.textContent = en.name + " is weak to " + skill.element.element + "! The spell did bonus damage!"; 
            info.appendChild(pEl);
         //   enCopy[indexer] = thp - damage;
              }
          let p = document.createElement("p");
          p.textContent = en.name + " was hit for " + damage + " damage!";
          info.appendChild(p);
          let p2 = document.createElement("p");
          p2.textContent = en.name + " has been defeated!";
          info.appendChild(p2);
          } else {
                let p3 = document.createElement("p");
                if (en.weakness === skill.element) {
                let pEl = document.createElement("p");
                pEl.textContent = en.name + " is weak to " + skill.element.element + "! The spell did bonus damage!"; 
                info.appendChild(pEl);
                  }
               enCopy[index] = thp - damage;
                survivorHp.push(enCopy[index]);
                  survivors.push(enemyCopy[index]);
                p3.textContent = en.name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
            }
          });
          enemyParty = survivors;
          enHp = survivorHp;
          //first applier finds out who's dead and pushes it into a new array.
          //applier applies damage to all 3. AH, okay so perhaps it applies the damage regardless, but no splice.
          //then finalizer will then take that and apply it to the enemycopy arrays.
          //enemycopy arrays will then overwrite the original arrays.
          battleMove(flow)
          }     
      else {
        if (enemyParty[target].weakness === skill.element) {
          elementalBoost += 2;
        }
        //regular branch
        let pa = char.mAtk + char.weapon.pow + skill.pow + elementalBoost - enemyParty[target].mDef;
        pa -= 2;
        let minpa = pa - 4;
        let thp = enHp[target];
        let damage = clamp(pa, minpa, pa);
        if (damage <= 0){damage = 0};
        let final = thp - damage ;
        if (final <= 0) {
          let p3 = document.createElement("p");
          p3.textContent = char.name + " cast " + skill.name + "!"
          info.appendChild(p3);
          if (enemyParty[target].weakness === skill.element) {
            let pEl = document.createElement("p");
            pEl.textContent = enemyParty[target].name + " is weak to " + skill.element.element + "! The spell did bonus damage!"; 
            info.appendChild(pEl);
              }
          let p = document.createElement("p");
          p.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
          info.appendChild(p);
          let p2 = document.createElement("p");
          p2.textContent = enemyParty[target].name + " has been defeated!";
          info.appendChild(p2);
          enemyParty.splice(target, 1);
          enHp.splice(target, 1);
          battleMove(flow)
          } else {
                let p6 = document.createElement("p");
                p6.textContent = char.name + " cast " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                if (enemyParty[target].weakness === skill.element) {
                let pEl = document.createElement("p");
                pEl.textContent = enemyParty[target].name + " is weak to " + skill.element.element + "! The attack did bonus damage!"; 
                info.appendChild(pEl);
                  }
                enHp[target] = thp - damage;
                p3.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
              }
            }
      } if (skill.type === "Physical"){
            if (skill.target === "All"){
              //placed this above the for loop to prevent casting showing more times.
              let applyFinal = [];
              let enemyCopy = enemyParty;
              let enCopy = enHp;
              let survivors = [];
              let survivorHp = [];
              let p3 = document.createElement("p");
              p3.textContent = char.name + " used " + skill.name + "!"
              info.appendChild(p3);
              enemyParty.map((en, index) => {
                if (en.weakness === skill.element) {
                  elementalBoost += 2;
                    }
                let pa = char.pAtk + char.weapon.pow + skill.pow + elementalBoost - en.pDef;
              pa -= 2;
              let minpa = pa - 4;
              let thp = enCopy[index];
              let damage = clamp(pa, minpa, pa);
               if (damage <= 0){damage = 0};
              let final = thp - damage ;
              applyFinal.push(final);
              if (final <= 0) {
                if (en.weakness === skill.element) {
                let pEl = document.createElement("p");
                pEl.textContent = en.name + " is weak to " + skill.element.element + "! The attack did bonus damage!"; 
                info.appendChild(pEl);
             //   enCopy[indexer] = thp - damage;
                  }
              let p = document.createElement("p");
              p.textContent = en.name + " was hit for " + damage + " damage!";
              info.appendChild(p);
              let p2 = document.createElement("p");
              p2.textContent = en.name + " has been defeated!";
              info.appendChild(p2);
              } else {
                    let p3 = document.createElement("p");
                    if (en.weakness === skill.element) {
                    let pEl = document.createElement("p");
                    pEl.textContent = en.name + " is weak to " + skill.element.element + "! The attack did bonus damage!"; 
                    info.appendChild(pEl);
                      }
                   enCopy[index] = thp - damage;
                    survivorHp.push(enCopy[index]);
                      survivors.push(enemyCopy[index]);
                    p3.textContent = en.name + " was hit for " + damage + " damage!";
                    info.appendChild(p3);
                }
              });
              enemyParty = survivors;
              enHp = survivorHp;
              //first applier finds out who's dead and pushes it into a new array.
              //applier applies damage to all 3. AH, okay so perhaps it applies the damage regardless, but no splice.
              //then finalizer will then take that and apply it to the enemycopy arrays.
              //enemycopy arrays will then overwrite the original arrays.
              battleMove(flow)
              }        
            
             else { //regular branch
              if (enemyParty[target].weakness === skill.element) {
                elementalBoost += 2;
                  }
          let pa = char.pAtk + char.buff[0].pow + char.weapon.pow + skill.pow + elementalBoost - enemyParty[target].pDef;
          let thp = enHp[target];
          pa -= 2;
          let minpa = pa - 4;
          let damage = clamp(pa, minpa, pa);
          if (damage <= 0){damage = 0};
          let final = thp - damage ;
            if (final <= 0) {
              let p6 = document.createElement("p");
              p6.textContent = char.name + " used " + skill.name + "!"
              info.appendChild(p6);      
              if (enemyParty[target].weakness === skill.element) {
                let pEl = document.createElement("p");
                pEl.textContent = enemyParty[target].name + " is weak to " + skill.element.element + "! The attack did bonus damage!"; 
                info.appendChild(pEl);
                  }
              let p = document.createElement("p");    
              p.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
              let p2 = document.createElement("p");
              p2.textContent = enemyParty[target].name + " has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
              } else {
                let p6 = document.createElement("p");
                p6.textContent = char.name + " used " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                let pEl = document.createElement("p");
                if (enemyParty[target].weakness === skill.element) {
                pEl.textContent = enemyParty[target].name + " is weak to " + skill.element.element + "! The attack did bonus damage!"; 
                info.appendChild(pEl);
                  }
                enHp[target] = thp - damage;
                p3.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                  }
          }
         
  }
}
  else {
          let pa = char.pAtk + char.buff[0].pow + char.weapon.pow - enemyParty[target].pDef;
          let thp = enHp[target];
          let minpa = pa - 4;
          pa -= 2;
          let damage = clamp(pa, minpa, pa);
          if (damage <= 0){damage = 0};
          let final = thp - damage ;
          if (final <= 0) {
            let p = document.createElement("p");
              p.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
            let p2 = document.createElement("p");
              p2.textContent = enemyParty[target].name + " has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
            } else {
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.textContent = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                }
            }
    };
function deathCheck(){
    //death
  //all 3 dead
    if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[1].chp <= 0 && currentParty[0].chp <= 0){
      let playerD = currentParty.splice(1, 1);
      let player0 =  currentParty.splice(0, 1);
      let player3 = currentParty.splice(2, 1);
      deadTeam.push(player3[0])
      deadTeam.push(playerD[0]);
      deadTeam.push(player0[0]);
    } 
    //just p3 and p2 die.
    else if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[1].chp <= 0){
      let player3 = currentParty.splice(2, 1);
       let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD[0])
      deadTeam.push(player3[0])
    }
    //just p3 and p1
    else if (currentParty.length === 3 && currentParty[2].chp <= 0 && currentParty[0].chp <= 0){
      let player3 = currentParty.splice(2, 1);
       let player0 = currentParty.splice(0, 1);
      deadTeam.push(player0[0])
      deadTeam.push(player3[0])
    }
    //just p2 and p1 die
    else if (currentParty.length === 3 && currentParty[0].chp <= 0 && currentParty[1].chp <= 0){
      let player0 = currentParty.splice(0, 1);
       let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD[0])
      deadTeam.push(player0[0])
    }
    //just p1 dies in 3 party
    else if (currentParty.length === 3 && currentParty[0].chp <= 0) {
        let player0 = currentParty.splice(0, 1);
      deadTeam.push(player0[0]);
    }
    //just p2 dies in 3 party
    else if (currentParty.length === 3 && currentParty[1].chp <= 0) {
        let playerD = currentParty.splice(1, 1);
      deadTeam.push(playerD[0]);
    }
    //just p3 dies in 3 party
    else if (currentParty.length === 3 && currentParty[2].chp <= 0){
      let player3 = currentParty.splice(2, 1);
      deadTeam.push(player3[0])
    }
    //if party has two left and both die.
    else if (currentParty.length === 2 && currentParty[1].chp <= 0 && currentParty[0].chp <= 0){
     let playerD = currentParty.splice(1, 1);
     let player0 =  currentParty.splice(0, 1);
      deadTeam.push(playerD[0]);
      deadTeam.push(player0[0]);
    }
    // if party is two and p1 dies.
     else if (currentParty.length === 2 && currentParty[1].chp <= 0){
      let playerD =  currentParty.splice(1, 1);
      deadTeam.push(playerD[0]);
    } 
    //if party is two and p1 dies.
    else if (currentParty.length === 2 && currentParty[0].chp <= 0){
      let playerD =  currentParty.splice(0, 1);
      deadTeam.push(playerD[0]);
    }
    // if p1 dies
    else if (currentParty.length === 1 && currentParty[0].chp <= 0){
    let playerD =  currentParty.splice(0, 1);
    deadTeam.push(playerD[0]);
    }
    console.log(currentParty);
    console.log(deadTeam);
  };
function enemCalc (){
  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
    }
    function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }
  let enPow = [];
  let teamLength = currentParty.length;
    function pusher1 (x){enPow.push(x.pAtk)};
    enemyParty.forEach(pusher1);
    let enLength = enPow.length;
    for (let i = 0; i < enPow.length; i++){
      let target = currentParty[getRandomInt(teamLength)];
      //NEW BRANCH FOR MAGIC ENEMIES GOES HERE!!!!! IT CHECKS IF THE ATTACKER HAS MORE MAGIC ATTACK THAN ATTACK
      //enemies can then use skills....?
      let attacker = enemyParty[getRandomInt(enLength)];
      let attackerDam = attacker.pAtk;
      //if buff is off, then buff = 0, thus not changing much.
      let damage = attackerDam - target.pDef + target.buff[1].pow;
      let damageRange = clamp(damage, damage, damage+1);
      if (damageRange <= 0){damageRange = 0};
      target.chp = target.chp - damageRange;
      let damageRes = document.createElement("p");
      damageRes.textContent = target.name + " was hit by " + attacker.name + " for " + damageRange + " damage!";
      info.appendChild(damageRes);
    }
    deathCheck();
  };
let skillChoice;
let supportChoice;
function skillBtnGen(partymem, flow, supflow) {
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let pBad = document.createElement("p");
    pBad.textContent = "Not enough MP!";
  let closer1 = document.createElement("button");
    closer1.textContent = "Close Skill List";
    closer1.addEventListener('click', function () {skillSlot.innerHTML = "";});
  skillSlot.appendChild(closer1);
  //healing branch, makes use of the item battle-flow for targeting and then uses a heal calc function. 
    //Support flow added here
  //attack items will be their own class of item as well.
  if (partymem.support.length > 0){
        function pusher2 (sup) {
          let description = document.createElement("li");
          description.innerText = sup.name + " - " + sup.des;
          skillSlot.appendChild(description);
          let btn2 = document.createElement("button");
          btn2.textContent = sup.name + " - Cost: " + sup.cost;
          if (sup.cost > partymem.cmp){
          btn2.addEventListener('click', function (){
          info.appendChild(pBad)})
          skillSlot.appendChild(btn2);
      } else {
        btn2.addEventListener('click', function (x) {x = sup; supportChoice = x; choice = 1; battleMove(supflow);});
        skillSlot.appendChild(btn2);
      }
    }
    partymem.support.forEach(pusher2);
  }
  function pusher (skill) {
    let description = document.createElement("li");
          description.innerText = skill.name + " - " + skill.des;
          skillSlot.appendChild(description);
  let btn1 = document.createElement("button");
  btn1.textContent = skill.name + " - Cost: " + skill.cost;
  if (skill.cost > partymem.cmp){
    btn1.addEventListener('click', function (){
    info.appendChild(pBad)})
    skillSlot.appendChild(btn1);
  } else {
  btn1.addEventListener('click', function (x) {x = skill; skillChoice = x; battleMove(flow); choice = 1;});
  skillSlot.appendChild(btn1);
      }
  }
  partymem.skills.forEach(pusher);
  };
function supTarget (caster, sup, supflow){
  change.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  //needs a caster parameter based on the battleflow?
  //pulls target MP away atm
//  if (sup.target === "All"){}
  if (currentParty.length === 1){
  let btn = document.createElement("button");
  btn.textContent = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y); choice = 1;})
  skillSlot.appendChild(btn);
  }
    if (currentParty.length === 2) {
  let btn = document.createElement("button");
  btn.textContent = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
  skillSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.textContent = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[1]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);;})
    skillSlot.appendChild(btn1);
    } if (currentParty.length === 3){
      let btn = document.createElement("button");
        btn.textContent = currentParty[0].name;
        btn.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[0]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
        skillSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.textContent = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[1]; supportChoice = x; battleMove(y); a = caster; supCalc(a, z, x, y);})
    skillSlot.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.textContent = currentParty[2].name;
    btn2.addEventListener('click', function (x, y, z, a){x = sup; y = supflow;z = currentParty[2]; supportChioice = x; battleMove(y); a = caster; supCalc(a, z, x, y);;})
    skillSlot.appendChild(btn2);
    }
  };
function supCalc(caster, partymem, sup, supflow){
  info.innerHTML = "";
  skillSlot.innerHTML = "";
  caster.cmp -= sup.cost;
  if (sup.type === "Healing"){
    partymem.chp += sup.pow;
      if (partymem.chp > partymem.hp){
      partymem.chp = partymem.hp;
      let pheal = document.createElement("p")
      pheal.textContent = partymem.name + "'s HP was fully healed! Their HP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
        } else {
        let pheal = document.createElement("p")
        pheal.textContent = partymem.name + "'s HP is now: " + partymem.chp + "/" + partymem.hp;
        info.appendChild(pheal);
        loadPartyInfo();
        }
    } if (sup.type === "Attack Buff"){
      if (partymem.buff[0].on === false){
        partymem.buff[0].pow += sup.pow;
        partymem.buff[0].on = true;
        let pbuff = document.createElement("p")
        pbuff.textContent = partymem.name + "'s Attack has been boosted!";
        info.appendChild(pbuff);
        loadPartyInfo();
        } else {
          let pbuff = document.createElement("p")
          pbuff.textContent = partymem.name + "'s Attack has already been boosted! It had no effect.";
          info.appendChild(pbuff);
        }
    } if (sup.type === "Defense Buff") {
       if (partymem.buff[1].on === false){
        partymem.buff[1].pow += sup.pow;
        partymem.buff[1].on = true; 
        let pbuff = document.createElement("p")
        pbuff.textContent = partymem.name + "'s Defense has been boosted!";
        info.appendChild(pbuff);
        loadPartyInfo();
       } else {
         let pbuff = document.createElement("p")
        pbuff.textContent = partymem.name + "'s Defense has already been boosted! It had no effect.";
        info.appendChild(pbuff);
        loadPartyInfo();
       }
    }
  };
function itemTarget (item, flow){
  //selects target
  //target branch needed for dead party members 1 > 2. There can only be 2 dead max.
  change.innerHTML = "";
  itemSlot.innerHTML = "";
  skillSlot.innerHTML = "";
  if (item.type === "Rev" && deadTeam.length === 1){
    let btn = document.createElement("button");
  btn.textContent = deadTeam[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = deadTeam[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
  } else if (item.type === "Rev" && deadTeam.length === 2){
    let btn = document.createElement("button");
  btn.textContent = deadTeam[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = deadTeam[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
  let btn1 = document.createElement("button");
    btn1.textContent = deadTeam[1].name;
    btn1.addEventListener('click', function (x, y, z){x = item; y = flow;z = deadTeam[1]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn1);
  }
 else if (currentParty.length === 1){
  let btn = document.createElement("button");
  btn.textContent = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
  }
   else if (currentParty.length === 2) {
  let btn = document.createElement("button");
  btn.textContent = currentParty[0].name;
  btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
  itemSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.textContent = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[1]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn1);
    } else if (currentParty.length === 3){
      let btn = document.createElement("button");
        btn.textContent = currentParty[0].name;
        btn.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[0]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
        itemSlot.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.textContent = currentParty[1].name;
    btn1.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[1]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.textContent = currentParty[2].name;
    btn2.addEventListener('click', function (x, y, z){x = item; y = flow;z = currentParty[2]; itemChoice = x; battleMove(y); itemCalc(z, x, y);})
    itemSlot.appendChild(btn2);
    }
   };
function itemCalc(partymem, item, flow){
  info.innerHTML = "";
  itemSlot.innerHTML = "";
  if (item.type === "Healing"){
   partymem.chp += item.effect;
    if (partymem.chp > partymem.hp){
      partymem.chp = partymem.hp;
      let pheal = document.createElement("p")
      pheal.textContent = partymem.name + "'s HP was fully healed! Their HP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
    } else {
      let pheal = document.createElement("p")
      pheal.textContent = partymem.name + "'s HP is now: " + partymem.chp + "/" + partymem.hp;
      info.appendChild(pheal);
      loadPartyInfo();
    }
  } if (item.type === "mHealing"){
  partymem.cmp += item.effect;
    if (partymem.cmp > partymem.mp){
      partymem.cmp = partymem.mp;
      let pheal = document.createElement("p")
      pheal.textContent = partymem.name + "'s MP was fully healed! Their MP is now full";
      info.appendChild(pheal);
      loadPartyInfo();
    } else {
      let pheal = document.createElement("p")
      pheal.textContent = partymem.name + "'s MP is now: " + partymem.cmp + "/" + partymem.mp;
      info.appendChild(pheal);
      loadPartyInfo();
    }
  }
    if (item.type == "Rev"){
      const index = deadTeam.map(object => object.name).indexOf(partymem.name);
     let a = deadTeam.splice(index, 1);
    // deadArr.push(a[0]);
    // let b = deadArr.indexOf(partymem);
     partymem.chp = item.effect;
     currentParty.push(a[0]);
     let pheal = document.createElement("p")
     pheal.textContent = partymem.name + " has been revived!";
     info.appendChild(pheal);
     loadPartyInfo();
    }
  
  inventory.splice(itemPos, 1);
  };
let itemChoice;
let itemPos;
/*
function itmChooser(x){
  debugger;
  itemPos = x;
};
*/
function itemBtnGen (flow){
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let closer = document.createElement("button");
  closer.textContent = "Close Item List";
  closer.addEventListener('click', function () {itemSlot.innerHTML = "";});
  itemSlot.appendChild(closer);
  for (let i = 0; i < inventory.length; i++){
    let btn = document.createElement("button");
  btn.textContent = inventory[i].name;
  btn.addEventListener('click', function (x, y, z) {x = inventory[i]; itemChoice = x; y = flow; battleMove(y);});
  itemSlot.appendChild(btn);
 // count++;
  } 
};
function statBoost(char){
  char.level += 1;
  char.hp += 1;
  char.chp += 1;
  char.mp += 1;
  char.pDef += 1;
  char.mDef += 1;
  char.pAtk += 1;
  char.mAtk += 1;
  char.pDef += 1;
  char.mDef += 1;
  let leveluptext = document.createElement("p");
  leveluptext.textContent = char.name + " leveled up! Their level is now: " + char.level + "!" ;
  info.appendChild(leveluptext);
};
function levelUp(char){
    if (char.exp >= 3 && char.level < 2){
      statBoost(char);       
        if (char.level === 2 && char.name === "Marie") {
          marie.skills.push(thunder);
        let learnedSkill2 = document.createElement("p");
        learnedSkill2.textContent = marie.name + " learned " + thunder.name + "!";
        info.appendChild(learnedSkill2);
        }
        
      }  
    if (char.exp >= 20 && char.level < 3){
      statBoost(char);
    }
    if (char.exp >= 40 && char.level < 4){
      statBoost(char);
    }
    if (char.exp >= 100 && char.level < 5){
      statBoost(char);
      if (char.level === 5 && char.name === "Julie") {
        julie.support.push(atkBoost);
      let learnedSkill = document.createElement("p");
      learnedSkill.textContent = julie.name + " learned " + atkBoost.name + "!";
      info.appendChild(learnedSkill);
      }
    }
  if (char.exp >= 200 && char.level < 6){
    statBoost(char);
  }
};
function clearBattle() {
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  adv.hidden = false;
  battleState = 0;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  expGain = 0;
 // loadParty();
 if (deadTeam.length >= 1){
   for (let i = 0; i < deadTeam.length; i++){
     currentParty.push(deadTeam[i]);
   }
 }
  console.log(currentParty);
  function healer(x){
    x.chp = x.hp;
    x.cmp = x.mp;
    x.buff[0].pow = 0;
    x.buff[0].on = false;
    x.buff[1].pow = 0;
    x.buff[1].on = false;
  }
  currentParty.forEach(healer);
  };
let statePost = 0;
function endBattle(loc) {
 // if (enemyParty.length === 0) {};
 let endButton = document.createElement("button");
 endButton.textContent = "End Battle";
 endButton.addEventListener('click', function (x) {x = loc; clearBattle(); move(statePost)});
 end.appendChild(endButton);
  };
//atm battle mode will hold the location value for endBattle;
function loadEnemyInfo(){
  //loads enemy info dynamically updating.
  enemyPlace.innerHTML = "";
  end.innerHTML = "";
   if (enemyParty.length === 1){
    let p = document.createElement("h4");
    p.textContent = "Enemies: " + enemyParty[0].name;
    enemyPlace.appendChild(p);
  //  enHp.push(enemyParty[0].hp);
    };
    if (enemyParty.length === 2) {
       let p = document.createElement("h4");
        p.textContent = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name;
        enemyPlace.appendChild(p);
      //  enHp.push(enemyParty[0].hp);
      //  enHp.push(enemyParty[1].hp);
      };
    if (enemyParty.length === 3) {
       let p = document.createElement("h4");
        p.textContent = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name + ", " + enemyParty[2].name;
        enemyPlace.appendChild(p);
      //  enHp.push(enemyParty[0].hp);
      //  enHp.push(enemyParty[1].hp);
      //  enHp.push(enemyParty[2].hp);
      };
      console.log(enHp);
  };
function loadPartyInfo(){
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  if (currentParty.length === 1){
    let p2 = document.createElement("h4");
    p2.textContent = "Party: " + currentParty[0].name;
    partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.textContent = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);
  } if (currentParty.length === 2) {
  let p2 = document.createElement("h4");
  p2.textContent = "Party: " + currentParty[0].name + ", " + currentParty[1].name;
  partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.textContent = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    let partystat1 = document.createElement("li");
    partystat1.textContent = currentParty[1].name + " HP: " + currentParty[1].chp + "/" + currentParty[1].hp + " - MP: " + currentParty[1].cmp + "/" + currentParty[1].mp;
    holder.appendChild(partystat1);
    pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);
  } if (currentParty.length === 3){
    let p3 = document.createElement("h4");
    p3.textContent = "Party: " + currentParty[0].name + ", " + currentParty[1].name + ", " + currentParty[2].name;
    partyPlace.appendChild(p3);
    let partystat = document.createElement("li");
    partystat.textContent = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    let partystat1 = document.createElement("li");
    partystat1.textContent = currentParty[1].name + " HP: " + currentParty[1].chp + "/" + currentParty[1].hp + " - MP: " + currentParty[1].cmp + "/" + currentParty[1].mp;
    holder.appendChild(partystat1);
    let partystat2 = document.createElement("li");
    partystat2.textContent = currentParty[2].name + " HP: " + currentParty[2].chp + "/" + currentParty[2].hp + " - MP: " + currentParty[2].cmp + "/" + currentParty[2].mp;
    holder.appendChild(partystat2);
      pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);pHp.push(currentParty[2].hp); pMp.push(currentParty[2].mp);
  }
  };
let winMon = 0;
let expGain = 0;
function saveParty (){
  savedParty = currentParty;
  console.log(savedParty);
}
/*function loadParty(){
  console.log(savedParty);
  currentParty = savedParty;
}
*/
function battle(en) {
  //battleState controls battle flow and button creation.
  adv.hidden = true;
  battleState = 1;
  battleMode.hidden = false;
  mainMenu.hidden = true;
 // saveParty();
  closeMenu();
  enemyParty = en;
  winMon = 0;
  enHP = [];
  pHp = [];
  pMp = [];
  change.innerHTML = "";
  info.innerHTML = "";
  if (enemyParty.length === 1){
    enHp.push(enemyParty[0].hp);
    };
    if (enemyParty.length === 2) {
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
      };
    if (enemyParty.length === 3) {
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
        enHp.push(enemyParty[2].hp);
      };
  loadEnemyInfo();
  loadPartyInfo();
  for (let i = 0; i < en.length; i++){
    expGain += en[i].exp;
    winMon += en[i].money;
  };
  // start phase
  let p3 = document.createElement("p");
  p3.textContent = enemyParty.length + " enemies appeared!"
  info.appendChild(p3);
  battleMove(battleState);
  // Phase 1
  //sets each button to move forward with phase 1
  //loads character party as is and adds as new elements
  //loads functions for level up and such
  //final function hides buttons, etc.
  //There needs to be a way to return to the previous state once a battle is open, perhaps a new button opens up
  //Choice will hold the choice of attack as 0
  //choice will hold the choice of skill as 1
  //choice will hold the choice of item as 2
  };
let target = 0;
function battleMove(x) {
  if (x === 0){
   change.innerHTML = "";
   // info.innerHTML = "";
    holder.innerHTML = "";
    money += winMon;
    partyPlace.innerHTML = "";
    let win = document.createElement("p");
    win.textContent = "All enemies defeated! Congrats!";
    info.appendChild(win);
    let expInfo = document.createElement("p");
    expInfo.textContent = "All allies gained +" + expGain + " experience points!";
    info.appendChild(expInfo);
    let monInfo = document.createElement("p");
    monInfo.textContent = "The party gained +$" + winMon + " money!";
    info.appendChild(monInfo);
      function expGainer(x){
        x.exp += expGain;
      };
    
    currentParty.forEach(expGainer);
    currentParty.forEach(levelUp);
    endBattle();
  };
  //player 1 turn
  if (x === 1){
      change.innerHTML = "";
      info.innerHTML = ""
      skillSlot.innerHTML = "";
      itemSlot.innerHTML = "";
      skillChoice = "";
      supportChoice = "";
      let p4 = document.createElement("p");
      p4.textContent = currentParty[0].name + "'s turn. " + "Please select a command: ";
      info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.textContent = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(2);});
      let skl = document.createElement("button");
      //sets up skill menu/closing buttons.
      skl.textContent = "Skills";
        skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[0], 2, 9);});
      //adds open menu branch
      let itm = document.createElement("button");
        itm.textContent = "Items";
        itm.addEventListener('click', function (){choice = 2; itemBtnGen(9);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
      
  };
  //p1 target selection, uses targetBtn
  if (x === 2){
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    if (choice === 0){
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3);
      backBtn(1); 
    } if (choice === 1){
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3, skillChoice);
      backBtn(1); 
    }
  };
  //p1 damage calculation phase, will include a button to flow to the next part.
  if (x === 3){
    //removes previous buttons
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    if (currentParty.length === 1){
      let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(6);});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
        
    } else {
    //creates foward button and displays the info from the calculator
        let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(4);});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    }
  };
  //starts p2 phase
  if (x === 4){
    //skipped if p2 is dead
    skillSlot.innerHTML = "";
    itemSlot.innerHTML = "";
    change.innerHTML = "";
    info.innerHTML = "";
    skillChoice = "";
    supportChoice = "";
    let p4 = document.createElement("p");
        p4.textContent = currentParty[1].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.textContent = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(5);});
      let skl = document.createElement("button");
      skl.textContent = "Skills";
      skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[1], 5, 11);});
      let itm = document.createElement("button");
      itm.textContent = "Items";
      itm.addEventListener('click', function (){choice = 2; itemBtnGen(11);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
  }
  //target phase if party has 2 members
  if (x === 5){
  change.innerHTML = "";
  info.innerHTML = "";
  itemSlot.innerHTML = "";
  skillSlot.innerHTML = "";
    if (choice === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
    p4.innerHTML = "Who will you target?";
    info.appendChild(p4);
    skillSlot.innerHTML = "";
    targetBtn(currentParty[1], enHp, 6);
    backBtn(4); 
    } 
    if (choice === 1){
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[1], enHp, 6, skillChoice);
      skillSlot.innerHTML = "";
      backBtn(4); 
    }
  } if (x === 6){
    //removes previous buttons
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won.
    if (currentParty.length === 3){
       let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(13)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    } else {
        let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
    }
  } if (x === 7) {
    //begins enemy phase
    //needs to only use next buttons based on enemy party size. Needs a "check loss" funciton.
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    let p4 = document.createElement("p");
        p4.textContent =  "Enemy turn!";
        info.appendChild(p4);
        enemCalc();
        loadEnemyInfo();
        loadPartyInfo();    
    let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){checkLose();});
        change.appendChild(fwd);
  } 
  //game over
  if (x === 8) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = "The party has been defeated. Reload?";
    info.appendChild(p);
    let reload = document.createElement("button");
    reload.textContent = "Reload previous save";
    reload.addEventListener('click', function (){load()});
    change.appendChild(reload);
  } 
  //load item targeting, then moves to 10 for item calculation, p1 item choice
  if (x === 9){
    //needs if branch based on party length 
     change.innerHTML = "";
     itemSlot.innerHTML = "";
     skillSlot.innerHTML = "";
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[0], supportChoice, 10);
        backBtn(1);
      } else {
      itemTarget(itemChoice, 10); 
      backBtn(1);
        }    
  }
  //calculates item and shows results and then moves to next phase or enemy phase....P1
  if (x === 10){
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won.
    if (currentParty.length === 3 || currentParty.length === 2){
      let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(4)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
    } else if (currentParty.length === 1){
        let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      }
  }
  // P2 item slot/support slot.
  if (x === 11){
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
    info.innerHTML = "";
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[1], supportChoice, 12);
        backBtn(4);
      } else {
      itemTarget(itemChoice, 12);
      backBtn(4);
      }
  } if (x === 12) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
     let fwd = document.createElement("button");
      fwd.textContent = "Next";
      //temporarily moves to enemy phase, will add branch if 3rd party member is there
      if (currentParty.length === 3){
        fwd.addEventListener('click', function (){battleMove(13)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      } else {
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
      }
  }
  //p3 will take up battlemoves 15-20ish.
  if (x === 13){
    skillSlot.innerHTML = "";
    itemSlot.innerHTML = "";
    change.innerHTML = "";
    info.innerHTML = "";
    skillChoice = "";
    supportChoice = "";
    let p4 = document.createElement("p");
        p4.textContent = currentParty[2].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.textContent = "Attack";
      atkbtn.addEventListener('click', function (){choice = 0; battleMove(14); });
      let skl = document.createElement("button");
      skl.textContent = "Skills";
      skl.addEventListener('click', function () {choice = 1; skillBtnGen(currentParty[2], 14, 16);});
      let itm = document.createElement("button");
      itm.textContent = "Items";
      itm.addEventListener('click', function (){choice = 2; itemBtnGen(16);})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
  }
  //target phase if party has 3 members
  if (x === 14){
  change.innerHTML = "";
  info.innerHTML = "";
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
    if (choice === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
    p4.textContent = "Who will you target?";
    info.appendChild(p4);
    targetBtn(currentParty[2], enHp, 15);
    backBtn(13); 
    } 
    if (choice === 1){
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[2], enHp, 15, skillChoice);
      backBtn(13); 
    }
  } if (x === 15){
    //removes previous buttons
    change.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won. will end phase since player 3.
        let fwd = document.createElement("button");
        fwd.textContent = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
  }
  //p3 items
  if (x === 16){
    change.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
      let p4 = document.createElement("p");
      p4.textContent = "Who will you target?";
      info.appendChild(p4);
      if (choice === 1){
        supTarget(currentParty[2], supportChoice, 17);
        backBtn(13);
      } else {
      itemTarget(itemChoice, 17);
      backBtn(13);
        }
  } 
  //p3 item check, will end phase.
  if (x === 17) {
    change.innerHTML = "";
    info.innerHTML = "";
    itemSlot.innerHTML = "";
    skillSlot.innerHTML = "";
     let fwd = document.createElement("button");
      fwd.textContent = "Next";
      //because the max party is 3, it MUST take you to the calc phase.
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
  }
  // 3 new battleflow states needed per party memeber for healing skills. Can't just use item target...
  //or I'll need to find a way to have it differentiate based on that OH WAIT. If choice = 1!
  };

//===================================

// Area 1
  const townOne = document.getElementById("town-1");
//Forest 1, Forest 1-1, 1-2
  const forestOne = document.getElementById("forest-1");
  const forestOneOne = document.getElementById("forest-1-1");
  const forestOneTwo = document.getElementById("forest-1-2");
  const forestOneThree = document.getElementById("forest-1-3");
  const forestOneFour = document.getElementById("forest-1-4");
  const forestOneFive = document.getElementById("forest-1-5");
//Town 2
  const townTwo = document.getElementById("town-2");

//=====================================
let inventory = [];
let weaponsOwned = [];
let armorOwned = [];
let accesoriesOwned = [];
let keyItems = [];
let enemyParty = [];
let currentParty = [];
let reserveParty = [];
let opened = [];
let gameState;
let shopState;
//===================================
//Open chest and stuff
//==================================
//chest variables get saved?
function openChest(item, id){
  inventory.push(item);
  document.getElementById(id).hidden = true;
  opened.push(id);
  alert("You found: " + item.name + " - in the chest!"); 
};
function openWeapon(weapon, id){
  weaponsOwned.push(weapon);
  document.getElementById(id).hidden = true;
  opened.push(id);
  alert("You found: " + weapon.name + " - in the chest!");
}
function applyOpened () {
 function apply(arr) {
   document.getElementById(arr).hidden = true;
 } 
  opened.map(apply);
};
//alerts and misc dialogue
function alertOne(){
  alert("There's a Shaman that helps adventurers at our chapel! He's training them to be strong enough to take on the outside world! Adventurers, come train here!");
};

//needs a way of showing what item was received....
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
  forestOneFive.hidden = true;
  townTwo.hidden = true;
  shopButton.hidden = true;
  closeShop();
  };
//Forest 1-2
  if (state === 2){
    forestOne.hidden = false;
    forestOneOne.hidden = true;
    forestOneTwo.hidden = false;
    forestOneThree.hidden = true;
    forestOneFour.hidden = true;
    forestOneFive.hidden = true;
    townTwo.hidden = true;
    shopButton.hidden = true;
  } 
  //Forest 1-3  
    if (state === 3){
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = false;
      forestOneFour.hidden = true;
      forestOneFive.hidden = true;
      townTwo.hidden = true;
      shopButton.hidden = true;
    } 
  //Forest 1-4 
    if (state === 4){
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = true;
      forestOneFour.hidden = false;
      forestOneFive.hidden = true;
      townTwo.hidden = true;
      shopButton.hidden = true;
    }
  // Forest 1-5
    if (state === 5) {
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = true;
      forestOneFour.hidden = true;
      forestOneFive.hidden = false;
      townTwo.hidden = true;
      shopButton.hidden = true;
    }
  // Town 2 - Magnolia Town
    if (state == 6){
      townOne.hidden = true;
      forestOne.hidden = true;
      townTwo.hidden = false;
      shopButton.hidden = true;
      document.getElementById("town-2-1").hidden = false;
      document.getElementById("town-2-chapel").hidden = true;
      document.getElementById("town-2-2").hidden = true;
      document.getElementById("town-2-3").hidden = true;
    } 
  //Chapel
    if (state == 7){
      townTwo.hidden = false;
      shopButton.hidden = true;
      document.getElementById("town-2-1").hidden = true;
      document.getElementById("town-2-chapel").hidden = false;
      document.getElementById("town-2-2").hidden = true;
      document.getElementById("town-2-3").hidden = true;
    }
  //Town 2-2 Magnolia Town
    if (state === 8){
      shopState = 1;
      shopButton.hidden = false;
      townTwo.hidden = false;
      document.getElementById("town-2-1").hidden = true;
      document.getElementById("town-2-chapel").hidden = true;
      document.getElementById("town-2-2").hidden = false;
      document.getElementById("town-2-3").hidden = true;
    }
    //Town 2-3 Magnolia Town
    if (state === 9) {
      shopButton.hidden = true;
      townTwo.hidden = false;
      document.getElementById("town-2-1").hidden = true;
      document.getElementById("town-2-chapel").hidden = true;
      document.getElementById("town-2-2").hidden = true;
      document.getElementById("town-2-3").hidden = false;
    }
};
function move (state) {
  gameState = state;
  gameFlow(gameState);
};
//shop functions
//shop functions need to refactor to include weapons
function purchaser (itemVal){
  if (money >= itemVal.cost) {
    document.getElementById("broke").hidden = true;
    inventory.push(itemVal);
    money -= itemVal.cost;
    document.getElementById("money").textContent = "$" + money;
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
   btn.textContent = item.name + ": cost: " + item.cost;
   btn.addEventListener('click', function (x) {x =item ; purchaser(x); openMenu(); showInventory();});
    shopItems.appendChild(btn);
  }
  // Shop 1 - Area Town
    if (shopState === 0){
    let shopOne = [potion, magicPotion];
    shopOne.forEach(pusher);
    }
    if (shopState === 1){
      let shopTwo = [potion, magicPotion, highpotion, revivalPotion];
      shopTwo.forEach(pusher);
    }

}

//add party functions
function addJulie (id){
  julie.weapon = woodBow;
  julie.skills.push(waterArrow);
  julie.skills.push(volley);
  currentParty.push(julie);
  alert("Julie joined the party!");
  document.getElementById(id).hidden = true;
  //julie button gets treated as a chest to prevent getting Julia more than once.
  //Julie dialogue trees could get interesting.
  opened.push(id);
}
//==================================
// all testing goes below
currentParty = [ando, marie];
let savedParty = currentParty;
ando.weapon = woodSword;
ando.skills.push(basher);
marie.skills.push(fire);
ando.skills.push(iceSlash);
marie.support.push(cure);
//marie.support.push(defBoost);
ari.weapon = ironSpear;
//ari.skills.push(fire);
weaponsOwned.push(excalibur);
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
  battleMode.hidden = true;
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
  inventory.push(highpotion);
  inventory.push(revivalPotion);
  inventory.push(revivalPotion);
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
 ando = JSON.parse(simpleStorage.get("ando", ando)); 
 marie = JSON.parse(simpleStorage.get("marie", marie));
  julie = JSON.parse(simpleStorage.get("julie", julie));
  ari = JSON.parse(simpleStorage.get("ari", ari));
  reserveParty = simpleStorage.get("reserveParty", reserveParty);
 weaponsOwned = simpleStorage.get("weaponsOwned", weaponsOwned);
 currentParty = simpleStorage.get("currentParty", currentParty);
  inventory =  simpleStorage.get("inventory", inventory);
  money =  simpleStorage.get("money", money);
 gameState = simpleStorage.get("gamestate", gameState);
 opened = simpleStorage.get("opened", opened);
 applyOpened();
  move(gameState);
  adv.hidden = false;
  mainMenu.hidden = false;
  menu.hidden = false;
  begin.hidden = true;
  battleState = 0;
  battleMode.hidden = true;
  change.innerHTML = "";
  info.innerHTML = "";
  enemyPlace.innerHTML = "";
  partyPlace.innerHTML = "";
  end.innerHTML = "";
  };
 function check() {
  gameCheck = simpleStorage.get("gamecheck", gameCheck);
  if (gameCheck  === true) {
  document.getElementById("continue").hidden = false;
  }
};
function toggleChests(){
    opened.hidden = true;
};
//window.onload = toggleChests();

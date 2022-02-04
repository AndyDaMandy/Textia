//https://github.com/ZaDarkSide/simpleStorage
//simple storage documentation above
//Things that need to be done:
//Finish battle system
//treasure system
//level-up system.
// skill menu and item menu
//Characters go here. chp and chmp are "current hp and mp" respectively
let ando = {
  name: "Ando",
  level: 1,
  hp: 10,
  chp: 10,
  mp: 5,
  cmp: 5,
  pAtk: 10,
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
  chp: 8,
  mp: 10,
  cmp: 10,
  pAtk: 5,
  pDef: 2,
  mAtk: 10,
  mDef: 5,
  skills: [],
  weapon: "Test",
  type: "player"
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
  weakness: fireEl,
  eSkills: [],
  type: "enemy"
  };
const goblin = {
  name: "Goblin",
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
const potatoThief = {
  name: "Potato Thief",
  level: 1,
  hp: 10,
  mp: 5,
  pAtk: 1,
  pDef: 1,
  mAtk: 1,
  mDef: 1,
  eSkills: [],
  type: "enemy"
  };
//============================
//Skills
//===========================
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
  des: "Deals phsyical damage to 1 enemy",
  pow: 2,
  cost: 3
  };
const iceSlash = {
  name: "Ice Slash",
  type: "Physical",
  des: "Deals phsyical and ice damage to 1 enemy",
  element: iceEl,
  pow: 1,
  cost: 2
  };
//======================================
//Items go here
const potion = {
  name: "Potion",
  type: "Healing",
  des: "Heals 5 points of HP.",
  effect: function (x) {x + 5;},
  cost: 5
  };
const magicPotion = {
  name: "Magic Potion",
  type: "Healing",
  des: "Heals 5 points of MP.",
  effect: function (x) {x + 5},
  cost: 5
  };
//=======================================
// Weapons go here
const woodSword = {
  name: "Wooden Sword",
  type: "Sword",
  des: "A basic wooden sword",
  atr: "Physical",
  el: fireEl,
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
//global variable that holds enemy hp for targetting
let enHp = [];
let pHp = [];
let pMp = [];
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
    back.addEventListener('click', function (y) {y = x; info.innerHTML = ""; change.innerHTML = ""; battleMove(y)});
    change.appendChild(back);
  };
function targetBtn(partymem, target, flow, skill,){
  //  change.innerHTML = "";
  //flow will decide where attackcalc takes you
 if (enemyParty.length === 1){
   let btn1 = document.createElement("button");
    btn1.innerHTML = enemyParty[0].name;
    btn1.addEventListener('click', function (pl, y, skill1, flow1, pos) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, skill1, flow1)});
    change.appendChild(btn1);
  } 
 if (enemyParty.length === 2){
    let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, skill1, flow1)});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 1, skill1, flow1)});
        change.appendChild(btn2);
      } 
  if (enemyParty.length === 3){
      let btn1 = document.createElement("button");
      btn1.innerHTML = enemyParty[0].name;
      btn1.addEventListener('click', function () { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 0, skill1, flow1)});
      change.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.innerHTML = enemyParty[1].name;
        btn2.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 1, skill1, flow1)});
        change.appendChild(btn2);
          let btn3 = document.createElement("button");
          btn3.innerHTML = enemyParty[2].name;
          btn3.addEventListener('click', function (pl, y, skill1, flow1) { pl = partymem; y = target; skill1 = skill; flow1 = flow; attackCalc(partymem, 2, skill1, flow1)});
          change.appendChild(btn3);
    }
  };

function attackCalc (char, target, skill, flow, cost){
  //flow passes from targetBtn
  info.innerHTML = "";
  //branch for skill
    if (skill != undefined){
      char.cmp -= skill.cost;
      console.log(char);
      if (skill.type === "Magic"){
        let pa = char.mAtk + skill.pow - enemyParty[target].mDef;
        let thp = enHp[target];
        let damage = pa - 2;
        let final = thp - damage ;
        if (final <= 0) {
          let p3 = document.createElement("p");
          p3.innerHTML = char.name + " cast " + skill.name + "!"
          info.appendChild(p3)
          let p = document.createElement("p");
          p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
          info.appendChild(p);
          let p2 = document.createElement("p");
          p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
          info.appendChild(p2);
          enemyParty.splice(target, 1);
          enHp.splice(target, 1);
          battleMove(flow)
          console.log(enemyParty);
          } else {
                let p6 = document.createElement("p");
                p6.innerHTML = char.name + " cast " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                console.log(enHp)
              }
      } if (skill.type === "Physical"){
          let pa = char.pAtk + skill.pow - enemyParty[target].pDef;
          let thp = enHp[target];
          let damage = pa - 2;
          let final = thp - damage ;
            if (final <= 0) {
              let p6 = document.createElement("p");
              p6.innerHTML = char.name + " used " + skill.name + "!"
              info.appendChild(p6);
              let p = document.createElement("p");
              p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
              let p2 = document.createElement("p");
              p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
              console.log(enemyParty);
              } else {
                let p6 = document.createElement("p");
                p6.innerHTML = char.name + " used " + skill.name + "!"
                info.appendChild(p6);
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                console.log(enHp)
                  }
          } 
  }
  else {
          let pa = char.pAtk + char.weapon.pow - enemyParty[target].pDef;
          let thp = enHp[target];
          let damage = pa - 2;
          let final = thp - damage ;
          if (final <= 0) {
            let p = document.createElement("p");
              p.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
              info.appendChild(p);
            let p2 = document.createElement("p");
              p2.innerHTML = enemyParty[target].name + "'s has been defeated!";
              info.appendChild(p2);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              battleMove(flow)
              console.log(enemyParty);
            } else {
                let p3 = document.createElement("p");
                enHp[target] = thp - damage;
                p3.innerHTML = enemyParty[target].name + " was hit for " + damage + " damage!";
                info.appendChild(p3);
                battleMove(flow)
                console.log(enHp)
                }
            }
    };
function enemCalc (){
  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
    }
    
  let enPow = [];
  let teamLength = currentParty.length;
    function pusher1 (x){enPow.push(x.pAtk)};
    enemyParty.forEach(pusher1);
    let enLength = enPow.length;
    console.log(enPow);
    for (let i = 0; i < enPow.length; i++){
      let target = currentParty[getRandomInt(teamLength)];
      let attacker = enemyParty[getRandomInt(enLength)];
      let attackerDam = attacker.pAtk;
      let damage = target.pDef - attackerDam + 2;
      target.chp = target.chp - damage;
      let damageRes = document.createElement("p");
      damageRes.innerHTML = target.name + " was hit by " + attacker.name + " for " + damage + " damage!";
      info.appendChild(damageRes);
    }
    let deadTeam = [];
    if (currentParty.length > 1 && currentParty[1].chp <= 0 && currentParty[0].chp <= 0){
     let playerD = currentParty.splice(1, 1);
     let player0 =  currentParty.splice(0, 1);
      deadTeam.push(playerD);
      deadTeam.push(player0);
      console.log(currentParty)
      console.log(deadTeam);
    } else if (currentParty.length > 1 && currentParty[1].chp <= 0){
      let playerD =  currentParty.splice(1, 1);
      deadTeam.push(playerD);
      console.log(currentParty);
    } else if (currentParty[0].chp <= 0){
    let playerD =  currentParty.splice(0, 1);
    deadTeam.push(playerD);
      console.log(currentParty);
    }
  };
let skillChoice;
function skillBtnGen(partymem, flow) {
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let pBad = document.createElement("p");
    pBad.innerHTML = "Not enough MP!";
  let closer1 = document.createElement("button");
    closer1.innerHTML = "Close Skill List";
    closer1.addEventListener('click', function () {skillSlot.innerHTML = "";});
  skillSlot.appendChild(closer1);
  function pusher (skill) {
  let btn1 = document.createElement("button");
  btn1.innerHTML = skill.name + " - Cost: " + skill.cost;
  if (skill.cost > partymem.cmp){
    btn1.addEventListener('click', function (){
    info.appendChild(pBad)})
    skillSlot.appendChild(btn1);
  } else {
  btn1.addEventListener('click', function (x) {x = skill; skillChoice = x; battleMove(flow);});
  skillSlot.appendChild(btn1);
      }
  }
  partymem.skills.forEach(pusher);
  };
function itemTarget (partymem, loc){
  //selects target
  //goes to next battle move
  // function that gets launched once you pick an item button.
  };

function itemBtnGen (partymem, flow){
  skillSlot.innerHTML = "";
  itemSlot.innerHTML = "";
  let closer = document.createElement("button");
  closer.innerHTML = "Close Item List";
  closer.addEventListener('click', function () {itemSlot.innerHTML = "";});
  itemSlot.appendChild(closer);
  function pusher (item) {
  let btn = document.createElement("button");
  btn.innerHTML = item.name;
  btn.addEventListener('click', function (x) {x =item; inventory.splice(item, 1); itemTarget();});
  itemSlot.appendChild(btn);
  };
  inventory.forEach(pusher);

  };
function levelUp(char){};
function clearBattle() {
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  adv.hidden = false;
  battleState = 0;
  battleMode.hidden = true;
  mainMenu.hidden = false;
  currentParty = [ando, marie];
  ando.chp = ando.hp;
  ando.cmp = ando.mp;
  marie.chp = marie.hp;
  marie.chp = marie.hp;
};
let statePost = 0;
function endBattle(loc) {
 // if (enemyParty.length === 0) {};
 let endButton = document.createElement("button");
 endButton.innerHTML = "End Battle";
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
    p.innerHTML = "Enemies: " + enemyParty[0].name;
    enemyPlace.appendChild(p);
    enHp.push(enemyParty[0].hp);
    };
    if (enemyParty.length === 2) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name;
        enemyPlace.appendChild(p);
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
      };
    if (enemyParty.length === 3) {
       let p = document.createElement("h4");
        p.innerHTML = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name + ", " + enemyParty[2].name;
        enemyPlace.appendChild(p);
        enHp.push(enemyParty[0].hp);
        enHp.push(enemyParty[1].hp);
        enHp.push(enemyParty[2].hp);
      };
      console.log(enHp);
  };
function loadPartyInfo(){
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  if (currentParty.length < 2){
    let p2 = document.createElement("h4");
    p2.innerHTML = "Party: " + currentParty[0].name;
    partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.innerHTML = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);
  } else {
  let p2 = document.createElement("h4");
  p2.innerHTML = "Party: " + currentParty[0].name + ", " + currentParty[1].name;
  partyPlace.appendChild(p2);
    let partystat = document.createElement("li");
    partystat.innerHTML = currentParty[0].name + " HP: " + currentParty[0].chp + "/" + currentParty[0].hp + " - MP: " + currentParty[0].cmp + "/" + currentParty[0].mp;
    holder.appendChild(partystat);
    let partystat1 = document.createElement("li");
    partystat1.innerHTML = currentParty[1].name + " HP: " + currentParty[1].chp + "/" + currentParty[1].hp + " - MP: " + currentParty[1].cmp + "/" + currentParty[1].mp;
    holder.appendChild(partystat1);
    if (currentParty.length === 2) {pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);}
    if (currentParty.length === 3) {pHp.push(currentParty[0].hp); pMp.push(currentParty[0].mp);pHp.push(currentParty[1].hp); pMp.push(currentParty[1].mp);pHp.push(currentParty[2].hp); pMp.push(currentParty[2].mp);}
    console.log(pHp);
    console.log(pMp);
  }
  };
function battle(en, location) {
  //battleState controls battle flow and button creation.
  // 0 = battle off, 1 == player 1 phase buttons created. 2 == target selected, damage calculated, buttons removed. Then repeat 2 == player 2 phase. 3 == enemy 1 phase, 4 = enemy 2 phase, 3 == enemy 4 phase, 5 == turn end.
  adv.hidden = true;
  battleState = 1;
  battleMode.hidden = false;
  mainMenu.hidden = true;
  enemyParty = en;
  enHP = [];
  pHp = [];
  pMp = [];
  change.innerHTML = "";
  info.innerHTML = "";
  loadEnemyInfo();
  loadPartyInfo();
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
  //Choice will hold the choice of attack as 0
  //choice will hold the choice of skill as 1
  //choice will hold the choice of item as 2
  };
let target = 0;
function battleMove(x) {
  if (x === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    holder.innerHTML = "";
    partyPlace.innerHTML = "";
    let win = document.createElement("p");
    win.innerHTML = "All enemies defeated! Congrats!";
    info.appendChild(win);
    endBattle();
  };
  //player 1 turn
  if (x === 1){
      change.innerHTML = "";
      info.innerHTML = "";
      let p4 = document.createElement("p");
      p4.innerHTML = currentParty[0].name + "'s turn. " + "Please select a command: ";
      info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){battleMove(2); choice = 0;});
      let skl = document.createElement("button");
      //sets up skill menu/closing buttons.
      skl.innerHTML = "Skills";
        skl.addEventListener('click', function () {skillBtnGen(currentParty[0], 2); choice = 1;});
      //adds open menu branch
      let itm = document.createElement("button");
        itm.innerHTML = "Items";
      itm.addEventListener('click', function (){itemBtnGen();})
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
      
  };
  //p1 target selection, uses targetBtn
  if (x === 2){
    change.innerHTML = "";
    info.innerHTML = "";
    if (choice === 0){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3);
      backBtn(1); 
    } if (choice === 1){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[0], enHp, 3, skillChoice);
      skillSlot.innerHTML = "";
      backBtn(1); 
    }
  };
  //p1 damage calculation phase, will include a button to flow to the next part.
  if (x === 3){
    //removes previous buttons
    change.innerHTML = "";
    if (currentParty.length === 1){
      let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(6);});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();
        
    } else {
    //creates foward button and displays the info from the calculator
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
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
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
        p4.innerHTML = currentParty[1].name + "'s turn. " + "Please select a command: ";
        info.appendChild(p4);
      let atkbtn = document.createElement("button");
      atkbtn.innerHTML = "Attack";
      atkbtn.addEventListener('click', function (){battleMove(5); let choice = 0;});
      let skl = document.createElement("button");
      skl.innerHTML = "Skills";
      skl.addEventListener('click', function () {skillBtnGen(currentParty[1], 5); choice = 1;});
      let itm = document.createElement("button");
      itm.innerHTML = "Items";
        change.appendChild(atkbtn);
        change.appendChild(skl);
        change.appendChild(itm);
  }
  //target phase if party has 2 members
  if (x === 5){
  change.innerHTML = "";
  info.innerHTML = "";
    if (choice === 0){
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
    p4.innerHTML = "Who will you target?";
    info.appendChild(p4);
    targetBtn(currentParty[1], enHp, 6);
    backBtn(4); 
    } 
    if (choice === 1){
      let p4 = document.createElement("p");
      p4.innerHTML = "Who will you target?";
      info.appendChild(p4);
      targetBtn(currentParty[1], enHp, 6, skillChoice);
      skillSlot.innerHTML = "";
      backBtn(4); 
    }
  } if (x === 6){
    //removes previous buttons
    change.innerHTML = "";
    //creates foward button and displays the info from the calculator, checks if battle is won.
        let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){battleMove(7)});
        change.appendChild(fwd);
        loadEnemyInfo();
        loadPartyInfo();
        checkWin();

  } if (x === 7) {
    //begins enemy phase
    //needs to only use next buttons based on enemy party size. Needs a "check loss" funciton.
    change.innerHTML = "";
    info.innerHTML = "";
    let p4 = document.createElement("p");
        p4.innerHTML =  "Enemy turn!";
        info.appendChild(p4);
        enemCalc();
        loadEnemyInfo();
        loadPartyInfo();    
    let fwd = document.createElement("button");
        fwd.innerHTML = "Next";
        fwd.addEventListener('click', function (){checkLose();});
        change.appendChild(fwd);
  } if (x === 8) {
    change.innerHTML = "";
    info.innerHTML = "";
    let p = document.createElement("p");
    p.innerHTML = "The party has been defeated. Reload?";
    info.appendChild(p);
    let reload = document.createElement("button");
    reload.innerHTML = "Reload previous save";
    reload.addEventListener('click', function (){load()});
    change.appendChild(reload);
  }
}
//=====================================
// Area 1
const townOne = document.getElementById("town-1");
//Forest 1, Forest 1-1, 1-2
const forestOne = document.getElementById("forest-1");
const forestOneOne = document.getElementById("forest-1-1");
const forestOneTwo = document.getElementById("forest-1-2");
const forestOneThree = document.getElementById("forest-1-3");

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
    shopButton.hidden = true;
  } if (state === 3){
      townOne.hidden = true;
      forestOne.hidden = false;
      forestOneOne.hidden = true;
      forestOneTwo.hidden = true;
      forestOneThree.hidden = false;
      shopButton.hidden = true;
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
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
 ando = simpleStorage.get("ando", ando);
 marie = simpleStorage.get("marie", marie);
 currentParty = simpleStorage.get("currentParty", currentParty);
 currentParty.push(ando);
 currentParty.push(marie);
  inventory =  simpleStorage.get("inventory", inventory);
  money =  simpleStorage.get("money", money);
 gameState = simpleStorage.get("gamestate", gameState);
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
  if (gameCheck  === true)
  document.getElementById("continue").hidden = false;
  };
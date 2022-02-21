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
   console.log(currentParty);
    document.getElementById("close-menu").hidden = false;
  }
  function save () {
    simpleStorage.flush();
  //  simpleStorage.set("ando",  JSON.stringify(ando));
  simpleStorage.set("ando", ando);
    simpleStorage.set("marie", JSON.stringify(marie));
    simpleStorage.set("julie", JSON.stringify(julie));
    simpleStorage.set("ari", JSON.stringify(ari));
    simpleStorage.set("currentParty", currentParty);
  //  simpleStorage.set("currentParty", JSON.stringify(currentParty));
    console.log(currentParty);
    simpleStorage.set("reserveParty", JSON.stringify(reserveParty));   
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

//=======================================
//======================================
//Menu functionality, must go below each menu item
let menu = document.getElementById("open-menu");
function openMenu(){
 // document.getElementById("save-button").hidden = false;
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
  currentParty = [ando, marie];
  ando.weapon = woodSword;
  marie.weapon = woodStaff;
  inventory.push(potion);
  inventory.push(potion);
  inventory.push(magicPotion);
  inventory.push(highPotion);
  inventory.push(revivalPotion);
  inventory.push(revivalPotion);
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
  currentParty = "";
  reserveParty = "";
 //ando = JSON.parse(simpleStorage.get("ando"));
 ando = simpleStorage.get("ando");
 marie = JSON.parse(simpleStorage.get("marie"));
  julie = JSON.parse(simpleStorage.get("julie"));
  ari = JSON.parse(simpleStorage.get("ari"));
//  reserveParty = JSON.parse(simpleStorage.get("reserveParty"));
 weaponsOwned = simpleStorage.get("weaponsOwned");
currentParty = simpleStorage.get("currentParty");
// currentParty = JSON.parse(simpleStorage.get("currentParty"));
 console.log(currentParty);
  inventory =  simpleStorage.get("inventory");
  money =  simpleStorage.get("money");
 gameState = simpleStorage.get("gamestate");
 opened = simpleStorage.get("opened");
savedParty = currentParty;
 //clearBattle();
 //handles chests
 applyOpened();
  move(gameState);
  enemyParty = [];
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
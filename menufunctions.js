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
    //hide tutorial
    document.getElementById("tutorial-menu").hidden = true;
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
    //hide tutorial
    document.getElementById("tutorial-menu").hidden = true;
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
    li.textContent = "Weapon: " + x.weapon.name + " - " + x.weapon.type + " - " + x.weapon.atr + " - " + x.weapon.des + " - Power: " + x.weapon.pow;
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
     li = document.createElement("li")
    li.textContent = "Luck: " + x.luck;
     statsLog.appendChild(li);
     li = document.createElement("li")
    li.textContent = "Exp: " + x.exp;
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
    //hide tutorial
    document.getElementById("tutorial-menu").hidden = true;
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
      if (item.category === "Weapon"){
        let li2 = document.createElement("li");
        li2.textContent = item.name + ": " + "Type: " + item.type + " - Power: " + item.pow + " - " + item.des;
        inventorySlot.appendChild(li2)
    } else if (item.category === "Item"){
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
          if (currentParty.indexOf(julie) !== -1 || reserveParty.indexOf(julie) !== -1){
            button3.addEventListener('click', () => { equipSelect(julie, weapon); });
            document.getElementById("equipment").appendChild(button3);
          } else {
            button3.addEventListener('click', () =>{alert("It seems you haven't met whomever can equip this yet.")})
          }
        }
        if (weapon.type === "Twin Daggers"){
          let button2 = document.createElement("button");
          button2.textContent = weapon.name;
          if (currentParty.indexOf(ari) !== -1 || reserveParty.indexOf(ari) !== -1){
            button2.addEventListener('click', () => {equipSelect(ari, weapon); });
            document.getElementById("equipment").appendChild(button2);
          } else {
            button2.addEventListener('click', () =>{alert("It seems you haven't met whomever can equip this yet.")
            })           
        }
      }
        if (weapon.type === "Tome"){
          let button2 = document.createElement("button");
          button2.textContent = weapon.name;
          if (currentParty.indexOf(gabriel) !== -1 || reserveParty.indexOf(gabriel) !== -1){
          button2.addEventListener('click', () => {equipSelect(gabriel, weapon); });
          document.getElementById("equipment").appendChild(button2);
        } else {
          button2.addEventListener('click', () =>{alert("It seems you haven't met whomever can equip this yet.")
            })
        }
      }
    }
   weaponsOwned.forEach(checker);
   console.log(currentParty);
    document.getElementById("close-menu").hidden = false;
  };
function saveScreen(){
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
 //start next
 document.getElementById("swap-menu").hidden = true;
 //Show Save
 document.getElementById("save-menu").hidden = false;
}
function save () {
    simpleStorage.flush()
    simpleStorage.set("ando",  JSON.stringify(ando));
    //simpleStorage.set("ando", ando);
    simpleStorage.set("marie", JSON.stringify(marie));
    simpleStorage.set("julie", JSON.stringify(julie));
    simpleStorage.set("ari", JSON.stringify(ari));
    simpleStorage.set("gabriel", JSON.stringify(gabriel));
  //  simpleStorage.set("currentParty", currentParty);
    simpleStorage.set("currentParty", JSON.stringify(currentParty));
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
    /*
function saveOne () {
      simpleStorage.set("ando1",  JSON.stringify(ando));
      //simpleStorage.set("ando", ando);
      simpleStorage.set("marie1", JSON.stringify(marie));
      simpleStorage.set("julie1", JSON.stringify(julie));
      simpleStorage.set("ari1", JSON.stringify(ari));
      simpleStorage.set("gabriel1", JSON.stringify(gabriel));
    //  simpleStorage.set("currentParty", currentParty);
      simpleStorage.set("currentParty1", JSON.stringify(currentParty));
      console.log(currentParty);
      simpleStorage.set("reserveParty1", JSON.stringify(reserveParty));   
      simpleStorage.set("inventory1", inventory);
      simpleStorage.set("weaponsOwned1", weaponsOwned);
      simpleStorage.set("money1", money);
      simpleStorage.set("opened1", JSON.stringify(document.getElementsByClassName("opened")));
      simpleStorage.set("opened1", opened);
      simpleStorage.set("gamestate1", gameState);
      simpleStorage.set("gamecheck1", gameCheck);
     // simpleStorage.set("chest", chests.hidden = true);
      document.getElementById("save-menu").hidden = false;
      };
      */
function openTutorial(){
  document.getElementById("equip-screen").hidden = true;
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
  //open tutorial
  document.getElementById("tutorial-menu").hidden = false;
}
function openDev () {
  document.getElementById("dev-menu").hidden = false;

  document.getElementById("equip-screen").hidden = true;
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
  //open tutorial
  document.getElementById("tutorial-menu").hidden = true;
};
//=======================================
//======================================
//Menu functionality, must go below each menu item
let menu = document.getElementById("open-menu");
function openMenu(){
  menu.hidden = true;
  document.getElementById("save-button").hidden = false;
  document.getElementById("equip-button").hidden = false;
  document.getElementById("inventory-button").hidden = false;
  if (reserveParty.length > 0) {document.getElementById("swap-team").hidden = false}
  document.getElementById("show-stats").hidden = false;
  document.getElementById("formation-button").hidden = false;
  document.getElementById("tutorial-button").hidden = false;
 // document.getElementById("dev-mode").hidden = false;
  document.getElementById("close-menu").hidden = false;
  };
function closeMenu() {
  menu.hidden = false;
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
  //hide tutorial
  document.getElementById("tutorial-menu").hidden = true;
  document.getElementById("tutorial-button").hidden = true;
  //dev mode
//  document.getElementById("dev-mode").hidden = true;
 // document.getElementById("dev-menu").hidden = true;
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
  inventory = [];
  currentParty = [ando, marie];
  ando.weapon = woodSword;
  marie.weapon = woodStaff;
  inventory.push(potion);
  inventory.push(potion);
  inventory.push(magicPotion);
  inventory.push(revivalPotion);
  simpleStorage.flush();
  gameCheck = true;
  };
function load(){
  currentParty = [];
  reserveParty = [];
 // ando = simpleStorage.get("ando");
  ando = JSON.parse(simpleStorage.get("ando"));
  marie = JSON.parse(simpleStorage.get("marie"));
  julie = JSON.parse(simpleStorage.get("julie"));
  ari = JSON.parse(simpleStorage.get("ari"));
  gabriel = JSON.parse(simpleStorage.get("gabriel"));
//  reserveParty = JSON.parse(simpleStorage.get("reserveParty"));
 weaponsOwned = simpleStorage.get("weaponsOwned");
 //currentParty = simpleStorage.get("currentParty");
  let setParty = JSON.parse(simpleStorage.get("currentParty"));
  let setReserve = JSON.parse(simpleStorage.get("reserveParty"));
  for (let i = 0; i < setParty.length; i++){
  if (setParty[i].name === "Ando"){
    currentParty.push(ando);
  } else if (setParty[i].name === "Marie"){
    currentParty.push(marie);
  } else if (setParty[i].name === "Julie"){
    currentParty.push(julie);
  } else if (setParty[i].name === "Ari") {
    currentParty.push(ari);
  } else if (setParty[i].name === "Gabriel") {
    currentParty.push(gabriel);
  }
  }
  if (setReserve.length > 0) {
  for (let i = 0; i < setReserve.length; i++){
  if (setReserve[i].name === "Ando"){
    reserveParty.push(ando);
  } else if (setReserve[i].name === "Marie"){
    reserveParty.push(marie);
  } else if (setReserve[i].name === "Julie"){
    reserveParty.push(julie);
  } else if (setReserve[i].name === "Ari") {
    reserveParty.push(ari);
  } else if (setReserve[i].name === "Gabriel") {
    reserveParty.push(gabriel);
  }
  }
  currentParty.length = 3;
    }
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
  /*
  function loadOne(){
    currentParty = [];
    reserveParty = [];
    ando = JSON.parse(simpleStorage.get("ando1"));
    marie = JSON.parse(simpleStorage.get("marie1"));
    julie = JSON.parse(simpleStorage.get("julie1"));
    ari = JSON.parse(simpleStorage.get("ari1"));
    gabriel = JSON.parse(simpleStorage.get("gabriel1"));
  //  reserveParty = JSON.parse(simpleStorage.get("reserveParty"));
   weaponsOwned = simpleStorage.get("weaponsOwned1");
   //currentParty = simpleStorage.get("currentParty");
  let setParty = JSON.parse(simpleStorage.get("currentParty1"));
  let setReserve = JSON.parse(simpleStorage.get("reserveParty1"));
  for (let i = 0; i < setParty.length; i++){
    if (setParty[i].name === "Ando"){
      currentParty.push(ando);
    } else if (setParty[i].name === "Marie"){
      currentParty.push(marie);
    } else if (setParty[i].name === "Julie"){
      currentParty.push(julie);
    } else if (setParty[i].name === "Ari") {
      currentParty.push(ari);
    } else if (setParty[i].name === "Gabriel") {
      currentParty.push(gabriel);
    }
  }
  if (setReserve.length > 0) {
    for (let i = 0; i < setReserve.length; i++){
    if (setReserve[i].name === "Ando"){
      reserveParty.push(ando);
    } else if (setReserve[i].name === "Marie"){
      reserveParty.push(marie);
    } else if (setReserve[i].name === "Julie"){
      reserveParty.push(julie);
    } else if (setReserve[i].name === "Ari") {
      reserveParty.push(ari);
    } else if (setReserve[i].name === "Gabriel") {
      reserveParty.push(gabriel);
    }
  }
  currentParty.length = 3;
  }
    console.log(currentParty);
    inventory =  simpleStorage.get("inventory1");
    money =  simpleStorage.get("money1");
    gameState = simpleStorage.get("gamestate1");
    opened = simpleStorage.get("opened1");
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
    */
function check() {
  gameCheck = simpleStorage.get("gamecheck", gameCheck);
  if (gameCheck  === true) {
  document.getElementById("continue").hidden = false;
  }
};
/*
function checkOne() {
  gameCheck = simpleStorage.get("gamecheck1", gameCheck);
  if (gameCheck  === true) {
  document.getElementById("continue1").hidden = false;
  }
};
*/
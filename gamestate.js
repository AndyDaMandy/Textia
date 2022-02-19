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
 //refactor this later
  let gameState;
  let shopState;

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
//alerts and misc dialogue
function alertOne(){
    alert("There's a Shaman that helps adventurers at our chapel! He's training them to be strong enough to take on the outside world! Adventurers, come train here!");
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
  let opened = [];

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
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
          document.getElementById("plains-1").hidden = true;
        } 
      //Chapel
        if (state == 7){
          townTwo.hidden = false;
          shopButton.hidden = true;
          document.getElementById("town-2-1").hidden = true;
          document.getElementById("town-2-chapel").hidden = false;
          document.getElementById("town-2-2").hidden = true;
          document.getElementById("town-2-3").hidden = true;
          document.getElementById("plains-1").hidden = true;
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
          document.getElementById("plains-1").hidden = true;
        }
      //Town 2-3 Magnolia Town
        if (state === 9) {
          shopButton.hidden = true;
          townTwo.hidden = false;
          document.getElementById("town-2-1").hidden = true;
          document.getElementById("town-2-chapel").hidden = true;
          document.getElementById("town-2-2").hidden = true;
          document.getElementById("town-2-3").hidden = false;
          document.getElementById("plains-1").hidden = true;
        }
      //Great Maka Plain 1-1
        if (state === 10) {
            shopButton.hidden = true;
            townTwo.hidden = true;
            document.getElementById("plains-1").hidden = false;
            document.getElementById("plains-1-1").hidden = false;
            document.getElementById("plains-1-2").hidden = true;
            document.getElementById("plains-1-3").hidden = true;
            document.getElementById("plains-1-4").hidden = true;
            document.getElementById("plains-1-5").hidden = true;
            document.getElementById("plains-1-left").hidden = true;
            document.getElementById("plains-1-right").hidden = true;
            document.getElementById("plains-1-left-2").hidden = true;
            document.getElementById("plains-1-right-2").hidden = true;
            document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka Plains 1-2
        if (state === 11) {
            document.getElementById("plains-1").hidden = false;
            document.getElementById("plains-1-1").hidden = true;
            document.getElementById("plains-1-2").hidden = false;
            document.getElementById("plains-1-3").hidden = true;
            document.getElementById("plains-1-4").hidden = true;
            document.getElementById("plains-1-5").hidden = true;
            document.getElementById("plains-1-left").hidden = true;
            document.getElementById("plains-1-right").hidden = true;
            document.getElementById("plains-1-left-2").hidden = true;
            document.getElementById("plains-1-right-2").hidden = true;
            document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka Plains 1-3
        if (state === 12){
            document.getElementById("plains-1").hidden = false;
            document.getElementById("plains-1-1").hidden = true;
            document.getElementById("plains-1-2").hidden = true;
            document.getElementById("plains-1-3").hidden = false;
            document.getElementById("plains-1-4").hidden = true;
            document.getElementById("plains-1-5").hidden = true;
            document.getElementById("plains-1-left").hidden = true;
            document.getElementById("plains-1-right").hidden = true;
            document.getElementById("plains-1-left-2").hidden = true;
            document.getElementById("plains-1-right-2").hidden = true;
            document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka Plains 1-4
        if (state === 13){
            document.getElementById("plains-1").hidden = false;
            document.getElementById("plains-1-1").hidden = true;
            document.getElementById("plains-1-2").hidden = true;
            document.getElementById("plains-1-3").hidden = true;
            document.getElementById("plains-1-4").hidden = false;
            document.getElementById("plains-1-5").hidden = true;
            document.getElementById("plains-1-left").hidden = true;
            document.getElementById("plains-1-right").hidden = true;
            document.getElementById("plains-1-left-2").hidden = true;
            document.getElementById("plains-1-right-2").hidden = true;
            document.getElementById("plains-1-6").hidden = true;
        }
      //Great maka Plains 1-5
        if (state === 14){
            document.getElementById("plains-1").hidden = false;
            document.getElementById("plains-1-1").hidden = true;
            document.getElementById("plains-1-2").hidden = true;
            document.getElementById("plains-1-3").hidden = true;
            document.getElementById("plains-1-4").hidden = true;
            document.getElementById("plains-1-5").hidden = false;
            document.getElementById("plains-1-left").hidden = true;
            document.getElementById("plains-1-right").hidden = true;
            document.getElementById("plains-1-left-2").hidden = true;
            document.getElementById("plains-1-right-2").hidden = true;
            document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka Plains - left
        if (state === 15){
          document.getElementById("plains-1").hidden = false;
          document.getElementById("plains-1-1").hidden = true;
          document.getElementById("plains-1-2").hidden = true;
          document.getElementById("plains-1-3").hidden = true;
          document.getElementById("plains-1-4").hidden = true;
          document.getElementById("plains-1-5").hidden = true;
          document.getElementById("plains-1-left").hidden = false;
          document.getElementById("plains-1-right").hidden = true;
          document.getElementById("plains-1-left-2").hidden = true;
          document.getElementById("plains-1-right-2").hidden = true;
          document.getElementById("plains-1-6").hidden = true;
        }
      //Great maka Plains -right
        if (state === 16){
          document.getElementById("plains-1").hidden = false;
          document.getElementById("plains-1-1").hidden = true;
          document.getElementById("plains-1-2").hidden = true;
          document.getElementById("plains-1-3").hidden = true;
          document.getElementById("plains-1-4").hidden = true;
          document.getElementById("plains-1-5").hidden = true;
          document.getElementById("plains-1-left").hidden = true;
          document.getElementById("plains-1-right").hidden = false;
          document.getElementById("plains-1-left-2").hidden = true;
          document.getElementById("plains-1-right-2").hidden = true;
          document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka plains - left 2
        if (state === 17){
          document.getElementById("plains-1").hidden = false;
          document.getElementById("plains-1-1").hidden = true;
          document.getElementById("plains-1-2").hidden = true;
          document.getElementById("plains-1-3").hidden = true;
          document.getElementById("plains-1-4").hidden = true;
          document.getElementById("plains-1-5").hidden = true;
          document.getElementById("plains-1-left").hidden = true;
          document.getElementById("plains-1-right").hidden = true;
          document.getElementById("plains-1-left-2").hidden = false;
          document.getElementById("plains-1-right-2").hidden = true;
          document.getElementById("plains-1-6").hidden = true;
        }
      //Great Maka Plains - right 2
        if (state === 18){
          document.getElementById("plains-1").hidden = false;
          document.getElementById("plains-1-1").hidden = true;
          document.getElementById("plains-1-2").hidden = true;
          document.getElementById("plains-1-3").hidden = true;
          document.getElementById("plains-1-4").hidden = true;
          document.getElementById("plains-1-5").hidden = true;
          document.getElementById("plains-1-left").hidden = true;
          document.getElementById("plains-1-right").hidden = true;
          document.getElementById("plains-1-left-2").hidden = true;
          document.getElementById("plains-1-right-2").hidden = false;
          document.getElementById("plains-1-6").hidden = true;
        }
      //end of Great Maka Plains
        if (state === 19){
          document.getElementById("plains-1").hidden = false;
          document.getElementById("plains-1-1").hidden = true;
          document.getElementById("plains-1-2").hidden = true;
          document.getElementById("plains-1-3").hidden = true;
          document.getElementById("plains-1-4").hidden = true;
          document.getElementById("plains-1-5").hidden = true;
          document.getElementById("plains-1-left").hidden = true;
          document.getElementById("plains-1-right").hidden = true;
          document.getElementById("plains-1-left-2").hidden = true;
          document.getElementById("plains-1-right-2").hidden = true;
          document.getElementById("plains-1-6").hidden = false;
        }
      //Aster City - Aster City South
        if (state === 20){
          document.getElementById("plains-1").hidden = true;
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-s").hidden = false;
        }
      //Aster City Center
        if (state === 21) {
          shopButton.hidden = true;
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-c").hidden = false;
        }
        //Aster City West 1
        if (state === 22){
          shopState = 2;
          shopButton.hidden = false;
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-l").hidden = false;
        }
        //Aster city West 2
        if (state === 23){
          shopButton.hidden = true;
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-l-2").hidden = false;
        }
        //Aster city East
        if (state === 24){
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-r").hidden = false;
        }
        //Aster City East 2
        if (state === 25){
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-r-2").hidden = false;
        }
        //Aster City East 3
        if (state === 26){
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-r-3").hidden = false;
        }
        //Aster City North
        if (state === 27){
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-n").hidden = false;
        }
        //Aster City North 2
        if (state === 28){
          document.getElementById("town-3").hidden = false;
          document.getElementById("town-3-n-2").hidden = false;
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
      if (itemVal.type === "Sword" || itemVal.type === "Bow" || itemVal.type === "Staff" || itemVal.type === "Spear"){
        weaponsOwned.push(itemVal);
      } else {
      inventory.push(itemVal);
      }
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
        let shopTwo = [potion, magicPotion, highPotion, revivalPotion, longBow];
        shopTwo.forEach(pusher);
      }
      if (shopState === 2){
        let shopThree = [potion, magicPotion, highPotion, revivalPotion];
        shopThree.foreEach(pusher);
      }
  
  }
  let opened = [];

  //===================================
  //Open chest and stuff
  //==================================
  //chest variables get saved?
  function openChest(item, id){
    if (item.category === "Weapon"){
      weaponsOwned.push(item);
    } else if (item.category === "item"){
      inventory.push(item);
    }
    document.getElementById(id).hidden = true;
    opened.push(id);
    alert("You found: " + item.name + " - in the chest!"); 
  };
 /* function openWeapon(weapon, id){
    weaponsOwned.push(weapon);
    document.getElementById(id).hidden = true;
    opened.push(id);
    alert("You found: " + weapon.name + " - in the chest!");
  }
  */
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
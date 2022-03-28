//Battle Mode
let battleState = 0;
//global variable that holds enemy hp for targetting
let enHp = [];
let pHp = [];
let pMp = [];
let enItems = [];
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
//calculating functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }
//check weakness might scale with levels
let elementalBoost = 0;
function checkWeakness(enemy, skill, weapon){
  if (skill != "blank"){   
    if (enemy.weakness.element !== neuEl.element && enemy.weakness.element === skill.element.element) {
      elementalBoost += 2;     
      return true;
    } else {
      elementalBoost = 0;
      return false;
    }
 }
else if (enemy.weakness.element !== neuEl.element && enemy.weakness.element === weapon.element.element){
    elementalBoost += 2;
    return true;
} else {
  elementalBoost = 0;
  return false;
}
}
function sayDeadEn(enemy){
  let p2 = document.createElement("p");
  p2.textContent = enemy.name + " has been defeated!";
  info.appendChild(p2);
}
function skillUseText(char, skill){
  if (skill.type === "Magic"){
    let p = document.createElement("p");
    p.textContent = `${char.name} cast ${skill.name}!`
    info.appendChild(p);
  } if (skill.type === "Physical"){
    let p = document.createElement("p");
    p.textContent = `${char.name} used ${skill.name}!`
    info.appendChild(p);
  }
}
function showDamage(target, damage, elemental){
  if (elemental === true) {
    let pEl = document.createElement("p");
      pEl.textContent = target.name + " is weak to " + target.weakness.element + "! The attack did bonus damage!"; 
      info.appendChild(pEl);
  } 
  let p = document.createElement("p");
  p.textContent = `${target.name} was hit for ${damage} damage!`
  info.appendChild(p);
}
//calculating functions
function attackCalc (char, target, flow, skill){
  info.innerHTML = "";
  elementalBoost = 0;
  //branch for skill
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
          let itemCopy = enItems;
          let survivors = [];
          let survivorHp = [];
          let survivorItems = [];
          skillUseText(char, skill);
          enemyParty.map((en, index) => {
            let weak = checkWeakness(en, skill, char.weapon);
            let pa = char.mAtk + char.weapon.pow + skill.pow + elementalBoost - en.mDef;
            let thp = enCopy[index];
            let damage = clamp(getRandomInt(pa), pa-2, pa);
            if (damage <= 0){damage = 0};
            let final = thp - damage ;
            applyFinal.push(final);
            if (final <= 0) {         
            showDamage(en, damage, weak);
            sayDeadEn(en);
          } else {
                enCopy[index] = thp - damage;
                survivorHp.push(enCopy[index]);
                survivors.push(enemyCopy[index]);
                survivorItems.push(itemCopy[index])
                showDamage(en, damage, weak);
            }
          });
          enemyParty = survivors;
          enHp = survivorHp;
          enItems = survivorItems;
          //first applier finds out who's dead and pushes it into a new array.
          //applier applies damage to all 3. AH, okay so perhaps it applies the damage regardless, but no splice.
          //then finalizer will then take that and apply it to the enemycopy arrays.
          //enemycopy arrays will then overwrite the original arrays.
          battleMove(flow)
          }     
      else {
        let weak = checkWeakness(enemyParty[target], skill, char.weapon)
        //regular branch
        let pa = char.mAtk + char.weapon.pow + skill.pow + elementalBoost - enemyParty[target].mDef;
        let thp = enHp[target];
        let damage = clamp(getRandomInt(pa), pa-2, pa);
        if (damage <= 0){damage = 0};
        let final = thp - damage ;
        if (final <= 0) {
          skillUseText(char, skill);
          showDamage(enemyParty[target], damage, weak);
          sayDeadEn(enemyParty[target]);
          enemyParty.splice(target, 1);
          enHp.splice(target, 1);
          enItems.splice(target, 1);
          battleMove(flow)
          } else {
                skillUseText(char, skill);
                enHp[target] = thp - damage;
                showDamage(enemyParty[target], damage, weak);
                battleMove(flow)
              }
            }
      } if (skill.type === "Physical"){
            if (skill.target === "All"){
              //placed this above the for loop to prevent casting showing more times.
              let applyFinal = [];
              let enemyCopy = enemyParty;
              let enCopy = enHp;
              let itemCopy = enItems;
              let survivors = [];
              let survivorHp = [];
              let survivorItems = [];
              skillUseText(char, skill);
              enemyParty.map((en, index) => {
              let weak = checkWeakness(en, skill, char.weapon);
              let pa = char.pAtk + char.weapon.pow + skill.pow + elementalBoost - en.pDef;
              let thp = enCopy[index];
              let damage = clamp(getRandomInt(pa), pa-2, pa);
               if (damage <= 0){damage = 0};
              let final = thp - damage ;
              applyFinal.push(final);
              if (final <= 0) {
                showDamage(en, damage, weak);
                sayDeadEn(en);
              } else {   
                  enCopy[index] = thp - damage;
                  survivorHp.push(enCopy[index]);
                  survivors.push(enemyCopy[index]);
                  survivorItems.push(itemCopy[index])
                  showDamage(en, damage, weak);
                }
              });
              enemyParty = survivors;
              enHp = survivorHp;
              enItems = survivorItems;
              //first applier finds out who's dead and pushes it into a new array.
              //applier applies damage to all 3. AH, okay so perhaps it applies the damage regardless, but no splice.
              //then finalizer will then take that and apply it to the enemycopy arrays.
              //enemycopy arrays will then overwrite the original arrays.
              battleMove(flow)
              }        
             else { //regular branch
          let weak = checkWeakness(enemyParty[target], skill, char.weapon);
          let pa = char.pAtk + char.buff[0].pow + char.weapon.pow + skill.pow + elementalBoost - enemyParty[target].pDef;
          let thp = enHp[target];
          let damage = clamp(getRandomInt(pa), pa-2, pa);
          if (damage <= 0){damage = 0};
          let final = thp - damage ;
            if (final <= 0) {
              skillUseText(char, skill);
              //adds elemental info
              showDamage(enemyParty[target], damage, weak);
              sayDeadEn(enemyParty[target]);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              enItems.splice(target, 1);
              battleMove(flow)
              } else {
                skillUseText(char, skill);
                showDamage(enemyParty[target], damage, weak);
                enHp[target] = thp - damage;
                battleMove(flow)
                  }
          }
         
      } if (skill.type === "Steal"){
        stealFrom(enItems[target], target);
        battleMove(flow)
      }
}
  else {
          let weak = checkWeakness(enemyParty[target], "blank", char.weapon);
          let pa = char.pAtk + char.buff[0].pow + char.weapon.pow + elementalBoost - enemyParty[target].pDef;
          let thp = enHp[target];
          let damage = clamp(getRandomInt(pa), pa-2, pa);
          if (damage <= 0){damage = 0};
          let final = thp - damage ;
          if (final <= 0) {
            showDamage(enemyParty[target], damage, weak);
            sayDeadEn(enemyParty[target]);
              enemyParty.splice(target, 1);
              enHp.splice(target, 1);
              enItems.splice(target, 1);
              battleMove(flow)
            } else {
                enHp[target] = thp - damage;
                showDamage(enemyParty[target], damage, weak);
                battleMove(flow)
                }
            }
  };
function stealFrom(enemyItem, location){
  if (enemyItem !== blankItem){
    //checks steal rate, each item will have one.
    let itemRarity = enemyItem.rarity;
    let luckStat = Math.floor(ari.luck / 2);
    //since Ari is the only one that can equip lucky daggers
    if (ari.weapon === luckyDaggers){
      luckStat+= 3;
    }
    let final = itemRarity + luckStat;
    let roll = clamp(getRandomInt(100),1,100);
    if (roll <= final){
      //it now splices the item, then replaces with blankItem
      let pusher = enItems[location];
      let newBlank = blankItem;
      enItems.splice(location, 1, newBlank);
      let p = document.createElement("p");
      p.textContent = `Yes! You stole: ${pusher.name}!`;
      info.appendChild(p);
      if (pusher.category === "Weapon"){
        weaponsOwned.push(pusher);

      } else if (pusher.category === "Item") {
        inventory.push(pusher);
      }
    } else {
      let p = document.createElement("p");
      p.textContent = "Darn, you failed to steal!";
      info.appendChild(p);
    }
    //checks the global variable of items pushed into enItems
  } else {
    let p = document.createElement("p");
    p.textContent = "The enemy has nothing to steal!";
    info.appendChild(p);
  }
  console.log(enItems);
}
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
  let enPow = [];
  let teamLength = currentParty.length;
    function pusher1 (x){enPow.push(x.pAtk)};
    enemyParty.forEach(pusher1);
    let enLength = enPow.length;
    for (let i = 0; i < enPow.length; i++){
      //targeting needs to be adjusted to factor in luck. Low luck == higher chance of getting hit.
      let target = currentParty[getRandomInt(teamLength)];
      //NEW BRANCH FOR MAGIC ENEMIES GOES HERE!!!!! IT CHECKS IF THE ATTACKER HAS MORE MAGIC ATTACK THAN ATTACK
      //enemies can then use skills....?
      let attacker = enemyParty[getRandomInt(enLength)];
      if (attacker.eSkills.length > 0){
        let coinFlip = getRandomInt(2);
        //flips for skills or not
        if (coinFlip === 0){
          //now picks a random skill
          let attackInt = attacker.eSkills.length;
          let attackChoice = attacker.eSkills[getRandomInt(attackInt)];
          if (attackChoice.type === "Magical"){
            let attackerDam = attacker.mAtk;
            if (attackChoice.target === "All"){
              function mapper(target){
                let damage = attackerDam + attackChoice.pow - target.mDef;
                let damageRange = clamp(getRandomInt(damage), damage, damage+1);
                if (damageRange <= 0){damageRange = 0};
                target.chp = target.chp - damageRange;
                let damageRes = document.createElement("p");
                damageRes.textContent = target.name + " was hit by " + attacker.name + "'s " + attackChoice.name + " for " + damageRange + " damage!";
                info.appendChild(damageRes);
              }
              currentParty.map(mapper);
            } else {
            let damage = attackerDam + attackChoice.pow - target.mDef;
            let damageRange = clamp(getRandomInt(damage), damage, damage+1);
            if (damageRange <= 0){damageRange = 0};
            target.chp = target.chp - damageRange;
            let damageRes = document.createElement("p");
            damageRes.textContent = target.name + " was hit by " + attacker.name + "'s " + attackChoice.name + " for " + damageRange + " damage!";
            info.appendChild(damageRes);
            }
          } else if (attackChoice.type === "Physical"){
            let attackerDam = attacker.pAtk;
            if (attackChoice.target === "All"){
              function mapper(target){
                let damage = attackerDam + attackChoice.pow - target.pDef + target.buff[1].pow;
                let damageRange = clamp(getRandomInt(damage), damage, damage+1);
                if (damageRange <= 0){damageRange = 0};
                target.chp = target.chp - damageRange;
                let damageRes = document.createElement("p");
                damageRes.textContent = target.name + " was hit by " + attacker.name + "'s " + attackChoice.name + " for " + damageRange + " damage!";
                info.appendChild(damageRes);
              }
              currentParty.map(mapper);
            } else {
            let damage = attackerDam + attackChoice.pow - target.pDef + target.buff[1].pow;
            let damageRange = clamp(getRandomInt(damage), damage, damage+1);
            if (damageRange <= 0){damageRange = 0};
            target.chp = target.chp - damageRange;
            let damageRes = document.createElement("p");
            damageRes.textContent = target.name + " was hit by " + attacker.name + "'s " + attackChoice.name + " for " + damageRange + " damage!";
            info.appendChild(damageRes);
            }
          }
        }
        //just normal physical attack again
        else {
          let attackerDam = attacker.pAtk;
          //if buff is off, then buff = 0, thus not changing much.
          let damage = attackerDam - target.pDef + target.buff[1].pow;
          let damageRange = clamp(getRandomInt(damage), damage, damage+1);
          if (damageRange <= 0){damageRange = 0};
          target.chp = target.chp - damageRange;
          let damageRes = document.createElement("p");
          damageRes.textContent = target.name + " was hit by " + attacker.name + " for " + damageRange + " damage!";
          info.appendChild(damageRes);
          }
      } else {
      let attackerDam = attacker.pAtk;
      //if buff is off, then buff = 0, thus not changing much.
      let damage = attackerDam - target.pDef + target.buff[1].pow;
      let damageRange = clamp(getRandomInt(damage), damage, damage+1);
      if (damageRange <= 0){damageRange = 0};
      target.chp = target.chp - damageRange;
      let damageRes = document.createElement("p");
      damageRes.textContent = target.name + " was hit by " + attacker.name + " for " + damageRange + " damage!";
      info.appendChild(damageRes);
      }
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
function supCalc(caster, partymem, sup){
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
function itemCalc(partymem, item){
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
  if (char.exp >= 150 && char.level < 6){
    statBoost(char);
  }
  if (char.exp >= 220 && char.level < 7){
    statBoost(char);
  }
  if (char.exp >= 350 && char.level < 8){
    statBoost(char);
  }
  if (char.exp >= 450 && char.level < 9){
    statBoost(char);
    if (char.level === 10 && char.name === "Ando") {
      julie.skills.push(slashAll);
      let learnedSkill = document.createElement("p");
      learnedSkill.textContent = `${char.name} learned ${slashAll.name}!`
      info.appendChild(learnedSkill);
      }
  }
  if (char.exp >= 550 && char.level < 10){
    statBoost(char);
  }
  if (char.exp >= 650 && char.level < 11){
    statBoost(char);
  }
  if (char.exp >= 800 && char.level < 12){
    statBoost(char);
  }
  if (char.exp >= 950 && char.level < 13){
    statBoost(char);
  }
  if (char.exp >= 1100 && char.level < 14){
    statBoost(char);
  }
  if (char.exp >= 1300 && char.level < 15){
    statBoost(char);
  }
};
function clearBattle() {
  partyPlace.innerHTML = "";
  holder.innerHTML = "";
  adv.hidden = false;
  battleState = 0;
  enemyParty = [];
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
    };
    if (enemyParty.length === 2) {
       let p = document.createElement("h4");
        p.textContent = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name;
        enemyPlace.appendChild(p);
      };
    if (enemyParty.length === 3) {
       let p = document.createElement("h4");
        p.textContent = "Enemies: " + enemyParty[0].name + ", " + enemyParty[1].name + ", " + enemyParty[2].name;
        enemyPlace.appendChild(p);
      };
      console.log(enHp);
      console.log(enItems);
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
  enHp = [];
  pHp = [];
  pMp = [];
  change.innerHTML = "";
  info.innerHTML = "";
  if (enemyParty.length === 1){
    enHp.push(enemyParty[0].hp);
    enItems.push(enemyParty[0].steal);
    };
    if (enemyParty.length === 2) {
        enHp.push(enemyParty[0].hp);
        enItems.push(enemyParty[0].steal);
        enHp.push(enemyParty[1].hp);
        enItems.push(enemyParty[1].steal);
      };
    if (enemyParty.length === 3) {
        enHp.push(enemyParty[0].hp);
        enItems.push(enemyParty[0].steal);
        enHp.push(enemyParty[1].hp);
        enItems.push(enemyParty[1].steal);
        enHp.push(enemyParty[2].hp);
        enItems.push(enemyParty[2].steal);
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
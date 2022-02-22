/*
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
  */
let ando = {
  name: 'Ando',
  level: 1,
  hp: 15,
  chp: 15,
  mp: 5,
  cmp: 5,
  pAtk: 10,
  pDef: 4,
  mAtk: 1,
  mDef: 2,
  exp: 0,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
let marie = {
  name: 'Marie',
  level: 1,
  hp: 10,
  chp: 10,
  mp: 13,
  cmp: 13,
  pAtk: 3,
  pDef: 2,
  mAtk: 10,
  mDef: 5,
  exp: 0,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
let julie = {
  name: 'Julie',
  level: 3,
  hp: 14,
  chp: 14,
  mp: 8,
  cmp: 8,
  pAtk: 12,
  pDef: 5,
  mAtk: 3,
  mDef: 6,
  exp: 30,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
let ari = {
  name: 'Ari',
  level: 3,
  hp: 14,
  chp: 14,
  mp: 8,
  cmp: 8,
  pAtk: 12,
  pDef: 5,
  mAtk: 3,
  mDef: 6,
  exp: 30,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
const iceEl = {
   element: 'Ice',
   des: 'Ice Element, strong against Fire'
 };
const fireEl = {
  element: 'Fire',
  des: 'Fire Element, strong against Ice'
}
const thunEl = {
  element: 'Thunder',
  des: 'Thunder Element, strong against Water.'
}
const watEl = {
  element: 'Water',
  des: 'Water Element, strong against Thunder'
}
const neuEl = {
  element: 'Neutral',
  des: 'non-elemental damage'
}
//  const iceEl = new Element('Ice', 'Ice Element, strong against Fire');
 // const fireEl = new Element('Fire', 'Fire Element, strong against Ice.');
//  const thunEl = new Element('Thunder', 'Thunder Element, strong against Water.');
 // const watEl = new Element('Water', 'Water Element, strong against Thunder.');
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
  //very important, use "None" for enemies with no elemental weaknesses and "N/A" for skills/weapons
  const iceman = new Enemy ('Ice Man', 1, 8, 5, 5, 2, 1, 1, fireEl, 1, 1, [], 'Frost');
  //if an enemy is flying, bows hit for extra damage.
  const bat = new Enemy('Bat', 1, 13, 3, 7, 2, 1, 1, neuEl, 1, 1, [], 'Flying');
  const familiar = new Enemy('Familiar', 1, 55, 3, 9, 4, 0, 2, thunEl, 1, 0, [], 'Familiar');
  const sparkBison = new Enemy('Spark Bison', 3, 20, 1, 11, 9, 1, 3, watEl, 5, 5, [],'Bison');
  const redGoblin = new Enemy('Red Goblin', 3, 30, 1, 10, 4, 2, 5, neuEl ,7, 10, [], 'Goblin');
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
    weakness: neuEl,
    exp: 1,
    money: 2,
    eSkills: [],
    type: "Goblin"
    }; 
    //bosses go below
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
  const flareFox = new Enemy('Flare Fox', 4, 100, 10, 13, 5, 13, 5, iceEl, 50, 50, [], 'Fox');
  const iceLeopard = new Enemy('Ice Leopard', 4, 100, 2, 15, 6, 1, 2, fireEl, 50, 50, [], 'Leopard');
//Enemy Skills - to be pushed into the enemies individually after creating it.

class EnemySkill {
  constructor(name, type, pow, cost, target){
    this.name = name;
    this.type = type;
    this.pow = pow;
    this.cost = cost;
    this.target = target;
  }
};
const fireBall = new EnemySkill('Fire Ball', 'Magical', 3, 2, 'Single');
const flameWave = new EnemySkill('Flame Wave', 'Magical', 1, 2, 'All');
flareFox.eSkills.push(fireBall);
flareFox.eSkills.push(flameWave);
const iceClaw = new EnemySkill('Ice Claw', 'Physical', 3, 2, 'Single');
const wideSwipe = new EnemySkill('Wide Swipe', 'Physical', 1, 2, 'All');
iceLeopard.eSkills.push(iceClaw);

  //============================
  //Skills
  //===========================
//very important, use "None" for enemies with no elemental weaknesses and "N/A" for skills/weapons  
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
  const volley = new Skill('Volley', 'Physical', "N/A", 'Hits all enemies with arrows', 3, 6, 'All');
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
    element: "N/A",
    des: "Deals physical damage to 1 enemy",
    pow: 4,
    cost: 3,
    target: 'Single'
    };
  const slashAll = {
      name: "Slash All",
      type: "Physical",
      element: "N/A",
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
  const highPotion = {
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
    constructor(name, type, des, atr, pow, element, cost){
      this.name = name;
      this.type = type;
      this.des = des;
      this.atr = atr;
      this.pow = pow;
      this.element = element;
      this.cost = cost;
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
  const longBow = new Weapon('Long Bow', 'Bow', 'A long, wooden bow.', 'Physical', 4, null, 30);
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
  

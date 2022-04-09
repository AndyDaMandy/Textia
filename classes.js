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
  luck: 1,
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
  luck: 3,
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
  luck: 5,
  exp: 30,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
let ari = {
  name: 'Ari',
  level: 5,
  hp: 14,
  chp: 14,
  mp: 6,
  cmp: 6,
  pAtk: 12,
  pDef: 8,
  mAtk: 3,
  mDef: 9,
  luck: 8,
  exp: 50,
  buff: [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],
  skills: [],
  support: [],
  weapon: 'Text',
  type: 'Player'
}
let siege = {
  name: 'Siege',
  level: 5,
  hp: 18,
  chp: 18,
  mp: 5,
  cmp: 5,
  pAtk: 20,
  pDef: 8,
  mAtk: 1,
  mDef: 1,
  luck: 2,
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
  //======================================
  //Items go here
  //rarity = difficulty for stealing. Low = rare, high = not rare
  class Item {
    constructor(name, category, type, des, effect, rarity, cost, target){
      this.name = name;
      this.category = category;
      this.type = type;
      this.des = des;
      this.effect = effect;
      this.rarity = rarity;
      this.cost = cost;
      this.target = target;
    }
  }
const potion = {
    name: "Potion",
    category: "Item",
    type: "Healing",
    des: "Heals 10 points of HP.",
    rarity: 80,
    effect: 10,
    cost: 5
    };
const highPotion = {
      name: "High Potion",
      category: "Item",
      type: "Healing",
      des: "Heals 15 points of HP.",
      effect: 20,
      rarity: 60,
      cost: 10
      };
const magicPotion = {
    name: "Magic Potion",
    category: "Item",
    type: "mHealing",
    des: "Heals 10 points of MP.",
    rarity: 25,
    effect: 10,
    cost: 8
    };
const highMagicPotion = new Item('High Magic Potion', 'Item', 'mHealing', 'Heals 20 points of MP', 20, 18, 60, 'Single');
const revivalPotion = {
    name: "Revival Potion",
    category: "Item",
    type: "Rev",
    des: "Revives ally with 10 points of HP.",
    rarity: 25,
    effect: 10,
    cost: 15
    };
const highRevivalPotion = new Item('High Revival Potion', 'Item', 'Rev', 'Revives an ally with 20 points of HP', 20, 18, 60, 'Single');
  //=======================================
  // Weapons go here
  //characters can only equip certain types of weapons, enforced by the equip screen.
  class Weapon {
    constructor(name, category, type, des, atr, pow, element, cost, rarity){
      this.name = name;
      this.category = category;
      this.type = type;
      this.des = des;
      this.atr = atr;
      this.pow = pow;
      this.element = element;
      this.cost = cost;
      this.rarity = rarity;
    }
  }
//Sword
const flameSword = {
    name: "Flame Sword",
    category: "Weapon",
    type: "Sword",
    des: "A basic sword imbued with Fire Magic",
    atr: "Physical",
    element: fireEl,
    pow: 5
  }
const woodSword = {
    name: "Wooden Sword",
    category: "Weapon",
    type: "Sword",
    des: "A basic wooden sword",
    atr: "Physical",
    element: neuEl,
    pow: 1
    };
const ironSword = {
      name: "Iron Sword",
      category: "Weapon",
      type: "Sword",
      des: "An iron sword",
      atr: "Physical",
      element: neuEl,
      pow: 3
      };
const silverSword = new Weapon('Silver Sword', 'Weapon', 'Sword', 'A powerful blade of steel, with anti-undead properties', 'Physical', 7, neuEl, 10000, 1);
const excalibur = new Weapon('Excalibur','Weapon', 'Sword','The most powerful blade in the world','Physical', 1000, neuEl, 10000, 1);
//Staff
const woodStaff = {
    name: "Wooden Staff",
    category: "Weapon",
    type: "Staff",
    des: "A basic Staff",
    atr: "Magical",
    element: neuEl,
    pow: 1
    };
const ironStaff = new Weapon('Iron Staff', 'Weapon', 'Staff', 'A simple staff made of iron', 'Magical', 3, neuEl, 20, 50);
const iceStaff = new Weapon('Ice Staff','Weapon','Staff', 'A basic staff imbued with Ice Magic','Magical', 4, iceEl, 10, 30);
const ancientWoodStaff = new Weapon('Ancient Wooden Staff', 'Weapon', 'Staff', 'A staff made from the wood of an ancient magical tree', 'Magical', 7, neuEl, 10000, 1);
//Bow
  const woodBow = {
    name: "Wooden Bow",
    category: "Weapon",
    type: "Bow",
    des: "A basic Bow and Arrow set",
    atr: "Physical",
    element: neuEl,
    pow: 1
    };
  const longBow = new Weapon('Long Bow','Weapon', 'Bow', 'A long, wooden bow.', 'Physical', 4, neuEl, 30, 50);
  const sparkBow = new Weapon('Spark Bow', 'Weapon', 'Bow', 'A powerful bow imbued with Thunder', 'Physical', 8, thunEl, 150, 30);
//Spear
  const ironSpear = new Weapon('Iron Spear','Weapon', 'Spear', 'A simple spear with an iron tip', 'Physical', 4, neuEl, 30);
  const iceSpear = new Weapon('Ice Spear', 'Weapon', 'Spear', 'A spear imbued with Ice Magic', 'Physical', 3, iceEl, 50);
//Twin Daggers
const ironDaggers = new Weapon('Iron Daggers', 'Weapon', 'Twin Daggers', 'Two daggers made of iron', 'Physical', 3, neuEl, 30, 80);
const luckyDaggers = new Weapon('Lucky Daggers', 'Weapon', 'Twin Daggers', 'Two daggers that make you feel lucky!', 'Physical', 2, neuEl, 100, 10);
const waterDaggers = new Weapon('Water Daggers', 'Weapon', 'Twin Daggers', 'Twin daggers imbued with', 'Physical', 7, watEl, 30, 1);

  //========================================
//blank item is a blank item for enemies to hold.
  const blankItem = {
    name: 'Blank'
  };

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
//flare fox skills
const fireBall = new EnemySkill('Fire Ball', 'Magical', 3, 2, 'Single');
const flameWave = new EnemySkill('Flame Wave', 'Magical', 1, 2, 'All');
//ice leopard skills
const iceClaw = new EnemySkill('Ice Claw', 'Physical', 3, 2, 'Single');
const wideSwipe = new EnemySkill('Wide Swipe', 'Physical', 1, 2, 'All');
const eFire = new EnemySkill('Fire', 'Magical', 3, 2, 'Single');
//great shark skills
const largeBite = new EnemySkill('Large Bite', 'Physical', 2, 2, 'Single');
const bigWave = new EnemySkill('Powerful Wave', 'Magical', 1, 2, 'All');

//enemies go here
  class Enemy {
    constructor(name, level, hp, mp, pAtk, pDef, mAtk, mDef, weakness, exp, money, eSkills, type,  steal){
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
      this.steal = steal;
    }
  };
  //very important, use neuEl for enemies with no elemental weaknesses and "N/A" for skills/weapons
  const iceman = new Enemy ('Ice Man', 1, 8, 5, 5, 2, 1, 1, fireEl, 1, 1, [], 'Frost');
  //if an enemy is flying, bows hit for extra damage.
  const bat = new Enemy('Bat', 1, 13, 3, 10, 3, 1, 1, neuEl, 1, 1, [], 'Flying');
  const familiar = new Enemy('Familiar', 1, 55, 3, 9, 4, 0, 2, thunEl, 1, 0, [], 'Familiar');
  const sparkBison = new Enemy('Spark Bison', 3, 20, 1, 11, 9, 1, 3, watEl, 5, 5, [],'Bison');
  const redGoblin = new Enemy('Red Goblin', 3, 30, 1, 10, 4, 2, 5, neuEl ,7, 10, [], 'Goblin');
  const arenaFighter = new Enemy('Arena Fighter', 4, 30, 3, 13, 9, 0, 0, iceEl, 5, 5, [], 'Human', potion);
  const arenaMage = new Enemy('Arena Mage', 10, 25, 20, 12, 8, 14, 5, iceEl, 5, 5, [eFire], 'Human', magicPotion);
  const swordFish = new Enemy('Sword Fish', 5, 30, 5, 18, 7, 7, 6, thunEl, 10, 20, [], 'Fish', highPotion);
  const shieldFish = new Enemy('Shield Fish', 5, 40, 4, 16, 13, 2, 2, thunEl, 10, 20, [], 'Fish', highPotion);
  const advenKnight = new Enemy('Adventurer Knight', 10, 50, 5, 90, 12, 0, 9, neuEl, 10, 10, [], 'Human', blankItem);
  const advenArcher = new Enemy('Adventurer Archer', 5, 40, 10, 21, 12, 0, 12, iceEl, 10, 10, [], 'Human', blankItem);
  const advenMage = new Enemy('Adventurer Mage', 10, 30, 20, 15, 12, 10, 15, neuEl, 10, 10, [eFire, flameWave], 'Human', magicPotion);
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
    steal: "blank",
    eSkills: [],
    type: "Goblin",
    steal: potion
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
    type: "Goblin",
    steal: potion
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
    type: "enemy",
    steal: blankItem
    };
  const flareFox = new Enemy('Flare Fox', 4, 100, 10, 13, 5, 13, 5, iceEl, 50, 50, [fireBall, flameWave], 'Fox', blankItem);
  const iceLeopard = new Enemy('Ice Leopard', 4, 100, 2, 15, 6, 1, 2, fireEl, 50, 50, [iceClaw, wideSwipe], 'Leopard', blankItem);
  //greatshark is allied with a swordFish
  const greatShark = new Enemy('Great Shark of Aster Ocean', 10, 105, 10, 19, 8, 15, 10, thunEl, 55, 100, [largeBite, bigWave], 'Fish', sparkBow);
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
  const volley = new Skill('Volley', 'Physical', neuEl, 'Hits all enemies with arrows', 2, 6, 'All');
  const steal = new Skill('Steal', 'Steal', neuEl, 'Attempts to steal from 1 enemy', 0, 0, 'Single');
  const fireTwo = new Skill('Fire 2', 'Magic', fireEl, 'Deals powerful fire damage to one enemy', 8, 7, 'Single');
  const waterArrowTwo = new Skill('Water Arrow 2', 'Physical', watEl, 'Shoots an arrow that deals powerful water damage to 1 enemy', 8, 7, 'Single');
  const iceSlashTwo = new Skill('Ice Slash 2', 'Physical', iceEl, 'A powerful slash that deals ice damage to 1 enemy', 8, 7, 'Single');
  const quickSlashes = new Skill('Quick Swipes', 'Physical', neuEl, 'Deals light damage to all enemies', 1, 1, 'All');
  const thunSwipes = new Skill('Thunder Swipe', 'Physical', thunEl, 'Deals light thunder damage to all enemies', 1, 2, 'All');
  const fire = {
    name: "Fire",
    type: "Magic",
    element: fireEl,
    des: "Hits enemy with magic-based fire damage",
    pow: 2,
    cost: 3,
    target: 'Single'
    };
  const basher = {
    name: "Basher",
    type: "Physical",
    element: neuEl,
    des: "Deals physical damage to 1 enemy",
    pow: 4,
    cost: 3,
    target: 'Single'
    };
  const slashAll = {
      name: "Slash All",
      type: "Physical",
      element: neuEl,
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
    pow: 2,
    cost: 2
    };
  const waterArrow = {
    name: "Water Arrow",
    type: "Physical",
    des: "Deals physical and water damage to 1 enemy",
    element: watEl,
    pow: 2,
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
  const cureAll = new Skill('Cure All', 'Healing', neuEl, 'Heals all allies', 5, 5, 'All');
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
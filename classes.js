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
let gabriel = {
  name: 'Gabriel',
  level: 11,
  hp: 19,
  chp: 19,
  mp: 22,
  cmp: 22,
  pAtk: 12,
  pDef: 8,
  mAtk: 14,
  mDef: 14,
  luck: 8,
  exp: 900,
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
    type: "Magic Healing",
    des: "Heals 10 points of MP.",
    rarity: 25,
    effect: 10,
    cost: 8
    };
const highMagicPotion = new Item('High Magic Potion', 'Item', 'Magic Healing', 'Heals 20 points of MP', 20, 18, 60, 'Single');
const revivalPotion = {
    name: "Revival Potion",
    category: "Item",
    type: "Revival",
    des: "Revives ally with 10 points of HP.",
    rarity: 25,
    effect: 10,
    cost: 15
    };
const highRevivalPotion = new Item('High Revival Potion', 'Item', 'Revival', 'Revives an ally with 20 points of HP', 20, 18, 60, 'Single');
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
const katana = new Weapon('Katana', 'Weapon','Sword', 'A powerful blade from the far East', 'Physical', 8, neuEl, 120, 10);
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
const lunarStaff = new Weapon('Lunar Staff', 'Weapon', 'Staff', 'A staff made from fragments of the moon.', 'Magical', 9, neuEl, 10000, 10);
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
  const sparkBow = new Weapon('Spark Bow', 'Weapon', 'Bow', 'A powerful bow imbued with Thunder', 'Physical', 10, thunEl, 150, 30);
  const narshBow = new Weapon('Sacred Narsh Bow', 'Weapon', 'Bow', 'A strong bow made from the sacred trees of Narsh', 'Phsycial', 10, neuEl, 85, 30);
//Spear
  const ironSpear = new Weapon('Iron Spear','Weapon', 'Spear', 'A simple spear with an iron tip', 'Physical', 4, neuEl, 30);
  const iceSpear = new Weapon('Ice Spear', 'Weapon', 'Spear', 'A spear imbued with Ice Magic', 'Physical', 3, iceEl, 50);
//Twin Daggers
const ironDaggers = new Weapon('Iron Daggers', 'Weapon', 'Twin Daggers', 'Two daggers made of iron', 'Physical', 3, neuEl, 30, 80);
const luckyDaggers = new Weapon('Lucky Daggers', 'Weapon', 'Twin Daggers', 'Two daggers that make you feel lucky!', 'Physical', 2, neuEl, 100, 10);
const waterDaggers = new Weapon('Water Daggers', 'Weapon', 'Twin Daggers', 'Twin daggers imbued with', 'Physical', 7, watEl, 30, 1);
const dragonScales = new Weapon('Lunar Dragon Scales', 'Weapon', 'Twin Daggers', 'Scales from the Lunar Dragon, sharp enough to use as blades.', 'Physical', 12, neuEl, 10000, 9);
//Tomes
const tomeofLife = new Weapon('Tome of Life', 'Weapon', 'Tome', 'A tome that reveals the secrets of life-energies', 'Magical', 5, neuEl, 1000, 10);
const tomeFire = new Weapon('Tome of Fire', 'Weapon', 'Tome', 'A Tome that reveals the secrets of the fire element', 'Magical', 9, fireEl, 100, 20);
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
//great shark skills
const largeBite = new EnemySkill('Large Bite', 'Physical', 2, 2, 'Single');
const bigWave = new EnemySkill('Powerful Wave', 'Magical', 1, 2, 'All');
//Lunar Dragon
const lunarEdge = new EnemySkill('Lunar Edge', 'Magical', 3, 2, 'Single');
const crescentStrike = new EnemySkill('Crescent Strike', 'Physical', 1, 2, 'All');
const moonlight = new EnemySkill('Moonlight', 'Healing', 20, 2, 'Single');
//Red Skills
const sunSlash = new EnemySkill('Solar Dragon Blade', 'Magical', 3, 3, 'Single');
const crystalBlessing = new EnemySkill('Crystal Blessing', 'Healing', 40, 3, 'Single');
const eCriticalThrust = new EnemySkill('Critical Thrust', 'Physical', 5, 3, 'Single');
const wideSlash = new EnemySkill('Wide Slash', 'Physical', 2, 3, 'All');
//misc enemy skills
const eFire = new EnemySkill('Fire', 'Magical', 3, 2, 'Single');
const lightHeal = new EnemySkill('Light Heal', 'Healing', 10, 3, 'Single');
const ethun = new EnemySkill('Thunder', 'Magical', 3, 2, 'Single');
const thunWave = new EnemySkill('Thunder Wave', 'Magical', 2, 2, 'All');


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
  //very important, use neuEl for enemies with no elemental weaknesses
  const iceman = new Enemy ('Ice Man', 1, 8, 5, 5, 2, 1, 1, fireEl, 1, 1, [], 'Frost');
  //if an enemy is flying, bows hit for extra damage.
  const bat = new Enemy('Bat', 1, 13, 3, 10, 3, 1, 1, neuEl, 1, 1, [], 'Flying');
  const familiar = new Enemy('Familiar', 1, 55, 3, 9, 4, 0, 2, thunEl, 1, 0, [], 'Familiar');
  const sparkBison = new Enemy('Spark Bison', 3, 20, 1, 11, 7, 1, 3, watEl, 5, 5, [],'Bison');
  const redGoblin = new Enemy('Red Goblin', 3, 30, 1, 10, 4, 2, 5, neuEl ,7, 10, [], 'Goblin');
  const arenaFighter = new Enemy('Arena Fighter', 4, 25, 3, 13, 8, 0, 0, iceEl, 5, 5, [], 'Human', potion);
  const arenaMage = new Enemy('Arena Mage', 10, 25, 20, 12, 6, 14, 5, iceEl, 5, 5, [eFire], 'Human', magicPotion);
  const swordFish = new Enemy('Sword Fish', 5, 25, 5, 18, 7, 7, 6, thunEl, 15, 20, [], 'Fish', highPotion);
  const shieldFish = new Enemy('Shield Fish', 5, 40, 4, 16, 10, 2, 2, thunEl, 15, 20, [], 'Fish', highPotion);
  const advenKnight = new Enemy('Adventurer Knight', 10, 40, 5, 19, 12, 0, 9, neuEl, 10, 10, [], 'Human', highRevivalPotion);
  const advenArcher = new Enemy('Adventurer Archer', 5, 25, 25, 21, 12, 0, 12, iceEl, 10, 10, [], 'Human', highPotion);
  const advenMage = new Enemy('Adventurer Mage', 10, 20, 20, 17, 12, 20, 12, neuEl, 10, 10, [eFire, flameWave, lightHeal], 'Human', highMagicPotion);
  const glassBeast = new Enemy('Glass Beast', 15, 100, 0, 25, 0, 0, 9, fireEl, 25, 25, [], 'Glass', blankItem);
  const fireLion = new Enemy('Fire Mountain Lion', 13, 30, 10, 22, 10, 0, 12, iceEl, 25, 25, [], 'Lion', highPotion);
  const obsidianGolem = new Enemy('Obsidian Golem', 20, 35, 10, 20, 12, 0, 6, fireEl, 30, 30, [], 'Golem', highRevivalPotion); 
  const thunderRod = new Enemy('Thunder Rod', 20, 30, 30, 19, 10, 25, 15, watEl, 40, 40, [ethun, thunWave], 'Rod', blankItem);
  const aquaSlime = new Enemy('Aqua Slime', 10, 30, 10, 19, 12, 20, 15, thunEl, 20, 20, [], 'Slime', highMagicPotion);
  const shadow = new Enemy('Shadow Warrior', 20, 45, 40, 26, 12, 26, 12, neuEl, 40, 40, [eFire, lightHeal], 'Shadow', highRevivalPotion);
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
  //dark crow
  const darkCrow = new Enemy('Thunder Rod', 20, 80, 30, 25, 20, 25, 20, neuEl, 80, 80, [], 'Flying', blankItem);
  const lunarDragon = new Enemy('Lunar Dragon of Narsh', 20, 110, 30, 25, 12, 23, 12, watEl, 200, 300, [lunarEdge, moonlight, crescentStrike], 'Dragon', dragonScales);
  const redPilgrim = new Enemy('Red - The First Pilgrim', 100, 300, 20, 25, 9, 25, 9, neuEl, 200, 500, [sunSlash, crystalBlessing, eCriticalThrust, wideSlash], 'Human', excalibur);
//============================
//Skills
//===========================
//very important, use "None" for enemies with no elemental weaknesses  
class Skill {
    constructor(name, type, element, des, pow, cost, target, effect){
      this.name = name;
      this.type = type;
      this.element = element;
      this.des = des;
      this.pow = pow;
      this.cost = cost;
      this.target = target;
      this.effect = effect;
    }
  };
  const thunder = new Skill('Thunder', 'Magic', thunEl, 'Hits enemy with weak magic-based thunder damage', 4, 5, 'Single', 'None');
  const thunderThree = new Skill('Thunder 3', 'Magic', thunEl, 'Hits an enemy with extremely powerful Thunder Magic', 15, 11, 'Single', 'None');
  //need a way to show a skill hits all or not....
  const water = new Skill('Water','Magic', watEl, 'Hits enemy with weak magic-based water damage', 4, 6, 'All', 'None');
  const iceTwo = new Skill('Ice 2', 'Magic', iceEl, 'Deals powerful ice magic damage to all enemies', 10, 7, 'All', 'None');
  const volley = new Skill('Volley', 'Physical', neuEl, 'Hits all enemies with arrows', 2, 6, 'All', 'None');
  const steal = new Skill('Steal', 'Steal', neuEl, 'Attempts to steal from 1 enemy', 0, 0, 'Single', 'None');
  const mug = new Skill('Mug', 'Steal', neuEl, 'Deals Physical damage and attempts to steal from 1 enemy', 4, 4, 'Single', 'Mug');
  const drainArrow = new Skill('Drain Arrow', 'Physical', neuEl, 'Deals Physical damage and drains health from enemy', 3, 3, 'Single', 'Drain');
  const fireTwo = new Skill('Fire 2', 'Magic', fireEl, 'Deals powerful fire damage to one enemy', 8, 7, 'Single');
  const waterArrowTwo = new Skill('Water Arrow 2', 'Physical', watEl, 'Shoots an arrow that deals powerful water damage to 1 enemy', 8, 7, 'Single', 'None');
  const iceSlashTwo = new Skill('Ice Slash 2', 'Physical', iceEl, 'A powerful slash that deals ice damage to 1 enemy', 8, 7, 'Single', 'None');
  const quickSlashes = new Skill('Quick Swipes', 'Physical', neuEl, 'Deals light damage to all enemies', 1, 1, 'All', 'None');
  const thunSwipes = new Skill('Thunder Swipe', 'Physical', thunEl, 'Deals light thunder damage to all enemies', 1, 2, 'All', 'None');
  const criticalThrust = new Skill('Critical Thrust', 'Physical', neuEl, "A carefully aimed thrust for an enemy's weak point, dealing critical damage", 12, 10, 'Single', 'None');
  const fire = {
    name: "Fire",
    type: "Magic",
    element: fireEl,
    des: "Hits enemy with magic-based fire damage",
    pow: 2,
    cost: 3,
    target: 'Single',
    effect: 'None'
    };
  const basher = {
    name: "Basher",
    type: "Physical",
    element: neuEl,
    des: "Deals physical damage to 1 enemy",
    pow: 4,
    cost: 3,
    target: 'Single',
    effect: 'None'
    };
  const slashAll = {
      name: "Slash All",
      type: "Physical",
      element: neuEl,
      des: "Deals physical damage to all enemies",
      pow: 4,
      cost: 5,
      target: 'All',
      effect: 'None'
      };
  const iceSlash = {
    name: "Ice Slash",
    type: "Physical",
    des: "Deals physical and ice damage to 1 enemy",
    element: iceEl,
    pow: 2,
    cost: 2,
    target: 'Single',
    effect: 'None'
    };
  const waterArrow = {
    name: "Water Arrow",
    type: "Physical",
    des: "Deals physical and water damage to 1 enemy",
    element: watEl,
    pow: 2,
    cost: 2,
    target: 'Single',
    effect: 'None'
    };
  //Support Skils
  const cure = {
    name: "Cure",
    type: "Healing",
    des: "Heals target character for 5 HP",
    element: watEl,
    pow: 5,
    cost: 2,
    target: 'Single',
    effect: 'None'
    };
  const meditate = new Skill('Meditate', 'Magic Healing', neuEl, 'Heals 5 MP', 5, 0, 'Self', 'None');
  const cure2 = new Skill('Cure 2', 'Healing', neuEl, 'Heals 1 ally for 20 HP', 20, 8, 'Single', 'None');
  const cureAll = new Skill('Cure All', 'Healing', neuEl, 'Heals all allies for 5 HP', 5, 4, 'All', 'None');
  const highCureAll = new Skill('High Cure All', 'Healing', neuEl, 'Healls all allies for 15 HP each', 15, 10, 'All', 'None');
  const atkBoost = {
    name: "Attack Boost",
    type: "Attack Buff",
    des: "Boosts attack for one ally for the rest of the battle. Can only be used once per character, per battle.",
    pow: 5,
    cost: 5,
    target: 'Single',
    effect: 'None'
    };
  const defBoost = {
    name: "Defense Boost",
    type: "Defense Buff",
    des: "Boosts Defense for one ally for the fest of the battle. Can only be used once per character, per battle. ",
    pow: 5,
    cost: 5,
    target: "Single",
    effect: 'None'
    };
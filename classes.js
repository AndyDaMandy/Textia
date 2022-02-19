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
  let marie = new Player('Marie', 1, 10, 10, 13, 13, 3, 2, 10, 5, 0, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player')
  let julie = new Player('Julie', 3, 14, 14, 8, 8, 12, 5, 3, 6, 30, [{type: "atk", pow: 0, on: false},{type: "def", pow: 0, on: false}],[],[],'test','Player')
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
  const sparkBison = new Enemy('Spark Bison', 3, 25, 1, 11, 9, 1, 6, watEl, 5, 5, [],'Bison');
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
  
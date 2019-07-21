class Fighter {
  constructor({ name: name, damage: damage, hp: hp, agility: agility }) {
    this._name = name;
    this._damage = damage;
    this._hp = hp;
    this._agility = agility;
    this._wins = 0;
    this._maxHp = this._hp;
    this._losses = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getHealth() {
    return this._hp;
  }

  getAgility() {
    return this._agility;
  }

  attack(fighter) {
    const maxChance = 100;
    const random = Math.floor(Math.random() * maxChance);
    if (fighter.getAgility() <= random) {
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}`)
      fighter._hp -= this.getDamage()
      if (fighter._hp <= 0) {
        fighter._hp = 0;
      }
    } else {
      console.log(`${this.getName()} missed`)
    }
  }

  heal(a) {
    this._hp + a > this._maxHp ? this._hp = this._maxHp : this._hp += a;
  }

  dealDamage(a) {
    this._hp - a <= 0 ? this._hp = 0 : this._hp -= a;
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this._wins}, Losses: ${this._losses}`)
  }

  addWin() {
    this._wins += 1
  }

  addLoss() {
    this._losses += 1
  }
}

const battle = (fighter1, fighter2) => {
  const name1 = fighter1.getName();
  const name2 = fighter2.getName();
  let game = true;

  if (fighter1.getHealth() <= 0) {
    game = false
    console.log(`${name1} is dead and can't fight`)
  } else if (fighter2.getHealth() <= 0) {
    game = false
    console.log(`${name2} is dead and can't fight`)
  }

  while (game) {
    if (fighter2.getHealth() > 0 && fighter1.getHealth() > 0) {
      fighter1.attack(fighter2)
      if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter2.attack(fighter1)
      }
    } else if (fighter2.getHealth() <= 0) {
      game = false
      fighter2.addLoss();
      fighter1.addWin();
      console.log(`${name2} lost`)
    } else if (fighter1.getHealth() <= 0) {
      game = false
      fighter1.addLoss();
      fighter2.addWin();
      console.log(`${name1} lost`)
    }
  }
}
const Weapon = require('./weapon');

class Hero {
    constructor(name, hClass, level, weapon) {
        this.name = name;
        this.hClass = hClass;
        this.level = level; 
        this.weapon = weapon;
    }

    introduce() {
        return `Hello, my name is ${this.name}, and I'm a ${this.hClass}, and I'm level ${this.level}. I'm carrying a ${this.weapon.name}.`;
    }

    //repair? since repairing should be up to the individual hero
}




//const whip = new Weapon ("whip", true, true, 100); 
//const selah = new Hero ("Selah", "Ranger", 6, whip);

//console.log(selah.introduce());

////////////////////////////////////////////


try {
    module.exports = Hero;
  } catch {
    module.exports = null;
  }

class Weapon {
    constructor(name, melee, mundane, condition) {
        this.name = name;
        this.melee = melee;
        this.mundane = mundane;
        this.condition = condition; 
        this.broken = false; //start off not broken 
    }

    useWeapon() { 
        if(this.condition > 10) {
            this.condition = this.condition - 50;
            return `You practice with ${this.name}!`;
        } else {
            this.broken = true;
            return `Your ${this.name} looks worn down, you should repair it.`
        }
    } 

}

/*const whip = new Weapon ("whip", true, true, 100); 
//console.log (whip);

console.log(whip.useWeapon());
console.log(whip.condition);
console.log(whip.useWeapon());
console.log(whip.useWeapon());*/


//////////////////////////////////////////////

try {
    module.exports = Weapon;
  } catch {
    module.exports = null;
  }
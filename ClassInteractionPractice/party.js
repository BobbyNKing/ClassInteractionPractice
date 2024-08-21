const Weapon = require('./weapon');
const Hero = require('./hero');

///////////////////////////////////

class Party {
    constructor(title, members = []) {
        this.title = title; 
        this.members = members;
    }

    addPC(PC) {
        this.members.push(PC);
        return `Welcome to the party, ${this.name}!`;
    }

    listPC() {
        let listParty = []; 

        for(let i = 0; i < this.members.length; i++) {
           let tempStr = `${this.members[i].name}: Level ${this.members[i].level} ${this.members[i].hClass}`;
           listParty.push(tempStr);
        }
        return listParty;
    }
}

/*const daggers = new Weapon ("daggers", true, true, 100); 
const whip = new Weapon ("whip", true, true, 100);
const greatsword = new Weapon ("greatsword", true, true, 100); 
const legendarystaff = new Weapon ("Staff of Hellfire", true, false, 100);
const shortbow = new Weapon ("shortbow", false, true, 100);

const selah = new Hero ("Selah", "Ranger", 6, whip);
const souma = new Hero ("Souma", "Scholar", 5, legendarystaff);
const larion = new Hero ("Larion", "Ranger", 4, greatsword); 
const rin = new Hero ("Rin", "Forest Witch", 7, daggers); 
const carmen = new Hero ("Carmen", "Ranger", 6, shortbow); 

let avengers = new Party();

avengers.addPC(selah); 
avengers.addPC(souma);
avengers.addPC(larion);
avengers.addPC(rin);
avengers.addPC(carmen);*/

//console.log(avengers.listPC());

////////////////////////////////////

try {
    module.exports = Party;
  } catch {
    module.exports = null;
  }
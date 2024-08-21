const Weapon = require('./weapon');
const Hero = require('./hero');
const Party = require('./party');
//const Mission = require('.mission');

///////////////////////////////////////

class Mission {
    constructor(title, difficulty, description) {
        this.title = title; 
        this.difficulty = difficulty; 
        this.description = description; 
    }
}

class MissionBoard {
    constructor(missions = []) {
        this.missions = missions;
        this.length = 0;
    }

    addMission(missions1) {
            this.missions.push(missions1);
            this.length++;
            return `Mission "${missions1.title}" added to the board.`;
            //return missions1.title;
        }


    lookBoard() {
        console.log(`There are ${this.length} missions on the board`);
        console.log("");

        for (let i = 0; i < this.missions.length; i++) {
            console.log(`Mission: ${this.missions[i].title}, difficulty level ${this.missions[i].difficulty} out of 20`);
            console.log(this.missions[i].description);
            console.log("");
        }
        return "There are no more postings at this time.";
    }

    canParty(heroes) { //want to take party's average levels to see if they can handle a mission


    }
}

const board = new MissionBoard();

const daggers = new Weapon ("daggers", true, true, 100); 
const whip = new Weapon ("whip", true, true, 100);
const greatsword = new Weapon ("greatsword", true, true, 100); 
const legendarystaff = new Weapon ("Staff of Hellfire", true, false, 100);
const shortbow = new Weapon ("shortbow", false, true, 100);

const selah = new Hero ("Selah", "Ranger", 6, whip);
const souma = new Hero ("Souma", "Scholar", 5, legendarystaff);
const larion = new Hero ("Larion", "Ranger", 4, greatsword); 
const rin = new Hero ("Rin", "Forest Witch", 7, daggers); 
const carmen = new Hero ("Carmen", "Ranger", 6, shortbow); 

const dragonFight = new Mission ("Kill Drakes", 3, "Three drakes are causing problems on the outskirts of town.");
const feyFight = new Mission ("Capture Archfey", 7, "In the heart of the local woods, banish the Archfey.");
const fisherMan = new Mission ("Go Fishing!", 1, "Fishermen need help capturing The Big One.");



let avengers = new Party();

board.addMission(dragonFight);
board.addMission(feyFight);
board.addMission(fisherMan);

console.log(board.lookBoard());

avengers.addPC(selah); 
avengers.addPC(souma);
avengers.addPC(larion);
avengers.addPC(rin);
avengers.addPC(carmen);

///////////////////////////////////////

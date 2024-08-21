lets make an RPG hero system that logs different RPG heroes and a quest board, and a system that would tell them what 
jobs would suit them based on level and class, or other heroes they should pair with based on another party's composition.
 We will need to register individual heroes, then a group of heroes (parties), if they can handle a bounty, if it's below 
 their pay grade or too dangerous for them to take

Hero 
-name
-species
-class
-level
-weapon 
//can introduce individual heroes, along with calling out what weapon they're carrying
//from weapon class

Party 
-a group of heroes
-what level bounties they can handle, based on the levels of the individual heroes and their level 
-what types of heroes they should recruit
-if the party should do repairs first

Weapon
-melee or ranged
-mundane or magical
-condition (int.) 
-broken (Boolean) 
//use weapon which takes up durability, and tells you if you cant use your weapon anymore

Mission 
-title
-difficulty
-description

Bounty Board
-must submit a party, not an individual hero except for easy missions
-must be a party where each member has working weapons
-must be a party of an acceptable average level
-display all available missions


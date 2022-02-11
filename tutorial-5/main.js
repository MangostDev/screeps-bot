var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleCollector = require('role.collector');
var roleMiner = require('role.miner');
var roleRepairer = require('role.repairer');
var roleReloader = require('role.reloader');
var roleFighter = require('role.fighter');
var roleHealer = require('role.healer');
var roleQuadLeader = require('role.quadLeader');
var roleDemolitionist = require('role.demolitionist');
var roleSigner = require('role.signer');
var roleLDHarvester = require('role.LDHarvester');
var demoSet = [WORK,WORK,WORK,MOVE,MOVE,MOVE];
var roleWallRepairer = require('role.wallRepairer');
var roleReserver = require('role.reserver');
var roleStocker = require('role.stocker');
var roleDefender = require('role.defender');
var roleLooter = require('role.looter');
var operationDefense = require('operation.defense');
var roleTanker = require('role.tanker');
var tankerParts = [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
var homelandDefense = 0;
var roleRaider = require('role.raider');
var roleClaimer = require('role.claimer');
var roleExcavator = require('role.excavator');

module.exports.loop = function () {

    var tower = Game.getObjectById('61f05b8f1386918450bcf27d');
        if (tower) {
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
                operationDefense.run(creep);
            }
            var closestWounded = tower.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: object => object.hits < (object.hitsMax)
            });
            if (closestWounded) {
                tower.heal(closestWounded);
            }
        }
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    if(harvesters.length > 0 && miners.length > 0) {
        var reloaders = _.filter(Game.creeps, (creep) => creep.memory.role == 'reloader');
        console.log('Reloaders: ' + reloaders.length);
    
        if(reloaders.length < 1) {
            var newNameCollector = 'Reloader' + Game.time;
            console.log('Spawning new reloader: ' + newNameCollector);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newNameCollector, {memory: {role: 'reloader'}});
        }
        
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length);
    
        if(upgraders.length < 6) {
            var newNameTwo = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newNameTwo);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newNameTwo, {memory: {role: 'upgrader'}});
        }
        
        var healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'healer');
        console.log('Healers: ' + healers.length);
    
        if(healers.length < 0) {
            var newNameCollector = 'healer' + Game.time;
            console.log('Spawning new healer: ' + newNameCollector);
            Game.spawns['Spawn1'].spawnCreep([HEAL,HEAL,MOVE], newNameCollector, {memory: {role: 'healer'}});
        }
        
        var wallRepairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer');
        console.log('WallRepairers: ' + wallRepairers.length);
    
        if(wallRepairers.length < 1) {
            var newNameCollector = 'WallRepairman' + Game.time;
            console.log('Spawning new Wallrepairman: ' + newNameCollector);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newNameCollector, {memory: {role: 'wallRepairer'}});
        }
    
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        console.log('Repairers: ' + repairers.length);
    
        if(repairers.length < 2) {
            var newNameCollector = 'Repairman' + Game.time;
            console.log('Spawning new repairman: ' + newNameCollector);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newNameCollector, {memory: {role: 'repairer'}});
        }
    
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length);
    
        if(builders.length < 3) {
            var newNameThree = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newNameThree);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], newNameThree, {memory: {role: 'builder'}});
        }
    
        var fighters = _.filter(Game.creeps, (creep) => creep.memory.role == 'fighter');
        console.log('Fighters: ' + fighters.length);
    
        if(fighters.length < 0) {
            var newName = 'Fighter' + Game.time;
            console.log('Spawning new fighter: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: 'fighter'}});
        }
    
        var stockers = _.filter(Game.creeps, (creep) => creep.memory.role == 'stocker');
        console.log('Stockers: ' + stockers.length);
        
        if(stockers.length < 1) {
            var newName = 'Stocker' + Game.time;
            console.log('Spawning New stocker: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE],newName, {memory: {role: 'stocker'}})
        }
        
        var looters = _.filter(Game.creeps, (creep) => creep.memory.role == 'looter');
        console.log('Looters: ' + looters.length);
        
        if(looters.length < 1) {
            var newName = 'Looter' + Game.time;
            console.log('Spawning New looter: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],newName, {memory: {role: 'looter'}})
        }
        
        var collectors = _.filter(Game.creeps, (creep) => creep.memory.role == 'collector');
        console.log('Collectors: ' + collectors.length);
    
        if(collectors.length < 3) {
            var newNameCollector = 'Collector' + Game.time;
            console.log('Spawning new collector: ' + newNameCollector);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newNameCollector, {memory: {role: 'collector'}});
        }
       
          var LDHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'LDHarvester');
        console.log('LDHarvesters: ' + LDHarvesters.length);
    
        if(LDHarvesters.length < 4) {
            var newName = 'LDHarvester' + Game.time;
            console.log('Spawning new LDHarvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: 'LDHarvester'}});
        }
    } else if (Game.rooms.E53N14.energyAvailable <= 400) {
        if (harvesters.length < 2 && miners.length < 1) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, {memory: {role: 'harvester'}});
        }
    } else {
        if(harvesters.length < 1) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY,MOVE], newName, {memory: {role: 'harvester'}});
        }
        else if(miners.length < 1) {
            var newNameFour = 'Miner' + Game.time;
            console.log('Spawning new miner: ' + newNameFour);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newNameFour, {memory: {role: 'miner'}});
        }
    }
    
    


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'reloader') {
            roleReloader.run(creep);
        }
        if(creep.memory.role == 'looter') {
            roleLooter.run(creep);
        }
        if(creep.memory.role == 'defender') {
            roleDefender.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'tanker') {
            roleTanker.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        if(creep.memory.role == 'stocker') {
            roleStocker.run(creep);
        }
        if(creep.memory.role == 'LDHarvester') {
            roleLDHarvester.run(creep);
        }
        if(creep.memory.role == 'excavator') {
            roleExcavator.run(creep);
        }
        if(creep.memory.role == 'quadLeader') {
            roleQuadLeader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }
        if(creep.memory.role == 'collector') {
            roleCollector.run(creep);
        }
        if(creep.memory.role == 'healer') {
            roleHealer.run(creep);
        }
        if(creep.memory.role == 'signer') {
            roleSigner.run(creep);
        }
        if(creep.memory.role == 'raider') {
            roleRaider.run(creep);
        }
        if(creep.memory.role == 'fighter') {
            roleFighter.run(creep);
        }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'demolitionist') {
            roleDemolitionist.run(creep);
        }
    }
}
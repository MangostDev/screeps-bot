var operationSiege = {
    run:function(creep) {
        var newName = 'tanker' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: 'tanker'}})
        var newName = 'healer' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL], newName, {memory: {role: 'healer'}})
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL], newName, {memory: {role: 'healer'}})
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL], newName, {memory: {role: 'healer'}})
        var newName = 'demo' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([TOUGH,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: 'demolitionist'}})
    }
}
module.exports = operationSiege;
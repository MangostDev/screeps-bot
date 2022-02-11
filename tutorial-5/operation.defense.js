var operationDefense = {
    run:function(creep) {
        console.log('ALEXA, INTRUDER ALERT');
        var newName = 'defender' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE],newName, {memory: {role: 'defender'}});
        Game.spawns['Spawn1'].spawnCreep([RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE],newName, {memory: {role: 'defender'}});
        Game.spawns['Spawn1'].spawnCreep([RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE],newName, {memory: {role: 'defender'}});
        Game.spawns['Spawn1'].spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: 'fighter'}})
    }
}
module.exports = operationDefense;
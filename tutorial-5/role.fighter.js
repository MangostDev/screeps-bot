var roleFighter = {
    run:function(creep) {
        creep.moveTo(Game.flags.Attack);
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
            filter: (s) => s.owner.username != 'Source Keeper'
        });
        console.log(closestHostile);
        var closestPriority = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
            filter: (s) => s.getActiveBodyparts(HEAL) && s.owner.username != 'Source Keeper'
        });
        console.log(closestPriority);
        if(closestPriority) {
            if(creep.attack(closestPriority) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestHostile, {visualizePathStyle: {stroke: '#ff0000'}})
            }
        }
        else if(closestHostile) {
            if(creep.attack(closestHostile) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestHostile, {visualizePathStyle: {stroke: '#ff0000'}})
            }
        }
    }
}
module.exports = roleFighter;
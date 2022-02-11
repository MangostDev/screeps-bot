var roleQuadLeader = {
    run: function(creep) {
        creep.moveTo(Game.flags.Squad1);
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            if(creep.attack(closestHostile) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestHostile, {visualizePathStyle: {stroke: '#ff0000'}})
            }
        }
    }
}
module.exports = roleQuadLeader;
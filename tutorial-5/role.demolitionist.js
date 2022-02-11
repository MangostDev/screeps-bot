var roleDemolitionist = {
    run: function(creep) {
        creep.moveTo(Game.flags.Demo);
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
         filter: object => object.structureType != STRUCTURE_CONTROLLER && object.structureType != STRUCTURE_ROAD
        });
        var priorityTarget = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
            filter: object => object.structureType == STRUCTURE_TOWER
        })
        if(priorityTarget) {
            if(creep.dismantle(priorityTarget) == ERR_NOT_IN_RANGE) {
                creep.moveTo(priorityTarget);
            }
        }
        else if(target) {
            if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
    }
};
module.exports = roleDemolitionist;
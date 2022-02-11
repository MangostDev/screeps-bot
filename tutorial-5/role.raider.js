var roleRaider = {
    run: function(creep) {
	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 pull');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 deposit');
	    }
	    
        if (creep.memory.building) {
            var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets);
            }
        }
        else {
            var lootFlag = creep.room.find(FIND_FLAGS, {
            });
            if(lootFlag) {
                var tombstone = creep.room.find(FIND_TOMBSTONES);
                var dropenergy = creep.room.find(FIND_DROPPED_RESOURCES, RESOURCE_ENERGY);
                if (tombstone) {
                    if (creep.withdraw(tombstone[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tombstone[0])
                    }
                }
                if (dropenergy) {
                    if(creep.pickup(dropenergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(dropenergy[0])
                    }
                }
            } else {
                creep.moveTo(Game.flags.Loot);
            }
        }
    }
}
module.exports = roleRaider;
var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.ticksToLive <= 100) {
            var renewer = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_SPAWN
            });
            if (Game.spawns.Spawn1.renewCreep(renewer[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(renewer[0]);
            }
        }
	    else if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_STORAGE) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[1], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleMiner;
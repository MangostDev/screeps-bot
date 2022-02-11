var roleClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {
	        creep.moveTo(Game.flags.Claim);
	        if(creep.room == Game.rooms.E52N13) {
                if(creep.room.controller) {
                    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffff00'}});
                    }
                }
                else if(creep.claimController == ERR_NOT_IN_RANGE) {
                    creep.moveTo(room.controller, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
	    }
};

module.exports = roleClaimer;
var roleReserver = {
    run: function(creep) {
	    creep.moveTo(Game.flags.Reserve);
	    if(creep.room == Game.rooms.E53N13) {
            if(creep.room.controller) {
                if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
	}
};
module.exports = roleReserver;
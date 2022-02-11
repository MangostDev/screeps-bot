var roleSigner = {
    run: function(creep) {
	    creep.moveTo(Game.flags.Sign);
	    if(creep.room == Game.rooms.E53N13) {
            if(creep.room.controller) {
                if(creep.signController(creep.room.controller, "Not-quite-fully-automated murder zone") == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
	}
};
module.exports = roleSigner;
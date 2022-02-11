var roleHealer = {
    run: function(creep) {
        creep.moveTo(Game.flags.Attack);
        var closestAlly = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
            filter: object => object.hits < (object.hitsMax)
        });
        if (creep.heal(closestAlly) == ERR_NOT_IN_RANGE) {
            creep.moveTo(closestAlly);
        }
        var tanker = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
            filter: object => object.memory.role == (object.memory.role == 'tanker')
        });
        if(!closestAlly) {
            if(creep.heal(tanker) == ERR_NOT_IN_RANGE) {
                creep.moveTo(tanker);
            }
        }
    }
};
module.exports = roleHealer;
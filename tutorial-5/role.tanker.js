var roleTanker = {
    run: function(creep) {
        if (creep.hits < creep.hitsMax/4) {
            creep.moveTo(Game.flags.TankHeal);
        } else if (creep.hits > creep.hitsMax/2) {
            creep.moveTo(Game.flags.Tank);
        }
    }
}
module.exports = roleTanker;
var roleDefender = {
    run: function(creep) {
        let rampartList = creep.room.find(FIND_MY_STRUCTURES).filter(function(structure) {
          if (structure.structureType != STRUCTURE_RAMPART) return false // Early return for not ramparts
        
          let structureList = structure.pos.lookFor(LOOK_STRUCTURES)
          if (structureList.some(looked => OBSTACLE_OBJECT_TYPES.includes(looked.structureType))) return false // Does this rampart have an obstacle-like structure under it?
          
          return true
        })
        // rampartList is now a list of ramparts with no blocking structures beneath them
        creep.moveTo(rampartList[0]);
        var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
        creep.rangedAttack(targets);
    }
}
module.exports = roleDefender;
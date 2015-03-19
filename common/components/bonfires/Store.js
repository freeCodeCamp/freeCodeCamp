var BonfiresActions = require('./Actions');
var { Store, setStateUtil } = require('thundercats');

var BonfiresStore = Store.create({

  getInitialValue: function() {
    return {
      challengeSeed: 'initial seed',
      difficulty: 0,
      description: [
        'default state'
      ]
    };
  },

  getOperations: function() {
    var {
      setBonfire
    } = BonfiresActions;

    return [
      setBonfire
        .map(function({ name, challengeSeed, description, difficulty}) {
          return {
            name,
            challengeSeed,
            description,
            difficulty
          };
        })
        .map(setStateUtil)
    ];
  }
});

module.exports = BonfiresStore;

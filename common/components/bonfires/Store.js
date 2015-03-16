var BonfiresActions = require('./Actions');
var { Store, setStateUtil } = require('thundercats');

var BonfiresStore = Store.create({

  getInitialValue: function() {
    return {
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
        .map(function({ description, difficulty}) {
          return {
            description,
            difficulty
          };
        })
        .map(setStateUtil)
    ];
  }
});

module.exports = BonfiresStore;

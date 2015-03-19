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
        .map(function({ name, description, difficulty}) {
          return {
            name,
            description,
            difficulty
          };
        })
        .map(setStateUtil)
    ];
  }
});

module.exports = BonfiresStore;

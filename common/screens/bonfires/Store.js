var BonfiresActions = require('./Actions');
var { Store, setStateUtil } = require('thundercats');

var BonfiresStore = Store.create({

  getInitialValue: function() {
    return {
      userCode: 'console.log(\'FreeCodeCamp!\')',
      difficulty: 0,
      description: [
        'default state'
      ],
      tests: [],
      results: null
    };
  },

  getOperations: function() {
    var {
      setBonfire,
      setUserCode,
      setResults,
      setDisplay
    } = BonfiresActions;

    return [
      setBonfire
        .map(function(bonfire) {
          var {
            name,
            description,
            difficulty,
            tests
          } = bonfire;
          var userCode = bonfire.challengeSeed;
          return {
            name,
            userCode,
            tests,
            description,
            difficulty
          };
        })
        .map(setStateUtil),

      setUserCode
        .map(function(userCode) {
          return { userCode };
        })
        .map(setStateUtil),

      setDisplay
        .map(function(display) {
          return { display };
        })
        .map(setStateUtil),

      setResults
        .map(function(results) {
          return { results };
        })
        .map(setStateUtil)
    ];
  }
});

module.exports = BonfiresStore;

var path = require('path'),
    // debug = require('debug')('freecc:cntr:resources'),
    cheerio = require('cheerio'),
    request = require('request'),
    R = require('ramda'),
    _ = require('lodash'),
    fs = require('fs'),


    MDNlinks = require('../../seed/bonfireMDNlinks'),
    resources = require('./resources.json'),
    nonprofits = require('../../seed/nonprofits.json');

/**
 * Cached values
 */
var allNonprofitNames,
  challengeMap, challengeMapForDisplay, challengeMapWithIds,
  challengeMapWithNames, allChallengeIds,
  challengeMapWithDashedNames;

Array.zip = function(left, right, combinerFunction) {
  var counter,
    results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};

(function() {
  if (!challengeMap) {
    var localChallengeMap = {};
    var files = fs.readdirSync(
      path.join(__dirname, '../../seed/challenges')
    );
    var keyCounter = 0;
    files = files.map(function(file) {
      return require(
        path.join(__dirname, '../../seed/challenges/' + file)
      );
    });
    files = files.sort(function(a, b) {
      return a.order - b.order;
    });
    files.forEach(function(file) {
      localChallengeMap[keyCounter++] = file;
    });
    challengeMap = _.cloneDeep(localChallengeMap);
  }
})();


module.exports = {
  dasherize: function dasherize(name) {
    return ('' + name)
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[^a-z0-9\-\.]/gi, '');
  },

  unDasherize: function unDasherize(name) {
    return ('' + name)
      // replace dash with space
      .replace(/\-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-zA-Z\d\s]/g, '')
      .trim();
  },

  getChallengeMapForDisplay: function() {
    if (!challengeMapForDisplay) {
      challengeMapForDisplay = {};
      Object.keys(challengeMap).forEach(function(key) {
        challengeMapForDisplay[key] = {
          name: challengeMap[key].name,
          dashedName: challengeMap[key].name.replace(/\s/g, '-'),
          challenges: challengeMap[key].challenges,
          completedCount: challengeMap[key].challenges
        };
      });
    }
    return challengeMapForDisplay;
  },

  getChallengeMapWithIds: function() {
    if (!challengeMapWithIds) {
      challengeMapWithIds = {};
      Object.keys(challengeMap).forEach(function(key) {
        var onlyIds = challengeMap[key].challenges.map(function(elem) {
          return elem.id;
        });
        challengeMapWithIds[key] = onlyIds;
      });
    }
    return challengeMapWithIds;
  },

  allChallengeIds: function() {

    if (!allChallengeIds) {
      allChallengeIds = [];
      Object.keys(this.getChallengeMapWithIds()).forEach(function(key) {
        allChallengeIds.push(challengeMapWithIds[key]);
      });
      allChallengeIds = R.flatten(allChallengeIds);
    }
    return allChallengeIds;
  },

  getChallengeMapWithNames: function() {
    if (!challengeMapWithNames) {
      challengeMapWithNames = {};
      Object.keys(challengeMap).
        forEach(function(key) {
          var onlyNames = challengeMap[key].challenges.map(function(elem) {
            return elem.name;
          });
          challengeMapWithNames[key] = onlyNames;
        });
    }
    return challengeMapWithNames;
  },

  getChallengeMapWithDashedNames: function() {
    if (!challengeMapWithDashedNames) {
      challengeMapWithDashedNames = {};
       Object.keys(challengeMap).
        forEach(function(key) {
          var onlyNames = challengeMap[key].challenges.map(function(elem) {
            return elem.dashedName;
          });
          challengeMapWithDashedNames[key] = onlyNames;
        });
    }
    return challengeMapWithDashedNames;
  },


  randomPhrase: function() {
    return resources.phrases[
      Math.floor(Math.random() * resources.phrases.length)
      ];
  },

  randomVerb: function() {
    return resources.verbs[
      Math.floor(Math.random() * resources.verbs.length)
      ];
  },

  randomCompliment: function() {
    return resources.compliments[
      Math.floor(Math.random() * resources.compliments.length)
      ];
  },

  allNonprofitNames: function() {
    if (allNonprofitNames) {
      return allNonprofitNames;
    } else {
      allNonprofitNames = nonprofits.map(function(elem) {
        return {name: elem.name};
      });
      return allNonprofitNames;
    }
  },

  whichEnvironment: function() {
    return process.env.NODE_ENV;
  },

  getURLTitle: function(url, callback) {
    var result = {
      title: '',
      image: '',
      url: '',
      description: ''
    };
    request(url, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(new Error('failed'));
      }
      var $ = cheerio.load(body);
      var metaDescription = $("meta[name='description']");
      var metaImage = $("meta[property='og:image']");
      var urlImage = metaImage.attr('content') ?
        metaImage.attr('content') :
        '';

      var metaTitle = $('title');
      var description = metaDescription.attr('content') ?
        metaDescription.attr('content') :
        '';

      result.title = metaTitle.text().length < 90 ?
        metaTitle.text() :
      metaTitle.text().slice(0, 87) + '...';

      result.image = urlImage;
      result.description = description;
      callback(null, result);
    });
  },

  getMDNLinks: function(links) {
    if (!links) {
      return [];
    }
    // takes in an array of links, which are strings

    // for each key value, push the corresponding link
    // from the MDNlinks object into a new array
    return links.map(function(value) {
      return MDNlinks[value];
    });
  }
};

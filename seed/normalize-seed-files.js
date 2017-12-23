var fs = require('fs');
var path = require('path');
var sortKeys = require('sort-keys');
// var Rx = require('rx');

// var langTagRegex = /^[a-z]{2,3}(?:-[A-Z]{2,3}(?:-[a-zA-Z]{4})?)?$/;
var translationRegex = /(description|title)([a-zA-Z]{2,4})/i;
var oldNameRegex = /name([a-zA-Z]{2,4})/i;
function hasOldTranslation(key) {
  return translationRegex.test(key) || oldNameRegex.test(key);
}

function normalizeLangTag(tag) {
  return tag.slice(0, 2).toLowerCase() + (
    tag.length > 2 ? '-' + tag.slice(2).toUpperCase() : ''
  );
}

function sortTranslationsKeys(translations) {
  Object.keys(translations)
    .forEach(function(key) {
      if (Object.keys(translations[key]).length > 2) {
        console.log('keys', Object.keys(translations[key]));
        throw new Error('Unknown keys');
      }
    });
  var _translations = Object.keys(translations)
    .reduce(function(_translations, key) {
      _translations[key] = sortKeys(translations[key], {
        compare: function(a, b) {
          return b > a;
        }
      });
      _translations[key] = Object.keys(_translations[key])
        .reduce(function(translation, _key) {
          translation[_key.toLowerCase()] = _translations[key][_key];
          return translation;
        }, {});
      return _translations;
    }, {});
  return sortKeys(_translations);
}

function createNewTranslations(challenge) {
  return Object.keys(challenge)
    .filter(hasOldTranslation)
    .reduce(function(translations, oldKey) {
      var matches, tag, newTranslation;
      if (translationRegex.test(oldKey)) {
        matches = oldKey.match(translationRegex);
        tag = normalizeLangTag(matches[2]);
        newTranslation = {};
        newTranslation[matches[1]] = challenge[oldKey];
        translations[tag] = translations[tag] ?
          Object.assign({}, translations[tag], newTranslation) :
          Object.assign({}, newTranslation);
        return translations;
      }
      matches = oldKey.match(oldNameRegex);
      tag = normalizeLangTag(matches[1]);
      newTranslation = { title: challenge[oldKey] };
      translations[tag] = translations[tag] ?
        Object.assign({}, translations[tag], newTranslation) :
        Object.assign({}, newTranslation);
      return translations;
    }, {});
}

function normalizeChallenge(challenge) {
  var keys = Object.keys(challenge);
  challenge.translations = challenge.translations || {};
  var hasOldTranslations = keys.some(hasOldTranslation);
  if (hasOldTranslations) {
    challenge.translations = Object.assign(
      {},
      challenge.translations,
      createNewTranslations(challenge)
    );
  }
  challenge.translations = sortTranslationsKeys(challenge.translations);
  // remove old translations from the top level
  return Object.keys(challenge)
    .filter(function(key) { return !hasOldTranslation(key); })
    .reduce(function(newChallenge, key) {
      newChallenge[key] = challenge[key];
      return newChallenge;
    }, {});
}

function normalizeBlock(block) {
  block.challenges = block.challenges.map(normalizeChallenge);
  return block;
}

function getFilesForDir(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir))
    .map(function(file) {
      if (fs.statSync(path.join(__dirname, dir + '/' + file)).isFile()) {
        return { path: dir + '/' + file };
      }
      return getFilesForDir(dir + '/' + file);
    })
    .reduce(function(files, file) {
      if (!Array.isArray(file)) {
        files.push(file);
        return files;
      }
      return files.concat(file);
    }, []);
}

function normalize(dir) {
  return getFilesForDir(dir)
    .map(function(data) {
      return {
        path: data.path,
        block: require(path.join(__dirname, data.path))
      };
    })
    .map(function(data) {
      return {
        path: data.path,
        block: normalizeBlock(data.block)
      };
    })
    .forEach(function(data) {
      var file = JSON.stringify(data.block, null, 2);
      if (/[^\n]$/.test(file)) {
        file = file + '\n';
      }
      fs.writeFileSync(
        path.join(__dirname, '/', data.path),
        file
      );
    });
}

normalize('challenges');

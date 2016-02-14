var cheerio = require('cheerio'),
    request = require('request'),
    MDNlinks = require('../../seed/bonfireMDNlinks'),
    resources = require('./resources.json');

/**
 * Cached values
 */

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

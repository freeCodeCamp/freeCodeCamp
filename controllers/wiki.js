var _ = require('lodash'),
    debug = require('debug')('freecc:cntr:wiki'),
    Wiki = require('./../models/Wiki'),
    resources = require('./resources'),
    R = require('ramda');

exports.returnIndividualWiki = function(req, res, next) {
    var dashedName = req.params.wikiName;

    var wikiName = dashedName.replace(/\-/g, ' ');

    Wiki.find({'name': new RegExp(wikiName, 'i')}, function(err, wiki) {
        if (err) {
            next(err);
        }

        if (wiki.length < 1) {
            req.flash('errors', {
                msg: "404: We couldn't find a wiki entry with that name. Please double check the name."
            });

            return res.redirect('/wiki');
        }

        wiki = wiki.pop();
        var dashedNameFull = wiki.name.toLowerCase().replace(/\s/g, '-').replace(/\?/g, '');
        if (dashedNameFull != dashedName) {
            return res.redirect('../wiki/' + dashedNameFull);
        }
        res.render('wiki/show', {
            title: wiki.name,
            wikiId: wiki._id,
            description: wiki.description.join('')
        });
    });
};

exports.showAllWikis = function(req, res) {
    var data = {};
    data.wikiList = resources.allWikiNames();
    res.send(data);
};

exports.returnNextWiki = function(req, res, next) {
  if (!req.user) {
    return res.redirect('../wiki/a-guide-to-our-wiki');
  }

  var completed = req.user.completedWikis;

  req.user.uncompletedWikis = resources.allWikiIds().filter(function (elem) {
    if (completed.indexOf(elem) === -1) {
      return elem;
    }
  });
  req.user.save();

  var uncompletedWikis = req.user.uncompletedWikis;

  var displayedWikis =  Wiki.find({'_id': uncompletedWikis[0]});
  displayedWikis.exec(function(err, wiki) {
    if (err) {
      return next(err);
    }
    wiki = wiki.pop();
    if (wiki === undefined) {
      req.flash('errors', {
        msg: "It looks like you've read all our current Wiki entries. Let us know if you'd like to contribute to our wiki!"
      });
      return res.redirect('../wiki/a-guide-to-our-wiki');
    }
    var nameString = wiki.name.toLowerCase().replace(/\s/g, '-');
    return res.redirect('../wiki/' + nameString);
  });
};

exports.completedWiki = function (req, res, next) {
  debug('params in completedWiki', req.params);
  var wikiId = req.body.wikiInfo.wikiId;

  req.user.completedWikis.push(wikiId);

  var index = req.user.uncompletedWikis.indexOf(wikiId);
  if (index > -1) {
    req.user.progressTimestamps.push(Date.now() || 0);
    req.user.uncompletedWikis.splice(index, 1);
  }

  req.user.save(function (err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      res.send(true);
    }
  });
};

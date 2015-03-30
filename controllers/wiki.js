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
        var dashedNameFull = wiki.name.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull != dashedName) {
            return res.redirect('../wiki/' + dashedNameFull);
        }
        res.render('wiki/show', {
            title: wiki.name,
            description: wiki.description.join('')
        });
    });
};

exports.showAllWikis = function(req, res) {
    data.wikiList = resources.allWikiNames();
    res.send(data);
};

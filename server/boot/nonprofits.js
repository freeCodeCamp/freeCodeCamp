var Rx = require('rx');
var debug = require('debug')('freecc:nonprofits');
var observeMethod = require('../utils/rx').observeMethod;
var unDasherize = require('../utils').unDasherize;
var dasherize = require('../utils').dasherize;

module.exports = function(app) {
  var router = app.loopback.Router();
  var Nonprofit = app.models.Nonprofit;
  var findNonprofits = observeMethod(Nonprofit, 'find');
  var findOneNonprofit = observeMethod(Nonprofit, 'findOne');

  router.get('/nonprofits/directory', nonprofitsDirectory);
  router.get('/nonprofits/:nonprofitName', returnIndividualNonprofit);

  app.use(router);

  function nonprofitsDirectory(req, res, next) {
    findNonprofits({
      order: 'moneySaved DESC'
    })
      .flatMap(
        (nonprofits = []) => {
          // turn array of nonprofits into observable array
          return Rx.Observable.from(nonprofits)
            .pluck('moneySaved')
            .reduce((sum, moneySaved = 0) => sum + moneySaved, 0);
        },
        (nonprofits = [], totalSavings) => ({ nonprofits, totalSavings })
      )
      .subscribe(({ nonprofits, totalSavings }) => {
        res.render('nonprofits/directory', {
          title: 'Nonprofits we help',
          nonprofits: nonprofits,
          totalSavings: totalSavings.toString().replace(/000$/, ',000')
        });
      },
      next
    );
  }

  function returnIndividualNonprofit(req, res, next) {
    var dashedName = req.params.nonprofitName;
    var nonprofitName = unDasherize(dashedName);
    var query = { where: { name: {
      like: nonprofitName,
      options: 'i'
    } } };

    debug('looking for %s', nonprofitName);
    debug('query', query);
    findOneNonprofit(query).subscribe(
      function(nonprofit) {
        if (!nonprofit) {
          req.flash('errors', {
            msg: "404: We couldn't find a nonprofit with that name. " +
              'Please double check the name.'
          });
          return res.redirect('/nonprofits');
        }

        var dashedNameFull = dasherize(nonprofit.name);
        if (dashedNameFull !== dashedName) {
          return res.redirect('../nonprofit/' + dashedNameFull);
        }

        res.render('nonprofits/show', {
          dashedName: dashedNameFull,
          title: nonprofit.name,
          logoUrl: nonprofit.logoUrl,
          estimatedHours: nonprofit.estimatedHours,
          projectDescription: nonprofit.projectDescription,

          approvedOther:
            nonprofit.approvedDeliverables.indexOf('other') > -1,
          approvedWebsite:
            nonprofit.approvedDeliverables.indexOf('website') > -1,

          approvedDonor:
            nonprofit.approvedDeliverables.indexOf('donor') > -1,
          approvedInventory:
            nonprofit.approvedDeliverables.indexOf('inventory') > -1,

          approvedVolunteer:
            nonprofit.approvedDeliverables.indexOf('volunteer') > -1,
          approvedForm:
            nonprofit.approvedDeliverables.indexOf('form') > -1,

          approvedCommunity:
            nonprofit.approvedDeliverables.indexOf('community') > -1,
          approvedELearning:
            nonprofit.approvedDeliverables.indexOf('eLearning') > -1,

          websiteLink: nonprofit.websiteLink,
          imageUrl: nonprofit.imageUrl,
          whatDoesNonprofitDo: nonprofit.whatDoesNonprofitDo,
          interestedCampers: nonprofit.interestedCampers,
          assignedCampers: nonprofit.assignedCampers,
          buttonActive: false,
          moneySaved: nonprofit.moneySaved,
          currentStatus: nonprofit.currentStatus
        });
      },
      next
    );
  }
};

module.exports = function(app) {
  var router = app.loopback.Router();
  var Nonprofit = app.models.Nonprofit;

  router.get('/nonprofits/directory', nonprofitsDirectory);
  router.get('/nonprofits/:nonprofitName', returnIndividualNonprofit);

  app.use(router);

  function nonprofitsDirectory(req, res, next) {
    Nonprofit.find(
      { where: { estimatedHours: { gt: 0 } } },
      function(err, nonprofits) {
        if (err) { return next(err); }

        res.render('nonprofits/directory', {
          title: 'Nonprofits we help',
          nonprofits: nonprofits
        });
      }
    );
  }

  function returnIndividualNonprofit(req, res, next) {
    var dashedName = req.params.nonprofitName;
    var nonprofitName = dashedName.replace(/\-/g, ' ');

    Nonprofit.find(
      { where: { name: new RegExp(nonprofitName, 'i') } },
      function(err, nonprofit) {
        if (err) {
          return next(err);
        }

        if (nonprofit.length < 1) {
          req.flash('errors', {
            msg: "404: We couldn't find a nonprofit with that name. " +
              'Please double check the name.'
          });

          return res.redirect('/nonprofits');
        }

        nonprofit = nonprofit.pop();
        var dashedNameFull = nonprofit.name.toLowerCase().replace(/\s/g, '-');
        if (dashedNameFull !== dashedName) {
          return res.redirect('../nonprofit/' + dashedNameFull);
        }
        var buttonActive = false;
        if (req.user) {
          if (req.user.uncompletedBonfires.length === 0) {
            if (req.user.completedCoursewares.length > 63) {
              var hasShownInterest =
                nonprofit.interestedCampers.filter(function ( obj ) {
                  return obj.username === req.user.username;
                });

              if (hasShownInterest.length === 0) {
                buttonActive = true;
              }
            }
          }
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
          buttonActive: buttonActive,
          currentStatus: nonprofit.currentStatus
        });
      }
    );
  }

  /*
  function interestedInNonprofit(req, res, next) {
    if (req.user) {
      Nonprofit.findOne(
        { name: new RegExp(req.params.nonprofitName.replace(/-/, ' '), 'i') },
        function(err, nonprofit) {
          if (err) { return next(err); }
          nonprofit.interestedCampers.push({
            username: req.user.username,
            picture: req.user.picture,
            timeOfInterest: Date.now()
          });
          nonprofit.save(function(err) {
            if (err) { return next(err); }
            req.flash('success', {
            msg: 'Thanks for expressing interest in this nonprofit project! ' +
                "We've added you to this project as an interested camper!"
            });
            res.redirect('back');
          });
        }
      );
    }
  }
  */
};

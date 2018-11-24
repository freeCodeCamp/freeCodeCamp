---
title: Make Useful APIs in Angularjs
---
There are two more things you have to do before this to be useful to you, however. Say you want to show all the _things_ associated with the username requested with that page: you must first

1.  Have a "username" or "owner" field in your _thing_ schema at `/server/api/thing/thing.model.js`
2.  Write a custom route in `/server/api/thing/index.js` to catch a request for a specific username. The request from your frontend might look something like:

    $http.get('/api/things/' + username).success( … )

so you'll add a line into your `index.js` like:

    router.get('/:user', controller.indexUser);

and then in `thing.controller.js` you'll write an _exports.indexUser_ function like so:

    exports.indexUser = function(req, res) {
        Thing.find({owner:req.params.user}, function (err, things) {
            if(err) return res.send(500, err);
            res.json(200, things);
        });
    };

Warning!!! this method only works right if usernames are absolutely unique between users. The default authentication system that comes with the angular-fullstack generator does not have unique usernames, so you're probably better off using the _user._id_ field to determine unique users in your database for now, unless you want to implement unique user names yourself by altering your `/api/user/user.model.js`, `/api/user/user.controller.js`, and your `/app/client/account/signup/signup.controller.js`. Thankfully, you should know how to go about doing all that after reading this guide!
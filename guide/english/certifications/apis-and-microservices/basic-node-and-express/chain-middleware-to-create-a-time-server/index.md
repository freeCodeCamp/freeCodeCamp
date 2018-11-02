---
title: Chain Middleware to Create a Time Server
---
## Chain Middleware to Create a Time Server

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Similar to the last challenge, but now we are chaining 2 functions together. It seems complicated, but it's just javascript.

Instead of responding with the time we can also add a string to the request and pass it to the next function. This is trivial, but it makes for a decent example. The code looks like:

```javascript
app.get("/now", middleware(req, res, next) {
  req.string = "example";
  next();
},
  function (req, res) {
      res.send(req.string); // This will display "example" to the user
  });
```



<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

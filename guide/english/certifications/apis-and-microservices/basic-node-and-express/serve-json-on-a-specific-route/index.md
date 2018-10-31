---
title: Serve JSON on a Specific Route
---
## Serve JSON on a Specific Route

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

It is rather simple to serve a json object with node (at the '/json' route), if we want to deliver a message and give it the value "Hello World," we can do so like this:

```javascript
  app.get("/json", function(req, res) {
        res.json({"message": "Hello World"});
  });
```





<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

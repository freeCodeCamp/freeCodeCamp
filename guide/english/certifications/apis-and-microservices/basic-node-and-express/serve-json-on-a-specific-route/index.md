---
title: Serve JSON on a Specific Route
---
## Serve JSON on a Specific Route

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

It is rather simple to serve a JSON object with Node (at the `/json` route), if we want to deliver an object containing a key `message` and with the value `"Hello json"` we can do so as indicated:

```javascript
app.get("/json", (req, res) => {
    res.json({
      "message": "Hello json"
    });
});
```

[Help our community expand these hints and guides.](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md)

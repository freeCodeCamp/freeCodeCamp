---
title: Start a Working Express Server
---
## Start a Working Express Server


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

If you had a website at "example.com/" and wanted to serve a string such as "Hello World" to whoever visits the root domain you could do so easily using node and/or express:

```javascript
app.get("/", function(req, res) {
  res.send("Hello World");
});

```


Also, with ES6+ you can save some typing by using "=>" instead of "function," which looks like:

```javascript
app.get("/", (req, res) => {
  res.send("Hello World");
});

```



<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

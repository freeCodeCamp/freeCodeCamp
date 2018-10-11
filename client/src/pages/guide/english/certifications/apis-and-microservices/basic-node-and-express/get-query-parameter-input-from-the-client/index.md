---
title: Get Query Parameter Input from the Client
---
## Get Query Parameter Input from the Client

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Given the hint after the stub, "/name?first=<firstname>&last=<lastname>," we can build the response like so:

```javascript
 app.get("/name", function(req, res) {
   var firstName = req.query.first;
   var lastName = req.query.last;
   // Send the json object
 });
```



<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

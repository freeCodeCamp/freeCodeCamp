---
title: Serve an HTML File
---
## Serve an HTML File

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

You probably need to comment out the last challenge. If you have a website and want to serve an index.html file you probably want to put this in a public folder. This is to ensure the public doesn't see something you dont want them to, and it sometimes is called "public" or "views," but you can technically call it whatever you want.

To serve an index.html in a folder called "public" at the root domain you would do so like this:

```javascript
  app.get("/", function(req, res) {
        res.sendFile( __dirname + "/public/index.html");
  });
```

Note: __dirname returns the root directory is a best practice for node developers.




<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

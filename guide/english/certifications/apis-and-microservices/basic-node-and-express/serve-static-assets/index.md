---
title: Serve Static Assets
---
## Serve Static Assets

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Static webpages are fairly simple with express. This could be useful for building your own portfolio website or blog, etc.

To serve a static webpage from the "views" folder you can use code such as:

```javascript
 const express = require("express");
 const app = express();
 app.use(express.static(__dirname + "/views"));
```






<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

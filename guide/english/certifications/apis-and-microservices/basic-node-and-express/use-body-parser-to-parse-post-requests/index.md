---
title: Use body-parser to Parse POST Requests
---
## Use body-parser to Parse POST Requests

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The body-parser should already be added to your project if you used the provided boilerplate, but if not it should be there as:

```code
"dependencies": {
    "body-parser": "^1.4.3",
    ...
```

All you need to do for this challenge is pass the middleware to app.use(). Make sure it comes before the paths it needs to be used on. Remember that body-parser returns with `bodyParser.urlencoded({extended: false})`. Use the following as a template:

```javascript
app.use(middleware-function);
```

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md' target='_blank' rel='nofollow'>Help our community expand these hints and guides</a>.

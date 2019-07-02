---
title: Serve Static Assets
---
## Serve Static Assets

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Serving static webpages and assets is fairly simple with `express`. This could be useful for building your own portfolio website or blog, single-page web applications etc.

To serve static assets from the `public` folder in the  you can use the `express.static()` method as the middleware. This method takes the endpoint and the absolute path to the directory containing the static assets as arguments and exposes the files in that folder at the given endpoint. By default, if the endpoint is not passed to the method, the folder is exposed at the root endpoint i.e. `/` for the application.

The `__dirname` variable is a string containing the absolute path to the root of your project which has to be concatenated with the folder containing the assets.

Add the following line to your file above all defined routes to achieve the desired result:

```javascript
// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /assets route
app.use("/assets", express.static(__dirname + "/public"));
```

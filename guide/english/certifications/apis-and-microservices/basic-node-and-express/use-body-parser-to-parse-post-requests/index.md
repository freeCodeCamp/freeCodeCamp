---
title: Use body-parser to Parse POST Requests
---
# Use body-parser to Parse POST Requests

---
## Problem Explanation
The body-parser should already be added to your project if you used the provided boilerplate, but if not it should be there as:

```json
"dependencies": {
    "body-parser": "^1.19.0",
    
    "express": "^4.17.1"
}
```

You can run `npm install body-parser` to add it as a dependency to your project instead of manually adding it to the `package.json` file.

This guide assumes you have imported the `body-parser` module into your file as `bodyParser`.

In order to import the same, you just need to add the following line at the top of your file:

```javascript
var bodyParser = require("body-parser");
```

All you need to do for this challenge is pass the middleware to `app.use()`. Make sure it comes before the paths it needs to be used on. Remember that body-parser returns with `bodyParser.urlencoded({extended: false})`. Use the following as a template:

```javascript
app.use(bodyParser.urlencoded({ extended: false }));
```

In order to parse JSON data sent in the POST request, use `bodyParser.json()` as the middleware as shown below:

```javascript
app.use(bodyParser.json());
```

The data received in the request is available in the `req.body` object.

Do not forget that all these statements need to go above any routes that might have been defined.

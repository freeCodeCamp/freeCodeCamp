---
title: Install and Set Up Mongoose
---
## Install and Set Up Mongoose

You might want to check both the [MongoDB](https://www.npmjs.com/package/mongodb) and the [Mongoose](https://www.npmjs.com/package/mongoose) NPM Repositories to get up and running.

## Hint
```javascript


//require mongo and mongoose
const VARIABLE = require('PACKAGE');

//connect to database using mongoose
```

## Solution
```javascript
//.env file
MONGO_URI=<URI>

//app.js file
const mongoose=require('mongoose');
var MongoClient = require('mongodb').MongoClient;

//saving the URI key in .env file, naming it MONGO_URI
mongoose.connect(process.env.MONGO_URI);
```


This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/install-and-set-up-mongoose/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

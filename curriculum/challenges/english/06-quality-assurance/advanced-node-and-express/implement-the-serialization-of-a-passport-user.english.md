---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
isHidden: false
forumTopicId: 301556
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Right now we're not loading an actual user object since we haven't set up our database. This can be done many different ways, but for our project we will connect to the database once when we start the server and keep a persistent connection for the full life-cycle of the app.
To do this, add MongoDB as a dependency and require it in your server. (<code>const mongo = require('mongodb').MongoClient;</code>)
Now we want to the connect to our database then start listening for requests. The purpose of this is to not allow requests before our database is connected or if there is a database error. To accomplish you will want to encompass your serialization and your app listener in the following:

```js
mongo.connect(process.env.DATABASE, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');

    //serialization and app.listen
  }
});
```

You can now uncomment the block in deserializeUser and remove your <code>done(null, null)</code>. Be sure to set <em>DATABASE</em> in your .env file to your database's connection string (for example: <code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code>). You can set up a free database on <a href='https://mlab.com/welcome/'>mLab</a>. Congratulations- you've finished setting up serialization!
Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Database connection should be present.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /mongo.connect/gi, 'You should have created a connection to your database'); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, 'You should have your app.listen nested at within your database connection at the bottom'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Deserialization should now be correctly using the DB and <code>done(null, null)</code> should be erased.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.notMatch(data, /null,( |)null/gi, 'The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

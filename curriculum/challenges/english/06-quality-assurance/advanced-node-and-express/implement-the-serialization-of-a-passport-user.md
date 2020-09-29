---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
forumTopicId: 301556
---

## Description

<section id='description'>

Right now, we're not loading an actual user object since we haven't set up our database. This can be done many different ways, but for our project we will connect to the database once when we start the server and keep a persistent connection for the full life-cycle of the app.
To do this, add your database's connection string (for example: <code>mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority</code>) to the environment variable <code>MONGO_URI</code>. This is used in the <code>connection.js</code> file.

_You can set up a free database on <a href='https://www.mongodb.com/cloud/atlas' target='_blank'>MongoDB Atlas</a>._

Now we want to connect to our database then start listening for requests. The purpose of this is to not allow requests before our database is connected or if there is a database error. To accomplish this, you will want to encompass your serialization and your app routes in the following code:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

Be sure to uncomment the <code>myDataBase</code> code in <code>deserializeUser</code>, and edit your <code>done(null, null)</code> to include the <code>doc</code>.

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Database connection should be present.
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /Connected to Database/gi, 'You successfully connected to the database!'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Deserialization should now be correctly using the DB and <code>done(null, null)</code> should be called with the <code>doc</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /null,\s*doc/gi, 'The callback in deserializeUser of (null, null) should be altered to (null, doc)'); }, xhr => { throw new Error(xhr.statusText); })
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

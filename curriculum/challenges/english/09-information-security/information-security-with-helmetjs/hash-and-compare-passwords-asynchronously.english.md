---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
isHidden: false
forumTopicId: 301578
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-bcrypt">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'>GitHub</a>.
As hashing is designed to be computationally intensive, it is recommended to do so asynchronously on your server as to avoid blocking incoming connections while you hash. All you have to do to hash a password asynchronous is call 

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

</section>

## Instructions
<section id='instructions'>
Add this hashing function to your server(we've already defined the variables used in the function for you to use) and log it to the console for you to see! At this point you would normally save the hash to your database.
Now when you need to figure out if a new input is the same data as the hash you would just use the compare function. 

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Add this into your existing hash function(since you need to wait for the hash to complete before calling the compare function) after you log the completed hash and log 'res' to the console within the compare. You should see in the console a hash then 'true' is printed! If you change 'myPlaintextPassword' in the compare function to 'someOtherPlaintextPassword' then it should say false.

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

Submit your page when you think you've got it right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Async hash should be generated and correctly compared.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'); }, xhr => { throw new Error(xhr.statusText); })

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

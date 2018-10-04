---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'>GitHub</a>.
Hashing synchronously is just as easy to do but can cause lag if using it server side with a high cost or with hashing done very often. Hashing with this method is as easy as calling <code>var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);</code>
<hr>Add this method of hashing to your code and then log the result to the console. Again, the variables used are already defined in the server so you wont need to adjust them. You may notice even though you are hashing the same password as in the async function, the result in the console is different- this is due to the salt being randomly generated each time as seen by the first 22 characters in the third string of the hash.
Now to compare a password input with the new sync hash, you would use the compareSync method: <code>var result = bcrypt.compareSync(myPlaintextPassword, hash);</code> with the result being a boolean true or false. Add this function in and log to the console the result to see it working.
Submit your page when you think you've got it right. If you ran into errors during these challenges you can take a look at the example completed code <a href='https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sync hash generated and correctly compared
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/_api/server.js'') .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, ''You should call bcrypt.hashSync on myPlaintextPassword with saltRounds''); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, ''You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

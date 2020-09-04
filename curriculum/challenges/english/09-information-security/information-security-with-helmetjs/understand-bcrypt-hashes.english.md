---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
forumTopicId: 301586
---

## Description
<section id='description'>
For the following challenges, you will be working with a new starter project that is different from the previous one. You can find the new starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-bcrypt">Repl.it</a>, or clone it from <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'>GitHub</a>.
BCrypt hashes are very secure. A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, you can also <em>salt</em> your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.
BCrypt hashes will always looks like <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> which does have a structure. The first small bit of data <code>$2a</code> is defining what kind of hash algorithm was used. The next portion <code>$13</code> defines the <em>cost</em>. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm. For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would takes multiple days to complete a hash. A cost of 12 is considered very secure at this time. The last portion of your hash <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>, looks like one large string of numbers, periods, and letters but it is actually two separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!
</section>

## Instructions
<section id='instructions'>
To begin using BCrypt, add it as a dependency in your project and require it as 'bcrypt' in your server.
Submit your page when you think you've got it right.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt should be properly required.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /bcrypt.*=.*require.*('|")bcrypt('|")/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })

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

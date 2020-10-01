---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
forumTopicId: 301553
---

## Description
<section id='description'>

Going back to the information security section, you may remember that storing plaintext passwords is <em>never</em> okay. Now it is time to implement BCrypt to solve this issue.

Add BCrypt as a dependency, and require it in your server. You will need to handle hashing in 2 key areas: where you handle registering/saving a new account, and when you check to see that a password is correct on login.

Currently on our registration route, you insert a user's password into the database like so: <code>password: req.body.password</code>. An easy way to implement saving a hash instead is to add the following before your database logic <code>const hash = bcrypt.hashSync(req.body.password, 12);</code>, and replacing the <code>req.body.password</code> in the database saving with just <code>password: hash</code>.

Finally, on our authentication strategy, we check for the following in our code before completing the process: <code>if (password !== user.password) { return done(null, false); }</code>. After making the previous changes, now <code>user.password</code> is a hash. Before making a change to the existing code, notice how the statement is checking if the password is **not** equal then return non-authenticated. With this in mind, your code could look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt should be correctly required and implemented.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')bcrypt\1/gi, 'You should have required bcrypt'); assert.match(data, /bcrypt.hashSync/gi, 'You should use hash the password in the registration'); assert.match(data, /bcrypt.compareSync/gi, 'You should compare the password to the hash in your strategy'); }, xhr => { throw new Error(xhr.statusText); })

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

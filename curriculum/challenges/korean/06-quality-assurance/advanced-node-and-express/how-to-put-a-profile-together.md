---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Now that you can ensure the user accessing the `/profile` is authenticated, you can use the information contained in `req.user` on your page.

Pass an object containing the property `username` and value of `req.user.username` as the second argument for the `render` method of the profile view.

Then, go to your `profile.pug` view, and add the following line below the existing `h1` element, and at the same level of indentation:

```pug
h2.center#welcome Welcome, #{username}!
```

This creates an `h2` element with the class `center` and id `welcome` containing the text `Welcome,` followed by the username.

Also, in `profile.pug`, add a link referring to the `/logout` route, which will host the logic to unauthenticate a user:

```pug
a(href='/logout') Logout
```

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

You should correctly add a Pug render variable to `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /username:( |)req.user.username/,
    'You should be passing the variable username with req.user.username into the render function of the profile page'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Now that we can ensure the user accessing the `/profile` is authenticated, we can use the information contained in `req.user` on our page!

Pass an object containing the property `username` and value of `req.user.username` as the second argument for the render method of the profile view. Then, go to your `profile.pug` view, and add the following line below the existing `h1` element, and at the same level of indentation:

```pug
h2.center#welcome Welcome, #{username}!
```

This creates an `h2` element with the class '`center`' and id '`welcome`' containing the text '`Welcome,`' followed by the username.

Also, in `profile.pug`, add a link referring to the `/logout` route, which will host the logic to unauthenticate a user.

```pug
a(href='/logout') Logout
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a).

# --hints--

You should correctly add a Pug render variable to /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

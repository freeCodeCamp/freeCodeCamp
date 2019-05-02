---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a>.
The final part of the strategy is handling the profile returned from GitHub. We need to load the user's database object if it exists, or create one if it doesn't, and populate the fields from the profile, then return the user's object. GitHub supplies us a unique <em>id</em> within each profile which we can use to search with to serialize the user with (already implemented). Below is an example implementation you can use in your project- it goes within the function that is the second argument for the new strategy, right below the <code>console.log(profile);</code> currently is:
<blockquote>
db.collection('socialusers').findAndModify(<br>
&nbsp;&nbsp;{id: profile.id},<br>
&nbsp;&nbsp;{},<br>
&nbsp;&nbsp;{$setOnInsert:{<br>
&nbsp;&nbsp;&nbsp;&nbsp;id: profile.id,<br>
&nbsp;&nbsp;&nbsp;&nbsp;name: profile.displayName || 'John Doe',<br>
&nbsp;&nbsp;&nbsp;&nbsp;photo: profile.photos[0].value || '',<br>
&nbsp;&nbsp;&nbsp;&nbsp;email: profile.emails[0].value || 'No public email',<br>
&nbsp;&nbsp;&nbsp;&nbsp;created_on: new Date(),<br>
&nbsp;&nbsp;&nbsp;&nbsp;provider: profile.provider || ''<br>
&nbsp;&nbsp;},$set:{<br>
&nbsp;&nbsp;&nbsp;&nbsp;last_login: new Date()<br>
&nbsp;&nbsp;},$inc:{<br>
&nbsp;&nbsp;&nbsp;&nbsp;login_count: 1<br>
&nbsp;&nbsp;}},<br>
&nbsp;&nbsp;{upsert:true, new: true},<br>
&nbsp;&nbsp;(err, doc) => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return cb(null, doc.value);<br>
&nbsp;&nbsp;}<br>
);
</blockquote>
With a findAndModify, it allows you to search for an object and update it, as well as insert the object if it doesn't exist and receive the new object back each time in our callback function. In this example, we always set the last_login as now, we always increment the login_count by 1, and only when we insert a new object(new user) do we populate the majority of the fields. Something to notice also is the use of default values. Sometimes a profile returned won't have all the information filled out or it will have been chosen by the user to remain private; so in this case we have to handle it to prevent an error.
You should be able to login to your app now- try it! Submit your page when you think you've got it right. If you're running into errors, you can check out an example of this mini-project's finished code <a href='https://glitch.com/#!/project/guttural-birch'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: GitHub strategy setup complete
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, 'Strategy should use now use the database to search for the user'); assert.match(data, /GitHubStrategy[^]*socialusers/gi, 'Strategy should use "socialusers" as db collection'); assert.match(data, /GitHubStrategy[^]*return cb/gi, 'Strategy should return the callback function "cb"'); }, xhr => { throw new Error(xhr.statusText); })

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

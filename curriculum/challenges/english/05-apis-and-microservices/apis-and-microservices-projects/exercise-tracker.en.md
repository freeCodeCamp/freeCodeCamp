---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
isRequired: true
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://fuschia-custard.glitch.me/' target='_blank'>https://fuschia-custard.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-exercisetracker/' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and <code>_id</code>.
  testString: ''
- text: I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
  testString: ''
- text: 'I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. App will return the user object with the exercise fields added.'
  testString: ''
- text: I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). App will return the user object with added array log and count (total exercise count).
  testString: ''
- text: 'I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)'
  testString: ''

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

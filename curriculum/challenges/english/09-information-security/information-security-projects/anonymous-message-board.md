---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
forumTopicId: 301568
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://anonymous-message-board.freecodecamp.rocks/" target="_blank">https://anonymous-message-board.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-messageboard">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-messageboard/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: Only allow your site to be loaded in an iFrame on your own pages.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/_api/app-info');
      const parsed = await data.json();
      assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
      }"
  - text: Do not allow DNS prefetching.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/_api/app-info');
      const parsed = await data.json();
      assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
      }"
  - text: Only allow your site to send the referrer for your own pages.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/_api/app-info');
      const parsed = await data.json();
      assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
      }"
  - text: I can POST a thread to a specific message board by passing form data `text` and `delete_password` to `/api/threads/{board}` (Recommend `res.redirect` to board page `/b/{board}`). The saved database record will have at least the following fields: `_id`, `text`, `created_on`(date & time), `bumped_on`(date & time, starts same as `created_on`), `reported` (boolean), `delete_password`, & `replies` (array).
    testString: ''
  - text: I can POST a reply to a thread on a specific board by passing form data `text`, `delete_password`, & `thread_id` to `/api/replies/{board}` and it will also update the `bumped_on` date to the comment's date (Recommend `res.redirect` to thread page `/b/{board}/{thread_id}`). In the thread's `replies` array, an object will be saved with at least the following properties: `_id`, `text`, `created_on`, `delete_password`, & `reported`.
    testString: ''
  - text: I can GET an array of the most recent 10 bumped threads on the board with only the most recent 3 replies each from `/api/threads/{board}`. The `reported` and `delete_password` fields will not be sent to the client.
    testString: ''
  - text: I can GET an entire thread with all its replies from `/api/replies/{board}?thread_id={thread_id}`, also hiding the same fields from the client as the previous test.
    testString: ''
  - text: I can delete a thread completely if I send a DELETE request to `/api/threads/{board}` and pass along the `thread_id` & `delete_password` (Text response will be 'incorrect password' or 'success'). 
    testString: ''
  - text: I can delete a post (changing the text to '[deleted]' instead of removing completely like a thread) if I send a DELETE request to `/api/replies/{board}` and pass along the `thread_id`, `reply_id`, & `delete_password` (Text response will be 'incorrect password' or 'success').
    testString: ''
  - text: I can report a thread and change its `reported` value to `true` by sending a PUT request to `/api/threads/{board}` and pass along the `thread_id` (Text response will be 'success').
    testString: ''
  - text: I can report a reply and change its reported value to true by sending a PUT request to `/api/replies/{board}` and pass along the `thread_id` & `reply_id` (Text response will be 'success').
    testString: ''
  - text: Complete functional tests that wholly test routes and pass.
    testString: ''

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

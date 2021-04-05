---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <https://anonymous-message-board.freecodecamp.rocks/>.

Working on this project will involve you writing your code using one of the following methods:

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) and complete your project locally.
-   Use [our repl.it starter project](https://repl.it/github/freeCodeCamp/boilerplate-project-messageboard) to complete your project.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your projects source code in the `GitHub Link` field.

# --instructions--

1.  Set `NODE_ENV` to test without quotes when ready to write tests and DB to your databases connection string (in `.env`)
2.  Recommended to create controllers/handlers and handle routing in `routes/api.js`
3.  You will add any security features to `server.js`

Write the following tests in `tests/2_functional-tests.js`:

-   Creating a new thread: POST request to `/api/threads/{board}`
-   Viewing the 10 most recent threads with 3 replies each: GET request to `/api/threads/{board}`
-   Deleting a thread with the incorrect password: DELETE request to `/api/threads/{board}` with an invalid `delete_password`
-   Deleting a thread with the correct password: DELETE request to `/api/threads/{board}` with a valid `delete_password`
-   Reporting a thread: PUT request to `/api/threads/{board}`
-   Creating a new reply: POST request to `/api/replies/{board}`
-   Viewing a single thread with all replies: GET request to `/api/replies/{board}`
-   Deleting a reply with the incorrect password: DELETE request to `/api/replies/{board}` with an invalid `delete_password`
-   Deleting a reply with the correct password: DELETE request to `/api/replies/{board}` with a valid `delete_password`
-   Reporting a reply: PUT request to `/api/replies/{board}`

# --hints--

You can provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Only allow your site to be loaded in an iFrame on your own pages.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Do not allow DNS prefetching.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Only allow your site to send the referrer for your own pages.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

You can send a POST request to `/api/threads/{board}` with form data including `text` and `delete_password`. The saved database record will have at least the fields `_id`, `text`, `created_on`(date & time), `bumped_on`(date & time, starts same as `created_on`), `reported` (boolean), `delete_password`, & `replies` (array).

```js

```

You can send a POST request to `/api/replies/{board}` with form data including `text`, `delete_password`, & `thread_id`. This will update the `bumped_on` date to the comment's date. In the thread's `replies` array, an object will be saved with at least the properties `_id`, `text`, `created_on`, `delete_password`, & `reported`.

```js

```

You can send a GET request to `/api/threads/{board}`. Returned will be an array of the most recent 10 bumped threads on the board with only the most recent 3 replies for each. The `reported` and `delete_password` fields will not be sent to the client.

```js

```

You can send a GET request to `/api/replies/{board}?thread_id={thread_id}`. Returned will be the entire thread with all its replies, also excluding the same fields from the client as the previous test.

```js

```

You can send a DELETE request to `/api/threads/{board}` and pass along the `thread_id` & `delete_password` to delete the thread. Returned will be the string `incorrect password` or `success`.

```js

```

You can send a DELETE request to `/api/replies/{board}` and pass along the `thread_id`, `reply_id`, & `delete_password`. Returned will be the string `incorrect password` or `success`. On success, the text of the `reply_id` will be changed to `[deleted]`.

```js

```

You can send a PUT request to `/api/threads/{board}` and pass along the `thread_id`. Returned will be the string `success`. The `reported` value of the `thread_id` will be changed to `true`.

```js

```

You can send a PUT request to `/api/replies/{board}` and pass along the `thread_id` & `reply_id`. Returned will be the string `success`. The `reported` value of the `reply_id` will be changed to `true`.

```js

```

All 10 functional tests are complete and passing.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
Disabled applicant have been on multiple platforms unheard out reaching out to all platforms regarding cyberbullying hacking racial discrimination identity theft total disregard to the disabled law I have identified the group and no one still want to hear me out I have called the police department my internet provider and my calls emails modem has been hacked in and forwarded somewhere else I found out

3:53 PM -

m.facebook.com/bugnu

Report a Problem

Forgot Password?

Can't change phone number

Can't change name

Can't reply to conversation

Find more answers in the Help Center

Let us know about a broken feature

Be sure to mention which page you were on and what you were doing when you encountered the problem.

Other

I never accepted you I'm going through a little bit right now with this hacking cyberbully stuff right now and yes I don't even know how anybody got on here my Facebook don't even look the same and so

Attach optional screenshot:

Choose Files

94 files

Your device and cartie Information will be attached to the report.

Although we regularly use this data to improve the quality of the site, we do not reply to bugs submitted through this form on an individual banin. This is not the correct pince to report abune or

policy violations. If you are looking to report something other than a technical problem, please see the Help Center

+
And I shouldn't be retested because I've taken all those Tetris horrible test they are so inappropriate and aiming towards me directly out of all the tests that I've taken they were inappropriately aimed at me and my everything of race and sex and etc
784484

6:08 AM I

libosdp

Release

Release v1.4.0

Latest release

github-actions[bot] released this

January 31

This relase brings in a lot of bug fixes and some minor enhancements.

Enhancements:

• doc: Add Doxygen and breathe to talk with sphinx

• LibOSDP: Add osdp.hpp and cpp samples

cp: Add new flag FLAG SC DISABLED when master_key == NULL

• Add support for adpative MARK bytes on packets

• libosdp: consume only processed bytes from rx_buf

• test: Get test log level from test context • Add a toplevel cmake offload makefile
Tweets

Tweets & replies

Jace Cruz @JaceCruzX 4d

Media

Likes

Can I get graded for my answer?: Review your union contract. See what your rep has to do for you and if and at what point you can consult internal counsel or hire an attorney.

וט

01

IDoDoodlesToo: Commissions open @idodoodlestoo 4d

@LukeTruongxxx #gay #gayart #blowjob #sub #submissive #gayporn #bottom #gaybottom #yaoi #bara #gaystud #hotgaymen #gaytoon #gaycartion #hentai #gayhentai

luke

02

a 13

Show more replies

D @maxxie1129 4d

Replying to @JaceCruzX

I personally choose to not endorse people who I believe have done problematic things

01

Jace Cruz @JaceCruzX 4d

Sure. I didn't reply to your endorsement, I replied because you're calling him out. I agree with your opinion but I just don't

get twitter, I guess

187Tweets

Tweets & replies

Media

Twink SICt@gaycumslut98- 16 Sep 20

Likes

Just uploaded this video of me having #buttplugfun in full as If you like #slut #twinks and their #assgape then check out my

well as 3 other videos of me playing with my #bubblebutt

onlyfans, available for only $3 onlyfans.com/u70173902

#onlyfansnewbie #gay #maleass #rt

1,396 views

9

29

Twink SICt @gaycumslut98 16 Sep 20

Hey everyone I've just uploaded some new photos onto my only fans, which is available now for only £3! If you

wanna see my

know what to do

cock, ass and other guys cocks in me then yo onlyfans.com/u70173902 12 PIECES OF
r/copypasta

Posted by u/MaxxxYmM9h

34 35

5

I fucking hate amogus

I can't fucking take it. I see an image of a random object posted and then I see it, I fucking see it. "Oh that looks kinda like the among us guy" it started as. That's funny, that's a cool reference. But I kept going, I'd see a fridge that looked like among us, I'd see an animated bag of chips that looked like among us, I'd see a hat that looked like among us. And every time I'd burst into an insane, breath deprived laugh staring at the image as the words AMOGUS ran through my head. It's torment, psychological torture, I am being conditioned to laugh maniacly any time I see an oval on a red object. I can't fucking live like this... I can't I can't I can't I can't I can't! And don't get me fucking started on the words! I'll never hear the word suspicious again without thinking of among us. Someone does something bad and I can't say anything other than "sus." I could watch a man murder everyone I love and all I would be able to say is "red sus" and laugh like a fucking insane person. And the word "among" is ruined. The phrase "among us" is ruined. I can't live anymore. Among us has destroyed my fucking life. I want to eject myself from this plane of existence. MAKE IT STOP!

1 2.6k

105

Share


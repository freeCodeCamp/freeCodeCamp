---
id: bd7158d8c443edefaeb5bd0e
title: URL Shortener Microservice
challengeType: 4
forumTopicId: 301509
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://url-shortener-microservice.freecodecamp.rocks/' target='_blank'>https://url-shortener-microservice.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-urlshortener' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-urlshortener/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should provide your own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(getUserInput('url')));
      }

  - text: "You can POST a URL to `/api/shorturl/new` and get a JSON response with `original_url` and `short_url` properties. Here's an example: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`"
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const urlVariable = Date.now();
      const res = await fetch(url + '/api/shorturl/new/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=https://timestamp-microservice.freecodecamp.rocks/${urlVariable}`
      });

      if (res.ok) {
        const { short_url, original_url } = await res.json();
        assert.isNotNull(short_url);
        assert.match(original_url, new RegExp(`https://timestamp-microservice.freecodecamp.rocks/${urlVariable}`));
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "

  - text: When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const urlVariable = Date.now();
      let shortenedUrlVariable;

      const postResponse = await fetch(url + '/api/shorturl/new/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=https://timestamp-microservice.freecodecamp.rocks/${urlVariable}`
      });

      if (postResponse.ok) {
        const { short_url } = await postResponse.json();
        shortenedUrlVariable = short_url;
      } else {
        throw new Error(`${postResponse.status} ${postResponse.statusText}`);
      }

      const getResponse = await fetch(url + '/api/shorturl/' + shortenedUrlVariable);

      if (getResponse) {
        const { redirected, url } = getResponse;

        assert.isTrue(redirected);
        assert.strictEqual(url, `https://timestamp-microservice.freecodecamp.rocks/${urlVariable}`);
      } else {
        throw new Error(`${getResponse.status} ${getResponse.statusText}`);
      }
    }
    "

  - text: "If you pass an invalid URL that doesn't follow the valid `http://www.example.com` format, the JSON response will contain `{ error: 'invalid url' }`"
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const res = await fetch(url + '/api/shorturl/new/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:  `url=ftp:/john-doe.org`
      });

      if (res.ok) {
        const { error } = await res.json();
        assert.isNotNull(error);
        assert.strictEqual(error.toLowerCase(), 'invalid url'); 
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
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

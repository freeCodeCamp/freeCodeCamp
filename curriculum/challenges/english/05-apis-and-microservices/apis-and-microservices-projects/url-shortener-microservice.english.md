---
id: bd7158d8c443edefaeb5bd0e
title: URL Shortener Microservice
challengeType: 4
isRequired: true
forumTopicId: 301509
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://thread-paper.glitch.me/' target='_blank'>https://thread-paper.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-urlshortener/' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-urlshortener/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

### Criteria to pass the tests

1. Expose this POST endpoint: `/api/shorturl/new` . 
      - This endpoint should accept a body with an urlencoded object that has a url key (e.g. `url=https://www.google.com`) . 
      - It should return a json response with the shortUrl (e.g.`{"original_url":"www.google.com","short_url":1}`).
1. Return json error message with message of `invalid url` if the url provided in the body of the above POST request isn't a valid URL. e.g. `res.json({"error":"No short url found for given input"})`
1. Expose this GET endpoint: `/api/shorturl/{:shortUrl}` that will parse the shortUrl given in the params and redirect to the original Url.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'You should supply your own project, not the example url'
    testString: 'getUserInput => assert(!(new RegExp( ".*/thread-paper\.glitch\.me\.*")).test(getUserInput("url")))'
  - text: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
    testString: "getUserInput => { window.randNum = parseInt(Math.random()*1000); return $.post(getUserInput('url') + '/api/shorturl/new/', {url: 'https://fcc-back-end-tester.glitch.me/url-shortener-helper/rand-' + window.randNum}).then(data => { window.shurl = data.short_url; assert.isNotNull(data.short_url); assert.match(data.original_url, new RegExp('fcc-back-end-tester.glitch.me/url-shortener-helper/rand-' + window.randNum)); }, xhr => { throw new Error(xhr.responseText); }) }"
  - text: 'When I visit that shortened URL, it will redirect me to my original link.'
    testString: "getUserInput => $.get(getUserInput('url') + '/api/shorturl/' + window.shurl).then(data => { assert.equal(data.str, 'rand-' + window.randNum); assert.isTrue(data.red);}, xhr => { throw new Error(xhr.responseText); })"
  - text: 'If I pass an invalid URL that doesn''t follow the valid http://www.example.com format, the JSON response will contain an error instead.'
    testString: "getUserInput => $.post(getUserInput('url') + '/api/shorturl/new/', {url: 'ftp:/john-doe.org'}).then(data => { assert.equal(data.error.toLowerCase(), 'invalid url'); }, xhr => { throw new Error(xhr.responseText); })"
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

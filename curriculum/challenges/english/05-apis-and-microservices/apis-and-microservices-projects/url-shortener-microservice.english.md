---
id: bd7158d8c443edefaeb5bd0e
title: URL Shortener Microservice
challengeType: 4
isHidden: false
isRequired: true
forumTopicId: 301509
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://thread-paper.glitch.me/' target='_blank'>https://thread-paper.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-urlshortener/' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-urlshortener/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should supply your own project, not the example url.
    testString: "getUserInput => {
      const url = getUserInput('url');
      assert(!(new RegExp('.*/thread-paper\\.glitch\\.me\\.*')).test(url));
    }
    "

  - text: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const urlVariable = url.length; 
      const res = await fetch(url + '/api/shorturl/new/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:  `url=https://fcc-back-end-tester.glitch.me/url-shortener-helper/rand-${urlVariable}`
      });
      
      if (res.ok) {
        const { short_url, original_url } = await res.json();
        assert.isNotNull(short_url);
        assert.match(original_url, new RegExp(`fcc-back-end-tester.glitch.me/url-shortener-helper/rand-${urlVariable}`)); 
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }
    "
  
  - text: When I visit that shortened URL, it will redirect me to my original link.
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const urlVariable = url.length;
      let shortenedUrlVariable = '';
      
      const postResponse = await fetch(url + '/api/shorturl/new/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:  `url=https://fcc-back-end-tester.glitch.me/url-shortener-helper/rand-${urlVariable}`
      });
      
      if (postResponse.ok) {
        const { short_url } = await postResponse.json();
        shortenedUrlVariable = short_url
      } else {
        throw new Error(`${postResponse.status} ${postResponse.statusText}`);
      }
    
      const getResponse = await fetch(url + '/api/shorturl/' + shortenedUrlVariable)
      
      if (getResponse.ok) {
        const data = await getResponse.json();
        assert.equal(data.str, `rand-${urlVariable}`); 
      } else {
        throw new Error(`${getResponse.status} ${getResponse.statusText}`);
      }
    }
    "

  - text: If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
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
        assert.equal(error.toLowerCase(), 'invalid url'); 
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

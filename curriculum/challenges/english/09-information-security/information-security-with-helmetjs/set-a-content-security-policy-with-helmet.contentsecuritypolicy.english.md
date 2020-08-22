---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
isHidden: false
forumTopicId: 301585
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
This challenge highlights one promising new defense that can significantly reduce the risk and impact of many type of attacks in modern browsers. By setting and configuring a Content Security Policy you can prevent the injection of anything unintended into your page. This will protect your app from XSS vulnerabilities, undesired tracking, malicious frames, and much more. CSP works by defining a whitelist of content sources which are trusted. You can configure them for each kind of resource a web page may need (scripts, stylesheets, fonts, frames, media, and so on…). There are multiple directives available, so a website owner can have a granular control. See HTML 5 Rocks, KeyCDN for more details. Unfortunately CSP is unsupported by older browser.
By default, directives are wide open, so it’s important to set the defaultSrc directive as a fallback. Helmet supports both defaultSrc and default-src naming styles. The fallback applies for most of the unspecified directives.
</section>

## Instructions
<section id='instructions'>
In this exercise, use <code>helmet.contentSecurityPolicy()</code>, and configure it setting the <code>defaultSrc directive</code> to <code>["self"]</code> (the list of allowed sources must be in an array), in order to trust only your website address by default. Set also the <code>scriptSrc</code> directive so that you will allow scripts to be downloaded from your website, and from the domain 'trusted-cdn.com'.
Hint: in the <code>self</code> keyword, the single quotes are part of the keyword itself, so it needs to be enclosed in double quotes to be working.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.csp() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'csp'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Your csp config is not correct. defaultSrc should be ["'self'"] and scriptSrc should be ["'self'", 'trusted-cdn.com']
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === 'content-security-policy' || k === 'x-webkit-csp' || k === 'x-content-security-policy' })[0]; assert.equal(data.headers[cspHeader], "default-src 'self'; script-src 'self' trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })

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

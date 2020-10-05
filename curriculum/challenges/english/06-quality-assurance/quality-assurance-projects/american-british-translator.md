---
id: 5e601c0d5ac9d0ecd8b94afe
title: American British Translator
challengeType: 4
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank">https://american-british-translator.freecodecamp.rocks/</a>.

Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-american-british-english-translator">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
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
        assert(!/.*\/american-british-translator\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: I can enter a simple sentence into the text area and select whether to translate to British or American English from the dropdown menu.
    testString: ''
  - text: When the "Translate" button is pressed, append the translated sentence to the <code>translated-sentence</code> <code>div</code>. See the JavaScript files in <code>/public</code> for the different spelling and terms your application should translate.
    testString: ''
  - text: |
      Your application should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English.
    testString: ''
  - text: Your application should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See <code>/public/american-to-british-titles.js</code> for the different titles your application should handle.
    testString: ''
  - text: Wrap any translated spelling or terms with <code>&lt;span class=&quot;highlight&quot;&gt;...&lt;/span&gt;</code> tags so they appear in green.
    testString: ''
  - text: If the sentence in the text area has no spelling or terms that should be translated, append the message "Everything looks good to me!" to the <code>translated-sentence</code> <code>div</code>.
    testString: ''
  - text: |
      If there is no text in the text area, append the message "Error: No text to translate." to the <code>error-msg</code> <code>div</code> so the text appears in red.
    testString: ''
  - text: I can press the "Clear Input" button to remove all text from the text area and the <code>translated-sentence</code> <code>div</code>.
    testString: ''
  - text: All 20 unit tests are complete and passing. See <code>/tests/1_unit-tests.js</code> for the sentences you should write tests for.
    testString: ''
  - text: All 4 functional tests are complete and passing. See <code>/tests/2_functional-tests.js</code> for the functionality you should write tests for.
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

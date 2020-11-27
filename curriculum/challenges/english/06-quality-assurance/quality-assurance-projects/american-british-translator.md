---
id: 5e601c0d5ac9d0ecd8b94afe
title: American British Translator
challengeType: 4
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://american-british-translator.freecodecamp.rocks/' target='_blank'>https://american-british-translator.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

- Clone <a href='https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/' target='_blank'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-american-british-english-translator' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.
</section>

## Instructions
<section id='instructions'>

- All logic can go into `/components/translator.js`
- Complete the `/api/translate` route in `/routes/api.js`
- Create all of the unit/functional tests in `tests/1_unit-tests.js` and `tests/2_functional-tests.js`
- See the JavaScript files in `/components` for the different spelling and terms your application should translate
- To run the tests on Repl.it, set `NODE_ENV` to `test` without quotes in the `.env` file
- To run the tests in the console, use the command `npm run test`. To open the Repl.it console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

Write the following tests in `tests/1_unit-tests.js`:

- Translate <code>Mangoes are my favorite fruit.</code> to British English
- Translate <code>I ate yogurt for breakfast.</code> to British English
- Translate <code>We had a party at my friend's condo.</code> to British English
- Translate <code>Can you toss this in the trashcan for me?</code> to British English
- Translate <code>The parking lot was full.</code> to British English
- Translate <code>Like a high tech Rube Goldberg machine.</code> to British English
- Translate <code>To play hooky means to skip class or work.</code> to British English
- Translate <code>No Mr. Bond, I expect you to die.</code> to British English
- Translate <code>Dr. Grosh will see you now.</code> to British English
- Translate <code>Lunch is at 12:15 today.</code> to British English
- Translate <code>We watched the footie match for a while.</code> to American English
- Translate <code>Paracetamol takes up to an hour to work.</code> to American English
- Translate <code>First, caramelise the onions.</code> to American English
- Translate <code>I spent the bank holiday at the funfair.</code> to American English
- Translate <code>I had a bicky then went to the chippy.</code> to American English
- Translate <code>I've just got bits and bobs in my bum bag.</code> to American English
- Translate <code>The car boot sale at Boxted Airfield was called off.</code> to American English
- Translate <code>Have you met Mrs Kalyani?</code> to American English
- Translate <code>Prof Joyner of King's College, London.</code> to American English
- Translate <code>Tea time is usually around 4 or 4.30.</code> to American English
- Highlight translation in <code>Mangoes are my favorite fruit.</code>
- Highlight translation in <code>I ate yogurt for breakfast.</code>
- Highlight translation in <code>We watched the footie match for a while.</code>
- Highlight translation in <code>Paracetamol takes up to an hour to work.</code>

Write the following tests in `tests/2_functional-tests.js`:

- Translation with text and locale fields: POST request to `/api/translate`
- Translation with text and invalid locale field: POST request to `/api/translate`
- Translation with missing text field: POST request to `/api/translate`
- Translation with missing locale field: POST request to `/api/translate`
- Translation with empty text: POST request to `/api/translate`
- Translation with text that needs no translation: POST request to `/api/translate`

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

  - text: You can <code>POST</code> to <code>/api/translate</code> with a body containing <code>text</code> with the text to translate and <code>locale</code> with either <code>american-to-british</code> or <code>british-to-american</code>. The returned object should contain the submitted <code>text</code> and <code>translation</code> with the translated text.  
    testString: "async getUserInput => {
        try {
          const text = 'Mangoes are my favorite fruit.';
          const locale = 'american-to-british';
          const output = {
            text: 'Mangoes are my favorite fruit.',
            translation: 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.'
          };
          let data = await fetch(getUserInput('url') + '/api/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({text, locale})
          });
          let parsed = await data.json();
          assert.isObject(parsed);
          assert.property(parsed, 'text');
          assert.property(parsed, 'translation');
          assert.deepEqual(parsed, output);        
        } catch (err) {
          throw new Error(err.responseText || err.message);
        }
      }"
  - text: The <code>/api/translate</code> route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English.  
    testString: "async getUserInput => {
      try {
        const text = 'Lunch is at 12:15 today.';
        const locale = 'american-to-british';
        const output = {
          text: text,
          translation: 'Lunch is at <span class=\"highlight\">12.15</span> today.'
        };
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text, locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'text');
        assert.property(parsed, 'translation');
        assert.deepEqual(parsed, output);
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: The <code>/api/translate</code> route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See <code>/public/american-to-british-titles.js</code> for the different titles your application should handle.
    testString: "async getUserInput => {
      try {
        const text = 'Dr. Grosh will see you now.';
        const locale = 'american-to-british';
        const output = {
          text: text,
          translation: '<span class=\"highlight\">Dr</span> Grosh will see you now.'
        };
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text, locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'text');
        assert.property(parsed, 'translation');
        assert.deepEqual(parsed, output);
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: Wrap any translated spelling or terms with <code>&lt;span class="highlight"&gt;...&lt;/span&gt;</code> tags so they appear in green.
    testString: "async getUserInput => {
      try {
        const text = 'Mangoes are my favorite fruit.';
        const locale = 'american-to-british';
        const output = {
          text: 'Mangoes are my favorite fruit.',
          translation: 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.'
        };
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text, locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'text');
        assert.property(parsed, 'translation');
        assert.deepEqual(parsed, output);
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: If one or more of the required fields is missing, return <code>{ error&#58; 'Required field(s) missing' }</code>.
    testString: "async getUserInput => {
      try {
        const locale = 'american-to-british';
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'error');
        assert.equal(parsed.error, 'Required field(s) missing');
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: If <code>text</code> is empty, return <code>{ error&#58; 'No text to translate' }</code>
    testString: "async getUserInput => {
      try {
        const locale = 'american-to-british';
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text: '', locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'error');
        assert.equal(parsed.error, 'No text to translate');
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: If <code>locale</code> does not match one of the two specified locales, return <code>{ error&#58; 'Invalid value for locale field' }</code>.
    testString: "async getUserInput => {
      try {
        const text = 'Ceci n\\'est pas une pipe';
        const locale = 'french-to-american';
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text, locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.property(parsed, 'error');
        assert.equal(parsed.error, 'Invalid value for locale field');
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: If <code>text</code> requires no translation, return <code>"Everything looks good to me!"</code> for the <code>translation</code> value.  
    testString: "async getUserInput => {
      try {
        const locale = 'british-to-american';
        const output = {
          text: 'SaintPeter and nhcarrigan give their regards!',
          translation: 'Everything looks good to me!'
        };
        let data = await fetch(getUserInput('url') + '/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: output.text, locale})
        });
        let parsed = await data.json();
        assert.isObject(parsed);
        assert.isObject(parsed);
        assert.property(parsed, 'text');
        assert.property(parsed, 'translation');
        assert.deepEqual(parsed, output);
      } catch (err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: All 24 unit tests are complete and passing. See `/tests/1_unit-tests.js` for the expected behavior you should write tests for.
    testString: "async getUserInput => {
      try {
        const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
        assert.isArray(getTests);
        const unitTests = getTests.filter((test) => {
          return !!test.context.match(/Unit Tests ->/ig);
        });
        assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
        unitTests.forEach(test => {
          assert.equal(test.state, 'passed', 'Tests in Passed State');
          assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
        });
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: All 6 functional tests are complete and passing. See `/tests/2_functional-tests.js` for the functionality you should write tests for.
    testString: "async getUserInput => {
      try {
        const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
        assert.isArray(getTests);
        const functTests = getTests.filter((test) => {
          return !!test.context.match(/Functional Tests ->/ig);
        });
        assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
        functTests.forEach(test => {
          assert.equal(test.state, 'passed', 'Tests in Passed State');
          assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
        });
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"

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

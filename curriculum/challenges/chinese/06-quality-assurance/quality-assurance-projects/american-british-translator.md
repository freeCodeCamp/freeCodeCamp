---
id: 5e601c0d5ac9d0ecd8b94afe
challengeType: 4
dashedName: american-british-translator
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <https://youthful-grave-scabiosa.glitch.me/>.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using [this link](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) or clone [this repository](https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

# --hints--

I can enter a simple sentence into the text area and select whether to translate to British or American English from the dropdown menu.

```js

```

When the "Translate" button is pressed, append the translated sentence to the `translated-sentence` `div`. See the JavaScript files in `/public` for the different spelling and terms your application should translate.

```js

```

Your application should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English.

```js

```

Your application should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See `/public/american-to-british-titles.js` for the different titles your application should handle.

```js

```

Wrap any translated spelling or terms with `<span class="highlight">...</span>` tags so they appear in green.

```js

```

If the sentence in the text area has no spelling or terms that should be translated, append the message "Everything looks good to me!" to the `translated-sentence` `div`.

```js

```

If there is no text in the text area, append the message "Error: No text to translate." to the `error-msg` `div` so the text appears in red.

```js

```

I can press the "Clear Input" button to remove all text from the text area and the `translated-sentence` `div`.

```js

```

All 20 unit tests are complete and passing. See `/tests/1_unit-tests.js` for the sentences you should write tests for.

```js

```

All 4 functional tests are complete and passing. See `/tests/2_functional-tests.js` for the functionality you should write tests for.

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

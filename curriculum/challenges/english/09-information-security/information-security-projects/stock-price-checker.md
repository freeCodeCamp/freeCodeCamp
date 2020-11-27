---
id: 587d824a367417b2b2512c44
title: Stock Price Checker
challengeType: 4
forumTopicId: 301572
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank">https://stock-price-checker.freecodecamp.rocks/</a>.
Since all reliable stock price APIs require an API key, we've built a workaround. Use <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank">https://stock-price-checker-proxy.freecodecamp.rocks/</a> to get up-to-date stock price information without needing to sign up for your own key.
Working on this project will involve you writing your code using one of the following methods:

- Clone <a href='https://github.com/freeCodeCamp/boilerplate-project-stockchecker/' target='_blank'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-stockchecker' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your projects source code in the `GitHub Link` field.
</section>

## Instructions
<section id='instructions'>

1. SET `NODE_ENV` to `test` without quotes and set `DB` to your MongoDB connection string
2. Complete the project in `routes/api.js` or by creating a handler/controller
3. You will add any security features to `server.js`
4. You will create all of the functional tests in `tests/2_functional-tests.js`

Write the following tests in `tests/2_functional-tests.js`:

- Viewing one stock: GET request to `/api/stock-prices/`
- Viewing one stock and liking it: GET request to `/api/stock-prices/`
- Viewing the same stock and liking it again: GET request to `/api/stock-prices/`
- Viewing two stocks: GET request to `/api/stock-prices/`
- Viewing two stocks and liking them: GET request to `/api/stock-prices/`

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You can provide your own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: You should set the content security policies to only allow loading of scripts and CSS from your server.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/_api/app-info');
      const parsed = await data.json();
      assert.isTrue(parsed.headers['content-security-policy'].includes('script-src \\'self\\''));
      assert.isTrue(parsed.headers['content-security-policy'].includes('style-src \\'self\\''));
    }
      "
  - text: You can send a `GET` request to `/api/stock-prices` with form data containing a NASDAQ stock ticker. Returned will be an object with the property `stockData`.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/api/stock-prices?stock=GOOG');
      const parsed = await data.json();
      assert.property(parsed, 'stockData');
    }"
  - text: The `stockData` property includes the `stock` ticker as a string, the `price` as a number, and `likes` as a number.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/api/stock-prices?stock=GOOG');
      const parsed = await data.json();
      const ticker = parsed.stockData;
      assert.typeOf(ticker.price, 'number');
      assert.typeOf(ticker.likes, 'number');
      assert.typeOf(ticker.stock, 'string');
    }"
  - text: You can also pass along a `like` field as `true` (boolean) to have your like added to the stock(s). Only 1 like per IP should be accepted.
    testString: ''
  - text: If you pass along 2 stocks, the returned value will be an array with information about both stocks. Instead of `likes`, it will display `rel_likes` (the difference between the likes on both stocks) for both `stockData` objects.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT');
      const parsed = await data.json();
      const ticker = parsed.stockData;
      assert.typeOf(ticker, 'array');
      assert.property(ticker[0], 'rel_likes');
      assert.property(ticker[1], 'rel_likes');
    }"
  - text: All 5 functional tests are complete and passing.
    testString: "async getUserInput => {
      const tests = await fetch(getUserInput('url') + '/_api/get-tests');
      const parsed = await tests.json();
      assert.isTrue(parsed.length >= 5);
      parsed.forEach(test => {
        assert.equal(test.state, 'passed');
      });
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

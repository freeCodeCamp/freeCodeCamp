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
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but must be publicly visible for our testing.
Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-stockchecker">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-stockchecker/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
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
        assert(!/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: Set the content security policies to only allow loading of scripts and CSS from your server.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/_api/app-info');
      const parsed = await data.json();
      assert.isTrue(parsed.headers['content-security-policy'].includes('script-src \\'self\\''));
      assert.isTrue(parsed.headers['content-security-policy'].includes('style-src \\'self\\''));
    }
      "
  - text: I can GET /api/stock-prices with form data containing a Nasdaq stock ticker and receive back an object stockData.
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/api/stock-prices?stock=GOOG');
      const parsed = await data.json();
      assert.property(parsed, 'stockData');
    }"
  - text: In stockData, I can see the stock (the ticker as a string), price (decimal in string format), and likes (int).
    testString: "async getUserInput => {
      const data = await fetch(getUserInput('url') + '/api/stock-prices?stock=GOOG');
      const parsed = await data.json();
      const ticker = parsed.stockData;
      assert.typeOf(ticker.price, 'number');
      assert.typeOf(ticker.likes, 'number');
      assert.typeOf(ticker.stock, 'string');
    }"
  - text: I can also pass along field like as true (boolean) to have my like added to the stock(s). Only 1 like per IP should be accepted.
    testString: ''
  - text: If I pass along 2 stocks, the return object will be an array with information about both stocks. Instead of likes, it will display rel_likes (the difference between the likes on both stocks) on both.
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

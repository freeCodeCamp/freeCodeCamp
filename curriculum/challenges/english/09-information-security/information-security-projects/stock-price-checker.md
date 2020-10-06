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
    testString: ''
  - text: I can GET /api/stock-prices with form data containing a Nasdaq stock ticker and receive back an object stockData.
    testString: ''
  - text: In stockData, I can see the stock (the ticker as a string), price (decimal in string format), and likes (int).
    testString: ''
  - text: I can also pass along field like as true (boolean) to have my like added to the stock(s). Only 1 like per IP should be accepted.
    testString: ''
  - text: If I pass along 2 stocks, the return object will be an array with information about both stocks. Instead of likes, it will display rel_likes (the difference between the likes on both stocks) on both.
    testString: ''
  - text: 'A good way to receive current prices is through our stock price proxy (replacing ''GOOG'' with your stock symbol): https://stock-price-checker-proxy--freecodecamp.repl.co/v1/stock/GOOG/quote'
    testString: ''
  - text: All 5 functional tests are complete and passing.
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

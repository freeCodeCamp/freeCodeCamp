---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
---

## Description
<section id='description'>
Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz">FizzBuzz</a> that works for any list of factors, along with their words.
This is basically a "fizzbuzz" implementation where the rules of the game are supplied to the user. Create a function to implement this. The function should take two parameters.
The first will be an array with the FizzBuzz rules. For example: <code>[ [3, "Fizz"] , [5, "Buzz"] ]</code>.
This indcates that <code>Fizz</code> should be printed if the number is a multiple of 3 and <code>Buzz</code> if it is a multiple of 5. If it is a multiple of both then the strings should be concatenated in the order specified in the array. In this case, <code>FizzBuzz</code> if the number is a multiple of 3 and 5.
The second parameter is the number for which the function should return a string as stated above.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code> should be a function.
    testString: assert(typeof genFizzBuzz=='function','<code>genFizzBuzz</code> should be a function.');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return a string.
    testString: assert(typeof genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)=='string','<code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return a string.');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return <code>"Fizz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6), "Fizz",'<code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return <code>"Fizz"</code>.');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)</code> should return <code>"Buzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10), "Buzz",'<code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)</code> should return <code>"Buzz"</code>.');
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)</code> should return <code>"Buzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12), "Buzz",'<code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)</code> should return <code>"Buzz"</code>.');
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)</code> should return <code>"13"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13), '13','<code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)</code> should return <code>"13"</code>.');
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)</code> should return <code>"BuzzFizz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15), 'BuzzFizz','<code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)</code> should return <code>"BuzzFizz"</code>.');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)</code> should return <code>"FizzBuzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15), 'FizzBuzz','<code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)</code> should return <code>"FizzBuzz"</code>.');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)</code> should return <code>"FizzBuzzBaxx"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105), 'FizzBuzzBaxx','<code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)</code> should return <code>"FizzBuzzBaxx"</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function genFizzBuzz(rules, num) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}




```

</section>

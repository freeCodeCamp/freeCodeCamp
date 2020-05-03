---
title: Self Describing Numbers
id: 5eaf48389ee512d4d103684b
challengeType: 5
---

## Description
<section id='description'>
There are several so-called "self describing" or <a href="https://en.wikipedia.org/wiki/Self-descriptive_number">"self-descriptive"</a> integers. <br />

An integer is said to be "self-describing" if it has the property that, when digit positions are labeled 0 to N-1, the digit in each postion is eqal to the number of times that that digit appears in the number. <br />

For example, <b>2020</b> is a four-digit self describing number: <br />
<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> position 1 has value 0 and there are no 1s in the number; </li>
    <li> position 2 has value 2 and there are two 2s; </li>
    <li> position 3 has value 0 and there are zero 3s; </li>
</ul>

Self-describing numbers < 100.000.000  are:     1210,   2020,   21200,   3211000,   42101000.
</section>

## Instructions
<section id='instructions'>

Write a function that will check whether a given positive integer is self-describing.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isSelfDescribing</code> should be a function.
    testString: assert(typeof isSelfDescribing=='function');
  - text: <code>isSelfDescribing()</code> should return a boolean.
    testString: assert(typeof isSelfDescribing(2020) =='boolean');
  - text: <code>isSelfDescribing(2020)</code> should return <code>true</code>.
    testString: assert.equal(isSelfDescribing(2020), true);
  - text: <code>isSelfDescribing(3021)</code> should return <code>false</code>.
    testString: assert.equal(isSelfDescribing(3021), false);
  - text: <code>isSelfDescribing(3211000)</code> should return <code>true</code>.
    testString: assert.equal(isSelfDescribing(3211000), true);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isSelfDescribing(n) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }
    
    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}


```

</section>

---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
---

## Description
<section id='description'>
This task is a variation of the <a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp: The Nine Billion Names of God#Plot_summary">short story by Arthur C. Clarke</a>.
(Solvers should be aware of the consequences of completing this task.)
In detail, to specify what is meant by a  “name”:
The integer 1 has 1 name “1”.
The integer 2 has 2 names “1+1”, and “2”.
The integer 3 has 3 names “1+1+1”, “2+1”,  and “3”.
The integer 4 has 5 names “1+1+1+1”, “2+1+1”, “2+2”, “3+1”, “4”.
The integer 5 has 7 names “1+1+1+1+1”, “2+1+1+1”, “2+2+1”, “3+1+1”, “3+2”, “4+1”, “5”.
This can be visualized in the following form:
<pre>
          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>
Where row  $n$  corresponds to integer  $n$,  and each column  $C$  in row  $m$  from left to right corresponds to the number of names beginning with $C$.
Optionally note that the sum of the  $n$-th  row  $P(n)$  is the   <a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="link: http://mathworld.wolfram.com/PartitionFunctionP.html">integer partition function</a>.
Implement a function that returns the sum of the  $n$-th  row.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> is a function.
    testString: assert(typeof numberOfNames === 'function', '<code>numberOfNames</code> is a function.');
  - text: <code>numberOfNames(5)</code> should equal 7.
    testString: assert.equal(numberOfNames(5), 7, '<code>numberOfNames(5)</code> should equal 7.');
  - text: <code>numberOfNames(12)</code> should equal 77.
    testString: assert.equal(numberOfNames(12), 77, '<code>numberOfNames(12)</code> should equal 77.');
  - text: <code>numberOfNames(18)</code> should equal 385.
    testString: assert.equal(numberOfNames(18), 385, '<code>numberOfNames(18)</code> should equal 385.');
  - text: <code>numberOfNames(23)</code> should equal 1255.
    testString: assert.equal(numberOfNames(23), 1255, '<code>numberOfNames(23)</code> should equal 1255.');
  - text: <code>numberOfNames(42)</code> should equal 53174.
    testString: assert.equal(numberOfNames(42), 53174, '<code>numberOfNames(42)</code> should equal 53174.');
  - text: <code>numberOfNames(123)</code> should equal 2552338241.
    testString: assert.equal(numberOfNames(123), 2552338241, '<code>numberOfNames(123)</code> should equal 2552338241.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames(num) {
  // Good luck!
  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}

```

</section>

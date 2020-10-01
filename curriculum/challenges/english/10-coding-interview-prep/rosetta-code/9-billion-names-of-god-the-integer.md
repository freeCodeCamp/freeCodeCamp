---
title: 9 billion names of God the integer
id: 5949b579404977fbaefcd736
challengeType: 5
forumTopicId: 302219
---

## Description
<section id='description'>
This task is a variation of the <a href='https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary' title='wp: The Nine Billion Names of God#Plot_summary' target='_blank'>short story by Arthur C. Clarke</a>.
(Solvers should be aware of the consequences of completing this task.)
In detail, to specify what is meant by a  "name":
<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>The integer 2 has 2 names "1+1" and "2".</li>
  <li>The integer 3 has 3 names "1+1+1", "2+1",  and "3".</li>
  <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>
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
Optionally note that the sum of the  $n$-th  row  $P(n)$  is the integer partition function.
</section>

## Instructions
<section id='instructions'>
Implement a function that returns the sum of the  $n$-th  row.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code> should be function.
    testString: assert(typeof numberOfNames === 'function');
  - text: <code>numberOfNames(5)</code> should equal 7.
    testString: assert.equal(numberOfNames(5), 7);
  - text: <code>numberOfNames(12)</code> should equal 77.
    testString: assert.equal(numberOfNames(12), 77);
  - text: <code>numberOfNames(18)</code> should equal 385.
    testString: assert.equal(numberOfNames(18), 385);
  - text: <code>numberOfNames(23)</code> should equal 1255.
    testString: assert.equal(numberOfNames(23), 1255);
  - text: <code>numberOfNames(42)</code> should equal 53174.
    testString: assert.equal(numberOfNames(42), 53174);
  - text: <code>numberOfNames(123)</code> should equal 2552338241.
    testString: assert.equal(numberOfNames(123), 2552338241);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames(num) {

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

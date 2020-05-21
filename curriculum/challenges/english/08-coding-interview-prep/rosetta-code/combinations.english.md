---
title: Combinations
id: 5958469238c0d8d2632f46db
challengeType: 5
isHidden: false
forumTopicId: 302233
---

## Description
<section id='description'>
Given non-negative integers <code>m</code> and <code>n</code>, generate all size <code>m</code> combinations of the integers from <code>0</code> (zero) to <code>n-1</code> in sorted order (each combination is sorted and the entire table is sorted).
<strong>Example:</strong>
<code>3</code> comb <code>5</code> is:
<pre>
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> should be a function.
    testString: assert(typeof combinations === 'function');
  - text: <code>combinations(3, 5)</code> should return <code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code>.
    testString: assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1);
  - text: <code>combinations(4, 6)</code> should return <code>[[0,1,2,3],  [0,1,2,4],  [0,1,2,5],  [0,1,3,4],  [0,1,3,5],  [0,1,4,5],  [0,2,3,4],  [0,2,3,5],  [0,2,4,5],  [0,3,4,5],  [1,2,3,4],  [1,2,3,5],  [1,2,4,5],  [1,3,4,5],  [2,3,4,5]]</code>
    testString: assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations(m, n) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testInput1 = [3, 5];
const testOutput1 = [[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]];

const testInput2 = [4, 6];
const testOutput2 = [[0, 1, 2, 3], [0, 1, 2, 4], [0, 1, 2, 5], [0, 1, 3, 4], [0, 1, 3, 5], [0, 1, 4, 5], [0, 2, 3, 4], [0, 2, 3, 5], [0, 2, 4, 5], [0, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5]];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function combinations(m, n) {
  const nArr = [...Array(n).keys()];

  return (function generateCombinations (size, numArr) {
    const ret = [];

    for (let i = 0; i < numArr.length; i++) {
      if (size === 1) {
        ret.push([numArr[i]]);
      }
      else {
        const sub = generateCombinations(size - 1, numArr.slice(i + 1, numArr.length));
        for (let subI = 0; subI < sub.length; subI++) {
          const next = sub[subI];
          next.unshift(numArr[i]);
          ret.push(next);
        }
      }
    }
    return ret;
  }(m, nArr));
}

```

</section>

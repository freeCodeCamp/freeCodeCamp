---
id: 5e6dd15004c88cf00d2a78b3
title: Loop over multiple arrays simultaneously
challengeType: 5
isHidden: false
forumTopicId: 385279
---

## Description
<section id='description'>
Loop over multiple arrays and create a new array whose $i^{th}$ element is the concatenation of $i^{th}$ element of each of the given.
For this example, if you are given this array of arrays:
<code>[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]</code>
the output should be:
<code>["aA1","bB2","cC3"]</code>
</section>

## Instructions
<section id='instructions'>
Write a function that takes an array of arrays as a parameter and returns an array of strings satisfying the given description.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>loopSimult</code> should be a function.
    testString: assert(typeof loopSimult == 'function');
  - text: <code>loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])</code> should return a array.
    testString: assert(Array.isArray(loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])));
  - text: <code>loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])</code> should return <code>["aA1", "bB2", "cC3"]</code>.
    testString: assert.deepEqual(loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]]), ["aA1", "bB2", "cC3"]);
  - text: <code>loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])</code> should return <code>["c47", "b57", "cC3"]</code>.
    testString: assert.deepEqual(loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]]), ["c47", "b57", "cC3"]);
  - text: <code>loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])</code> should return <code>["aA1", "bB2", "cC3", "dd4"]</code>.
    testString: assert.deepEqual(loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]]), ["aA1", "bB2", "cC3", "dd4"]);
  - text: <code>loopSimult([["a", "b"], ["A", "B"], [1, 2]])</code> should return <code>["aA1", "bB2"]</code>.
    testString: assert.deepEqual(loopSimult([["a", "b"], ["A", "B"], [1, 2]]), ["aA1", "bB2"]);
  - text: <code>loopSimult([["b", "c"], ["B", "C"], [2, 3]])</code> should return <code>["bB2", "cC3"]</code>.
    testString: assert.deepEqual(loopSimult([["b", "c"], ["B", "C"], [2, 3]]), ["bB2", "cC3"]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function loopSimult(A) {

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function loopSimult(A) {
    var res = [], output;
    for (var i = 0; i < A[0].length; i += 1) {
        output = "";
        for (var j = 0; j < A.length; j++)
            output += A[j][i];
        res.push(output);
    }
    return res;
}
```

</section>

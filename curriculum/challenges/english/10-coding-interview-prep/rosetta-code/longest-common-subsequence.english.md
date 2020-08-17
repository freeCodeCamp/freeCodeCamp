---
id: 5e6dd1278e6ca105cde40ea9
title: Longest common subsequence
challengeType: 5
isHidden: false
forumTopicId: 385271
---

## Description
<section id='description'>
The <b>longest common subsequence</b> (or <a href="http://en.wikipedia.org/wiki/Longest_common_subsequence_problem" target="_blank"><b>LCS</b></a>) of groups A and B is the longest group of elements from A and B that are common between the two groups and in the same order in each group. For example, the sequences "1234" and "1224533324" have an LCS of "1234":
<b><u>1234</u></b>
<b><u>12</u></b>245<b><u>3</u></b>332<b><u>4</u></b>
For a string example, consider the sequences "thisisatest" and "testing123testing". An LCS would be "tsitest":
<b><u>t</u></b>hi<b><u>si</u></b>sa<b><u>test</u></b>
<b><u>t</u></b>e<b><u>s</u></b>t<b><u>i</u></b>ng123<b><u>test</u></b>ing.
Your code only needs to deal with strings.
For more information on this problem please see <a href="https://en.wikipedia.org/wiki/Longest_common_subsequence_problem" target="_black">Wikipedia</a>.
</section>

## Instructions
<section id='instructions'>
Write a case-sensitive function that returns the LCS of two strings. You don't need to show multiple LCS's.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>lcs</code> should be a function.
    testString: assert(typeof lcs == 'function');
  - text: <code>lcs("thisisatest", "testing123testing")</code> should return a string.
    testString: assert(typeof lcs("thisisatest", "testing123testing") == 'string');
  - text: <code>lcs("thisisatest", "testing123testing")</code> should return <code>"tsitest"</code>.
    testString: assert.equal(lcs("thisisatest", "testing123testing"), "tsitest");
  - text: <code>lcs("ABCDGH", "AEDFHR")</code> should return <code>"ADH"</code>.
    testString: assert.equal(lcs("ABCDGH", "AEDFHR"), "ADH");
  - text: <code>lcs("AGGTAB", "GXTXAYB")</code> should return <code>"GTAB"</code>.
    testString: assert.equal(lcs("AGGTAB", "GXTXAYB"), "GTAB");
  - text: <code>lcs("BDACDB", "BDCB")</code> should return <code>"BDCB"</code>.
    testString: assert.equal(lcs("BDACDB", "BDCB"), "BDCB");
  - text: <code>lcs("ABAZDC", "BACBAD")</code> should return <code>"ABAD"</code>.
    testString: assert.equal(lcs("ABAZDC", "BACBAD"), "ABAD");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lcs(a, b) {

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function lcs(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);

  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}
```

</section>

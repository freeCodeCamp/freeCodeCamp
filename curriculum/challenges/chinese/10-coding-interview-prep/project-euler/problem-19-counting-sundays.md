---
id: 5900f37f1000cf542c50fe92
challengeType: 5
videoUrl: ''
title: 问题19：计算星期日
---

## Description
<section id="description">您将获得以下信息，但您可能更愿意为自己做一些研究。 <ul><li> 1900年1月1日是星期一。 </li><li>九月是三十天<br>四月，六月和十一月。 <br>其余的都有三十一个， <br>仅拯救二月， <br>其中有二十八，风雨无阻。 <br>在闰年，二十九岁。 </li><li>闰年发生在任何一年，可被4整除，但除非可被400整除，否则不会在一个世纪上。 </li>在二十世纪的第一个月（1901年1月1日至2000年12月31日），有多少个星期日下降？ </ul></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>countingSundays(1943, 1946)</code>应该返回6。'
    testString: assert.strictEqual(countingSundays(1943, 1946), 6);
  - text: '<code>countingSundays(1995, 2000)</code>应该返回9。'
    testString: assert.strictEqual(countingSundays(1995, 2000), 10);
  - text: '<code>countingSundays(1901, 2000)</code>应该返回171。'
    testString: assert.strictEqual(countingSundays(1901, 2000), 171);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countingSundays(firstYear, lastYear) {
  // Good luck!
  return true;
}

countingSundays(1943, 1946);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

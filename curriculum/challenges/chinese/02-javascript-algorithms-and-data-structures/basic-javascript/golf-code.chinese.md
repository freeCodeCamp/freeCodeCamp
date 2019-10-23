---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: ''
localeTitle: 高尔夫码
---

## Description
<section id="description">在<a href="https://en.wikipedia.org/wiki/Golf" target="_blank">高尔夫</a>比赛中，每个洞都具有<code>par</code>意义，即高尔夫球手为了将球沉入洞中以完成比赛所期望的平均<code>strokes</code>次数。根据你的<code>strokes</code>高出或低于<code>par</code>的距离，有一个不同的昵称。您的函数将通过<code>par</code>和<code>strokes</code>参数。根据此表返回正确的字符串，该表按优先级顺序列出笔划;顶部（最高）到底部（最低）： <table class="table table-striped"><thead><tr><th>笔画</th><th>返回</th></tr></thead><tbody><tr><td> 1 </td><td> “一杆进洞！” </td></tr><tr><td> &lt;= par  -  2 </td><td> “鹰” </td></tr><tr><td> par  -  1 </td><td> “小鸟” </td></tr><tr><td>平价</td><td> “相提并论” </td></tr><tr><td> par + 1 </td><td> “柏忌” </td></tr><tr><td> par + 2 </td><td> “双柏忌” </td></tr><tr><td> &gt; = par + 3 </td><td> “回家！” </td></tr></tbody></table> <code>par</code>和<code>strokes</code>将始终为数字和正数。为方便起见，我们添加了所有名称的数组。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>golfScore(4, 1)</code>应该返回“Hole-in-one！”'
    testString: 'assert(golfScore(4, 1) === "Hole-in-one!", "<code>golfScore(4, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(4, 2)</code>应该返回“Eagle”'
    testString: 'assert(golfScore(4, 2) === "Eagle", "<code>golfScore(4, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(5, 2)</code>应该返回“Eagle”'
    testString: 'assert(golfScore(5, 2) === "Eagle", "<code>golfScore(5, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(4, 3)</code>应该返回“Birdie”'
    testString: 'assert(golfScore(4, 3) === "Birdie", "<code>golfScore(4, 3)</code> should return "Birdie"");'
  - text: '<code>golfScore(4, 4)</code>应该返回“Par”'
    testString: 'assert(golfScore(4, 4) === "Par", "<code>golfScore(4, 4)</code> should return "Par"");'
  - text: '<code>golfScore(1, 1)</code>应该返回“Hole-in-one！”'
    testString: 'assert(golfScore(1, 1) === "Hole-in-one!", "<code>golfScore(1, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(5, 5)</code>应该返回“Par”'
    testString: 'assert(golfScore(5, 5) === "Par", "<code>golfScore(5, 5)</code> should return "Par"");'
  - text: '<code>golfScore(4, 5)</code>应该返回“Bogey”'
    testString: 'assert(golfScore(4, 5) === "Bogey", "<code>golfScore(4, 5)</code> should return "Bogey"");'
  - text: '<code>golfScore(4, 6)</code>应该返回“Double Bogey”'
    testString: 'assert(golfScore(4, 6) === "Double Bogey", "<code>golfScore(4, 6)</code> should return "Double Bogey"");'
  - text: '<code>golfScore(4, 7)</code>应该返回“Go Home！”'
    testString: 'assert(golfScore(4, 7) === "Go Home!", "<code>golfScore(4, 7)</code> should return "Go Home!"");'
  - text: '<code>golfScore(5, 9)</code>应该返回“Go Home！”'
    testString: 'assert(golfScore(5, 9) === "Go Home!", "<code>golfScore(5, 9)</code> should return "Go Home!"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

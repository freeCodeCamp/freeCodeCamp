---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
localeTitle: 高尔夫代码
---

## Description
<section id='description'>
在高尔夫<a href="https://en.wikipedia.org/wiki/Golf" target="_blank">golf</a>游戏中，每个洞都有自己的标准杆数<code>par</code>，代表着距离。根据你把球打进洞所挥杆的次数<code>strokes</code>，可以计算出你的高尔夫水平。
函数将会传送 2 个参数，分别是标准杆数<code>par</code>和挥杆次数<code>strokes</code>，根据下面的表格返回正确的水平段位。
<table class="table table-striped"><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&lt;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>&gt;= par + 3</td><td>"Go Home!"</td></tr></tbody></table>
<code>par</code>和<code>strokes</code>必须是数字而且是正数。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>golfScore(4, 1)</code>应该返回 "Hole-in-one!"。
    testString: assert(golfScore(4, 1) === "Hole-in-one!");
  - text: <code>golfScore(4, 2)</code>应该返回 "Eagle"。
    testString: assert(golfScore(4, 2) === "Eagle");
  - text: <code>golfScore(5, 2)</code>应该返回 "Eagle"。
    testString: assert(golfScore(5, 2) === "Eagle");
  - text: <code>golfScore(4, 3)</code>应该返回 "Birdie"。
    testString: assert(golfScore(4, 3) === "Birdie");
  - text: <code>golfScore(4, 4)</code>应该返回 "Par"。
    testString: assert(golfScore(4, 4) === "Par");
  - text: <code>golfScore(1, 1)</code>应该返回 "Hole-in-one!"。
    testString: assert(golfScore(1, 1) === "Hole-in-one!");
  - text: <code>golfScore(5, 5)</code>应该返回 "Par"。
    testString: assert(golfScore(5, 5) === "Par");
  - text: <code>golfScore(4, 5)</code>应该返回 "Bogey"。
    testString: assert(golfScore(4, 5) === "Bogey");
  - text: <code>golfScore(4, 6)</code>应该返回 "Double Bogey"。
    testString: assert(golfScore(4, 6) === "Double Bogey");
  - text: <code>golfScore(4, 7)</code>应该返回 "Go Home!"。
    testString: assert(golfScore(4, 7) === "Go Home!");
  - text: <code>golfScore(5, 9)</code>应该返回 "Go Home!"。
    testString: assert(golfScore(5, 9) === "Go Home!");

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
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```

</section>

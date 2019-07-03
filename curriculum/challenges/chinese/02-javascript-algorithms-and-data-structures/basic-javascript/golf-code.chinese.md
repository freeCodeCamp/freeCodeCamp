---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1

videoUrl: ''
localeTitle: Golf Code
---

## Description
<section id='description'>
<code>if/else</code>语句串联在一起可以实现复杂的逻辑，这是多个<code>if/else if</code>语句串联在一起的伪代码：
<blockquote>if (<em>条件 1</em>) {<br>&nbsp;&nbsp;<em>语句 1</em><br>} else if (<em>条件 2</em>) {<br>&nbsp;&nbsp;<em>语句 2</em><br>} else if (<em>条件 3</em>) {<br>&nbsp;&nbsp;<em>语句 3</em><br>. . .<br>} else {<br>&nbsp;&nbsp;<em>语句 N</em><br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
把<code>if</code>/<code>else if</code>语句串联起来实现下面的逻辑：
<code>num &lt;   5</code>- return "Tiny"<br><code>num &lt;  10</code>- return "Small"<br><code>num &lt; 15</code>- return "Medium"<br><code>num &lt; 20</code>- return "Large"<br><code>num >= 20</code> - return "Huge"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>golfScore(4, 1)</code>应该返回 'Hole-in-one!'"
    testString: assert(golfScore(4, 1) === "Hole-in-one!", '<code>golfScore(4, 1)</code>应该返回 "Hole-in-one!"');
  - text: "<code>golfScore(4, 2)</code>应该返回 'Eagle'"
    testString: assert(golfScore(4, 2) === "Eagle", '<code>golfScore(4, 2)</code>应该返回 "Eagle"');
  - text: "<code>golfScore(5, 2)</code>应该返回 'Eagle'"
    testString: assert(golfScore(5, 2) === "Eagle", '<code>golfScore(5, 2)</code>应该返回 "Eagle"');
  - text: "<code>golfScore(4, 3)</code>应该返回 'Birdie'"
    testString: assert(golfScore(4, 3) === "Birdie", '<code>golfScore(4, 3)</code>应该返回 "Birdie"');
  - text: "<code>golfScore(4, 4)</code>应该返回 'Par'"
    testString: assert(golfScore(4, 4) === "Par", '<code>golfScore(4, 4)</code>应该返回 "Par"');
  - text: "<code>golfScore(1, 1)</code>应该返回 'Hole-in-one!'"
    testString: assert(golfScore(1, 1) === "Hole-in-one!", '<code>golfScore(1, 1)</code>应该返回 "Hole-in-one!"');
  - text: "<code>golfScore(5, 5)</code>应该返回 'Par'"
    testString: assert(golfScore(5, 5) === "Par", '<code>golfScore(5, 5)</code>应该返回 "Par"');
  - text: "<code>golfScore(4, 5)</code>应该返回 'Bogey'"
    testString: assert(golfScore(4, 5) === "Bogey", '<code>golfScore(4, 5)</code>应该返回 "Bogey"');
  - text: "<code>golfScore(4, 6)</code>应该返回 'Double Bogey'"
    testString: assert(golfScore(4, 6) === "Double Bogey", '<code>golfScore(4, 6)</code>应该返回 "Double Bogey"');
  - text: "<code>golfScore(4, 7)</code>应该返回 'Go Home!'"
    testString: assert(golfScore(4, 7) === "Go Home!", '<code>golfScore(4, 7)</code>应该返回 "Go Home!"');
  - text: "<code>golfScore(5, 9)</code>应该返回 'Go Home!'"
    testString: assert(golfScore(5, 9) === "Go Home!", '<code>golfScore(5, 9)</code>应该返回 "Go Home!"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
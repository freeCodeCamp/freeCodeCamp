---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
---

## Description
<section id='description'>
In the game of <a href="https://en.wikipedia.org/wiki/Golf" target="_blank">golf</a> each hole has a <code>par</code> meaning the average number of <code>strokes</code> a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below <code>par</code> your <code>strokes</code> are, there is a different nickname.
Your function will be passed <code>par</code> and <code>strokes</code> arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
<table class="table table-striped"><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&lt;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>&gt;= par + 3</td><td>"Go Home!"</td></tr></tbody></table>
<code>par</code> and <code>strokes</code> will always be numeric and positive. We have added an array of all the names for your convenience.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>golfScore(4, 1)</code> should return "Hole-in-one!"
    testString: assert(golfScore(4, 1) === "Hole-in-one!");
  - text: <code>golfScore(4, 2)</code> should return "Eagle"
    testString: assert(golfScore(4, 2) === "Eagle");
  - text: <code>golfScore(5, 2)</code> should return "Eagle"
    testString: assert(golfScore(5, 2) === "Eagle");
  - text: <code>golfScore(4, 3)</code> should return "Birdie"
    testString: assert(golfScore(4, 3) === "Birdie");
  - text: <code>golfScore(4, 4)</code> should return "Par"
    testString: assert(golfScore(4, 4) === "Par");
  - text: <code>golfScore(1, 1)</code> should return "Hole-in-one!"
    testString: assert(golfScore(1, 1) === "Hole-in-one!");
  - text: <code>golfScore(5, 5)</code> should return "Par"
    testString: assert(golfScore(5, 5) === "Par");
  - text: <code>golfScore(4, 5)</code> should return "Bogey"
    testString: assert(golfScore(4, 5) === "Bogey");
  - text: <code>golfScore(4, 6)</code> should return "Double Bogey"
    testString: assert(golfScore(4, 6) === "Double Bogey");
  - text: <code>golfScore(4, 7)</code> should return "Go Home!"
    testString: assert(golfScore(4, 7) === "Go Home!");
  - text: <code>golfScore(5, 9)</code> should return "Go Home!"
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

---
id: 5900f4731000cf542c50ff85
challengeType: 5
isHidden: false
title: 'Problem 262: Mountain Range'
forumTopicId: 301911
---

## Description
<section id='description'>
The following equation represents the continuous topography of a mountainous region, giving the elevation h at any point (x,y):




A mosquito intends to fly from A(200,200) to B(1400,1400), without leaving the area given by 0 ≤ x, y ≤ 1600.

Because of the intervening mountains, it first rises straight up to a point A', having elevation f. Then, while remaining at the same elevation f, it flies around any obstacles until it arrives at a point B' directly above B.

First, determine fmin which is the minimum constant elevation allowing such a trip from A to B, while remaining in the specified area.
Then, find the length of the shortest path between A' and B', while flying at that constant elevation fmin.

Give that length as your answer, rounded to three decimal places.

Note: For convenience, the elevation function shown above is repeated below, in a form suitable for most programming languages:
h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) ) * exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler262()</code> should return 2531.205.
    testString: assert.strictEqual(euler262(), 2531.205);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler262() {
  // Good luck!
  return true;
}

euler262();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

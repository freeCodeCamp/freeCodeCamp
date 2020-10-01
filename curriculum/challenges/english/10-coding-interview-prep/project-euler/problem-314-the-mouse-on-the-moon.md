---
id: 5900f4a71000cf542c50ffb9
challengeType: 5
title: 'Problem 314: The Mouse on the Moon'
forumTopicId: 301970
---

## Description
<section id='description'>
The moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.


The bigger countries of course have built a 2000 m wall enclosing the entire 250 000 m2 area. The Duchy of Grand Fenwick, has a tighter budget, and has asked you (their Royal Programmer) to compute what shape would get best maximum enclosed-area/wall-length ratio.


You have done some preliminary calculations on a sheet of paper.
For a 2000 meter wall enclosing the 250 000 m2 area the
enclosed-area/wall-length ratio is 125.
Although not allowed , but to get an idea if this is anything better:  if you place a circle inside the square area touching the four sides the area will be equal to π*2502 m2 and the perimeter will be π*500 m, so the enclosed-area/wall-length ratio will also be 125.


However, if you cut off from the square four triangles with sides 75 m, 75 m and 75√2 m the total area becomes 238750 m2 and the perimeter becomes 1400+300√2 m. So this gives an enclosed-area/wall-length ratio of 130.87, which is significantly better.



Find the maximum enclosed-area/wall-length ratio.
Give your answer rounded to 8 places behind the decimal point in the form abc.defghijk.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler314()</code> should return 132.52756426.
    testString: assert.strictEqual(euler314(), 132.52756426);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler314() {

  return true;
}

euler314();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

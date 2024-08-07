---
id: 5900f4a71000cf542c50ffb9
title: 'Problem 314: The Mouse on the Moon'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

The moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.

The bigger countries of course have built a 2000 m wall enclosing the entire 250 000 $\text{m}^2$ area. The Duchy of Grand Fenwick, has a tighter budget, and has asked you (their Royal Programmer) to compute what shape would get best maximum $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio.

You have done some preliminary calculations on a sheet of paper. For a 2000 meter wall enclosing the 250 000 $\text{m}^2$ area the $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio is 125.

Although not allowed, but to get an idea if this is anything better: if you place a circle inside the square area touching the four sides the area will be equal to $π \times {250}^2 \text{m}^2$ and the perimeter will be $π \times 500 \text{m}$, so the $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio will also be 125.

However, if you cut off from the square four triangles with sides 75 m, 75 m and $75\sqrt{2}$ m the total area becomes 238750 $\text{m}^2$ and the perimeter becomes $1400 + 300\sqrt{2}$ m. So this gives an $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio of 130.87, which is significantly better.

<img alt="picture showing difference in enclosed-area between circle and square with cut off four triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

Find the maximum $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio. Give your answer rounded to 8 places behind the decimal point in the form abc.defghijk.

# --hints--

`theMouseOnTheMoon()` should return `132.52756426`.

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4f71000cf542c510009
challengeType: 5
title: 'Problem 394: Eating pie'
forumTopicId: 302059
---

## Description
<section id='description'>
Jeff eats a pie in an unusual way.
The pie is circular. He starts with slicing an initial cut in the pie along a radius.
While there is at least a given fraction F of pie left, he performs the following procedure:
- He makes two slices from the pie centre to any point of what is remaining of the pie border, any point on the remaining pie border equally likely. This will divide the remaining pie into three pieces.
- Going counterclockwise from the initial cut, he takes the first two pie pieces and eats them.
When less than a fraction F of pie remains, he does not repeat this procedure. Instead, he eats all of the remaining pie.






For x ≥ 1, let E(x) be the expected number of times Jeff repeats the procedure above with F = 1/x.
It can be verified that  E(1) = 1, E(2) ≈ 1.2676536759, and E(7.5) ≈ 2.1215732071.


Find E(40) rounded to 10 decimal places behind the decimal point.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler394()</code> should return 3.2370342194.
    testString: assert.strictEqual(euler394(), 3.2370342194);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler394() {

  return true;
}

euler394();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

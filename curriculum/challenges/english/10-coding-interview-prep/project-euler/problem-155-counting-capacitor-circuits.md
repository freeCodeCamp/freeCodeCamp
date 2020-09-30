---
id: 5900f4081000cf542c50ff1a
challengeType: 5
title: 'Problem 155: Counting Capacitor Circuits'
forumTopicId: 301786
---

## Description
<section id='description'>
An electric circuit uses exclusively identical capacitors of the same value C.

The capacitors can be connected in series or in parallel to form sub-units, which can then be connected in series or in parallel with other capacitors or other sub-units to form larger sub-units, and so on up to a final circuit.
Using this simple procedure and up to n identical capacitors, we can make circuits having a range of different total capacitances. For example, using up to n=3 capacitors of 60 F each, we can obtain the following 7 distinct total capacitance values:

If we denote by D(n) the number of distinct total capacitance values we can obtain when using up to n equal-valued capacitors and the simple procedure described above, we have: D(1)=1, D(2)=3, D(3)=7 ...
Find D(18).
Reminder : When connecting capacitors C1, C2 etc in parallel, the total capacitance is CT = C1 + C2 +...,

whereas when connecting them in series, the overall capacitance is given by:
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler155()</code> should return 3857447.
    testString: assert.strictEqual(euler155(), 3857447);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler155() {

  return true;
}

euler155();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

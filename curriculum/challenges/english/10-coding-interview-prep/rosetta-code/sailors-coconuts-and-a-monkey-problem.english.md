---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
challengeType: 5
forumTopicId: 302304
---

## Description
<section id='description'>

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.
That night the first sailor wakes up and decides to take his first share early  so tries to divide the pile of coconuts equally into five piles but finds that there is one coconut left over, so he tosses it to a monkey and then hides "his" one of the five equally sized piles of coconuts and pushes the other four piles together to form a single visible pile of coconuts again and goes to bed.
To cut a long story short, each of the sailors in turn gets up once during the night and performs the same actions of dividing the coconut pile into five, finding that one coconut is left over and giving that single remainder coconut to the monkey.
In the morning (after the surreptitious and separate action of each of the five sailors during the night), the remaining coconuts are divided into five equal piles for each of the sailors, whereupon it is found that the pile of coconuts divides equally amongst the sailors with no remainder. (Nothing for the monkey in the morning.)
</section>

## Instructions
<section id='instructions'>

Create a function that returns the minimum possible size of the initial pile of coconuts collected during the day for <code>N</code> sailors.
<strong>Note:</strong>
Of course the tale is told in a world where the collection of any amount of coconuts in a day and multiple divisions of the pile, etc. can occur in time fitting the story line, so as not to affect the mathematics.
<strong>C.f:</strong>
<ul>
  <li><a href="https://www.youtube.com/watch?v=U9qU20VmvaU" target="_blank"> Monkeys and Coconuts - Numberphile</a> (Video) Analytical solution.</li>
  <li><a href="https://oeis.org/A002021" target="_blank">A002021 Pile of coconuts problem</a> The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code> should be a function.
    testString: assert(typeof splitCoconuts === 'function');
  - text: <code>splitCoconuts(5)</code> should return 3121.
    testString: assert(splitCoconuts(5) === 3121);
  - text: <code>splitCoconuts(6)</code> should return 233275.
    testString: assert(splitCoconuts(6) === 233275);
  - text: <code>splitCoconuts(7)</code> should return 823537.
    testString: assert(splitCoconuts(7) === 823537);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitCoconuts(intSailors) {

  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}

```

</section>

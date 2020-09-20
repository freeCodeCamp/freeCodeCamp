---
title: Iterated digits squaring
id: 5a23c84252665b21eecc7ec1
challengeType: 5
forumTopicId: 302291
---

## Description
<section id='description'>
If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89:
<pre>
15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>
</section>

## Instructions
<section id='instructions'>
Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>iteratedSquare</code> should be a function.
    testString: assert(typeof iteratedSquare=='function');
  - text: <code>iteratedSquare(4)</code> should return a number.
    testString: assert(typeof iteratedSquare(4)=='number');
  - text: <code>iteratedSquare(4)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(4),89);
  - text: <code>iteratedSquare(7)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(7),1);
  - text: <code>iteratedSquare(15)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(15),89);
  - text: <code>iteratedSquare(20)</code> should return <code>89</code>.
    testString: assert.equal(iteratedSquare(20),89);
  - text: <code>iteratedSquare(70)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(70),1);
  - text: <code>iteratedSquare(100)</code> should return <code>1</code>.
    testString: assert.equal(iteratedSquare(100),1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function iteratedSquare(n) {

}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function iteratedSquare(n) {
	var total;
	while (n != 89 && n != 1) {
		total = 0;
		while (n > 0) {
			total += Math.pow(n % 10, 2);
			n = Math.floor(n/10);
		}
		n = total;
	}
	return n;
}

```

</section>

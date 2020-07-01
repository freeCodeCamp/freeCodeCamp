---
title: I before E except after C
id: 5a23c84252665b21eecc7eb0
challengeType: 5
isHidden: false
forumTopicId: 302288
---

## Description
<section id='description'>
The phrase   <a href="https://en.wikipedia.org/wiki/I before E except after C" target="_blank"> "I before E, except after C"</a> is a widely known mnemonic which is supposed to help when spelling English words.
Using the words provided, check if the two sub-clauses of the phrase are plausible individually:
<ol>
  <li>
    <i>"I before E when not preceded by C".</i>
  </li>
  <li>
    <i>"E before I when preceded by C".</i>
  </li>
</ol>
If both sub-phrases are plausible then the original phrase can be said to be plausible.
</section>

## Instructions
<section id='instructions'>
Write a function that accepts a word and check if the word follows this rule. The function should return true if the word follows the rule and false if it does not.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>IBeforeExceptC</code> should be a function.
    testString: assert(typeof IBeforeExceptC=='function');
  - text: <code>IBeforeExceptC("receive")</code> should return a boolean.
    testString: assert(typeof IBeforeExceptC("receive")=='boolean');
  - text: <code>IBeforeExceptC("receive")</code> should return <code>true</code>.
    testString: assert.equal(IBeforeExceptC("receive"),true);
  - text: <code>IBeforeExceptC("science")</code> should return <code>false</code>.
    testString: assert.equal(IBeforeExceptC("science"),false);
  - text: <code>IBeforeExceptC("imperceivable")</code> should return <code>true</code>.
    testString: assert.equal(IBeforeExceptC("imperceivable"),true);
  - text: <code>IBeforeExceptC("inconceivable")</code> should return <code>true</code>.
    testString: assert.equal(IBeforeExceptC("inconceivable"),true);
  - text: <code>IBeforeExceptC("insufficient")</code> should return <code>false</code>.
    testString: assert.equal(IBeforeExceptC("insufficient"),false);
  - text: <code>IBeforeExceptC("omniscient")</code> should return <code>false</code>.
    testString: assert.equal(IBeforeExceptC("omniscient"),false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function IBeforeExceptC(word) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function IBeforeExceptC(word)
{
	if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
		return true;
	else if(word.indexOf("cei")!=-1)
		return true;
	return false;
}

```

</section>

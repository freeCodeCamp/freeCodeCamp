---
title: Define a primitive data type
id: 597089c87eec450c68aa1643
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.</p>
Errors:
If you try to instantiate a <code>Num</code> with a value outside of 1 - 10
it should throw a <code>TypeError</code> with an error message of <code>'Out of range'</code>.
If you try to instantiate a <code>Num</code> with a value that is not a number
it should throw a <code>TypeError</code> with an error message of <code>'Not a Number'</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>Num</code> should be a function.
  testString: 'assert(typeof Num === ''function'', ''<code>Num</code> should be a function.'');'
- text: <code>new Num(4)</code> should return an object.
  testString: 'assert(typeof (new Num(4)) === ''object'', ''<code>new Num(4)</code> should return an object.'');'
- text: <code>new Num(\'test\')</code> should throw a TypeError with message \'Not a Number\'.
  testString: 'assert(throws(() => new Num(''test''), TypeError, ''Not a Number''), ''<code>new Num(\''test\'')</code> should throw a TypeError with message \''Not a Number\''.'');'
- text: <code>new Num(0)</code> should throw a TypeError with message \'Out of range\'.
  testString: 'assert(throws(() => new Num(0), TypeError, ''Out of range''), ''<code>new Num(0)</code> should throw a TypeError with message \''Out of range\''.'');'
- text: <code>new Num(-5)</code> should throw a TypeError with message \'Out of range\'.
  testString: 'assert(throws(() => new Num(-5), TypeError, ''Out of range''), ''<code>new Num(-5)</code> should throw a TypeError with message \''Out of range\''.'');'
- text: <code>new Num(10)</code> should throw a TypeError with message \'Out of range\'.
  testString: 'assert(throws(() => new Num(11), TypeError, ''Out of range''), ''<code>new Num(10)</code> should throw a TypeError with message \''Out of range\''.'');'
- text: <code>new Num(20)</code> should throw a TypeError with message \'Out of range\'.
  testString: 'assert(throws(() => new Num(20), TypeError, ''Out of range''), ''<code>new Num(20)</code> should throw a TypeError with message \''Out of range\''.'');'
- text: <code>new Num(3) + new Num(4)</code> should equal 7.
  testString: 'assert.equal(new Num(3) + new Num(4), 7, ''<code>new Num(3) + new Num(4)</code> should equal 7.'');'
- text: <code>new Num(3) - new Num(4)</code> should equal -1.
  testString: 'assert.equal(new Num(3) - new Num(4), -1, ''<code>new Num(3) - new Num(4)</code> should equal -1.'');'
- text: <code>new Num(3) * new Num(4)</code> should equal 12.
  testString: 'assert.equal(new Num(3) * new Num(4), 12, ''<code>new Num(3) * new Num(4)</code> should equal 12.'');'
- text: <code>new Num(3) / new Num(4)</code> should equal 0.75.
  testString: 'assert.equal(new Num(3) / new Num(4), 0.75, ''<code>new Num(3) / new Num(4)</code> should equal 0.75.'');'
- text: <code>new Num(3) < new Num(4)</code> should be true.
  testString: 'assert(new Num(3) < new Num(4), ''<code>new Num(3) < new Num(4)</code> should be true.'');'
- text: <code>new Num(3) > new Num(4)</code> should be false.
  testString: 'assert(!(new Num(3) > new Num(4)), ''<code>new Num(3) > new Num(4)</code> should be false.'');'
- text: <code>(new Num(5)).toString()</code> should return \'5\'
  testString: 'assert.equal((new Num(5)).toString(), ''5'', ''<code>(new Num(5)).toString()</code> should return \''5\'''');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Num (n) {
  // Good luck!
  return n;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Num(n) {
  const num = Math.floor(n);
  if (isNaN(num)) {
    throw new TypeError('Not a Number');
  }
  if (num < 1 || num > 10) {
    throw new TypeError('Out of range');
  }

  this._value = num;
}
Num.prototype.valueOf = function() { return this._value; };
Num.prototype.toString = function () { return this._value.toString(); };

function throws(func, errorType, msg) {
  let hasThrown = false;
  let errorMsg = '';
  let correctType = false;
  try {
    func();
  }
  catch (e) {
    hasThrown = true;
    errorMsg = e.message;
    if (e instanceof errorType) {
      correctType = true;
    }
  }
  return hasThrown && correctType && msg === errorMsg;
}

```

</section>

---
title: Define a primitive data type
id: 597089c87eec450c68aa1643
localeTitle: 597089c87eec450c68aa1643
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Defina un tipo que se comporte como un entero pero que tenga un valor válido más bajo de 1 y un valor válido más alto de 10. </p> 
Errores: 
Si intenta crear una instancia de un <code>Num</code> con un valor fuera de 1 - 10 
, debe lanzar un <code>TypeError</code> con un mensaje de error de <code>&#39;Out of range&#39;</code> . 
Si intenta crear una instancia de un <code>Num</code> con un valor que no es un número 
, debe lanzar un <code>TypeError</code> con un mensaje de error <code>&#39;Not a Number&#39;</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Num</code> debería ser una función.
    testString: 'assert(typeof Num === "function", "<code>Num</code> should be a function.");'
  - text: <code>new Num(4)</code> debe devolver un objeto.
    testString: 'assert(typeof (new Num(4)) === "object", "<code>new Num(4)</code> should return an object.");'
  - text: <code>new Num(\&#39;test\&#39;)</code> debe lanzar un TypeError con el mensaje \ &#39;Not a Number \&#39;.
    testString: 'assert(throws(() => new Num("test"), TypeError, "Not a Number"), "<code>new Num(\"test\")</code> should throw a TypeError with message \"Not a Number\".");'
  - text: <code>new Num(0)</code> debe lanzar un TypeError con el mensaje \ &#39;Fuera de rango \&#39;.
    testString: 'assert(throws(() => new Num(0), TypeError, "Out of range"), "<code>new Num(0)</code> should throw a TypeError with message \"Out of range\".");'
  - text: <code>new Num(-5)</code> debe lanzar un TypeError con el mensaje &quot;Fuera de rango&quot;.
    testString: 'assert(throws(() => new Num(-5), TypeError, "Out of range"), "<code>new Num(-5)</code> should throw a TypeError with message \"Out of range\".");'
  - text: <code>new Num(10)</code> debe lanzar un TypeError con el mensaje \ &#39;Fuera de rango \&#39;.
    testString: 'assert(throws(() => new Num(11), TypeError, "Out of range"), "<code>new Num(10)</code> should throw a TypeError with message \"Out of range\".");'
  - text: <code>new Num(20)</code> debe lanzar un TypeError con el mensaje \ &#39;Fuera de rango \&#39;.
    testString: 'assert(throws(() => new Num(20), TypeError, "Out of range"), "<code>new Num(20)</code> should throw a TypeError with message \"Out of range\".");'
  - text: <code>new Num(3) + new Num(4)</code> debe ser igual a 7.
    testString: 'assert.equal(new Num(3) + new Num(4), 7, "<code>new Num(3) + new Num(4)</code> should equal 7.");'
  - text: <code>new Num(3) - new Num(4)</code> debe ser igual a -1.
    testString: 'assert.equal(new Num(3) - new Num(4), -1, "<code>new Num(3) - new Num(4)</code> should equal -1.");'
  - text: <code>new Num(3) * new Num(4)</code> debe ser igual a 12.
    testString: 'assert.equal(new Num(3) * new Num(4), 12, "<code>new Num(3) * new Num(4)</code> should equal 12.");'
  - text: <code>new Num(3) / new Num(4)</code> debe ser igual a 0.75.
    testString: 'assert.equal(new Num(3) / new Num(4), 0.75, "<code>new Num(3) / new Num(4)</code> should equal 0.75.");'
  - text: <code>new Num(3) &lt; new Num(4)</code> debe ser verdadero.
    testString: 'assert(new Num(3) < new Num(4), "<code>new Num(3) < new Num(4)</code> should be true.");'
  - text: <code>new Num(3) &gt; new Num(4)</code> debe ser falso.
    testString: 'assert(!(new Num(3) > new Num(4)), "<code>new Num(3) > new Num(4)</code> should be false.");'
  - text: <code>(new Num(5)).toString()</code> debe devolver \ &#39;5 \&#39;
    testString: 'assert.equal((new Num(5)).toString(), "5", "<code>(new Num(5)).toString()</code> should return \"5\"");'

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
  let errorMsg = ";
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

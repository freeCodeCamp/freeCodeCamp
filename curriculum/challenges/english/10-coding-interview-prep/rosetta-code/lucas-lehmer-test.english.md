---
id: 5e6dee7749a0b85a3f1fc7d5
title: Lucas-Lehmer test
challengeType: 5
forumTopicId: 385281
---

## Description
<section id='description'>
Lucas-Lehmer Test: for $p$ an odd prime, the Mersenne number $2^p-1$ is prime if and only if $2^p-1$ divides $S(p-1)$ where $S(n+1)=(S(n))^2-2$, and $S(1)=4$.
</section>

## Instructions
<section id='instructions'>
Write a function that returns whether the given Mersenne number is prime or not.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>lucasLehmer</code> should be a function.
    testString: assert(typeof lucasLehmer == 'function');
  - text: <code>lucasLehmer(11)</code> should return a boolean.
    testString: assert(typeof lucasLehmer(11) == 'boolean');
  - text: <code>lucasLehmer(11)</code> should return <code>false</code>.
    testString: assert.equal(lucasLehmer(11), false);
  - text: <code>lucasLehmer(15)</code> should return <code>false</code>.
    testString: assert.equal(lucasLehmer(15), false);
  - text: <code>lucasLehmer(13)</code> should return <code>true</code>.
    testString: assert.equal(lucasLehmer(13), true);
  - text: <code>lucasLehmer(17)</code> should return <code>true</code>.
    testString: assert.equal(lucasLehmer(17), true);
  - text: <code>lucasLehmer(19)</code> should return <code>true</code>.
    testString: assert.equal(lucasLehmer(19), true);
  - text: <code>lucasLehmer(21)</code> should return <code>false</code>.
    testString: assert.equal(lucasLehmer(21), false);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lucasLehmer(p) {

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function lucasLehmer(p) {
    function isPrime(p) {
        if (p == 2)
            return true;
        else if (p <= 1 || p % 2 == 0)
            return false;
        else {
            var to = Math.sqrt(p);
            for (var i = 3; i <= to; i += 2)
                if (p % i == 0)
                    return false;
            return true;
        }
    }

    function isMersennePrime(p) {
        if (p == 2)
            return true;
        else {
            var m_p = Math.pow(2, p) - 1
            var s = 4;
            for (var i = 3; i <= p; i++)
                s = (s * s - 2) % m_p
            return s == 0;
        }
    }

    return isPrime(p) && isMersennePrime(p)
}
```

</section>

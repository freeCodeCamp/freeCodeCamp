---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
---

## Description
<section id='description'>
<p>A Mersenne number is a number in the form of 2<sup>P</sup>-1.</p><p>If P is prime, the Mersenne number may be a Mersenne prime</p>
<p>(if P is not prime, the Mersenne number is also not prime).</p><p>In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a,  potentially lengthy, <a href="http://rosettacode.org/wiki/Lucas-Lehmer test" title="Lucas-Lehmer test">Lucas-Lehmer test</a>.</p><p>There are very efficient algorithms for determining if a number divides 2<sup>P</sup>-1 (or equivalently, if 2<sup>P</sup> mod (the number) = 1).</p>
<p>Some languages already have built-in implementations of this exponent-and-mod operation (called modPow or similar).</p><p>The following is how to implement this modPow yourself:</p><p>For example, let's compute 2<sup>23</sup> mod 47.</p>
<p>Convert the exponent 23 to binary, you get 10111. Starting with <tt>square</tt> = 1, repeatedly square it.</p>
<p>Remove the top bit of the exponent, and if it's 1 multiply <tt>square</tt> by the base of the exponentiation (2), then compute <tt>square</tt> modulo 47.</p>
<p>Use the result of the modulo from the last step as the initial value of <tt>square</tt> in the next step:</p><p>Remove   Optional</p>
<p>square        top bit  multiply by 2  mod 47</p>
<p>------------  -------  -------------  ------</p>
<p>1*1 = 1       1  0111  1*2 = 2           2</p>
<p>2*2 = 4       0   111     no             4</p>
<p>4*4 = 16      1    11  16*2 = 32        32</p>
<p>32*32 = 1024  1     1  1024*2 = 2048    27</p>
<p>27*27 = 729   1        729*2 = 1458      1</p><p>Since 2<sup>23</sup> mod 47 = 1, 47 is a factor of 2<sup>P</sup>-1.</p>
<p>(To see this, subtract 1 from both sides: 2<sup>23</sup>-1 = 0 mod 47.)</p>
<p>Since we've shown that 47 is a factor, 2<sup>23</sup>-1 is not prime.</p>
<p>Further properties of Mersenne numbers allow us to refine the process even more.</p>
<p>Any factor q of 2<sup>P</sup>-1 must be of the form 2kP+1, k being a positive integer or zero. Furthermore, q must be 1 or 7 mod 8.</p>
<p>Finally any potential factor q must be <a href="http://rosettacode.org/wiki/Primality by Trial Division" title="Primality by Trial Division">prime</a>.</p>
<p>As in other trial division algorithms, the algorithm stops when 2kP+1 > sqrt(N).</p><p>These primality tests only work on Mersenne numbers where P is prime. For example, M<sub>4</sub>=15 yields no factors using these techniques, but factors into 3 and 5, neither of which fit 2kP+1.</p>
Task:
<p>Using the above method find a factor of  2<sup>929</sup>-1 (aka M929)</p>
Related tasks:
 <a href="http://rosettacode.org/wiki/count in factors" title="count in factors">count in factors</a>
 <a href="http://rosettacode.org/wiki/prime decomposition" title="prime decomposition">prime decomposition</a>
 <a href="http://rosettacode.org/wiki/factors of an integer" title="factors of an integer">factors of an integer</a>
 <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Sieve of Eratosthenes">Sieve of Eratosthenes</a>
 <a href="http://rosettacode.org/wiki/primality by trial division" title="primality by trial division">primality by trial division</a>
 <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="trial factoring of a Mersenne number">trial factoring of a Mersenne number</a>
 <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="partition an integer X into N primes">partition an integer X into N primes</a>
 <a href="http://rosettacode.org/wiki/sequence of primes by Trial Division" title="sequence of primes by Trial Division">sequence of primes by Trial Division</a>
 <a href="https://www.youtube.com/watch?v=SNwvJ7psoow" title="link: https://www.youtube.com/watch?v=SNwvJ7psoow">Computers in 1948: 2¹²⁷-1</a>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code> is a function.
    testString: 'assert(typeof check_mersenne === "function", "<code>check_mersenne</code> is a function.");'
  - text: <code>check_mersenne(3)</code> should return a string.
    testString: 'assert(typeof check_mersenne(3) == "string", "<code>check_mersenne(3)</code> should return a string.");'
  - text: <code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".
    testString: 'assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime","<code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".");'
  - text: <code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".
    testString: 'assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47","<code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".");'
  - text: <code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007
    testString: 'assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007","<code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne (p) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function check_mersenne(p){
	function isPrime(value){
	  for (let i=2; i < value; i++){
		if (value % i == 0){
		  return false;
		}
		if (value % i != 0){
		  return true;
		 }
	  }
	}

	function trial_factor(base, exp, mod){
	  let square, bits;
	  square = 1;
	  bits = exp.toString(2).split('');
	  for (let i=0,ln=bits.length; i<ln; i++){
		square = Math.pow(square, 2) * (bits[i] == 1 ? base : 1) % mod;
	  }
	  return (square == 1);
	}

	function mersenne_factor(p){
	  let limit, k, q;
	  limit = Math.sqrt(Math.pow(2,p) - 1);
	  k = 1;
	  while ((2*k*p - 1) < limit){
		q = 2*k*p + 1;
		if (isPrime(q) && (q % 8 == 1 || q % 8 == 7) && trial_factor(2,p,q)){
		  return q; // q is a factor of 2**p-1
		}
		k++;
	  }
	  return null;
	}
  let f, result;
  result="M"+p+" = 2^"+p+"-1 is ";
  f = mersenne_factor(p);
  result+=f == null ? "prime" : "composite with factor "+f;
  return result;
}


```

</section>

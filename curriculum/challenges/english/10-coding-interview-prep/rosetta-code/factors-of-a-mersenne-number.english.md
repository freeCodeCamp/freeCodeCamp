---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
forumTopicId: 302264
---

## Description
<section id='description'>
A Mersenne number is a number in the form of <code>2<sup>P</sup>-1</code>.
If <code>P</code> is prime, the Mersenne number may be a Mersenne prime. (If <code>P</code> is not prime, the Mersenne number is also not prime.)
In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a,  potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" title="Lucas-Lehmer test" target="_blank">Lucas-Lehmer test</a>.
There are very efficient algorithms for determining if a number divides <code>2<sup>P</sup>-1</code> (or equivalently, if <code>2<sup>P</sup> mod (the number) = 1</code>).
Some languages already have built-in implementations of this exponent-and-mod operation (called modPow or similar).
The following is how to implement this modPow yourself:
For example, let's compute <code>2<sup>23</sup> mod 47</code>.
Convert the exponent 23 to binary, you get 10111. Starting with <code><tt>square</tt> = 1</code>, repeatedly square it.
Remove the top bit of the exponent, and if it's 1 multiply <code><tt>square</tt></code> by the base of the exponentiation (2), then compute <code><tt>square</tt> modulo 47</code>.
Use the result of the modulo from the last step as the initial value of <code><tt>square</tt></code> in the next step:
<pre>
Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>
Since <code>2<sup>23</sup> mod 47 = 1</code>, 47 is a factor of <code>2<sup>P</sup>-1</code>.
(To see this, subtract 1 from both sides: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)
Since we've shown that 47 is a factor, <code>2<sup>23</sup>-1</code> is not prime.
Further properties of Mersenne numbers allow us to refine the process even more.
Any factor <code>q</code> of <code>2<sup>P</sup>-1</code> must be of the form <code>2kP+1</code>, <code>k</code> being a positive integer or zero. Furthermore, <code>q</code> must be <code>1</code> or <code>7 mod 8</code>.
Finally any potential factor <code>q</code> must be <a href="https://rosettacode.org/wiki/Primality by Trial Division" title="Primality by Trial Division" target="_blank">prime</a>.
As in other trial division algorithms, the algorithm stops when <code>2kP+1 > sqrt(N)</code>.These primarily tests only work on Mersenne numbers where <code>P</code> is prime. For example, <code>M<sub>4</sub>=15</code> yields no factors using these techniques, but factors into 3 and 5, neither of which fit <code>2kP+1</code>.
</section>

## Instructions
<section id='instructions'>
Using the above method find a factor of  <code>2<sup>929</sup>-1</code> (aka M929)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code> should be a function.
    testString: assert(typeof check_mersenne === 'function');
  - text: <code>check_mersenne(3)</code> should return a string.
    testString: assert(typeof check_mersenne(3) == 'string');
  - text: <code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".
    testString: assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime");
  - text: <code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".
    testString: assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47");
  - text: <code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007
    testString: assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne(p) {

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

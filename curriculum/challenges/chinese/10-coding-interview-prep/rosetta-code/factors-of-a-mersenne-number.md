---
id: 598eea87e5cf4b116c3ff81a
title: 梅森数的因数
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

A Mersenne number is a number in the form of <code>2<sup>P</sup>-1</code>.

If `P` is prime, the Mersenne number may be a Mersenne prime. (If `P` is not prime, the Mersenne number is also not prime.)

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer test</a>.

There are very efficient algorithms for determining if a number divides <code>2<sup>P</sup>-1</code> (or equivalently, if <code>2<sup>P</sup> mod (the number) = 1</code>).

Some languages already have built-in implementations of this exponent-and-mod operation (called modPow or similar).

The following is how to implement this modPow yourself:

For example, let's compute <code>2<sup>23</sup> mod 47</code>.

将指数 23 转换为二进制，得到 10111。 Starting with <code><tt>square</tt> = 1</code>, repeatedly square it.

Remove the top bit of the exponent, and if it's 1 multiply `square` by the base of the exponentiation (2), then compute <code><tt>square</tt> modulo 47</code>.

Use the result of the modulo from the last step as the initial value of `square` in the next step:

<pre>Remove   Optional
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

Any factor `q` of <code>2<sup>P</sup>-1</code> must be of the form `2kP+1`, `k` being a positive integer or zero. Furthermore, `q` must be `1` or `7 mod 8`.

Finally any potential factor `q` must be <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">prime</a>.

As in other trial division algorithms, the algorithm stops when `2kP+1 > sqrt(N)`.These primarily tests only work on Mersenne numbers where `P` is prime. For example, <code>M<sub>4</sub>=15</code> yields no factors using these techniques, but factors into 3 and 5, neither of which fit `2kP+1`.

# --instructions--

Using the above method find a factor of <code>2<sup>p</sup>-1</code>.

# --hints--

`check_mersenne` should be a function.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` should return a string.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` should return the string `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` should return the string `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` should return the string `M929 = 2^929-1 is composite with factor 13007`.

```js
assert.equal(
  check_mersenne(929),
  'M929 = 2^929-1 is composite with factor 13007'
);
```

# --seed--

## --seed-contents--

```js
function check_mersenne(p) {

}
```

# --solutions--

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

---
id: 598eea87e5cf4b116c3ff81a
title: 梅森数的因数
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

A Mersenne number is a number in the form of <code>2<sup>P</sup>-1</code>.

如果 `P` 是素数，则梅森数可能是梅森素数。 （如果 `P` 不是素数，梅森数也不是素数。）

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer test</a>.

有非常有效的算法可以确定一个数是否可​​以整除 <code>2<sup>P</sup>-1</code>（或者等效地，如果 <code >2<sup>P</sup> mod（数字）= 1</code>）。

一些语言已经内置了这种指数和模运算的实现（称为 modPow 或类似的）。

下面是如何自己实现这个modPow：

例如，让我们计算 <code>2<sup>23</sup> mod 47</code>。

将指数 23 转换为二进制，得到 10111。 从 <code><tt>square</tt> = 1</code> 开始，重复平方。

去除指数的最高位，如果它是 1 乘以 `square` 乘以幂的底数 (2)，然后计算 <code><tt>square</tt> modulo 47</code>。

使用上一步取模的结果作为下一步 `square` 的初始值：

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

由于 <code>2<sup>23</sup> mod 47 = 1</code>，47 是 <code>2<sup>P</sup>-1</code>。

（要看到这一点，从两边减去 1：<code>2<sup>23</sup>-1 = 0 mod 47</code>。）

由于我们已经证明 47 是一个因式，<code>2<sup>23</sup>-1</code> 不是质数。

梅森数的其他性质使我们能够进一步完善该过程。

<code>2<sup>P</sup>-1</code> 的任何因子 `q` 必须是 `2kP+1` 的形式，`k` 为正整数或零。 此外，`q` 必须是 `1` 或 `7 mod 8`。

Finally any potential factor `q` must be <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">prime</a>.

与其他试除算法一样，算法在 `2kP+1 > sqrt(N)` 时停止。这些主要测试仅适用于 `P` 为质数的梅森数。 例如，<code>M<sub>4</sub>=15</code> 使用这些技术不会产生因数，但会产生 3 和 5 的因数，它们都不适合 `2kP+1`。

# --instructions--

用上面的方法找到 <code>2<sup>p</sup>-1</code> 的因数。

# --hints--

`check_mersenne` 应该是一个函数。

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` 应该返回一个字符串。

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` 应该返回字符串 `M3 = 2^3-1 is prime`。

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` 应该返回字符串 `M23 = 2^23-1 is composite with factor 47`。

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` 应该返回字符串 `M929 = 2^929-1 is composite with factor 13007`。

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

---
id: 598eea87e5cf4b116c3ff81a
title: 梅森數的因數
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

A Mersenne number is a number in the form of <code>2<sup>P</sup>-1</code>.

如果 `P` 是素數，則梅森數可能是梅森素數。 （如果 `P` 不是素數，梅森數也不是素數。）

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer test</a>.

有非常有效的算法可以確定一個數是否可​​以整除 <code>2<sup>P</sup>-1</code>（或者等效地，如果 <code >2<sup>P</sup> mod（數字）= 1</code>）。

一些語言已經內置了這種指數和模運算的實現（稱爲 modPow 或類似的）。

下面是如何自己實現這個modPow：

例如，讓我們計算 <code>2<sup>23</sup> mod 47</code>。

將指數 23 轉換爲二進制，得到 10111。 從 <code><tt>square</tt> = 1</code> 開始，重複平方。

去除指數的最高位，如果它是 1 乘以 `square` 乘以冪的底數 (2)，然後計算 <code><tt>square</tt> modulo 47</code>。

使用上一步取模的結果作爲下一步 `square` 的初始值：

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

由於 <code>2<sup>23</sup> mod 47 = 1</code>，47 是 <code>2<sup>P</sup>-1</code>。

（要看到這一點，從兩邊減去 1：<code>2<sup>23</sup>-1 = 0 mod 47</code>。）

由於我們已經證明 47 是一個因式，<code>2<sup>23</sup>-1</code> 不是質數。

梅森數的其他性質使我們能夠進一步完善該過程。

<code>2<sup>P</sup>-1</code> 的任何因子 `q` 必須是 `2kP+1` 的形式，`k` 爲正整數或零。 此外，`q` 必須是 `1` 或 `7 mod 8`。

Finally any potential factor `q` must be <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">prime</a>.

與其他試除算法一樣，算法在 `2kP+1 > sqrt(N)` 時停止。這些主要測試僅適用於 `P` 爲質數的梅森數。 例如，<code>M<sub>4</sub>=15</code> 使用這些技術不會產生因數，但會產生 3 和 5 的因數，它們都不適合 `2kP+1`。

# --instructions--

用上面的方法找到 <code>2<sup>p</sup>-1</code> 的因數。

# --hints--

`check_mersenne` 應該是一個函數。

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` 應該返回一個字符串。

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` 應該返回字符串 `M3 = 2^3-1 is prime`。

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` 應該返回字符串 `M23 = 2^23-1 is composite with factor 47`。

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` 應該返回字符串 `M929 = 2^929-1 is composite with factor 13007`。

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

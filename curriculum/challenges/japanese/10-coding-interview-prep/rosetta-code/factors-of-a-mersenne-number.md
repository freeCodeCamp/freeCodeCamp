---
id: 598eea87e5cf4b116c3ff81a
title: メルセンヌ数の因数
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

メルセンヌ数は <code>2<sup>P</sup>-1</code> の形式の数値です。

`P` が素数の場合、メルセンヌ数はメルセンヌの素数である場合があります。 ( `P` が素数でない場合、メルセンヌ数も素数ではありません。)

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer test</a>.

数字が <code>2<sup>P</sup>-1</code> を割るかどうか (すなわち、<code>2<sup>P</sup> mod (the number) = 1</code> となるかどうか) を判定するのに適した非常に効率的なアルゴリズムがあります。

指数と剰余演算 (modPow などと呼ばれる) の組み込み実装が既にある言語もあります。

以下は、このmodPowを自分で実装する方法です。

例えば、 <code>2<sup>23</sup> mod 47</code> を計算してみましょう。

指数23を2進数に変換すると、10111が得られます。 <code><tt>square</tt> = 1</code> から始めて、繰り返し2乗にしていきます。

指数の上位ビットを削除し、1である場合、`square` に冪乗の底 (2) を掛けて、<code><tt>square</tt> modulo 47</code>を計算します。

最後のステップのモジュロの結果を、次のステップの `square` の初期値として使用します。

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

<code>2<sup>23</sup> mod 47 = 1</code>であるため、 47 は <code>2<sup>P</sup>-1</code> の因数です。

(これを理解するには、両辺から1を引きます: <code>2<sup>23</sup>-1 = 0 mod 47</code>。)

47 が因数であるとしているので、<code>2<sup>23</sup>-1</code> は素数ではありません。

メルセンヌ数には他にも特有の性質があるため、メルセンヌ数を使用するとプロセスをもっと改善できます。

<code>2<sup>P</sup>-1</code> の因数 `q` は `2kP+1`の形を取り、`k` は正の整数またはゼロです。 さらに、`q` は `1` または `7 mod 8` です。

Finally any potential factor `q` must be <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">prime</a>.

他の試行徐算アルゴリズムと同様に、アルゴリズムは `2kP+1 > sqrt(N)`となった場合に停止します。これらのテストは、`P` が素数である場合に、メルセンヌ数に対してのみ働きます。 例えば、<code>M<sub>4</sub>=15</code> はこれらの手法で因数を生成しません。3と5を考えると、いずれも`2kP+1`に適合しません。

# --instructions--

上記のメソッドを使用して、<code>2<sup>p</sup>-1</code> の因数を求めます。

# --hints--

`check_mersenne` という関数です。

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` は文字列を返します。

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` は文字列 `M3 = 2^3-1 is prime` を返します。

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` は文字列 `M23 = 2^23-1 is composite with factor 47` を返します。

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` は 文字列 `M929 = 2^929-1 is composite with factor 13007` を返します。

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

---
id: 598eea87e5cf4b116c3ff81a
title: Множники числа Мерсенна
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

Число Мерсенна — це число вигляду <code>2<sup>P</sup>-1</code>.

Якщо `P` є простим числом, то число Мерсенна може бути простим числом Мерсенна. (Якщо `P` не є простим числом, то число Мерсенна також не є простим.)

При пошуку простих чисел Мерсенна варто виключити показники степеня, знайшовши невеликий множник перш ніж почати потенційно довгий <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">тест Люка-Лемера</a>.

Існують дуже ефективні алгоритми, щоб визначити, чи <code>2<sup>P</sup>-1</code> ділиться на число (або ж еквівалентно, чи <code>2<sup>P</sup> mod (число) = 1</code>).

Деякі мови програмування вже мають вбудовані реалізації цієї операції степеня-та-модуля (modPow або схожа назва).

Нижче показано, як реалізувати modPow самостійно:

Наприклад, обчислимо <code>2<sup>23</sup> mod 47</code>.

Перетворивши степінь 23 в бінарне значення, ми отримаємо 10111. Починаючи з <code><tt>квадрата</tt> = 1</code>, повторно виконайте піднесення до квадрата.

Видаліть верхній біт степеня, та якщо він дорівнює 1, то помножте `квадрат` на основу степеня (2), а потім обчисліть <code><tt>квадрат</tt> mod 47</code>.

Використайте результат модуля з останнього кроку як початкове значення `квадрата` в наступному кроці:

<pre>Знайдіть      Видаліть     Необов’язково
квадрат       верхній біт  помножте на 2  mod 47
------------  -----------  -------------  ------
1*1 = 1       1  0111      1*2 = 2           2
2*2 = 4       0   111      немає             4
4*4 = 16      1    11      16*2 = 32        32
32*32 = 1024  1     1      1024*2 = 2048    27
27*27 = 729   1            729*2 = 1458      1
</pre>

Починаючи з <code>2<sup>23</sup> mod 47 = 1</code>, 47 є множником <code>2<sup>P</sup>-1</code>.

(Для перевірки віднімемо 1 з обох сторін: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)

Оскільки ми довели, що 47 є множником, <code>2<sup>23</sup>-1</code> не є простим числом.

Додаткові властивості чисел Мерсенна дозволяють ще більше уточнити процес.

Будь-який множник `q` числа <code>2<sup>P</sup>-1</code> повинен мати вигляд `2kP+1`, де `k` є натуральним числом або нулем. Крім того, `q` має бути `1` або `7 mod 8`.

Зрештою, будь-який потенційний множник `q` має бути <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">простим числом</a>.

Як і в інших алгоритмах перебору, алгоритм зупиняється, коли `2kP+1 > sqrt(N)`. Ці тести переважно працюють на числах Мерсенна, де `P` є простим числом. Наприклад, <code>M<sub>4</sub>=15</code> не має множників за допомогою цих методів, але розкладається на 3 і 5, ні одне з яких не підходить під `2kP+1`.

# --instructions--

Знайдіть множник <code>2<sup>p</sup>-1</code>, використовуючи метод, описаний вище.

# --hints--

`check_mersenne` має бути функцією.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` має повернути рядок.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` має повернути рядок `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` має повернути рядок `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` має повернути рядок `M929 = 2^929-1 is composite with factor 13007`.

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

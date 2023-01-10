---
id: 598eea87e5cf4b116c3ff81a
title: Фактори числа Мерсенна
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

Число Мерсенна - це число у вигляді <code>2<sup>P</sup>-1</code>.

Якщо `P` є простим, то число Мерсенна може бути простим числом Мерсенна. (Якщо `P` не є простим, число Мерсенна також не є простим.)

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer test</a>.

Існують дуже ефективні алгоритми визначення, чи число ділиться на <code>2<sup>P</sup>-1</code> (або відповідно, якщо <code>2<sup>P</sup> мод (число) = 1</code>).

Деякі мови вже мають вбудовані реалізації цієї операції експонента і моду (так званої modPow або подібні).

Нижче зрозуміло, як реалізувати цей modPow самостійно:

Наприклад, обчислимо <code>2<sup>23</sup> мод 47</code>.

Перетворимо експонент 23 у двійковий, ви отримаєте 10111. Починаючи з <code><tt>квадрат</tt> = 1</code>, повторно піднести до квадрату.

Видаліть верхній біт степеня, і якщо його 1 помножити на `square` на основу піднесення до степеня (2), потім обчислити <code><tt>квадрат</tt> модуль 47</code>.

Використовуйте результат модуля від останнього кроку як початкове значення `square` в наступному кроці:

<pre>Видалити необов'язковий
квадрат, помножений на 2 мод 47
------------ ------- ---
1*1 = 1 0111 1*2 = 2
2*2 = 4 0 111 без 4
4*4 16 = 1 11 16*2 = 32
32*32 4*32 1024 1 1024*2 = 2048
27*2 = 7291 *2 = 1458 1*2 = 1458
</pre>

Починаючи з <code>2<sup></sup> мод 47 = 1</code>, 47 є фактором <code>2<sup>P</sup>-1</code>.

(Щоб побачити це, відніміть 1 від обох сторін: <code>2<sup>23</sup>-1 = 0 мод 47</code>)

Оскільки ми показали, що 47 це фактор, <code>2<sup>23</sup>-1</code> не є простим.

Подальші властивості Мерсенного числа дозволяють нам ще більше вдосконалити процес.

Будь-який фактор, `q` з <code>2<sup>P</sup>-1</code> повинен бути у вигляді `2kP+1`, `k` це додатне ціле число або нуль. Крім того, `q` має бути `1` або `7 mod 8`.

Finally any potential factor `q` must be <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">prime</a>.

Як і в інших алгоритмах пробного ділення, алгоритм припиняється, коли `2kP+1 > sqrt(N)`. Ці в першу чергу тести працюють лише з цифрами Мерсенна, де `P` - це просте число. Наприклад, <code>M<sub>4</sub>=15</code> не дає ніяких чинників, використовуючи ці технології, але фактори в 3 та 5, жоден з яких не відповідає `2kP+1`.

# --instructions--

Використовуючи вказаний метод, знайти коефіцієнт <code>2<sup>р</sup>-1</code>.

# --hints--

`check_mersenne` має бути функцією.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` має повернути рядок.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)`повинен повертатися рядок `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` повинен повертатися як рядок `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` повинен повертати рядок `M929 = 2^929-1 is composite with factor 13007`.

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

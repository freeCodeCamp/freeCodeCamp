---
title: Fibonacci n-step number sequences
id: 598eef80ba501f1268170e1e
challengeType: 5
forumTopicId: 302267
localeTitle: Число n-ступенчатых чисел Фибоначчи
---

## Description
<section id='description'>
<p> Напишите функцию для генерации последовательности n-шаговых последовательностей Фибоначчи и последовательностей Лукаса. Первым параметром будет n. Второй параметр будет состоять из числа возвращаемых элементов. Третий параметр будет определять, следует ли выводить последовательность Фибоначчи или последовательность Лукаса. Если параметр «f», то верните последовательность Фибоначчи, и если это «l», верните последовательность Лукаса. Последовательности должны быть возвращены как массив. Более подробная информация приведена ниже: </p><p> Эти ряды чисел являются расширением обычной <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="Последовательность Фибоначчи">последовательности Фибоначчи,</a> где: </p> При $ n = 2 $ мы имеем последовательность Фибоначчи; с начальными значениями $ [1, 1] $ и $ F_k ^ 2 = F_ {k-1} ^ 2 + F_ {k-2} ^ 2 $ При $ n = 3 $ мы имеем трибоначчивую последовательность; с начальными значениями $ [1, 1, 2] $ и $ F_k ^ 3 = F_ {k-1} ^ 3 + F_ {k-2} ^ 3 + F_ {k-3} ^ 3 $ При $ n = 4 $, мы имеем последовательность tetranacci; с начальными значениями $ [1, 1, 2, 4] $ и $ F_k ^ 4 = F_ {k-1} ^ 4 + F_ {k-2} ^ 4 + F_ {k-3} ^ 4 + F_ {k -4} ^ 4 $ ... Для общего $ n&gt; 2 $ мы имеем последовательность $ n $ -последовательности Фибоначчи - $ F_k ^ n $; с начальными значениями первых $ n $ значений $ (n-1) $ &#39;th Fibonacci $ n $ -ступенчатой ​​последовательности $ F_k ^ {n-1} $; и $ k $ -ное значение этой $ n $ -ой последовательности является $ F_k ^ n = \ sum_ {i = 1} ^ {(n)} {F_ {ki} ^ {(n)}} $ <p> При малых значениях $ n $ <a href="https://en.wikipedia.org/wiki/Number prefix#Greek_series" title="wp: Префикс номера # Greek_series">греческие числовые префиксы</a> иногда используются для индивидуального обозначения каждой серии. </p><p> {| style = &quot;text-align: left;&quot; border = &quot;4&quot; cellpadding = &quot;2&quot; cellspacing = &quot;2&quot; </p><p> | + Последовательности Фибоначчи $ n $ -ступят </p><p> | - style = &quot;background-color: rgb (255, 204, 255);&quot; </p><p> ! $ n $ !! Название серии !! Значения </p><p> | - </p><p> | 2 || Фибоначчи || 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ... </p><p> | - </p><p> | 3 || Трибоначчи || 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ... </p><p> | - </p><p> | 4 || тетранацци || 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ... </p><p> | - </p><p> | 5 || пентаначчи || 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ... </p><p> | - </p><p> | 6 || гексаначчи || 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ... </p><p> | - </p><p> | 7 || Гептаначи || 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... </p><p> | - </p><p> | 8 || октоначчи || 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... </p><p> | - </p><p> | 9 || nonanacci || 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... </p><p> | - </p><p> | 10 || деканаци || 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... </p><p> |} </p><p> Последовательности союзников могут быть сгенерированы при изменении начальных значений: </p><p> Серия <a href="https://en.wikipedia.org/wiki/Lucas number" title="wp: номер Лукаса">Lucas</a> суммирует два предыдущих значения, такие как ряд фибоначчи для $ n = 2 $, но использует начальные значения $ [2, 1] $. </p><p><!-- Lucas numbers, Lucas number, Lucas series     [added to make searches easier.] --></p>
</section>

## Instructions
<section id='instructions'>
Write a function to generate Fibonacci $n$-step number sequences and Lucas sequences. The first parameter will be $n$. The second parameter will be the number of elements to be returned. The third parameter will specify whether to output the Fibonacci sequence or the Lucas sequence. If the parameter is <code>"f"</code> then return the Fibonacci sequence and if it is <code>"l"</code>, then return the Lucas sequence. The sequences must be returned as an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fib_luc</code> is a function.
    testString: assert(typeof fib_luc === 'function');
  - text: <code>fib_luc(2,10,"f")</code> should return <code>[1,1,2,3,5,8,13,21,34,55]</code>.
    testString: assert.deepEqual(fib_luc(2,10,"f"),ans[0]);
  - text: <code>fib_luc(3,15,"f")</code> should return <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code>.
    testString: assert.deepEqual(fib_luc(3,15,"f"),ans[1]);
  - text: <code>fib_luc(4,15,"f")</code> should return <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code>.
    testString: assert.deepEqual(fib_luc(4,15,"f"),ans[2]);
  - text: <code>fib_luc(2,10,"l")</code> should return <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code>.
    testString: assert.deepEqual(fib_luc(2,10,"l"),ans[3]);
  - text: <code>fib_luc(3,15,"l")</code> should return <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code>.
    testString: assert.deepEqual(fib_luc(3,15,"l"),ans[4]);
  - text: <code>fib_luc(4,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code>.
    testString: assert.deepEqual(fib_luc(4,15,"l"),ans[5]);
  - text: <code>fib_luc(5,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code>.
    testString: assert.deepEqual(fib_luc(5,15,"l"),ans[6]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fib_luc(n, len, w) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const ans = [[1,1,2,3,5,8,13,21,34,55],
[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136],
[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536],
[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76],
[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ],
[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ],
[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function fib_luc(n, len, w) {
    function nacci(a, n, len) {
        while (a.length < len) {
            let sum = 0;
            for (let i = Math.max(0, a.length - n); i < a.length; i++)
                sum += a[i];
            a.push(sum);
        }
        return a;
    }
    if(w=="f"){
        return nacci(nacci([1,1], n, n), n, len);
    }else{
        return nacci(nacci([2,1], n, n), n, len);
    }
}
```

</section>

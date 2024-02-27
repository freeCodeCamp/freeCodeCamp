---
id: 598eef80ba501f1268170e1e
title: Sequências de números de n passos de Fibonacci
challengeType: 1
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

Estas séries numéricas são uma expansão da sequência comum de Fibonacci, onde:

<ol>
  <li>Para $n = 2$, temos a sequência de Fibonacci, com os valores iniciais $[1, 1]$ e $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>Para $n = 3$, temos a sequência de tribonacci, com os valores iniciais $[1, 1, 2]$ e $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>Para $n = 4$, temos a sequência de tetranacci, com os valores iniciais $[1, 1, 2, 4]$ e $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>Para a $n>2$ mais geral, temos a sequência de Fibonacci de $n$ passos - $F_k^n$, com os valores iniciais dos primeiros $n$ valores da $(n-1)$-ésima sequência de Fibonacci da $n$-ésima etapa $F_k^{n-1}$, e o $k$-ésimo valor dessa $n$-ésima sequência sendo $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$</li>
</ol>

Para valores pequenos de $n$, algumas vezes os prefixos numéricos gregos são usados para nomear cada série individualmente.

Sequências de $n$-ésimos passos de Fibonacci:

| $n$ | Nome da série | Valores                                                |
| --- | ------------- | ------------------------------------------------------ |
| 2   | fibonacci     | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | tribonacci    | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | tetranacci    | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | pentanacci    | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | hexanacci     | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | heptanacci    | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | octonacci     | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | nonanacci     | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | decanacci     | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

As sequências aliadas podem ser geradas onde os valores iniciais são alterados: A série de Lucas soma os dois valores anteriores, como a série de fibonacci para $n=2$, mas usa $\[2, 1]$ como seus valores iniciais.

# --instructions--

Escreva uma função para gerar sequências numéricas de $n$ passos de Fibonacci e sequências de Lucas. O primeiro parâmetro será $n$. O segundo parâmetro será o número de elementos a serem retornados. O terceiro parâmetro especificará se será exibida a sequência de Fibonacci ou a sequência de Lucas. Se o parâmetro for `"f"`, retorne a sequência de Fibonacci. Se for `"l"`, retorne a sequência de Lucas. As sequências devem ser retornadas como um array.

# --hints--

`fib_luc` deve ser uma função.

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` deve retornar `[1,1,2,3,5,8,13,21,34,55]`.

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` deve retornar `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]`.

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")` deve retornar `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]`.

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` deve retornar `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]`.

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` deve retornar `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]`.

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` deve retornar `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]`.

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` deve retornar `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]`.

```js
assert.deepEqual(fib_luc(5, 15, 'l'), ans[6]);
```

# --seed--

## --after-user-code--

```js
const ans = [[1,1,2,3,5,8,13,21,34,55],
[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136],
[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536],
[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76],
[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ],
[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ],
[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]];
```

## --seed-contents--

```js
function fib_luc(n, len, w) {

}
```

# --solutions--

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

---
id: 598eef80ba501f1268170e1e
title: Sequenze di numeri di Fibonacci a passi di n
challengeType: 1
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

Queste serie di numeri sono espansioni della sequenza di Fibonacci ordinaria dove:

<ol>
  <li>Per $n = 2$ abbiamo la successione di Fibonacci; con valori iniziali $[1, 1]$ e $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>Per $n = 3 $ abbiamo la successione tribonacci; con valori iniziali $[1, 1, 2]$ e $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>Per $n = 4$ abbiamo la sequenza tetranacci; con valori iniziali $[1, 1, 2, 4]$ e $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>In generale per $n>2$ abbiamo la sequenza di Fibonacci di passo $n$ - $F_k^n$; con i valori iniziali dei primi $n$ valori della sequenza $(n-1)$'ma di Fibonacci di passo $n$ $F_k^{n-1}$; e il $k$-mo valore di questa $n$-ma sequenza è $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$</li>
</ol>

Per valori piccoli di $n$, a volte vengono usati prefissi numerici greci per dare un nome individuale a ogni serie.

Sequenze di Fibonacci di passo $n$:

| $n$ | Nome delle serie | Valori                                                 |
| --- | ---------------- | ------------------------------------------------------ |
| 2   | fibonacci        | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | tribonacci       | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | tetranacci       | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | pentanacci       | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | esanacci         | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | ettanacci        | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | ottonacci        | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | nonanacci        | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | decanacci        | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

Le sequenze alleate possono essere generate dove sono cambiati i valori iniziali: la serie di Lucas somma i due valori precedenti come la serie di Fibonacci per $n=2$ ma usa $\[2, 1]$ come valori iniziali.

# --instructions--

Scrivi una funzione per generare le successioni di Fibonacci di passo $n$ e di Lucas. Il primo parametro sarà $n$. Il secondo parametro sarà il numero di elementi da restituire. Il terzo parametro specificherà se emettere la sequenza Fibonacci o la sequenza Lucas. Se il parametro è `"f"` restituire la successione di Fibonacci e se è `"l"`, restituire la successione di Lucas. Le successioni devono essere restituite come array.

# --hints--

`fib_luc` dovrebbe essere una funzione.

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` dovrebbe restituire `[1,1,2,3,5,8,13,21,34,55]`.

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` dovrebbe restituire `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]`.

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")` dovrebbe restituire `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]`.

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` dovrebbe restituire `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]`.

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` dovrebbe restituire `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]`.

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` dovrebbe restituire `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]`.

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` dovrebbe restituire `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]`.

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

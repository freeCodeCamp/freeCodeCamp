---
id: 598eef80ba501f1268170e1e
title: Fibonacci n-Schrittnummer Folgen
challengeType: 1
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

These number series are an expansion of the ordinary Fibonacci sequence where:

<ol>
  <li>For $n = 2$ we have the Fibonacci sequence; with initial values $[1, 1]$ and $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>Für $n = 3$ haben wir die Tribonacci-Folge; mit Anfangswerten $[1, 1, 2]$ und $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>Für $n = 4$ haben wir die Tetranacci-Folge; mit Anfangswerten $[1, 1, 2, 4]$ und $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>Für allgemeines $n>2$ haben wir die Fibonacci $n$-Schrittfolge - $F_k^n$; mit Anfangswerten der ersten $n$-Werte der $(n-1)$-ten Fibonacci $n$-Schrittfolge $F_k^{n-1}$; und $k$-ter Wert dieser $n$-ten Folge ist $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}$</li>
</ol>

Für kleine Werte von $n$ werden manchmal griechische numerische Präfixe verwendet, um jede Serie einzeln zu benennen.

Fibonacci $n$-Schrittfolgen:

| $n$ | Name der Serie | Werte                                                  |
| --- | -------------- | ------------------------------------------------------ |
| 2   | fibonacci      | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | tribonacci     | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | tetranacci     | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | pentanacci     | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | hexanacci      | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | heptanacci     | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | octonacci      | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | nonanacci      | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | decanacci      | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

Es lassen sich verwandte Reihen erzeugen, bei denen die Anfangswerte geändert werden: Die Lucas-Reihe summiert die beiden vorhergehenden Werte wie die Fibonacci-Reihe für $n=2$, verwendet aber $\[2, 1]$ als Anfangswerte.

# --instructions--

Schreibe eine Funktion zur Erzeugung von Fibonacci-$n$-Schrittzahlen-Folgen und Lucas-Folgen. Der erste Parameter ist $n$. Der zweite Parameter ist die Anzahl der Elemente, die zurückgegeben werden sollen. Der dritte Parameter gibt an, ob die Fibonacci-Folge oder die Lucas-Folge ausgegeben werden soll. Wenn der Parameter `"f"` ist dann wird die Fibonacci-Folge zurückgegeben, und wenn sie `"l"` ist, dann wird die Lucas-Folge zurückgegeben. Die Sequenzen müssen als Anordnung zurückgegeben werden.

# --hints--

`fib_luc` sollte eine Funktion sein.

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` sollte `[1,1,2,3,5,8,13,21,34,55]` zurückgeben.

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` sollte `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]` zurückgeben.

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")` sollte `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]` zurückgeben.

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` sollte `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]` zurückgeben.

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` sollte `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]` zurückgeben.

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` sollte `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]` zurückgeben.

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` sollte `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]` zurückgeben.

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

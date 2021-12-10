---
id: 5992e222d397f00d21122931
title: Слово Фібоначчі
challengeType: 5
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

Слово Фібоначчі можна створити аналогічно послідовності Фібоначчі [як описано тут](https://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf):

<pre>Визначте  F_Слово<sub>1</sub>  як  <strong>1</strong>
Визначте  F_Слово<sub>2</sub>  як  <strong>0</strong>
Форма   F_Слова<sub>3</sub>  як  F_Слова<sub>2</sub>   об'єднана з   F_Словом<sub>1</sub>   тобто:  <strong>01</strong>
Форма   F_Слова<sub>n</sub>  as  F_Слово<sub>n-1</sub>  об'єднана з  F_Словом<sub>n-2</sub>
</pre>

# --instructions--

Напишіть функцію для повернення слів Фібоначчі до `n`. `n` буде надано як параметр функції. Функція має повернути масив об'єктів. Об’єкти мають мати такий вигляд: `{ N: 1, Length: 1, Entropy: 0, Word: '1' }`.

# --hints--

`fibWord` має бути функцією.

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` має повернути масив.

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` має повернути `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.9182958340544896, Word:"010" },{ N:5, Length:5, Entropy:0.9709505944546688, Word:"01001" }]`.

```js
assert.deepEqual(fibWord(5), ans);
```

# --seed--

## --after-user-code--

```js
let ans=[ { N: 1, Length: 1, Entropy: 0, Word: '1' },

  { N: 2, Length: 1, Entropy: 0, Word: '0' },

  { N: 3, Length: 2, Entropy: 1, Word: '01' },

  { N: 4, Length: 3, Entropy: 0.9182958340544896, Word: '010' },

  { N: 5, Length: 5, Entropy: 0.9709505944546688, Word: '01001' }];
```

## --seed-contents--

```js
function fibWord(n) {

}
```

# --solutions--

```js
function fibWord(n) {
    function entropy(s) {
         //create an object containing each individual char
      //and the amount of iterations per char
        function prob(s) {
            var h = Object.create(null);
            s.split('').forEach(function(c) {
               h[c] && h[c]++ || (h[c] = 1);
            });
            return h;
        }

        s = s.toString(); //just in case
        var e = 0, l = s.length, h = prob(s);

        for (var i in h ) {
            var p = h[i]/l;
            e -= p * Math.log(p) / Math.log(2);
        }
        return e;
    }
    var wOne = "1", wTwo = "0", wNth = [wOne, wTwo], w = "", o = [];

    for (var i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            w = wNth[i];
        } else {
            w = wNth[i - 1] + wNth[i - 2];
            wNth.push(w);
        }
        var l = w.length;
        var e = entropy(w);

        if (l <= 21) {
            o.push({
                N: i + 1,
                Length: l,
                Entropy: e,
                Word: w
            });
        } else {
            o.push({
                N: i + 1,
                Length: l,
                Entropy: e,
                Word: "..."
            });
        }
    }
  return o;
}
```

---
id: 5992e222d397f00d21122931
title: Parola di Fibonacci
challengeType: 5
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

La Parola di Fibonacci può essere creata in una maniera analoga alla Sequenza di Fibonacci [come descritto qui](https://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf):

<pre>Definisci  F_Word<sub>1</sub>  come  <strong>1</strong>
Definisci  F_Word<sub>2</sub>  come  <strong>0</strong>
Definisci   F_Word<sub>3</sub>  come  F_Word<sub>2</sub>   concatenato con  F_Word<sub>1</sub>   i.e.:  <strong>01</strong>
Forma   F_Word<sub>n</sub>  come  F_Word<sub>n-1</sub>  concatento con with  F_word<sub>n-2</sub>
</pre>

# --instructions--

Scrivi una funzione che restituisci le Parole di Fibonacci fino a `n`. `n` verrà fornito come parametro per la funzione. La funzione dovrebbe restituire un array di oggetti. Gli oggetti dovrebberi essere della forma: `{ N: 1, Length: 1, Entropy: 0, Word: '1' }`.

# --hints--

`fibWord` dovrebbe essere una funzione.

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` dovrebbe restituire un array.

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` dovrebbe restituire `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.9182958340544896, Word:"010" },{ N:5, Length:5, Entropy:0.9709505944546688, Word:"01001" }]`.

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

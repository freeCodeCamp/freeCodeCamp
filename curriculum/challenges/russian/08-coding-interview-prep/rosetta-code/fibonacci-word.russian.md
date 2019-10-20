---
title: Fibonacci word
id: 5992e222d397f00d21122931
challengeType: 5
forumTopicId: 302269
localeTitle: Слово Фибоначчи
---

## Description
<section id='description'>
<p> Напишите функцию для возврата слов Фибоначчи до N. N будет предоставлена ​​в качестве параметра функции. Функция должна возвращать массив объектов. Объекты должны иметь вид: {N: 1, Length: 1, Entropy: 0, Word: &#39;1&#39;}. Более подробная информация приведена ниже: </p><p> Слово Фибоначчи может быть создано способом, аналогичным последовательности Фибоначчи, <a href="http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf" title="ссылка: http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf">как описано здесь</a> : </p><p> Определите F_Word <sub>1</sub> как 1 </p><p> Определить F_Word <sub>2</sub> как 0 </p><p> Форма F_Word <sub>3</sub> как F_Word <sub>2,</sub> объединенная с F_Word <sub>1,</sub> то есть: 01 </p><p> Форма F_Word <sub>n</sub> как F_Word <sub>n-1,</sub> связанная с F_word <sub>n-2</sub> </p>
</section>

## Instructions
<section id='instructions'>
Write a function to return the Fibonacci Words up to <code>n</code>. <code>n</code> will be provided as a parameter to the function. The function should return an array of objects. The objects should be of the form: <code>{ N: 1, Length: 1, Entropy: 0, Word: '1' }</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibWord</code> is a function.
    testString: assert(typeof fibWord === 'function');
  - text: <code>fibWord(5)</code> should return an array.
    testString: assert(Array.isArray(fibWord(5)));
  - text: <code>fibWord(5)</code> should return <code>[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.9182958340544896, Word:"010" },{ N:5, Length:5, Entropy:0.9709505944546688, Word:"01001" }]</code>.
    testString: assert.deepEqual(fibWord(5),ans);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibWord(n) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
let ans=[ { N: 1, Length: 1, Entropy: 0, Word: '1' },

  { N: 2, Length: 1, Entropy: 0, Word: '0' },

  { N: 3, Length: 2, Entropy: 1, Word: '01' },

  { N: 4, Length: 3, Entropy: 0.9182958340544896, Word: '010' },

  { N: 5, Length: 5, Entropy: 0.9709505944546688, Word: '01001' }];

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>

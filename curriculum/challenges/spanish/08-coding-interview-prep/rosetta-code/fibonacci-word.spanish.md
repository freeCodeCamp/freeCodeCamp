---
title: Fibonacci word
id: 5992e222d397f00d21122931
localeTitle: 5992e222d397f00d21122931
challengeType: 5
---

## Description
<section id='description'> 
<p> Escriba una función para devolver las palabras de Fibonacci hasta N. N se proporcionará como un parámetro a la función. La función debe devolver una matriz de objetos. Los objetos deben tener la forma: {N: 1, Longitud: 1, Entropía: 0, Palabra: &#39;1&#39;}. Se dan más detalles a continuación : </p><p> La Palabra de Fibonacci puede crearse de manera análoga a la Secuencia de Fibonacci <a href="http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf" title="enlace: http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf">como se describe aquí</a> : </p><p> Define F_Word <sub>1</sub> como 1 </p> 
<p> Define F_Word <sub>2</sub> como 0 </p> 
<p> Forma F_Word <sub>3</sub> como F_Word <sub>2</sub> concatenada con F_Word <sub>1,</sub> es decir: 01 </p> 
<p> Forma F_Word <sub>n</sub> como F_Word <sub>n-1</sub> concatenada con F_word <sub>n-2</sub> </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibWord</code> es una función.
    testString: 'assert(typeof fibWord === "function", "<code>fibWord</code> is a function.");'
  - text: <code>fibWord(5)</code> debe devolver una matriz.
    testString: 'assert(Array.isArray(fibWord(5)),"<code>fibWord(5)</code> should return an array.");'
  - text: <code>fibWord(5)</code> debe devolver <code>&#39;+JSON.stringify(ans)+&#39;</code> .
    testString: 'assert.deepEqual(fibWord(5),ans,"<code>fibWord(5)</code> should return <code>"+JSON.stringify(ans)+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibWord (n) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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

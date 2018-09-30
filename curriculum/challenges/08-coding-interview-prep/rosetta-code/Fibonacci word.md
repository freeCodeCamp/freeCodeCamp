---
title: Fibonacci word
id: 5992e222d397f00d21122931
challengeType: 5
---

## Description
<section id='description'>
<p>Write a function to return the Fibonacci Words upto N. N will be provided as a parameter to the function. The function should return an array of objects. The objects should be of the form : { N: 1, Length: 1, Entropy: 0, Word: '1' }. More details are given below : </p><p>The  Fibonacci Word  may be created in a manner analogous to the  Fibonacci Sequence   <a href="http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf" title="link: http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf">as described here</a>:</p><p>Define  F_Word<sub>1</sub>  as  1</p>
<p>Define  F_Word<sub>2</sub>  as  0</p>
<p>Form   F_Word<sub>3</sub>  as  F_Word<sub>2</sub>   concatenated with  F_Word<sub>1</sub>   i.e.:  01</p>
<p>Form   F_Word<sub>n</sub>  as  F_Word<sub>n-1</sub>  concatenated with  F_word<sub>n-2</sub></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>fibWord</code> is a function.
  testString: 'assert(typeof fibWord === "function", "<code>fibWord</code> is a function.");'
- text: <code>fibWord(5)</code> should return an array.
  testString: 'assert(Array.isArray(fibWord(5)),"<code>fibWord(5)</code> should return an array.");'
- text: <code>fibWord(5)</code> should return <code>'+JSON.stringify(ans)+'</code>.
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
            s.split(").forEach(function(c) {
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

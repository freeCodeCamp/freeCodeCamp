---
id: 5992e222d397f00d21122931
title: 斐波那契字
challengeType: 5
videoUrl: ''
dashedName: fibonacci-word
---

# --description--

<p>编写一个函数将Fibonacci字返回到N.N将作为参数提供给函数。该函数应返回一个对象数组。对象的形式应为：{N：1，长度：1，熵：0，单词：'1'}。更多细节如下： </p><p> Fibonacci Word可以类似于Fibonacci Sequence的方式创建， <a href='http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf' title='链接：http：//hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf'>如下所述</a> ： </p><p>将F_Word <sub>1</sub>定义为1 </p><p>将F_Word <sub>2</sub>定义为0 </p><p>将F_Word <sub>3表示</sub>为F_Word <sub>2</sub>与F_Word <sub>1</sub>连接，即：01 </p><p>将F_Word <sub>n表示</sub>为F_Word <sub>n-1</sub>与F_word <sub>n-2连接</sub> </p>

# --hints--

`fibWord`是一个功能。

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)`应该返回一个数组。

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)`应该返回`'+JSON.stringify(ans)+'` 。

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

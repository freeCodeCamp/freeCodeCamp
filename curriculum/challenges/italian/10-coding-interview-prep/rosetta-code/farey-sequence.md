---
id: 59c3ec9f15068017c96eb8a3
title: Sequenza di Farey
challengeType: 1
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

La sequenza Farey <code>F<sub>n</sub></code> di ordine `n` è la sequenza di frazioni completamente ridotte tra `0` e `1` che, ai minimi termini, hanno denominatori minori o uguali a `n`, disposti in ordine di dimensioni crescenti.

La *sequenza Farey* è a volte erroneamente chiamata una *serie di Farey*.

Ogni sequenza di Farey:

<ul>
  <li>inizia con il valore 0, indicato dalla frazione $ \frac{0}{1}$</li>
  <li>termina con il valore 1, indicato dalla frazione $ \frac{1}{1}$.</li>
</ul>

Le sequenze Farey di ordine da `1` a `5` sono:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

Scrivi una funzione che restituisce la sequenza Farey di ordine `n`. La funzione dovrebbe avere un parametro `n`. Dovrebbe restituire la sequenza come un array.

# --hints--

`farey` dovrebbe essere una funzione.

```js
assert(typeof farey === 'function');
```

`farey(3)` dovrebbe restituire un array

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` dovrebbe restituire `["1/3","1/2","2/3"]`

```js
assert.deepEqual(farey(3), ['1/3', '1/2', '2/3']);
```

`farey(4)` dovrebbe restituire `["1/4","1/3","1/2","2/4","2/3","3/4"]`

```js
assert.deepEqual(farey(4), ['1/4', '1/3', '1/2', '2/4', '2/3', '3/4']);
```

`farey(5)` dovrebbe restituire `["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]`

```js
assert.deepEqual(farey(5), [
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '2/4',
  '3/5',
  '2/3',
  '3/4',
  '4/5'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n){
    let farSeq=[];
    for(let den = 1; den <= n; den++){
        for(let num = 1; num < den; num++){
            farSeq.push({
                str:num+"/"+den,
                val:num/den});
        }
    }
    farSeq.sort(function(a,b){
        return a.val-b.val;
    });
    farSeq=farSeq.map(function(a){
        return a.str;
    });
    return farSeq;
}
```

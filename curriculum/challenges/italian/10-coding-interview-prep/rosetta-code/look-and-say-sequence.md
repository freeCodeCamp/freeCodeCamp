---
id: 5e6dd14797f5ce267c2f19d0
title: Successione Look-and-say
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

La successione Look-and-say è una sequenza di numeri definita ricorsivamente.

Definizione della successione

<ul><li>Prendi un numero decimale</li>
<li><span>Guarda</span> (look) il numero, raggruppando visivamente le successioni consecutive della stessa cifra.</li>
<li><span>Leggi</span> (say) il numero, da sinistra a destra, gruppo per gruppo; quante ripetizioni di quella cifra ci sono - seguita dalla cifra raggruppata.</li></ul><span> Questo diventa il numero successivo della successione.</span>

Un esempio:

<ul><li>A partire dal numero 1, hai <span>un</span> 1 che produce 11</li>
<li>A partire da 11, hai <span>due</span> 1. Cioè: 21</li>
<li>A partire da 21, hai <span>un</span> 2, poi <span>un</span> 1. Cioè: (12)(11) che diventa 1211</li>
<li>A partire da 1211, hai <span>un</span> 1, <span>un</span> 2, poi <span>due</span> 1. Cioè: (11)(12)(21) che diventa 111221</li></ul>

# --instructions--

Scrivi una funzione che accetta una stringa come parametro, la elabora e restituisce la stringa risultante.

# --hints--

`lookAndSay` dovrebbe essere una funzione.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` dovrebbe restituire una stringa.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` dovrebbe restituire `"11"`.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` dovrebbe restituire `"21"`.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` dovrebbe restituire `"1211"`.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` dovrebbe restituire `"111221"`.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` dovrebbe restituire `"13151412"`.

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```

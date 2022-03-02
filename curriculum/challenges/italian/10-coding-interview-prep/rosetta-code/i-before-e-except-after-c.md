---
id: 5a23c84252665b21eecc7eb0
title: I prima di E eccetto dopo C
challengeType: 5
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

["I before E, except after C"](https://en.wikipedia.org/wiki/I before E except after C) è una frase mnemonica che dovrebbe aiutare con la scrittura delle parole inglesi.

Utilizzando le parole fornite, verificare se le due sotto-clausole della frase sono plausibili singolarmente:

<ol>
  <li>
    <i>"I before E when not preceded by C".</i>
  </li>
  <li>
    <i>"E before I when preceded by C".</i>
  </li>
</ol>

Se entrambe le sotto-frasi sono plausibili allora la frase originale è plausibile.

# --instructions--

Scrivi una funzione che accetta una parola e controlla se essa segue questa regola. La funzione dovrebbe rispondere true se la parole segue la regola altrimenti dovrebbe rispondere false.

# --hints--

`IBeforeExceptC` dovrebbe essere una funzione.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` dovrebbe restituire un booleano.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` dovrebbe restituire `true`.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` dovrebbe restituire `false`.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` dovrebbe restituire `true`.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` dovrebbe restituire `true`.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` dovrebbe restituire `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` dovrebbe restituire `false`.

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```

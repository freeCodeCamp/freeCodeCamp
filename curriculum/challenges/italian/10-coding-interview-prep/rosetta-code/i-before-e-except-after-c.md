---
id: 5a23c84252665b21eecc7eb0
title: I prima di E eccetto dopo C
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">"I prima di E, tranne dopo C"</a>** è una regola generale per l'ortografia della lingua inglese. Se non si è sicuri se una parola si scrive con `ei` o con `ie`, la regoletta suggerisce che l'ordine corretto è `ie` a meno che la lettera precedente sia una `c`, in tal caso potrebbe essere `ei`.

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

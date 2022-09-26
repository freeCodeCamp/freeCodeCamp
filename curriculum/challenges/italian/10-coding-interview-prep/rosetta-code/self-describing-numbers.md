---
id: 5eaf48389ee512d4d103684b
title: Numeri autodescrittivi
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

Ci sono svariati numeri che sono "auto-descriventi".

Si dice che un intero è "auto-descritto" se ha la proprietà che, quando le posizioni di cifra sono etichettate da 0 a N-1, la cifra in ogni posizione è uguale al numero di volte che la cifra appare nel numero.

Ad esempio, **2020** è un numero auto-descrittivo a quattro cifre:

<ul>
    <li> la posizione 0 ha il valore 2 e nel numero ci sono due zeri; </li>
    <li> la posizione 1 ha valore 0 e non ci sono uno nel numero; </li>
    <li> la posizione 2 ha valore 2 e ci sono due due; </li>
    <li> la posizione 3 ha valore 0 e ci sono zero tre; </li>
</ul>

Numeri auto-descriventi &lt; 100.000.000 sono: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Scrivi una funzione che richiede un intero positivo come parametro. Se è auto-descrittivo restituire vero. Altrimenti, restituisci falso.

# --hints--

`isSelfDescribing` dovrebbe essere una funzione.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` dovrebbe restituire un booleano.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` dovrebbe restituire `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` dovrebbe restituire `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` dovrebbe restituire `true`.

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }

    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```

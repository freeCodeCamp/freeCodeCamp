---
id: 587d7b85367417b2b2512b3a
title: Scovare argomenti passati nell'ordine sbagliato quando si chiama una funzione
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Continuando la discussione sulle chiamate di funzioni, il prossimo bug a cui fare attenzione è quando gli argomenti di una funzione vengono forniti in ordine errato. Se gli argomenti sono di tipo diverso, come una funzione che si aspetta un array e un numero intero, probabilmente verrà generato un errore di runtime. Se gli argomenti sono dello stesso tipo (tutti interi, ad esempio), allora la logica del codice non avrà senso. Assicurati di fornire tutti gli argomenti richiesti nell'ordine giusto per evitare questi problemi.

# --instructions--

La funzione `raiseToPower` eleva una base ad un esponente. Purtroppo, non è chiamata correttamente - correggi il codice in modo che il valore di `power` sia 8 come previsto.

# --hints--

Il tuo codice dovrebbe correggere la variabile `power` in modo che sia uguale a 2 elevato alla terza potenza, non 3 elevato alla seconda potenza.

```js
assert(power == 8);
```

Il tuo codice dovrebbe utilizzare l'ordine corretto degli argomenti per la chiamata della funzione `raiseToPower`.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

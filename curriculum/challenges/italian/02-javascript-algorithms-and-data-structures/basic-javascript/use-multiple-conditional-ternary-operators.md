---
id: 587d7b7e367417b2b2512b21
title: Usare operatori condizionali multipli (ternari)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

Nella sfida precedente, hai usato un singolo operatore condizionale. Puoi anche concatenarli insieme per verificare la presenza di più condizioni.

La seguente funzione utilizza le istruzioni `if`, `else if`e `else` per verificare più condizioni:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

La funzione di cui sopra può essere riscritta utilizzando più operatori condizionali:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

È ritenuta una buona pratica formattare più operatori condizionali in modo tale che ogni condizione si trovi su una linea separata, come mostrato sopra. Utilizzare più operatori condizionali senza indentazione corretta può rendere il codice difficile da leggere. Ad esempio:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

Nella funzione `checkSign` utilizza più operatori condizionali - seguendo il formato raccomandato utilizzato in `findGreaterOrEqual` - per verificare se un numero è positivo, negativo o zero. La funzione dovrebbe restituire `positive`, `negative` o `zero`.

# --hints--

`checkSign` dovrebbe utilizzare più operatori condizionali

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` dovrebbe restituire la stringa `positive`. Nota che la capitalizzazione conta

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` dovrebbe restituire la stringa `negative`. Nota che la capitalizzazione conta

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` dovrebbe restituire la stringa `zero`. Nota che la capitalizzazione conta

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```

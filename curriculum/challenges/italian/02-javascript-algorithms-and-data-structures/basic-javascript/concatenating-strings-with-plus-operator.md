---
id: 56533eb9ac21ba0edf2244b7
title: Concatenare le stringhe con l'operatore +
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

In JavaScript, quando l'operatore `+` viene usato con un valore di tipo `String`, questo prende il nome di operatore di <dfn>concatenazione</dfn>. Puoi costruire una nuova stringa da altre stringhe <dfn>concatenandole</dfn> insieme.

**Esempio**

```js
'My name is Alan,' + ' I concatenate.'
```

**Nota:** Attenzione agli spazi. La concatenazione non aggiunge spazi tra le stringhe concatenate, quindi dovrai aggiungerli tu stesso.

Esempio:

```js
const ourStr = "I come first. " + "I come second.";
```

La stringa `I come first. I come second.` sarà mostrata nella console.
# --instructions--

Costruisci `myStr` dalle stringhe `This is the start.` e `This is the end.` usando l'operatore `+`. Assicurati di includere uno spazio tra le due stringhe.

# --hints--

`myStr` dovrebbe avere un singolo spazio tra le due stringhe.

```js
assert(/start\. This/.test(myStr));
```

Il valore di `myStr` dovrebbe essere la stringa `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

Dovresti usare l'operatore `+` per costruire `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` dovrebbe essere creato usando la parola chiave `const`.

```js
assert(/const\s+myStr/.test(code));
```

Dovresti assegnare il risultato alla variabile `myStr`.

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```

---
id: aaa48de84e1ecc7c742e1124
title: Crea un verificatore di palindromi
challengeType: 5
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

Restituisci `true` se la stringa data è un palindromo. Altrimenti, restituisci `false`.

Un <dfn>palindromo</dfn> è una parola o una frase che è scritta allo stesso modo sia in avanti che all'indietro, ignorando punteggiatura, maiuscole e minuscole e spaziatura.

**Nota:** Dovrai rimuovere **tutti i caratteri non alfanumerici** (punteggiatura, spazi e simboli) e trasformare tutto in maiuscolo o in minuscolo per verificare la presenza di palindromi.

Passeremo stringhe con diversi formati, come `racecar`, `RaceCar` e `race CAR` tra le altre.

Passeremo anche stringhe con simboli speciali, come `2A3*3a2`, `2A3 3a2` e `2_A3*3#A2`.

# --hints--

`palindrome("eye")` dovrebbe restituire un valore booleano.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` dovrebbe restituire `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` dovrebbe restituire `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` dovrebbe restituire `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` dovrebbe restituire `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` dovrebbe restituire `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` dovrebbe restituire `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` dovrebbe restituire `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` dovrebbe restituire `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` dovrebbe restituire `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` dovrebbe restituire `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` dovrebbe restituire `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` dovrebbe restituire `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```

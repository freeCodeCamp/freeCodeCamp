---
id: aaa48de84e1ecc7c742e1124
title: Verificador de palíndromo
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

Retorne `true` se a string fornecida for um palíndromo. Caso contrário, retorne `false`.

Um <dfn>palíndromo</dfn> é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa, ignorando pontuação, capitalização e espaçamento.

**Observação:** você precisará remover **todos os caracteres não alfanuméricos** (pontuação, espaços e símbolos) e transforme tudo na mesma capitalização (letra em minúsculo ou maiúsculo) para verificar se determinada palavra ou frase é um palíndromo.

Vamos passar strings em diferentes formatos, como `racecar`, `RaceCarar` e `race CAR` entre outros.

Nós também passaremos strings com símbolos especiais, como `2A3*3a2`, `2A3 3a2` e `2_A3*3#A2`.

# --hints--

`palindrome("eye")` deve retornar um booleano.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` deve retornar `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` deve retornar `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` deve retornar `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` deve retornar `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` deve retornar `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` deve retornar `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` deve retornar `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` deve retornar `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` deve retornar `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` deve retornar `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` deve retornar `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` deve retornar `false`.

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

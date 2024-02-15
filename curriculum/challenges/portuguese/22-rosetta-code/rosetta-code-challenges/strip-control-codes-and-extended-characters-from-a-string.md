---
id: 5a23c84252665b21eecc8036
title: Remover códigos de controle e caracteres estendidos a partir de uma string
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

A tarefa é remover códigos de controle e caracteres estendidos de uma string. A solução deve demonstrar como alcançar cada um dos seguintes resultados: uma string com códigos de controle e caracteres estendidos removidos. Em ASCII, os códigos de controle têm códigos decimais 0 até 31 e 127. Em um sistema baseado em ASCII, se os códigos de controle forem removidos, a string resultante teria todos os seus caracteres dentro do intervalo de 32 a 126 decimal na tabela ASCII. Em um sistema não ASCII, consideramos que caracteres que não têm um glifo correspondente na tabela ASCII (dentro do intervalo ASCII de 32 a 126 decimal) são um caráter alargado para efeitos desta tarefa.

# --hints--

`strip` deve ser uma função.

```js
assert(typeof strip == 'function');
```

`strip("abc")` deve retornar uma string.

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` deve retornar `"abcd"`.

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` deve retornar `" abcdef"`.

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` deve retornar `"abdf"`.

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` deve retornar `"Franais."`.

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` deve retornar `"123abcDEF+-*/"`.

```js
assert.equal(strip('123\tabc\u0007DEF\u007F+-*/€æŧðłþ'), '123abcDEF+-*/');
```

# --seed--

## --seed-contents--

```js
function strip(s) {

}
```

# --solutions--

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```

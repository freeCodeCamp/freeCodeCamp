---
id: aff0395860f5d3034dc0bfc9
title: Validador de número de telefone
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

Retorna `true` se a string fornecida se parece com um número telefônico dos Estados Unidos válido.

O usuário pode preencher o campo do formulário de qualquer maneira que escolher contanto que tenha o formato de um número válido dos EUA. Os seguintes são exemplos de formatos válidos para números nos EUA (consulte os testes abaixo para outras variantes):

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

Para este desafio, você vai receber uma string como `800-692-7753` ou `8oo-six427676;laskdjf`. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país é fornecido, você deve confirmar que o código do país é `1`. Retorne `true` se a seqüência de caracteres for um número válido de telefone dos EUA; caso contrário, retorne `false`.

# --hints--

`telephoneCheck("555-555-5555")` deve retornar um boolean.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` deve retornar `true`.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` deve retornar `true`.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` deve retornar `true`.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` deve retornar `true`.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` deve retornar `true`.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` deve retornar `true`.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` deve retornar `false`.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` deve retornar `false`.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` deve retornar `false`.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` deve retornar `true`.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` deve retornar `true`.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` deve retornar `false`.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` deve retornar `false`.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` deve retornar `false`.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` deve retornar `false`.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` deve retornar `false`.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` deve retornar `false`.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` deve retornar `false`.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` deve retornar `false`.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` deve retornar `false`.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` deve retornar `false`.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` deve retornar `false`.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` deve retornar `false`.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```

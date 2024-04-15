---
id: 5ea28156e79528a9ab248f27
title: Teste de Luhn de números de cartão de crédito
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

O teste de Luhn é usado por algumas empresas de cartões de crédito para distinguir números válidos de cartão de crédito do que poderia ser uma seleção aleatória de dígitos.

Essas empresas que usam números de cartão de crédito que podem ser validados pelo teste de Luhn têm números que passam no teste a seguir:

<ol>
  <li> Inverter a ordem dos dígitos no número.</li>
  <li> Pegar o primeiro, o terceiro, ... e qualquer outro dígito ímpar nos dígitos invertidos e somá-los para formar a soma parcial s1</li>
  <li> Tomando o segundo, o quarto ... e todos os outros dígitos pares nos dígitos invertidos:</li>
    <ol>
      <li>Multiplicar cada algarismo por dois e somar os dígitos se a resposta for maior que nove para formar somas parciais para os dígitos pares.</li>
      <li>Somar as somas parciais dos dígitos pares para formar s2.</li>
    </ol>
  <li>Se s1 + s2 terminar em zero, então o número original está na forma de um número de cartão de crédito válido, conforme verificado pelo teste de Luhn.</li>
</ol>

Por exemplo, se o número avaliado for 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

Escreva uma função que valide um número com o teste de Luhn. Retorne true se for um número válido. Caso contrário, retorne false.

# --hints--

`luhnTest` deve ser uma função.

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` deve retornar um booleano.

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` deve retornar `true`.

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` deve retornar `false`.

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` deve retornar `true`.

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` deve retornar `false`.

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` deve retornar `false`.

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` deve retornar `true`.

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```

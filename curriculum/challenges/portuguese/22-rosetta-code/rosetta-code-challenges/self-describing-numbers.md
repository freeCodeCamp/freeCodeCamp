---
id: 5eaf48389ee512d4d103684b
title: Números autodescritivos
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

Há vários inteiros chamados "autodescritivos" ou "de autodescrição".

Diz-se que um número inteiro é "autodescritivo" quando ele tem uma propriedade que, quando as posições dos dígitos são rotuladas de 0 a N-1, o algarismo em cada posição é igual ao número de vezes em que o algarismo aparece no número.

Por exemplo, **2020** é um número autodescritivo de quatro dígitos:

<ul>
    <li> a posição 0 tem o valor 2 e há dois 0s no número; </li>
    <li> a posição 1 tem valor 0 e o número 1 não é encontrado no número; </li>
    <li> a posição 2 tem o valor 2 e há dois 2s no número; </li>
    <li> a posição 3 tem o valor 0 e o número 3 não é encontrado no número; </li>
</ul>

Os números autodescritivos &lt; 100.000.000 são: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Escreva uma função que receba um número inteiro positivo como parâmetro. Se ele for autodescritivo, retorne true. Caso contrário, retorne false.

# --hints--

`isSelfDescribing` deve ser uma função.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` deve retornar um booleano.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` deve retornar `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` deve retornar `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` deve retornar `true`.

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

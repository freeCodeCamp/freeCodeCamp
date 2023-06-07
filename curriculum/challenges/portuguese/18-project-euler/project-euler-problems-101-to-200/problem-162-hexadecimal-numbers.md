---
id: 5900f40e1000cf542c50ff21
title: 'Problema 162: Números hexadecimais'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

Os números do sistema de números hexadecimais são representados usando 16 algarismos diferentes:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

O número hexadecimal AF quando escrito no sistema de números decimais é igual a $10 \times 16 + 15 = 175$.

Nos números hexadecimais de 3 algarismos 10A, 1A0, A10 e A01, os algarismos 0,1 e A estão todos presentes.

Como números escritos na base dez, escrevemos números hexadecimais sem zeros à frente.

Quantos números hexadecimais, contendo no máximo dezesseis algarismos hexadecimais, existem com os algarismos 0,1 e A presentes pelo menos uma vez?

Dê sua resposta com um número hexadecimal como uma string.

**Observação:** deixe A,B,C,D,E e F em maiúsculas, sem qualquer código anterior ou posterior que marque o número como hexadecimal e sem zeros à direita, por exemplo: 1A3F e não: 1a3f, 0x1a3f, $1A3F, #1A3F ou 0000001A3F.

# --hints--

`hexadecimalNumbers()` deve retornar uma string.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` deve retornar a string `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```

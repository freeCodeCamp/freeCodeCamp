---
id: 5e6dd14797f5ce267c2f19d0
title: Sequência para olhar e dizer
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

A sequência para olhar e dizer é uma sequência de números recursivamente definida.

Definição da sequência

<ul><li>Recebe um número decimal</li>
<li><span>Olha</span> para o número, agrupando visualmente sequências consecutivas do mesmo dígito.</li>
<li><span>Diz</span> o número, da esquerda para a direita, grupo após grupo, descrevendo quantos daquele dígito há na sequência, e, logo após, os dígitos agrupados.</li></ul><span> Esse se torna o próximo número da sequência.</span>

Exemplo:

<ul><li>Começando pelo número 1, você tem <span>um</span> 1, o que gera o número 11</li>
<li>Começando com 11, você tem <span>dois</span> 1s. Ou seja, 21</li>
<li>Começando com 21, você tem <span>um</span> 2 e depois <span>um</span> 1. Ou seja: (12)(11), que depois se torna 1211</li>
<li>Começando com 1211, você tem <span>um</span> 1, <span>um</span> 2 e <span>dois</span> 1s. Ou seja: (11)(12)(21), que depois se torna 111221</li></ul>

# --instructions--

Escreva uma função que aceita uma string como parâmetro, faz seu processamento e retorna a string resultante.

# --hints--

`lookAndSay` deve ser uma função.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` deve retornar uma string.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` deve retornar `"11"`.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` deve retornar `"21"`.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` deve retornar `"1211"`.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` deve retornar `"111221"`.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` deve retornar `"13151412"`.

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```

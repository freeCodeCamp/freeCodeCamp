---
id: 5a23c84252665b21eecc7e80
title: Código de Gray
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

O Código de Gray é uma forma de codificação binária, onde as transições entre números consecutivos diferem apenas em um bit.

Esta é uma codificação útil para reduzir riscos de dados de hardware com valores que se alteram rapidamente e/ou estejam associados ao hardware mais lento como entradas.

Ele também é útil para gerar entradas para os mapas de Karnaugh, em ordem, da esquerda para a direita e de cima para baixo.

# --instructions--

Crie uma função para codificar um número e decodifique um número a partir do código de Gray. A função deve receber dois parâmetros.

O primeiro deve ser um booleano. A função deve codificar para true e decodificar para false. O segundo parâmetro seria o número a ser codificado/decodificado.

Exibir as representações binárias normais, as representações do código de Gray e valores do código de Gray decodificados para todos os números binários de 5 bits (0-31 inclusive, mas os 0s iniciais não são necessários).

Existem muitos códigos de Gray possíveis. A seguir, temos um que codifica o que é chamado de "código de Gray refletido em binário."

Codificação (o MSB - bit mais significativo - é o bit 0, b é binário e g é o código de Gray):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Ou:

<pre>g = b xor (b deslocado logicamente para a direita 1 vez)
</pre>

Decodificação (o MSB - bit mais significativo - é o bit 0, b é binário e g é o código de Gray):

<pre>b[0] = g[0]<br>
para outros bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` deve ser uma função.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` deve retornar um número.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` deve retornar `233`.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` deve retornar `381`.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` deve retornar `725`.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` deve retornar `177`.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` deve retornar `425`.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` deve retornar `870`.

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```

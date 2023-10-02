---
id: bad87fee1348bd9aede08718
title: Usar valores RGB para colorir elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Outra maneira de representar cores em CSS é usando valores `RGB`.

O valor `RGB` para cor preta é assim:

```css
rgb(0, 0, 0)
```

O valor `RGB` para cor branca é assim:

```css
rgb(255, 255, 255)
```

Em vez de usar seis dígitos hexadecimais como você usa com código hexadecimal com `RGB`, você especifica o brilho de cada cor com um número entre 0 e 255.

Se fizer as contas, os dois dígitos para uma cor são iguais a 16 vezes 16, o que nos dá um total de 256 valores. Então, `RGB`, que começa a contar de zero, tem exatamente o mesmo número de valores possíveis que o código hexadecimal.

Aqui está um exemplo de como você alteraria o fundo da `body` para laranja usando código RGB.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Vamos substituir o código hexadecimal na cor de fundo do elemento `body` pelo valor RGB de preto: `rgb(0, 0, 0)`

# --hints--

O elemento `body` deve ter um fundo preto.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Você deve usar `rgb` para dar ao elemento `body` um fundo preto.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```

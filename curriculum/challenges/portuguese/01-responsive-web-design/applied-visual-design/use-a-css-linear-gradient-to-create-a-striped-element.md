---
id: 587d78a5367417b2b2512ad7
title: Usar um gradiente linear com CSS para criar um elemento listrado
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

A função `repeating-linear-gradient()` é muito semelhante a `linear-gradient()`, com a principal diferença de que repete o padrão de gradiente especificado. `repeating-linear-gradient()` aceita uma variedade de valores, mas, para simplificar, você vai trabalhar com um valor de ângulo e valores de interrupção de cor neste desafio.

O valor do ângulo é a direção do gradiente. As interrupções de cor são como valores de largura que marcam onde ocorre uma transição e são fornecidas com uma porcentagem ou um número de pixels.

No exemplo demonstrado no editor de código, o gradiente começa com a cor amarela (`yellow`) em 0 pixels, que se mistura com a segunda cor (`blue`) a 40 pixels de distância do início. Como a próxima interrupção de cor também está em 40 pixels, o gradiente muda imediatamente para a terceira cor (`green`), que se mistura com o valor da quarta cor (`red`), pois está a 80 pixels de distância desde o início do gradiente.

Para este exemplo, ajuda pensar nas interrupções de cor como pares onde cada duas cores se misturam.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

Se cada dois valores finais de cores forem da mesma cor, a mistura não será perceptível porque está entre a mesma cor, seguida por uma transição brusca para a próxima cor. Assim, ao final, você terá listras.

# --instructions--

Faça listras alterando o `repeating-linear-gradient()` para usar um ângulo de gradiente de `45deg` e, em seguida, defina as duas primeiras interrupções de cor para `yellow` e, finalmente, as duas interrupções de cor posteriores como `black`.

# --hints--

O ângulo do `repeating-linear-gradient()` deve ser de 45 graus.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

O ângulo do `repeating-linear-gradient()` não deve mais ser de 90 graus.

```js
assert(!code.match(/90deg/gi));
```

A interrupção de cor em 0 pixels deve ser `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

A primeira interrupção de cor em 40 pixels deve ser `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

A segunda interrupção de cor em 40 pixels deve ser `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

A última interrupção de cor em 80 pixels deve ser `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

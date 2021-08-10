---
id: 587d7dbe367417b2b2512bb9
title: Usar @for para criar um laço em Sass
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

A diretiva `@for` adiciona estilos em um laço, muito similar ao laço `for` em JavaScript.

`@for` é usado de duas maneiras: "começo ao fim" ou "começo até o fim". A principal diferença é que "começo **até o** fim" *exclui* o número final como parte da contagem, enquanto "começo ** ao ** fim" *inclui* o número final como parte da contagem.

Aqui está um exemplo de começo **ao** fim:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

A parte `#{$i}` é a sintaxe para combinar uma variável (`i`) com texto para criar uma string. Quando o arquivo Sass é convertido para CSS, ele se parece com isto:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

Essa é uma maneira poderosa de criar um layout de grade. Agora você tem doze opções para a largura das colunas disponíveis como classes CSS.

# --instructions--

Escreva uma diretiva `@for` que recebe uma variável `$j` que vai de 1 **até** 6.

Isso deve criar 5 classes chamadas `.text-1` até `.text-5` onde cada um tem um `font-size` definido como 15px multiplicado pelo índice.

# --hints--

O código deve usar a diretiva `@for`.

```js
assert(code.match(/@for /g));
```

A classe `.text-1` deve ter um `font-size` de 15px.

```js
assert($('.text-1').css('font-size') == '15px');
```

A classe `.text-2` deve ter um `font-size` de 30px.

```js
assert($('.text-2').css('font-size') == '30px');
```

A classe `.text-3` deve ter um `font-size` de 45px.

```js
assert($('.text-3').css('font-size') == '45px');
```

A classe `.text-4` deve ter um `font-size` de 60px.

```js
assert($('.text-4').css('font-size') == '60px');
```

A classe `.text-5` deve ter um `font-size` de 75px.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

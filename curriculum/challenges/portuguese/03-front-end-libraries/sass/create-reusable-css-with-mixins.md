---
id: 587d7dbd367417b2b2512bb6
title: Criar CSS reutilizável com mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

Em Sass, um <dfn>mixin</dfn> é um grupo de declarações CSS que podem ser reutilizados em toda a folha de estilos.

Os recursos CSS mais recentes levam tempo antes de serem totalmente adotados e prontos para uso em todos os navegadores. Como recursos são adicionados aos navegadores, as regras CSS que os usam podem precisar de prefixos de fornecedores. Considere `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

É preciso muita digitação para reescrever esta regra para todos os elementos que têm uma `box-shadow`, ou para alterar cada valor para testar efeitos diferentes. Mixins são como funções para CSS. Veja como escrever um:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

A definição começa com `@mixin` seguido por um nome personalizado. Os parâmetros (o `$x`, `$y`, `$blur`, e `$c` no exemplo acima) são opcionais. Agora, a qualquer momento que uma regra `box-shadow` é necessária, apenas uma única linha que chama o mixin substitui a necessidade de digitar todos os prefixos do fornecedor. Um mixin é chamado com a diretiva `@include`:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

Escreva um mixin para `border-radius` e dê a ele o parâmetro `$radius`. Deve usar todos os prefixos de fornecedor do exemplo. Em seguida, use o mixin de `border-radius` para dar ao elemento `#awesome` um raio de borda de `15px`.

# --hints--

O código deve declarar um mixin nomeado `border-radius` que tem um parâmetro chamado `$radius`.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

O código deve incluir o prefixo do fornecedor `-webkit-border-radius` que usa o parâmetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

O código deve incluir o prefixo do fornecedor `-moz-border-radius` que usa o parâmetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

O código deve incluir o prefixo do fornecedor `-ms-border-radius` que usa o parâmetro `$radius`.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

O código deve incluir a regra geral `border-radius` que usa o parâmetro `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

O código deve chamar o `border-radius mixin` usando a palavra-chave `@include`, definindo-o como `15px`.

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

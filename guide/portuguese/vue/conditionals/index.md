---
title: Conditional
localeTitle: Condicionail
---
## `v-if`

Em _templates_ estilo Handlebars, poderíamos escrever blocos condicionais como este:

``` html
<!-- Handlebars template -->
{{#if ok}}
  <h1>Sim</h1>
{{/if}}
```

No Vue, usamos a diretiva `v-if` para atingir o mesmo resultado:

``` html
<h1 v-if="ok">Sim</h1>
```

Também é possível adicionar um "bloco senão" usando `v-else`:

``` html
<h1 v-if="ok">Sim</h1>
<h1 v-else>Não</h1>
```

### Grupos Condicionais com `<template>`

Como `v-if` é uma diretiva, deve ser anexado a um único elemento. E se quisermos alternar mais de um elemento? Podemos usar `v-if` em um elemento `<template>`, que serve como um invólucro invisível. O resultado final processado não incluirá o elemento `<template>`.

``` html
<template v-if="ok">
  <h1>Título</h1>
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
</template>
```

### `v-else`

É possível utilizar a diretiva `v-else` para indicar um "bloco _else_" para o `v-if`:

``` html
<div v-if="Math.random() > 0.5">
  Agora você me vê
</div>
<div v-else>
  Agora você não me vê
</div>
```

Um elemento `v-else` deve seguir imediatamente um elemento `v-if` ou `v-else-if`, caso contrário não será reconhecido.

### `v-else-if`

> Na versão 2.1.0+

O `v-else-if`, como o nome sugere, serve como um "bloco _else if_" ao `v-if`. Pode inclusive ser encadeado várias vezes:

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Não é A, B ou C
</div>
```

Similar ao `v-else`, um `v-else-if` deve seguir imediatamente um elemento `v-if` ou um elemento `v-else-if`.

## `v-show`

Outra opção para mostrar condicionalmente um elemento é a diretiva `v-show`. A utilização é basicamente a mesma.

``` html
<h1 v-show="ok">Olá!</h1>
```

A diferença é que um elemento com `v-show` sempre será renderizado e permanecerá no DOM; `v-show` simplesmente alterna a propriedade CSS `display` do elemento.

<p class="tip">Observe que `v-show` não oferece suporte à utilização em elementos `<template>` e também não funciona com `v-else`.</p>

## `v-if` vs. `v-show`

`v-if` é a renderização condicional "real", pois garante que eventos e componentes filhos dentro do bloco condicional sejam devidamente destruídos e recriados durante a alternância.

`v-if` também é **preguiçoso**: se a condição for _false_ na renderização inicial, nada será feito - o bloco condicional não será processado até que a condição se torne _true_ pela primeira vez.

Em comparação, `v-show` é mais simples - o elemento sempre será renderizado independentemente da condição inicial, com alternância baseada em CSS.

De modo geral, `v-if` tem custo maior durante alternâncias de visibilidade, enquanto `v-show` tem custo maior na renderização inicial. Então prefira `v-show` se precisar alternar a visibilidade de algo com muita frequência; e prefira `v-if` se a condição não tem tanta probabilidade de se modificar durante a execução.

## `v-if` com `v-for`

Quando utilizado em conjunto com `v-for`, este possui maior prioridade do que o `v-if`. Veja o guia de <a href="../guide/list.html#v-for-com-v-if">renderização de listas</a> para mais detalhes.

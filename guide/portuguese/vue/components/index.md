---
title: Components
localeTitle: Componentes
---

## Componentes

Um problema comum enfrentado por desenvolvedores web é lidar com a replicação de código HTML, não no sentido de uma lista, por exemplo, mas sim quando quando você quer ser capaz de "importar" para usar o mesmo código em vários lugares diferentes. Bom, Vue.js te dá essa opção através de seus Componentes.

Imagine que você está desenvolvendo uma landing page para o produto de sua empresa, precisando mostrar suas 4 principais características através da mesma estrutura de "card": ícone, título e uma breve descrição.

```javascript
Vue.component('feature-card', {
  props: ["iconSrc", "iconAltText", "featureTitle", "featureDescription"],
  template: `
    <div class="card">
      <div class="icon-wrapper">
        <img
          class="icon"
          :src="iconSrc"
          :alt="iconAltText">
      </div>
      <h4 class="title">
        {{ featureTitle }}
      </h4>
      <p class="description">
        {{ featureDescription }}
      </p>
    </div>
  `
});
```

> Repare que aqui usamos o atributo `src` de imagem com uma sintaxe diferente, `:src`.
Tal mudança não afeta coisa alguma, sendo simplesmente um açucar sintático para `v-bind:src` -- sempre que  você quiser ligar algum atributo a uma variável, você pode fazer com que um `:` preceda o nome do atributo ao invés de usar a forma padrão `v-bind`.


Com esse código, fizemos várias coisas novas:
* criamos um novo componente chamado `feature-card`
* definimos a **estrutura** padrão de `feature-card` com o atributo `template`
* nós abrimos uma lista de propriedades que o componente pode aceitar com a lista `props`


Quando nós definimos o nome dos componentes, sempre que desejarmos reutilizá-los, podemos referenciá-los pelo uso de uma tag. No nosso exemplo, podemos usar a tag `<feature-card>`:


```html
<div id="app">
  <feature-card
    iconSrc="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
    iconAltText="rocket"
    featureTitle="Processing speed"
    featureDescription="Our solution has astonishing benchmarks grades">
  </feature-card>
</div>
```

Neste caso, usamos `<feature-card>` como se fosse uma tag já existente, além de definir `iconSrc` e `featureTitle` como se fossem atributos válidos. Esse é o propósito dos componentes de Vue.js: incrementar sua caixa de ferramentas com suas próprias ferramentas.


### Props

Props são atributos personalizados que podem ser registrados em um componente. Quando um valor é passado para um atributo prop, ele se torna propriedade instanciada naquele componente. Para passar um título para o nosso componente relativo à postagem no blog, podemos incluí-lo na lista de props que esse componente aceita usando uma opção dos props:


```js
Vue.component('feature-card', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
Um componente pode possuir quantos props sejam necessários e, por padrão, qualquer valor pode ser passado para qualquer prop. No template acima, você pode notar que podemos acessar tal valor no componente instanciado, assim como qualquer dado.


Uma vez que um prop é registrado, você pode passar dados para ele como um atributo personalizado, por exemplo:
```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

---
title: Declarative Rendering
localeTitle: Renderização Declarativa
---
## Instalação

Antes de começarmos, há algumas maneiras de usar o Vue.js, ou seja, via CDN e via instalação. Para uma primeira experiência, é mais fácil utilizar o CDN.

Para desenvolvimento, use isto:

```html

<!-- development version, includes helpful console warnings --> 
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
```

Ao pular para a produção, esta:

```html

<!-- production version, optimized for size and speed --> 
 <script src="https://cdn.jsdelivr.net/npm/vue"></script> 
```

Como mencionado anteriormente, você também pode instalar o `vue-cli` , mas isso não é recomendado para iniciantes.

## Renderização Declarativa

O Vue.js é uma ótima ferramenta para criar páginas dinâmicas e uma primeira maneira de entrar em contato com isso é o que chamamos de renderização declarativa.

O uso do termo "declarativo" pretende deixar mais estrito esse conceito para linguagens declarativas, como SQL: você pede algo, não está implícito qualquer implementação. O Vue.js permite declarar quais dados você deseja que seja renderizar, simplesmente como isso:

```html

<div id="app"> 
  {{ message }} 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    message: 'Hello, world!' 
  } 
 }); 
```

Com esses _snipets_ você está dizendo ao Vue para processar dinamicamente o que está armazenado dentro da variável `message`. E o legal: sempre que a propriedade `message` é alterada, o Vue.js consegue recarregar essa parte específica do DOM e você vê o mudança.

Se você quiser experimentar essa reatividade, abra o console e altere o valor de `app.message` para, digamos, `"Hello from console"`. Você notou a mudança na a página?

O `{{ ... }}` é a sintaxe para esse comportamento: mostrar o valor de uma variável ou de uma expressão. O exemplo abaixo também é um uso válido e resultará em `hello` :

```html

<div id="app"> 
  {{ 1 < 2 ? "hello" : "goodbye" }} 
 </div> 
```

Há casos em que o que queremos é definir um atributo usando nossa propriedade do Vue. Você pode pensar que a mesma sintaxe se aplica, mas o Vue tem algo específico para isso, o que chamamos de "vinculo" (_binding_).

```html

<div id="app"> 
  <a v-bind:href="dynamicLink">This link</a> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    dynamicLink: 'medium.freecodecamp.org' 
  } 
 } 
```

A sintaxe `v-bind` é o que o Vue.js chama de "diretiva". É uma maneira de definir um novo atributo para a tag que será manipulada pelo Vue - há mais diretivas, todas elas começam com `v-` .

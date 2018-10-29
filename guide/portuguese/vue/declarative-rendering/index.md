---
title: Declarative Rendering
localeTitle: Renderização Declarativa
---
## Instalação

Antes de começarmos, há algumas maneiras de usar o Vue.js, ou seja, via CDN e via instalação. Para uma primeira experiência, é mais fácil usar o CDN.

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

O Vue.js é uma ótima ferramenta para criar páginas dinâmicas e uma primeira maneira de entrar tocar com isso é o que é chamado de renderização declarativa.

O uso do termo "declarativo" pretende endireitar esse conceito para linguagens declarativas, como SQL: você pede algo, não está implícito qualquer implementação. O Vue.js permite declarar quais dados você deseja processado, simplesmente como isso:

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

Com esses snipets, você está dizendo ao Vue para processar dinamicamente o que está armazenado dentro da variável de `message` . E a diversão: sempre que a `message` é alterada, O Vue.js consegue recarregar essa parte específica do DOM e você vê o mudança.

Se você quiser experimentar essa reatividade, abra o console e altere o valor de `app.message` para, digamos, `"Hello from console"` . Você notou a mudança na a página?

O `{{ ... }}` é a sintaxe desse comportamento: gerar o valor de uma variável ou de uma expressão. Por exemplo, este também é um uso válido e resultará em `hello` :

```html

<div id="app"> 
  {{ 1 < 2 ? "hello" : "goodbye" }} 
 </div> 
```

Há casos em que o que queremos é definir um atributo usando o aplicativo do Vue. variável. Você pode pensar que a mesma sintaxe se aplica, mas o Vue tem algo específico para isso, o que chamamos de "ligação".

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
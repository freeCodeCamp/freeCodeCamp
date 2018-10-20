---
title: Redux
localeTitle: Redux
---
## Redux

O Redux é um contêiner de estado previsível para aplicativos JavaScript.

Ele ajuda você a escrever aplicativos que se comportam de maneira consistente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar. Além disso, proporciona uma ótima experiência de desenvolvedor, como edição de código ao vivo combinada com um depurador de viagem no tempo.

Princípios Básicos do Redux:

1.  Redux é um contêiner do estado, armazena todo o seu estado em um só lugar
2.  O estado é somente leitura, a única maneira de alterar o estado é despachar uma ação.
3.  Estado só pode ser alterado por funções puras ou em outro termo: Redutores. Redux Reducers aceitam o estado anterior e um objeto de ação e retornam o próximo estado.

Em termos práticos, como usamos o Redux exatamente?

### REGRA 1

#### Onde este estado é armazenado? Redux fornece uma função útil chamada

```js
createStore() 
```

Onde você cria a loja que armazenará todo o seu estado.

### REGRA 3 (vou mostrar a regra 3 primeiro, pois fará mais sentido)

#### O estado só pode ser alterado por uma função pura, também conhecida como redutor, para criar essa conexão, passaremos nosso redutor para createStore () assim como

```js
var store = createStore(reducer) 
```

Fica mais complicado quando você tem mais redutores, mas no centro, a loja agora tem um redutor ligado a ela

### REGRA 2

#### Uma vez que temos uma loja que é criada com store = createStore (redutor). A nova loja que criamos tem um método chamado despacho. Lembre-se na regra 2, a única maneira que podemos mudar o estado é despachar uma ação!

Você pode ver onde isso está indo.

```js
store.dispatch(action) 
```

Antes de entrar no que é um redutor e uma ação, acho que mostrar uma implementação muito básica e limitada do createStore () do Redux vai ajudar muito.

```js
createStore = (reducer) => { 
    let state; 
 //dispatch method 
    dispatch = (action) => { 
        state = reducer(state, action) 
    } 
  return {dispatch} 
 } 
```

Veja como passamos em um redutor para createStore e ele se torna definido em nosso método de envio; e quando chamamos o método de despacho, ele recebe uma ação e define um novo estado com base no que o redutor retornará.

## O que é um redutor? O que é uma ação?

Uma ação no nível mais básico é um objeto que possui uma propriedade chamada type. Também pode ter outras propriedades, mas, por simplicidade, só terá tipo.

```js
var someAction = {type:'doSomething'} 
```

Um redutor é apenas uma função:

```js
var reducer = (state, action) => { 
 
    if (action.type === 'doSomething'){ 
        return changedState; 
    } else if ( action.type === 'doSomethingElse'){ 
        return changedState; 
    } else { 
        return state 
    } 
 } 
```

A ação que passamos em um redutor determinará como o estado será alterado dependendo do tipo. O Redux se torna mais complicado, mas se você entender esses princípios, você terá mais facilidade em navegar através dos projetos react-redux!

#### Mais Informações:

##### Você realmente precisa do Redux?

[Dan Abramov](https://github.com/gaearon) , criador do Redux, escreveu há algum tempo um ótimo artigo, [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) . Você deve verificar primeiro porque, bem, você pode não precisar.

Para mais informações, acesse [http://redux.js.org/](http://redux.js.org/)

### Recursos

*   [Um curso de Dan Abramov, autor de Redux.](https://egghead.io/courses/getting-started-with-redux)
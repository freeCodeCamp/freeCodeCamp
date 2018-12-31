---
title: Redux
localeTitle: Redux
---
## Redux

O Redux é um contentor de estados previsível para aplicações JavaScript.

Ajuda no desenvolvimento de aplicações que se comportam de forma consistente e operam em ambientes diferentes(cliente, servidor e nativo), e bastante fáceis de testar. Além disso proporciona uma experiência de desenvolvimento rica, com a possibilidade de edição de código ao vivo, combinada com um depurador com possibilidade de viagem no tempo.

Princípios Básicos do Redux:

1.  Redux é um contentor de estados, armazena todo a informação num só lugar.
2.  O estado é somente leitura, a única forma de ser alterado é através de uma ação que foi desencadeada.
3.  O estado somente pode ser alterado por funções puras, ou por outras palavras: Redutores. Redutores Redux recebem o estado anterior e um objeto que contém uma ação e retornam o próximo estado.

Em termos práticos, como é usado o Redux?

### REGRA 1

#### Onde é que o estado é armazenado? O Redux fornece uma função útil chamada

```javascript
createStore() 
```

Onde você cria a loja que armazenará todo o estado da aplicação.

### REGRA 3 (vou mostrar a regra 3 primeiro, pois fará mais sentido)
#### O estado somente pode ser alterado por uma função pura, também conhecida como redutor, logo para criar essa conexão, passaremos o nosso redutor para createStore() da seguinte forma

```javascript
var store = createStore(reducer) 
```

Torna-se mais complicado quando existem mais redutores envolvidos, mas agora, a loja já contém um redutor.

### REGRA 2

#### Assim que existir uma loja criada da seguinte forma store = createStore(redutor). Esta nova loja tem um método chamado dispatch. Relembrando a regra 2, a única maneira que podemos alterar o estado é despachar uma ação!

Você pode ver agora para onde isto está indo.

```javascript
store.dispatch(action) 
```

Antes de se explicar o que é um redutor e uma ação, acho que ao mostrar uma implementação muito básica e limitada do `createStore()` Redux, vai ajudar em muito.

```javascript
createStore = (reducer) => { 
    let state; 
    //método dispatch
    dispatch = (action) => { 
        state = reducer(state, action) 
    } 
  return {dispatch} 
 } 
```

Observem agora, como o redutor foi passado para `createStore` e definido no método `dispatch` e quando invocado, recebe uma ação e define um novo estado com base no que o redutor irá retornar.

## O que é um redutor? O que é uma ação?

Uma ação basicamente é um objeto que possui uma propriedade chamada type.  Pode ter também outras propriedades, mas para simplicidade, somente terá o type.

```javascript
var someAction = {type:'fazAlgo'} 
```

Um redutor é somente uma função:

```javascript
var reducer = (state, action) => { 
 
    if (action.type === 'fazAlgo'){ 
        return changedState; 
    } else if ( action.type === 'fazOutraCoisa'){ 
        return changedState; 
    } else { 
        return state 
    } 
 } 
```

A ação enviada para o redutor irá determinar como o estado irá ser alterado dependendo do tipo. O Redux torna-se cada vez mais complicado, mas se forem entendidos estes princípios, então você terá mais facilidade em navegar através de projetos react-redux!

#### Mais Informações:

##### Você realmente precisa do Redux?
[Dan Abramov](https://github.com/gaearon) , criador do Redux, escreveu há algum tempo um ótimo artigo, [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) . Você deve verificar primeiro porque, bem, você pode nem precisar.

Para mais informações [http://redux.js.org/](http://redux.js.org/)

### Recursos

*   [Um curso de Dan Abramov, autor de Redux.](https://egghead.io/courses/getting-started-with-redux)
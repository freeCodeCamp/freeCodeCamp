---
title: Redux Middleware
localeTitle: Middleware Redux
---

## Introdução

Neste guia irão ser apresentados alguns conceitos básicos de Middleware em Redux.

Se já possuir experiência com [node.js] e bibliotecas orientadas para servidor, tais como [Express] ou [Koa], deverá já estar familiarizado com o conceito.

Em qualquer uma das bibliotecas mencionadas, o middleware não é nada mais nada menos que um bloco de código que reside entre os pedidos vindos do cliente, a biblioteca e a resposta enviada de volta.

Algumas das bibliotecas de middleware mais usadas tanto pelo [Express] ou [Koa] são por exemplo:

* [Helmet] - Aplica um nível de segurança básico ás aplicações.
* [Winston] - Efetua log de eventos que ocorrem na aplicação.
* [Compression] - Comprime respostas HTTP.

## Redux Middleware

Em Redux, o middleware funciona de forma similar, mas com o foco em situações diferentes.

Aqui o middleware é um bloco de código que interceta cada ação desencadeada, podendo chegar a modificar o seu conteúdo, ou cancelar por completo.

Isto sequer antes de chegar ao redutor.

Uma das bibliotecas mais populares a ser usada com Redux, é nada mais nada menos que a biblioteca [Thunk](https://github.com/reduxjs/redux-thunk).

Informação adicional acerca de thunks e como configurar poderá ser consultada [aqui](https://guide.freecodecamp.org/redux/redux-thunk)

## Exemplo Simples

O bloco de código abaixo simula uma aplicação Redux simples e será usada como exemplo para demonstrar como o middleware poderá ser implementado.

```javascript
 import {createStore} from  "redux";
   
 // redutor
 const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return initialState+1;
    }
     else if (action.type==="DEC"){
        return initialState-1;
    }
    return initialState;
 }
   
 // loja redux
 const store= createStore(reducer,1);
   
 // ações quer irão ser desencadeadas
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 ```

Com base no código á disposição, se fosse necessário implementar um middleware para lidar com o logging na aplicação, serão necessárias algumas alterações ao código.

```javascript
 import {createStore, applyMiddleware} from  "redux";
   
 // redutor
 const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return  initialState+1;
    }
    else if (action.type==="DEC"){
        return  initialState-1;
    }
    return initialState;
 }
   
 // a implementação do middleware 
 const logger=(store)=>(next)=>(action)=>{
     console.log("ação disparada",action)
     /* move o fluxo da aplicação para o middleware seguinte, 
     ou caso não exista mais nenhum para o redutor */
    next(action);  
 }  
  const middleware=applyMiddleware(logger);
   
 //loja/store redux com o middleware definido
 const store= createStore(reducer,1,middleware);
 // ações a serem disparadas
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
```

Quando o bloco de código terminar a sua execução, deverá existir o seguinte na consola do browser:

 ```sh
ação disparada Object {type: "INC"}
ação disparada Object {type: "INC"}
ação disparada Object {type: "INC"}
ação disparada Object {type: "DEC"}
ação disparada Object {type: "DEC"}
ação disparada Object {type: "DEC"}
```

## Encadeamento de múltiplos middlewares

Em Redux, tal como por exemplo no [Express], é possível encadear múltiplos middlewares que irão trabalhar em conjunto.

O bloco de código seguinte extende o exemplo básico usado anteriormente e irá adicionar um novo middleware para lidar com o tratamento de erros que poderiam ocorrer na aplicação.

```javascript
  import {createStore, applyMiddleware} from  "redux";
   
  // o redutor
  const reducer=(initialState=0,action)=>{
    if (action.type==="INC"){
        return initialState+1;
    }
    else if (action.type==="DEC"){
        return initialState-1;
    }
    else if (action.type==="ERRO"){
        throw new Error("Erro na aplicação")
    }
    return initialState;
  }
   
 // middleware inicial definido
 const logger=(store)=>(next)=>(action)=>{
    console.log("ação disparada",action)
    /* move o fluxo da aplicação para o middleware seguinte, 
    ou caso não exista mais nenhum para o redutor */
    next(action) 
  };
  // o novo middleware responsável pelo tratamento de erros
const error=(store)=>(next)=>(action)=>{
    try{
        /* move o fluxo da aplicação para o middleware seguinte,
         ou caso não exista mais nenhum para o redutor */
      next(action);  // 
    }
    catch (e){
      console.log("Ocorreu o seguinte erro",e)
    }
 };
  // adiciona o middleware definido á aplicação
 const middleware=applyMiddleware(logger,error);
   
 // a loja/store redux com o middleware definido
 const store= createStore(reducer,1,middleware)  
 // ações a serem disparadas
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"INC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"DEC"});
 store.dispatch({type:"ERRO"})
```

Quando terminar a sua execução, a consola no browser deverá conter o seguinte.

```javascript
ação disparada Object {type: "INC"}
ação disparada Object {type: "INC"}
ação disparada Object {type: "INC"}
ação disparada Object {type: "DEC"}
ação disparada Object {type: "DEC"}
ação disparada Object {type: "DEC"}
Ocorreu o seguinte erro: Erro na aplicação
```

## Criação de Middleware

Em Redux, o middleware não é nada mais nada menos que uma ou mais funções com uma estrutura idêntica á seguinte:

 ```javascript
const reduxMiddleware = (store)=>(next)=>(action) => {
  // faz alguma coisa
}
```
Nota:

Ao olhar para o bloco de código acima, o que aparenta ser uma simples chamada a uma função e o valor retornado guardado numa constante. 
É na realidade é uma função que recebe como parâmetro a `store` Redux, irá retornar uma outra função, esta que por sua vez, tem como parâmetro o callback `next` e irá retornar uma outra função que tem como parâmetro `action`, esta sim irá executar o que se encontra definido num qualquer middleware que foi criado. 

Isto poderá soar algo estranho.

Porquê usar esta abordagem em vez de utilizar três parâmetros?

Na verdade esta técnica é extremamente útil, vinda da programação funcional denominada de [currying](https://pt.wikipedia.org/wiki/Currying), o que permite inúmeras vantagens em termos de desenvolvimento aplicacional.
A diferença significativa em usar esta abordagem neste caso, consiste na forma em como se irá invocar a função de middleware.

 ```javascript
// invocação sem ser usado currying.
// NÃO é a forma que se irá invocar a função acima.
reduxMiddleware(store, next, action)
 // vs invocar a versão que usa currying.
//A forma que se irá invocar a função acima.
reduxMiddleware(store)(next)(action)
```

Os parâmetros aqui são os seguintes:

1.) `store` - a store/loja Redux da aplicação, que ao invocar-se por exemplo o método `getState()`, retorna o presente estado em que a store/loja está e os seus valores.

```javascript
let currentState = store.getState();
```

2.) `next` - callback que fará com que a aplicação continue o seu fluxo de execução para um novo middleware definido ou para o redutor, caso não existam mais middlewares definidos e adicionados.

```javascript
next(action)
```

3.) `action` - a ação despoletada que irá atualizar o estado da store/loja.

Para terminar, vamos agora usar a informação á nossa disposição para criar um middleware que irá efetuar o log na consola do seguinte texto "Utilizador Atualizado!" cada vez que a ação com o tipo "ATUALIZA_UTILIZADOR" for desencadeada.

 ```javascript
const updateUserLogger = (store)=>(next)=>(action) => {
  if (action.type === "ATUALIZA_UTILIZADOR") {
    console.log("Utilizador Atualizado!");
  }
  next(action);
};
```


#### Mais Informações:

- [Documentação Redux Middleware](https://redux.js.org/advanced/middleware)
- [Documentação extensiva acerca do Redux Middleware](https://redux.js.org/advanced/middleware)
- [Documentação extensiva acerca Redux ApplyMiddleware](https://redux.js.org/api/applymiddleware)
- [Lista Middleware Redux](https://redux.js.org/introduction/ecosystem#middleware)

 [//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Express]: <https://expressjs.com/>
[Winston]: <https://github.com/winstonjs/winston>
[node.js]: <http://nodejs.org>
[Koa]: <https://koajs.com/>
[Helmet]: <https://helmetjs.github.io/>
[Compression]: <https://github.com/expressjs/compression>

---
title: Redux Actions
localeTitle: Ações do Redux
---
## Ações em Redux

A ação em Redux é um objeto simples que descreve um qualquer tipo de evento da aplicação.
Poderão conter dados necessários á loja/store Redux.
Mas também poderá não conter nada.

Mas deverá sempre possuir uma propriedade que descreve qual é o tipo de evento.

De acordo com as boas práticas em Redux, deverá usar-se uma constante para descrever a ação.

Exemplo de uma ação simples, sem dados adicionais.

```javascript
const ADD_ITEM = 'ADD_ITEM' 
```

Exemplo de uma ação com um parâmetro extra de dados, que poderiam ser necessários á loja Redux.

```javascript
{ 
 type: ADD_ITEM, 
 text: 'This is the first item' 
 } 
```
Através da invocação da função  `store.dispatch()`, podemos enviar ações para a loja/store.

A uma qualquer altura na aplicação, poderão estar a ocorrer vários eventos ao mesmo tempo e de forma que se saiba o que está a acontecer, as ações ajudam a descrever os eventos que estão a ocorrer.
Mais ainda, sem ações não existe forma de se alterar o estado da aplicação.

Uma biblioteca que agiliza a implementação de ações em Redux, é a seguinte [redux-actions](https://github.com/redux-utilities/redux-actions)

#### Mais Informações:

[Documentação oficial de ações em Redux](https://redux.js.org/basics/actions) 

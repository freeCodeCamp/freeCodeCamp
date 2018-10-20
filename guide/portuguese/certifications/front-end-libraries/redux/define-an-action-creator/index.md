---
title: Define an Action Creator
localeTitle: Definir um criador de ações
---
## Definir um criador de ações

### Sugestão 1

Uma função é definida usando a seguinte sintaxe:

```javascript
functionName(){ 
  console.log("Do something"); 
 } 
```

Onde console.log pode ser alterado de acordo com a necessidade.

### Sugestão 2

Um valor é retornado usando a palavra-chave `return`

### Solução

```javascript
function actionCreator(){ 
    return action; 
 } 

```
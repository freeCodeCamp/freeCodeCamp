---
title: Redux Actions
localeTitle: Ações do Redux
---
## Actions

Action é um objeto simples que descreve o tipo de evento que aconteceu em seu aplicativo. Eles podem até conter dados que precisam ser enviados do aplicativo para a `store`. Uma action pode conter qualquer coisa, mas deve ter propriedade `type` que descreve o evento ocorrido. Uma boa prática é usar constantes para descrever a ação.

Por exemplo

```javascript
const ADD_ITEM = 'ADD_ITEM'; 
```

```javascript
{ 
 type: ADD_ITEM, 
 text: 'This is the first item' 
 } 
```

Podemos enviar essas `actions` para a `store` usando `javascript store.dispatch()`. Um aplicativo pode ter diferentes tipos de eventos acontecendo ao mesmo tempo e as ações ajudam a descrever esses eventos. Sem essas ações, não há como alterar o estado do aplicativo.

Você pode acessar o projeto [redux-actions](https://github.com/redux-utilities/redux-actions), que reduz muito o clichê, tornando suas actions mais rápidas.

#### Mais Informações:

[Documentos oficiais do Redux de ações](https://redux.js.org/basics/actions) página do projeto github do [redux-actions](https://github.com/redux-utilities/redux-actions)

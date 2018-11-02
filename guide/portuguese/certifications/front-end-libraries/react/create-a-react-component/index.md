---
title: Create a React Component
localeTitle: Criar um componente de reação
---
## Criar um componente de reação

## Sugestão 1:

*   Você verá esses Componentes da React Class o tempo todo, então agora seria um ótimo momento para ficar confortável com eles. Lembre-se, neste exercício, você não precisa definir o componente, você só precisa fazer uma função retornar um pouco de html entre as linhas marcadas.
*   Lembre-se da seção anterior e retorne um elemento "div" que contém um "h1" com o texto Hello React !.
*   O elemento "div" tem um filho, então lembre-se de fechar todas as tags.

## Solução

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    // change code below this line 
    return ( 
      <div> 
       <h1>Hello React!</h1> 
      </div> 
    ); 
    // change code above this line 
  } 
 }; 
```

Note que você não precisa colocar aspas ao redor do texto, porque quando você está trabalhando com JSX ele é tratado como HTML. Verifique também se a ortografia, o caso e a pontuação estão corretos! Se todo esse código parecer estranho, confira alguns dos ótimos materiais no Javascript ES6 aqui em freeCodeCamp.
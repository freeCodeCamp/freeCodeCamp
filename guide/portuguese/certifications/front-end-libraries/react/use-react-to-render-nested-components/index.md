---
title: Use React to Render Nested Components
localeTitle: Use Reagir para Renderizar Componentes Aninhados
---
## Use Reagir para Renderizar Componentes Aninhados

Você aprendeu nas lições anteriores que existem duas maneiras de criar um componente React:

1.  Componente funcional sem estado - usando uma função JavaScript.
    
2.  Defina um componente React usando a sintaxe ES6.
    

Neste teste, definimos dois componentes funcionais sem estado, ou seja, usando funções JavaScript. Lembre-se, uma vez que um componente tenha sido criado, ele pode ser renderizado da mesma forma que uma tag HTML, usando o nome do componente dentro de colchetes de abertura e fechamento de HTML. Por exemplo, para aninhar um componente chamado Cão dentro de um componente pai chamado Animais, você simplesmente retornaria o componente Cão do componente Animais assim:

```javascript
return ( 
  <Dog /> 
 ) 
```

Tente isso com os componentes TypesOfFruit e Fruits.
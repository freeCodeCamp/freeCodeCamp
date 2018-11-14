---
title: Define an HTML Class in JSX
localeTitle: Definir uma classe HTML no JSX
---
## Definir uma classe HTML no JSX

*   HTML e JSX podem parecer exatamente iguais, mas existem algumas diferenças entre eles.
*   Uma dessas diferenças é a convenção de nomenclatura.
*   Atributos HTML e referências de eventos no JSX se tornam camelCase (onclick => onClick).
*   Também pode haver algumas palavras reservadas em JavaScript. Por exemplo, a palavra "class" não pode ser usada para definir classes HTML em JSX.Therefore em vez de usar "class" você pode usar "className".

## Sugestão 1:

*   Você pode querer mudar "class" para "className".

## Solução

```javascript
const JSX = ( 
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1> 
  </div> 
 ); 

```
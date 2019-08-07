---
title: Give Sibling Elements a Unique Key Attribute
localeTitle: Dê aos Irmãos Elementos um Atributo de Chave Única
---
## Dê aos Irmãos Elementos um Atributo de Chave Única

## Sugestão

É quase o mesmo que o [desafio](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements) anterior. Apenas você precisa adicionar o atributo- `key` .

## Solução

Basta adicionar `key` atributo- `key` à tag `<li>` para torná-lo exclusivo

```jsx
const renderFrameworks = frontEndFrameworks.map((item) => 
  <li key={item+1}>{item}</li> 
 ); 

```
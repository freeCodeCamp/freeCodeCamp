---
title: Give Sibling Elements a Unique Key Attribute
localeTitle: Dar a los elementos hermanos un atributo clave único
---
## Dar a los elementos hermanos un atributo clave único

## Insinuación

Es casi igual que el [desafío](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements) anterior. Solo necesitas agregar el atributo `key` .

## Solución

Solo agregue el atributo `key` a la etiqueta `<li>` para que sea único

```jsx
const renderFrameworks = frontEndFrameworks.map((item) => 
  <li key={item+1}>{item}</li> 
 ); 

```
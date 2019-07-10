---
title: Give Sibling Elements a Unique Key Attribute
localeTitle: Дайте сиблинг-элементам уникальный атрибут ключа
---
## Дайте сиблинг-элементам уникальный атрибут ключа

## намек

Это почти так же, как предыдущий [вызов](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements) . Просто вам нужно добавить `key` атрибут.

## Решение

Просто добавьте `key` атрибут в `<li>` чтобы сделать уникальный

```jsx
const renderFrameworks = frontEndFrameworks.map((item) => 
  <li key={item+1}>{item}</li> 
 ); 

```
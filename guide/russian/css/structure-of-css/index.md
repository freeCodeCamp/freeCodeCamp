---
title: Structure of CSS
localeTitle: Структура CSS
---
## Структура CSS

Правило CSS следует этой базовой структуре:

```CSS
selector { 
  property: value; 
  property: value; 
 } 
```

Все внутри фигурных скобок стилей все, что выбрано [селектором](https://guide.freecodecamp.org/css/selectors) . Внутри правил CSS есть набор пар [свойств](https://guide.freecodecamp.org/css/properties) / значений.

У вас могут быть разные селекторы, разделенные комами:

```CSS
selector1, 
 selector2 { 
  property: value; 
 } 
```

Несколько CSS-правил можно поместить в один файл CSS - вот пример:

```CSS
h1 { 
  color: red; 
 } 
 
 div { 
  text-align: center; 
  color: blue; 
 } 
 
 img { 
  margin-left: 2px; 
  margin-top: 100px; 
 } 
```

#### Дополнительная информация:

*   [Синтаксис CSS по коду](https://codetheweb.blog/2017/11/11/css-syntax/)
*   Подробнее о [CSS-селекторах](https://guide.freecodecamp.org/css/selectors)
*   Подробнее о [свойствах CSS](https://guide.freecodecamp.org/css/properties)
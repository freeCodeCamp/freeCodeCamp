---
title: Use CSS Grid Units to Change the Size of Columns and Rows
localeTitle: Используйте CSS-сетки для изменения размера столбцов и строк.
---
## Используйте элементы сетки CSS для изменения размера столбцов и строк.

Эта задача требует, чтобы ширина столбцов контейнера была таковой, как указано в описании задачи.

### намек

Измените свойство `grid-template-columns` .

### Решение

Поскольку для вызова требуется установить ширину в `1fr` , `100px` и `2fr` , измените свойство `css grid-template-columns` `.container` на:

```css
grid-template-columns: 1fr 100px 2fr; 
```

#### Подробнее

*   [Введение в CSS-модуль CSS - CSS-трюки](https://css-tricks.com/introduction-fr-css-unit/)
---
title: Background Position Property
localeTitle: Исходная позиция
---
## Исходная позиция

Фон-свойство задает позицию, с которой должно начинаться фоновое изображение. Другими словами, это свойство примет значение x и y-значение и запустит изображение из точки `(x, y)` .

**Пример:**

```css
/* setting background-image of HTML doc */ 
 body { 
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png'); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

По умолчанию для свойства background-position установлено значение `0% 0%` .

**Значения свойств:**

`background-position: x-value y-value` где,

_x-значение_ : `left | center | right | x% | x px` и

_y-значение_ : `top | center | bottom | y% | y px` .

Другие допустимые значения свойств являются `initial` и `inherit` .

`initial` : Устанавливает это свойство по умолчанию.

`inherit` : Наследует значение от родительского элемента.

**Примечание.** Когда для свойства фона задано только одно значение, другое значение по умолчанию устанавливается в `center` .

**Другие источники:**

MDN Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
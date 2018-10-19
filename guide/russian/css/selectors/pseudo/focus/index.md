---
title: Focus
localeTitle: фокус
---
## фокус

### Определение

Объект `:focus` представляет собой элемент, получивший состояние фокусировки, вызванное событием с клавиатуры. Действие триггера происходит от нажатия клавиши **TAB** , которая визуально создает кольцо вокруг элемента.

### Синтаксис

`:focus`

### пример
```
a:focus { 
  color: red; 
 } 
```

### Вывод

[Ссылка JSfiddle](https://jsfiddle.net/ejae7vb3/1/)

#### Дополнительная информация:

[MDN - Сеть разработчиков Mozilla | : focus - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

Псевдокласс класса: focus CSS используется для выбора элемента с фокусом (например, ввода формы).

Это обычно срабатывает, когда пользователь щелкает или нажимает на элемент или выбирает его клавишей «tab».

Синтаксис:

```css
:focus 
```

## пример

HTML:

```html

<form> 
  <input type="text" value="The background will turn yellow when you click on it."> 
 </form> 
```

CSS:

```css
input:focus { 
   background-color: yellow; 
 } 
```

#### Дополнительная информация:

Для получения дополнительной информации посетите [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | Документация по CSS](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)
---
title: CSS3 Transitions
localeTitle: Переходы CSS3
---
## Переходы CSS3

Использование **переходов** CSS3 может быть полезно, если вы хотите, чтобы ваше приложение или ваша веб-страница были более динамичными и красивыми.

Действительно, переходы позволяют вам изменять свойства ( `width` , `color` , ...) **плавно** .

Свойство `transition` является сокращенным свойством для `transition-property` `transition-duration` `transition-timing-function` `transition-delay` , синтаксисом является следующее:

```css
transition: transition-property transition-duration transition-timing-function transition-delay 
```

Например :
```
transition: width 2s ease-in-out 1s; 
```

### Описание свойств

#### `transition-property`

Укажите **имя** свойства, к которому вы должны применить переход:

*   `background-color`
*   `color`
*   `width`
*   `height`
*   `margin`
*   `border-radius`
*   И так далее !

Например :
```
transition-property: width; /* means the transition applies on the width */ 
```

#### `transition-duration`

Укажите **количество секунд или миллисекунд, которые** должен **пройти** переход:

Например :
```
transition-duration: 2s /* means the transition effect last 2s */ 
```

#### `transition-timing-function`

Укажите **кривую скорости** эффекта перехода. Таким образом, вы можете изменить **скорость** своего **перехода на протяжении своей продолжительности** .

Вот наиболее используемые значения:

*   `linear`
*   `ease`
*   `ease-in`
*   `ease-out`
*   `ease-in-out`
*   `cubic-bezier(n, n, n, n)`

Например :

```css
transition-timing-function: linear 
```

NB: Все приведенные выше значения на самом деле являются специфическими `cubic-bezier` . `linear` , например, эквивалентен `cubic-bezier(0.25,0.1,0.25,1)`

Вы можете поэкспериментировать и узнать больше о _Cubic Bezier_ [здесь](http://cubic-bezier.com/)

#### `transition-delay`

Укажите в **секундах или миллисекундах** , когда переход будет **запущен.**

Например :
```
transition-delay: 1s /* means wait 1s before the transition effect start */ 
```

### Как использовать переходы?

Вы можете написать переход двумя способами:

#### Использование сокращенного свойства ( `transition` )

```css
div { 
  width: 200px; 
  transition: all 1s ease-in-out; 
 } 
 
 div:hover { 
  width: 300px; 
 } 
```

#### Предоставление всех свойств перехода значения

```css
div { 
  width: 200px; 
  transition-property: width; 
  transition-duration: 1s; 
  transition-timing-function: ease-in-out; 
 } 
```

NB: Оба примера **эквивалентны**

### Примеры

Вот несколько простых ручек, содержащих простые переходы:

*   [Основные переходы](https://codepen.io/thomlom/pen/gGqzNp)
*   [Переходы + JavaScript](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### Дополнительная информация:

*   [w3schools: Переходы CSS3](https://www.w3schools.com/css/css3_transitions.asp)
*   [Веб-документы MDN: использование переходов CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [DevTips: переход CSS](https://www.youtube.com/watch?v=8kK-cA99SA0)
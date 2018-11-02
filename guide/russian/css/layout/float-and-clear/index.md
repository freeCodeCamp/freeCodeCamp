---
title: Float and Clear
localeTitle: Float и Clear
---
## Float и Clear

Свойство CSS `float` указывает, как элемент должен плавать.

Свойство CSS `clear` указывает, какие элементы могут плавать рядом с очищенным элементом и с какой стороны.

### Свойство `float`

Свойство `float` используется для позиционирования и компоновки на веб-страницах.

Свойство `float` может иметь одно из следующих значений:

`left` - Элемент плавает слева от контейнера `right` - Элемент плавает справа от контейнера `none` - Элемент не плавает (будет отображаться только там, где он встречается в тексте). Это значение по умолчанию `inherit` - элемент наследует значение float своего родителя В своем простейшем использовании свойство `float` можно использовать для обертывания текста вокруг изображений.

#### Поплавок в картинке:

![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "CSS-уловок-флоат-IMG")
```
img { 
    float: right; 
 } 
```

В этом примере указано, что изображение должно плавать вправо на странице:

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "float img web")
```
img { 
    float: left; 
 } 
```

В этом примере указано, что изображение должно плавать влево на странице:
```
img { 
    float: none; 
 } 
```

В следующем примере изображение будет отображаться только там, где оно встречается в тексте ( `float: none;` ):

### `clear` собственность

Свойство `clear` указывает, какие элементы могут плавать рядом с очищенным элементом и с какой стороны.

Свойство `clear` может иметь одно из следующих значений:

`none` - Позволяет плавающие элементы с обеих сторон. Это значение по умолчанию `left` - плавающие элементы не разрешены с левой стороны `right` - плавающие элементы не допускаются с правой стороны `both` - не допускаются плавающие элементы на левой или правой стороне `inherit` - элемент наследует четкое значение своего родителя Самый распространенный способ использования свойства `clear` - после использования свойства `float` для элемента.

При очистке поплавков вы должны сопоставлять `clear` с `float` . Если элемент перемещается `left` , вы должны `clear` его `left` . Ваш плавающий элемент будет продолжать `float` , но очищенный элемент появится под ним на веб-странице.

#### Пример:

![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "нечеткое изображение нижнего колонтитула") Источник: CSS-TRICS
```
div { 
    clear: left; 
 } 
```

![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "прозрачный снизу") Источник: CSS-TRICS

### Дополнительные ресурсы:

*   MDN CSS: [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) & [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
*   [Учебники W3Schools](https://www.w3schools.com/css/css_float.asp)
*   CSS-трюки: [float](https://css-tricks.com/all-about-floats/) & [clear](https://css-tricks.com/almanac/properties/c/clear/)
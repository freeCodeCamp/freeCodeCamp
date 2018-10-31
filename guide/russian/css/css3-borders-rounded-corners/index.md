---
title: CSS3 Border Radius Property
localeTitle: Свойство радиуса радиуса CSS3
---
## Свойство радиуса радиуса CSS3

С помощью CSS3 вы можете дать любой элемент «закругленные углы», используя свойство `border-radius` . Значение может быть в любом допустимом блоке длины CSS.

```css
  .rounded-corners { 
    border-radius: 20px; 
  } 
 
  .circle { 
    border-radius: 50%; 
  } 
```

![Примеры](https://github.com/kaithrendyle/guide-photos/blob/master/rounded-circle.png?raw=true)

**Примечание.** Свойство `border-radius` фактически является сокращенным свойством для `border-top-left-radius` , `border-top-right-radius` , `border-bottom-right-radius` и `border-bottom-left-radius` .

Если предусмотрено только одно значение, радиус границы будет одинаковым для всех четырех углов, как в приведенных выше примерах. Но у вас также есть возможность указать разные значения для каждого угла.

```css
.new-shape { 
  border-radius: 20px 50px 5px 0; /* top left, top right, bottom right, bottom left */ 
 } 
```

Если предусмотрено только два значения, первое значение относится к верхнему левому и нижнему правому углу, а второе значение относится к верхнему правому и нижнему левому углу.

```css
.leaf-shape { 
  border-radius: 0 50%; 
 } 
```

Если установлены три значения, первый снова применяется к верхнему левому радиусу, второе значение указывает верхнее правое и нижнее левое, а третье значение указывает на нижний правый угол.

```css
.odd-shape { 
  border-radius: 0 20px 50%; 
 } 
```

![Примеры](https://github.com/kaithrendyle/guide-photos/blob/master/odd-shapes.png?raw=true)

Округление угла не должно быть абсолютно симметричным. Вы можете указать как горизонтальный, так и вертикальный радиусы с помощью косой черты («/») для достижения угла с эллиптической формой. \`\` \`CSS .elliptical-1 { border-radius: 50px / 10px; / \* горизонтальный радиус / вертикальный радиус \* / } .elliptical-2 { border-radius: 10px / 50px; }
```
![examples](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-basic.png?raw=true) 
 
 Since only one pair of values is given in the above examples, all four corners are the same. But, of course, if you want a more complex shape, you may supply up to four values for the horizontal radiuses and four for the vertical radiuses. 
```

CSS .elliptical-3 { border-radius: 50px 20px 50px 20px / 20px 50px 20px 50px; / \* горизонтальный верхний левый, горизонтальный верхний правый, горизонтальный нижний правый, горизонтальный нижний левый / вертикальный верхний левый, вертикальный верхний правый, вертикальный нижний правый, вертикальный нижний левый \* / }
```
Notice how the shorthand above produces the same result as specifying individual properties below. Be aware that when corners are set individually the values are space-separated instead of slash-separated. 
```

CSS .elliptical-4 { border-top-left-radius: 50px 20px; / \* горизонтальный радиус, вертикальный радиус \* / border-top-right-radius: 20px 50px; border-bottom-right-radius: 50px 20px; border-bottom-left-radius: 20px 50px; } \`\` \` ![Примеры](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-advance.png?raw=true)

### Дополнительная информация:

*   CSS-трюки: [CSS-трюки](https://css-tricks.com/almanac/properties/b/border-radius/)
*   MDN Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
*   Поддержка браузера: [caniuse](http://caniuse.com/#search=border-radius)
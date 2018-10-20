---
title: Transition
localeTitle: переход
---
## переход

Свойство `transition` позволяет вам изменять значения свойств плавно (от одного значения к другому) в течение заданной продолжительности. \`\` \`CSS переход: все 300 мс;
```
### Transition on Several Property Values 
 
 You can change multiples property values with transition property. 
```

CSS переход: ширина 300 мс, высота 2 с;
```
### Specify the Speed Curve of the Transition 
 
 You can specify a speed curve on an element in transition property. 
```

CSS переход: высота 2s линейная;
```
or the property `transition-timing-function` 
```

CSS функция времени перехода: линейная; \`\` \`

### Различные значения функции времени `transition-timing-function`

`ease` - указывает эффект перехода с медленным запуском, затем быстро, затем заканчивается медленно (это значение по умолчанию) `linear` - определяет эффект перехода с одинаковой скоростью от начала до конца `ease-in` - указывает на эффект перехода с медленным запуском `ease-out` - указывает эффект перехода с медленным завершением `ease-in-out` - определяет эффект перехода с медленным запуском и завершением `cubic-bezier(n,n,n,n)` - позволяет вам определять свои собственные значения в функции кубического безье

#### Дополнительная информация:

*   MDN Документация: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
*   Easings ссылка: [Easings](http://easings.net/en)
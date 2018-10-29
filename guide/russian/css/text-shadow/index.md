---
title: Text Shadow
localeTitle: Текстовая тень
---
## Текстовая тень

Свойство `text-shadow` добавляет тень к тексту. \`\` \`CSS text-shadow: offset-x offset-y blur-radius color;
```
### offset-x 
 
 Sets the horizontal distance from the text. Accepts both positive and negative values. Positive values place shadow to the right of the text while a negative value places the shadow to the left. 
 
 The `offset-x` value is required. 
 
 ### offset-y 
 
 Sets the vertical distance from the text. Accepts both positive and negative values. Positive values place shadow to below the text while a negative value places the shadow above. 
 
 The `offset-y` value is required. 
 
 
 ### blur-radius 
 
 Sets the length of the shadow's blur. The larger the value the wider and lighter the shadow becomes. 
 
 The `blur-radius` value is optional. 
 
 ### color 
 
 Sets the color of the shadow. 
 
 The `color` value is optional. 
 
 
 ### Example 
```

CSS text-shadow: 1px -2px 5px # a4a4a4;
```
### Example of multiple shadows 
 Multiple shadows can be used for giving text a solid outline on all 4 directions, like a bubble-writing effect. 
```

CSS text-shadow: -1px 0 1px черный, 0 1px 1px черный, 1px 0 1px черный, 0 -1px 1px черный; \`\` \`

### Дополнительная информация:

Документация MDN: [веб-документы MDN - текстовая тень CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
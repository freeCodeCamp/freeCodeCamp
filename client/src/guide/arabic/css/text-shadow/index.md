---
title: Text Shadow
localeTitle: ظل النص
---
## ظل النص

يضيف خاصية `text-shadow` ظلًا للنص. \`\` \`المغلق ظل النص: offset-x offset-y blur-radius color؛

 ``### offset-x 
 
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
`` 

المغلق text-shadow: 1px - 2px 5px # a4a4a4؛

 `### Example of multiple shadows 
 Multiple shadows can be used for giving text a solid outline on all 4 directions, like a bubble-writing effect. 
` 

المغلق ظل نص: 1 بكسل × 1 بكسل أسود ، 0 1 بكسل × 1 بكسل أسود ، 1 بكسل × 1 بكسل أسود ، 0 - 1 بكسل × 1 بكسل أسود ؛ \`\` \`

### معلومات اكثر:

MDN Documentation: [MDN Web Docs - CSS text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
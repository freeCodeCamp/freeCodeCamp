---
title: CSS3 Nth Child Selector
localeTitle: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

محدد `nth-child` هو css psuedo-class يأخذ نمطًا يتطابق فيه مع عنصر واحد أو أكثر بالنسبة إلى موضعه بين الأشقاء.

## بناء الجملة

\`\` \`المغلق a: nth-child (pattern) { / \* Css هنا \* / }

 ``### Pattern 
 
 The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B. 
 
 #### Keywords 
 
 ##### Odd 
 
 Odd returns all odd elements of a given type. 
`` 

المغلق a: nth-childe (odd) { / \* CSS هنا \* / }

 `##### Even 
 
 Even returns all even elements of a given type. 
` 

المغلق a: nth-childe (even) { / \* CSS هنا \* / }

 `#### An+B 
 
 Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0). 
 
 For example, the following will match every 3rd anchor element: 
` 

المغلق a: nth-childe (3n) { / \* CSS هنا \* / } \`\` \`

### معلومات اكثر:

[وثائق MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [CSS Tricks - nth child selector](https://css-tricks.com/almanac/selectors/n/nth-child/) [CSS Tricks - nth child tester](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - nth child selector](https://www.w3schools.com/cssref/sel_nth-child.asp)
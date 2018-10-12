---
title: CSS3 Nth Child Selector
localeTitle: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

El selector `nth-child` es un css psuedo-class que toma un patrón mediante el cual hace coincidir uno o más elementos en relación con su posición entre los hermanos.

## Sintaxis

\`\` \`css a: nth-child (patrón) { / \* Css va aquí \* / }
```
### Pattern 
 
 The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B. 
 
 #### Keywords 
 
 ##### Odd 
 
 Odd returns all odd elements of a given type. 
```

css a: nth-childe (impar) { / \* CSS va aquí \* / }
```
##### Even 
 
 Even returns all even elements of a given type. 
```

css a: nth-childe (par) { / \* CSS va aquí \* / }
```
#### An+B 
 
 Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0). 
 
 For example, the following will match every 3rd anchor element: 
```

css a: nth-childe (3n) { / \* CSS va aquí \* / } \`\` \`

### Más información:

[Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [Trucos CSS - nth selector infantil](https://css-tricks.com/almanac/selectors/n/nth-child/) [Trucos CSS - nth tester niño](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - nth selector infantil](https://www.w3schools.com/cssref/sel_nth-child.asp)
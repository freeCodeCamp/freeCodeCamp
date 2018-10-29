---
title: CSS3 Nth Child Selector
localeTitle: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

O seletor `nth-child` é uma classe css psuedo que usa um padrão para combinar um ou mais elementos em relação à sua posição entre irmãos.

## Sintaxe

\`\` \`css a: nth-child (pattern) { / \* Css vai aqui \* / }
```
### Pattern 
 
 The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B. 
 
 #### Keywords 
 
 ##### Odd 
 
 Odd returns all odd elements of a given type. 
```

css a: n-childe (ímpar) { / \* CSS vai aqui \* / }
```
##### Even 
 
 Even returns all even elements of a given type. 
```

css a: n-childe (par) { / \* CSS vai aqui \* / }
```
#### An+B 
 
 Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0). 
 
 For example, the following will match every 3rd anchor element: 
```

css a: nth-childe (3n) { / \* CSS vai aqui \* / } \`\` \`

### Mais Informações:

[Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [Truques CSS - nth seletor filho](https://css-tricks.com/almanac/selectors/n/nth-child/) [Truques de CSS - enésimo testador de crianças](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - nth seletor filho](https://www.w3schools.com/cssref/sel_nth-child.asp)
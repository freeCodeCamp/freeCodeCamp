---
title: Match Characters that Occur Zero or More Times
localeTitle: Corresponder caracteres que ocorrem zero ou mais vezes
---
## Corresponder caracteres que ocorrem zero ou mais vezes

Qualquer letra em uma expressão regex que é seguida por um `*` não precisa ocorrer na string testada, enquanto qualquer letra em uma expressão regex seguida por `+` deve ocorrer em uma string pelo menos uma vez, como mostrado abaixo,

```javascript
let phrase = "ba humbug"; 
 
 let regexPlus = /bah+/; 
 let regexStar = /bah*/; 
 
 regexPlus.test(phrase);  // returns false 
 regexStar.test(phrase);  // returns true 
```

Ambos permitem qualquer número de ocorrências da mesma letra em uma linha, por exemplo,

```javascript
let phrase = "wooooow look at that!"; 
 
 let regexPlus = /wo+w/; 
 let regexStar = /wo*w/; 
 
 regexPlus.test(phrase); // returns true 
 regexStar.test(phrase); // returns true 

```
---
title: Math Trunc
localeTitle: Matemática Trunc
---
## Matemática Trunc

`Math.trunc()` é um método do objeto padrão Math que retorna apenas a parte inteira de um dado número simplesmente removendo unidades fracionárias. Isso resulta em um arredondamento geral para zero. Qualquer entrada que não seja um número resultará em uma saída de NaN.

Cuidado: este método é um recurso do ECMAScript 2015 (ES6) e, portanto, não é suportado por navegadores mais antigos.

### Exemplos

```javascript
Math.trunc(0.1)   //  0 
 Math.trunc(1.3)   //  1 
 Math.trunc(-0.9)  // -0 
 Math.trunc(-1.5)  // -1 
 Math.trunc('foo') // NaN 
```

### Mais Informações:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
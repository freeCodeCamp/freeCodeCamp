---
title: Transition
localeTitle: Transição
---
## Transição

A propriedade de `transition` permite alterar os valores das propriedades sem problemas (de um valor para outro), durante uma determinada duração. \`\` \`css transição: todos os 300ms;
```
### Transition on Several Property Values 
 
 You can change multiples property values with transition property. 
```

css transição: largura 300ms, altura 2s;
```
### Specify the Speed Curve of the Transition 
 
 You can specify a speed curve on an element in transition property. 
```

css transição: altura 2s linear;
```
or the property `transition-timing-function` 
```

css função de temporização de transição: linear; \`\` \`

### Valores diferentes da `transition-timing-function` de `transition-timing-function`

`ease` - especifica um efeito de transição com início lento, depois rápido e termina lentamente (este é o padrão) `linear` - especifica um efeito de transição com a mesma velocidade do início ao fim `ease-in` - especifica um efeito de transição com início lento `ease-out` - especifica um efeito de transição com um final lento `ease-in-out` - especifica um efeito de transição com início e fim lentos `cubic-bezier(n,n,n,n)` - permite que você defina seus próprios valores em uma função cúbica-bezier

#### Mais Informações:

*   Documentação [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
*   Referência de [Easings](http://easings.net/en) : [Easings](http://easings.net/en)
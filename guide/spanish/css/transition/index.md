---
title: Transition
localeTitle: Transición
---
## Transición

La propiedad de `transition` permite cambiar los valores de propiedad sin problemas (de un valor a otro), durante un período determinado. \`\` \`css transición: todos los 300ms;
```
### Transition on Several Property Values 
 
 You can change multiples property values with transition property. 
```

css transición: ancho 300ms, altura 2s;
```
### Specify the Speed Curve of the Transition 
 
 You can specify a speed curve on an element in transition property. 
```

css transición: altura 2s lineales;
```
or the property `transition-timing-function` 
```

css función de tiempo de transición: lineal; \`\` \`

### Diferentes valores de `transition-timing-function` de `transition-timing-function`

`ease` : especifica un efecto de transición con un inicio lento, luego rápido y luego termina lentamente (esto es lo predeterminado) `linear` : especifica un efecto de transición con la misma velocidad de principio a fin `ease-in` : especifica un efecto de transición con un inicio lento `ease-out` : especifica un efecto de transición con un final lento `ease-in-out` : especifica un efecto de transición con un inicio y fin lentos `cubic-bezier(n,n,n,n)` : le permite definir sus propios valores en una función cubic-bezier

#### Más información:

*   Documentación [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
*   Referencia de las [facilidades](http://easings.net/en) :
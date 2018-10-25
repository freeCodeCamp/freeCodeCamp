---
title: Font Weight and Style
localeTitle: Peso y estilo de fuente
---
## Peso y estilo de fuente

El peso de la fuente se puede escribir como valores de texto:
```
font-weight: normal; 
 font-weight: bold; 
```

O como un valor numérico de `100` a `900` (en múltiplos de 100):
```
font-weight: 400;  /* equal to 'normal' above */ 
 font-weight: 700; /* equal to 'bold' above */ 
```

Valor numérico y su descripción común.

| Valor | Descripción común | | ----- | ---------------------------- | | 100 | Delgada (rayita) | | 200 | Extra Light (Ultra Light) | | 300 | Luz | | 400 | Normal | | 500 | Medio | | 600 | Semi Bold (Demi Bold) | | 700 | Negrita | 800 | Extra Bold (Ultra Bold) | | 900 | Negro (Heavy) |

No todos los pesos están disponibles para todas las fuentes. Algunas fuentes especializadas solo pueden estar disponibles en un peso (generalmente `400` `normal` ).

El peso de la fuente también se puede especificar en relación con el elemento primario de un elemento (si una fuente tiene más de un peso):
```
font-weight: lighter; 
 font-weight: bolder; 

```
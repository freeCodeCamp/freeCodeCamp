---
title: Font Weight and Style
localeTitle: Peso e Estilo da Fonte
---
## Peso e Estilo da Fonte

O peso da fonte pode ser escrito como valores de texto:
```
font-weight: normal; 
 font-weight: bold; 
```

Ou como um valor numérico de `100` a `900` (em múltiplos de 100):
```
font-weight: 400;  /* equal to 'normal' above */ 
 font-weight: 700; /* equal to 'bold' above */ 
```

Valor numérico e sua descrição comum

| Valor | Descrição Comum | | ----- | ---------------------------- | | 100 | Fina (linha fina) | | 200 | Extra Light (Ultra Leve) | | 300 | Light | | 400 | Normal | | 500 | Medium | | 600 | Semi negrito (Demi Bold) | | 700 | Ousado | | 800 | Extra negrito (ultra negrito) | | 900 | Preto (pesado) |

Nem todos os pesos estão disponíveis para todas as fontes. Algumas fontes especializadas só podem estar disponíveis em um peso (geralmente `normal` `400` ).

O peso da fonte também pode ser especificado em relação ao pai de um elemento (se uma fonte tiver mais de um peso):
```
font-weight: lighter; 
 font-weight: bolder; 

```
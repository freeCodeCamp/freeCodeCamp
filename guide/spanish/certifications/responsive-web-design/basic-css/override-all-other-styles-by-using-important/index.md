---
title: Override All Other Styles by using Important
localeTitle: Anular todos los otros estilos usando Importante
---
## Anular todos los otros estilos usando Importante

Puede anular todos los demás estilos en CSS usando `!important` .

Esta anulación se considera la más importante y tiene prioridad sobre el resto.

La lista de los más importantes a los menos importantes es la siguiente: \`\` \`

1.  importante (! importante)
2.  estilos en línea
3.  declaraciones de identificación
4.  declaraciones de clase
```
Here is an example of how to write/apply !important: 
```

css color: negro! importante;
```
To apply these in context and see `!important` take precedence, here is an example: 
```

html

body { font-family: Helvetica; color: purple; } #violet-text { color: violet; } .black-text { color: black !important; } .blue-text { color: blue; }

# Texto de ejemplo

\`\` \`

Este resultado terminaría en el `Example Text` es negro debido a que se agregó `!important` al `color: black` .
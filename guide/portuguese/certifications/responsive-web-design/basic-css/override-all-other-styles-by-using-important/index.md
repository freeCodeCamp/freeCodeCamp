---
title: Override All Other Styles by using Important
localeTitle: Substituir todos os outros estilos usando Importante
---
## Substituir todos os outros estilos usando Importante

Você pode substituir todos os outros estilos em CSS usando `!important` .

Esta substituição é considerada a mais importante e tem precedência sobre o resto.

A lista dos mais importantes para os menos importantes é a seguinte: \`\` \`

1.  importante (importante)
2.  estilos inline
3.  declarações de id
4.  declarações de classe
```
Here is an example of how to write/apply !important: 
```

css cor: preto! importante;
```
To apply these in context and see `!important` take precedence, here is an example: 
```

html

body { font-family: Helvetica; color: purple; } #violet-text { color: violet; } .black-text { color: black !important; } .blue-text { color: blue; }

# Exemplo de texto

\`\` \`

Esse resultado terminaria em `Example Text` sendo preto por causa de `!important` adicionado à `color: black` .
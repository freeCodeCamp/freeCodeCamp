---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: Use tabindex para especificar a ordem do foco do teclado para vários elementos
---
## Use tabindex para especificar a ordem do foco do teclado para vários elementos

Seguindo as instruções:

Adicione um atributo tabindex definido como "1" à entrada de pesquisa e um atributo tabindex definido como "2" à entrada de envio.

as linhas 16 e 17 \`\` \`css  
```
become: 
 
 ```css 
    <input type="search" name="search" id="search"> 
    <input type="submit" name="submit" value="Submit" id="submit"> 
```

Dessa forma, os controles de entrada de pesquisa e de formulário de entrada de envio são os dois primeiros itens na ordem de tabulação.
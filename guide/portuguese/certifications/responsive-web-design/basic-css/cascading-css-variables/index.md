---
title: Cascading CSS Variables
localeTitle: Variáveis ​​CSS em cascata
---
## Variáveis ​​CSS em cascata

Variáveis ​​CSS em cascata, oficialmente chamadas de propriedades customizadas, são entidades que se comportam de maneira semelhante às variáveis ​​tradicionais. Nessas variáveis, os dados podem ser armazenados e atualizados para refletir novos valores mais tarde 2 .

As variáveis ​​CSS são definidas para conter valores específicos e serem reutilizadas em todo o documento. Eles são definidos usando a notação de propriedade personalizada (por exemplo, `--main-color: black` ) e são acessados ​​usando a função `var()` (por exemplo, `color: var(--main-color)` ) 1 . Declare a variável CSS nos `:root` ou seletores de `body` para acesso global.

Ao manter documentos CSS complexos, não é apenas benéfico usar variáveis ​​CSS, mas também é inteligente. Ao fazer atualizações futuras em vez de pesquisar centenas de linhas de código em potencial, basta atualizar a variável CSS necessária 1 .

### Sintaxe

```css
:root { 
  --main-bkgnd-color:  #00B8CB; 
 } 
 
 body { 
  background-color: var(--main-bkgnd-color); 
  font-family: 'Raleway', Helvetica, sans-serif; 
 } 
```

Declarando a variável:

```css
--custom-name: value 
```

Usando a variável: `css var(--custom-name)`

### Fontes

1.  [Visite a página Cascading CSS Variables do MDN para obter mais informações.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
2.  [Perna, Maria Antonietta. "Um guia prático para as variáveis ​​CSS (propriedades personalizadas)" _sitepoint_ . 1º de agosto de 2018. Acesso em: 5 de outubro de 2018](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)
---
title: Body Bgcolor Attribute
localeTitle: Atributo Body Bgcolor
---
## Atributo Body Bgcolor

O atributo `<body bgcolor>` atribui uma cor de fundo para um documento HTML.

**Sintaxe** :

`<body bgcolor="color">` O valor da cor pode ser um nome de cor (como, `purple` ) ou um valor hexadecimal (como `#af0000` ).

Para adicionar uma cor de fundo a uma página da Web, você pode usar o atributo `<body bgcolor="######">` . Especifica uma cor para o documento HTML para exibir.

**Por exemplo:**

```html

<html> 
  <head> 
    <title>Body bgcolor Attribute example</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>This webpage has colored background.</h1> 
  </body> 
 </html> 
```

Você pode alterar a cor substituindo ###### por um valor hexadecimal. Para cores simples, você também pode usar a palavra, como "vermelho" ou "preto".

Todos os principais navegadores suportam o atributo `<body bgcolor>` .

_Nota:_

*   O HTML 5 não suporta o atributo `<body bgcolor>` . Use CSS para essa finalidade. Como? Usando o seguinte código: `<body style="background-color: color">` Claro, você também pode fazer isso em um documento separado, em vez de um método in-line.
    
*   Não use o valor RGB no atributo `<body bgcolor>` porque o `rgb()` é apenas para CSS, ou seja, não funcionará em HTML.
    

**Veja em ação:** https://repl.it/Mwht/2

**Outros recursos:**

*   Nomes de cores HTML: https://www.w3schools.com/colors/colors\_names.asp
*   Propriedade de cor de fundo CSS: https://www.w3schools.com/cssref/pr\_background-color.asp
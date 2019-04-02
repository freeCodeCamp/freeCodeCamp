---
title: UTF 8 Reference
localeTitle: Referência UTF 8
---
## Referência UTF 8

O UTF 8 é um esquema de codificação usado para traduzir os caracteres que vemos nas telas em números que os computadores podem armazenar. A especificação de uma codificação de caracteres como UTF8 permitirá que o navegador exiba corretamente caracteres avançados, como letras acentuadas e emojis.

Nos documentos HTML, você pode especificar a codificação de caracteres na página, colocando essa meta tag na tag `head` da sua página HTML: `<meta charset="UTF-8">` . UTF 8 é a codificação padrão.

O padrão [Unicode](https://www.unicode.org/) foi desenvolvido para acomodar os caracteres usados ​​em idiomas em todo o mundo.

Mas espere! O que o Unicode tem a ver com o UTF 8? UTF 8 é o esquema de codificação, mas é importante entender que Unicode é a definição do conjunto de caracteres. Em linguagem simples, o que isto significa é que o Unicode define um número único - chamado de ponto de código - para muitos caracteres principais usados ​​em idiomas em todo o mundo e o UTF 8 traduz o caractere em formato binário compatível com o computador. 1 Aqui está um exemplo:

1.  Você quer mencionar freeCodeCamp em algum lugar em sua página web (porque, você sabe, freeCodeCamp é 🔥 🔥 🔥).
    
2.  Os pontos de código do caractere para soletrar freeCodeCamp, conforme definido no Unicode, são:
    
    | f | r | e | e | C | o | d | e | C | a | m | p | | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | | 102 | 114 | 101 | 101 | 67 | 111 | 100 | 101 | 67 | 97 | 109 | 112 |
    
3.  UTF 8 converte os pontos de código em binário: 1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000
    

### Como usar o UTF-8 na sua página da Web

Especifique uma meta tag com um conjunto de caracteres de UTF 8 na sua tag head.

```html

<head> 
  <meta charset="utf-8"> 
 </head> 
```

#### Mais Informações:

*   [Gráficos de código de caracteres Unicode](https://www.unicode.org/charts/index.html)
*   [Referência Unicode HTML](https://www.w3schools.com/charsets/ref_html_utf8.asp)
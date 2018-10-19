---
title: Text
localeTitle: Texto
---
## Texto

Várias propriedades são fornecidas pelo CSS para alterar a aparência do texto. Várias propriedades de texto são explicadas abaixo.

#### Cor do texto

``` html
<html>
  <body>
    <p>This is an example of CSS text property.</p>
  </body>
</html>
```
``` css
p {
    color:red;
 }
```

No exemplo acima, a `color` do texto do elemento `<p>` é alterada para vermelho. Você também pode especificar a cor como valores RGB, valores HLS e códigos hexadecimais (para obter mais informações sobre cores, clique [aqui](https://guide.freecodecamp.org/css/colors) ).

#### Alinhamento de texto

`text-align` propriedade `text-align` é usada para definir o alinhamento horizontal do texto. Pode levar valores à `left` , à `right` , ao `center` e `justify`.
``` css
p {
    text-align: center;
 }
```
Aqui o texto e alinhado `center` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align)). Quando `text-align` e definido para `justify`, cada linha e esticada para que cada linha tenha a mesma largura, e as margens da esquerda e direita são a retas ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all)).
 
 #### Decoração de texto
``` css
p {
    text-decoration: underline;
}
```
A propriedade `text-decoration` e usada para remover decorações do texto. O valor `text-decoration: none;` e geralmente utilizado para remover o sublinhado dos links. Outras `text-decorations` incluem `overline`, `line-through`, e `underline` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration)).
 
 #### Transformação de texto 
``` css
p {
    text-transform: capitalize;
}
```
A propriedade `text-transform` e usada para converter todo o texto para `uppercase`, `lowercase` ou para `capitilize` cada palavra ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform)). 

 #### Espaçamento das letras 
 
 A propriedade `letter-spacing` define o espaco entre os caracters em um texto. 
``` css
p {
    letter-spacing: 5px;
}
```
#### Altura da Linha 
 
 A propriedade `line-height` define o espaço entre duas linhas de texto.
``` css
p {
    line-height: 5px;
}
```
#### Espaçamento de Palavra 
 
 A `word-spacing` define o espaco entre as palavras de um texto. 
``` css
p {
    word-spacing: 5px;
}
```

#### Mais Informações:

[Texto CSS do W3Schools](https://w3schools.com/css/css_text.asp)

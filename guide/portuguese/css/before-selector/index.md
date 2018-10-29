---
title: Before Selector
localeTitle: Antes do seletor
---
## Antes do seletor

O seletor CSS **:: before** pode ser usado para inserir qualquer coisa antes do conteúdo de um elemento ou elementos. Ele permite que o designer execute qualquer design de CSS antes do conteúdo de um elemento. É usado anexando **:: before** a um elemento no qual ele será usado.

Vamos ver alguns exemplos:

```css
p::before { 
    content: ""; 
    border: solid 5px #ccc 
 } 
 
 span.comment::before{ 
  content: "Comment: "; 
  color: blue; 
 } 
```

```html

<p> To infinity and beyond</p> 
 <p> I am buz lightyear, I come in peace.</p> 
 
 <span class="comment"> May the force be with you</span> 
 <br/> 
 <span> Do. Or do not. There is no try</span> 
```

No exemplo acima, estamos prefixando uma borda cinza antes de cada elemento de parágrafo em uma página e também estamos prefixando as palavras comment em azul antes de cada elemento de span com o comentário de classe.

> Você pode conferir esta demonstração aqui https://jsfiddle.net/398by400/

#### Definição e uso

`::before` é um dos seletores de pseudo-elementos CSS, que são usados ​​para estilizar partes especificadas de um elemento. Nesse caso, podemos inserir o conteúdo antes de algum elemento HTML do CSS. Apesar de vermos o conteúdo na página, não é parte do DOM, o que significa que não podemos manipulá-lo a partir do Javascript. Um truque para resolver esse problema: passar o conteúdo com um atributo de dados e usar o jQuery para manipulá-lo. Aqui está um exemplo de uso:

```css
   p::before { 
     content: "Hello "; 
   } 
```

```html

<p>world!!</p> 
```

Isso vai mostrar `Hello world!!` na página.

Não apenas strings, também imagens, contadores ou até mesmo nada ("", útil para clearfix) podem ser inseridos no `content` do `content` , mas **não em HTML** . Há um bom número de coisas legais que podem ser feitas usando `::before` e `after` maneira criativa. Você pode dar uma olhada no próximo link se você está curioso: [Um grupo inteiro de pseudo-elementos de coisas incríveis pode fazer](https://www.w3schools.com/css/css_pseudo_elements.asp)

#### Único-cólon vs duplo-cólon

Há um pouco de discussão sobre a maneira correta de usar pseudoelementos: estilo antigo de ponto-e-vírgula ( `:before` ), usado nas especificações CSS 1 e 2, versus recomendação CSS3, dois-pontos ( `::before` ), principalmente para _"estabelecer uma discriminação entre pseudo-classes e pseudo-elementos "_ . Mas, por razões de compatibilidade, o cólon único ainda é aceito. Falando sobre compatibilidade, o IE8 suporta apenas a notação de dois pontos.

#### Mais Informações:

[Pseudo-elementos CSS do W3Schools](https://www.w3schools.com/css/css_pseudo_elements.asp)

[CSS-Tricks :: depois de / :: antes](https://css-tricks.com/almanac/selectors/a/after-and-before/)

[Selecionando e manipulando pseudoelementos CSS como :: before e :: after jQuery](https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin)
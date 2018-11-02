---
title: CSS Selectors Cheat Sheet
localeTitle: CSS Cheats Sheet de Seletores
---
# Seletores de CSS

Em CSS, os seletores são padrões usados ​​para selecionar elementos DOM.

Aqui está um exemplo de uso de seletores. No código a seguir, `a` e `h1` são seletores:

```css
a { 
  color: black; 
 } 
 
 h1 { 
  font-size 24px; 
 } 
```

## Cheat list de seletores

| Seletor | Seleciona |  
| --- | --- | | `head` | seleciona o elemento com a tag `head` |  
| `.red` | seleciona todos os elementos com a classe 'red' |  
| `#nav` | seleciona os elementos com o ID 'nav' |  
| `div.row` | seleciona todos os elementos com a tag `div` e a classe 'row' | | `[aria-hidden="true"]` | seleciona todos os elementos com o atributo `aria-hidden` com um valor "true" | | `*` | Seletor de caractere curinga. Seleciona todos os elementos DOM. Veja abaixo para usá-lo com outros seletores |

Podemos combinar seletores de maneiras interessantes. Alguns exemplos:

| Seletores | Seleciona |  
| --- | --- | | `li a` | Combinador descendente de DOM. Todos `a` tags que são uma criança de `li` etiquetas |  
| `div.row *` | seleciona todos os elementos que são descendentes (ou filho) dos elementos com tag `div` e classe 'row' |  
| `li > a` | Combinador de diferença. Selecione descendentes diretos, em vez de todos os descendentes, como os seletores descendentes |  
| `li + a` | O combinador adjacente. Seleciona o elemento que é imediatamente precedido pelo elemento anterior. Neste caso, apenas o primeiro `a` depois de cada `li` . |  
| `li, a` | Seleciona todos `a` elementos e todas as `li` elementos. |  
| `li ~ a` | O combinador irmão. Seleciona `a` elemento após um elemento `li` . |

Pseudo-seletores ou pseudo classes estruturais também são úteis para selecionar elementos estruturais do DOM. Aqui estão alguns deles:

| Seletores | Seleciona | | --- | --- |  
| `:first-child` | Direcione o primeiro elemento imediatamente para dentro (ou filho de) outro elemento |  
| `:last-child` | Direcione o último elemento imediatamente para dentro (ou filho de) outro elemento |  
| `:nth-child()` | Direcione o enésimo elemento imediatamente para dentro (ou filho de) outro elemento. Admite inteiros, `even` , `odd` ou fórmulas |  
| `a:not(.name)` | Seleciona todos `a` elementos que não são do `.name` classe |  
| `::after` | Permite inserir conteúdo em uma página de CSS, em vez de HTML. Enquanto o resultado final não está realmente no DOM, aparece na página como se fosse. Este conteúdo é carregado depois dos elementos HTML. |  
| `::before` | Permite inserir conteúdo em uma página de CSS, em vez de HTML. Enquanto o resultado final não está realmente no DOM, aparece na página como se fosse. Este conteúdo é carregado antes dos elementos HTML. |

Podemos usar pseudo-classes para definir um estado especial de um elemento do DOM, mas não apontar para um elemento por si só. Alguns exemplos:

| Pseudoclasse | Seleciona | | --- | --- | | `:hover` | seleciona um elemento que está sendo pairado por um ponteiro de mouse |  
| `:focus` | seleciona um elemento que recebe foco do teclado ou programaticamente | | `:active` | seleciona um elemento que está sendo clicado por um ponteiro de mouse |  
| `:link` | seleciona todos os links que ainda não foram clicados |  
| `:visited` | seleciona um link que já foi clicado |

## Jogos

[CSS Diner](http://flukeout.github.io) é um jogo online que ensina quase tudo o que há para saber sobre a combinação de seletores.

## Referência adicional

Existem muitos outros seletores CSS! Aprenda sobre eles em [CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) , [CSS-tricks.com](https://css-tricks.com/almanac/selectors/) , [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp) ou na [Mozilla Developer Network](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors) .
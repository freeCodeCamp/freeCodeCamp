---
title: Selectors
localeTitle: Seletores
---
# Seletores

Os seletores são regras CSS para segmentar elementos HTML para aplicar estilos. Nomes de tags, nomes de classes, id e atributos são alguns dos ganchos usados ​​como seletores.

## Sintaxe de Seletor

Os seletores organizados em uma sequência específica criariam uma regra para segmentar elementos. Um exemplo,

```css
/* selects anchor tags */ 
 a { 
    color: orange; 
 } 
 
 /* selects elements with hero class */ 
 .hero { 
    text-align: center; 
 } 
```

## Tipo de Seletores

Digite | Descrição ------- | ------------ Seletores de tipo | Os nomes das tags são usados ​​para selecionar elementos como `h1` ou `a` . Seletor Universal | Seletor que se aplica a todos os elementos. `div *` combina todos os elementos nos elementos div. Seletor de Atributos | Seletores que segmentam elementos com base em seus atributos \[e, opcionalmente, seus valores\]. `h1[title]` seleciona elementos `h1` com atributo `title` . Seletor de Classe | Seletor que segmenta elementos usando seus nomes de classe. Seletor de ID | Seletor que usa o ID para segmentar elementos. `#logo` seleciona o elemento com o `logo` como ID. Seletor de pseudo-classe | Seletores especiais que segmentam elementos com base em seu estado. `a:hover` seletor `a:hover` aplica estilo quando o ponteiro passa sobre os links.

## Combinadores Seletores

Combinador | Propósito ----------- | ------------ `white space` | Combinador descendente. `.nav li` seleciona todos os `li` filhos dentro da classe `.nav` , incluindo elementos `li` aninhados. `>` | Combinador de crianças. `.menu > li` seleciona todos os li que são filhos diretos de elementos com classe `.menu` . `+` | Combinador irmão adjacente. `.logo + h1` segmenta `h1` que é um irmão imediato da classe `.logo` . `~` | Combinador irmão geral. `header ~ div` segmenta elementos `div` que são irmãos para elementos de `header` .

Esta seção detalha todos esses eleitores.

#### Mais Informações:

Você pode aprender mais sobre seletores sobre esses recursos:

*   [Especificação oficial dos seletores CSS3](https://www.w3.org/TR/css3-selectors)
*   [Página de seletores na Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
*   [CSS Cheats Sheet de Seletores nos Guias FreeCodeCamp](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet)

Os seletores em CSS (folhas de estilo em cascata) são determinados com base na _especificidade_ , com isso podemos ser mais específicos em nossas regras de estilo e substituir outras regras que podem estar visando o mesmo elemento, mas não são tão específicas. A maneira como essa hierarquia específica funciona é baseada em peso, significando um elemento. O seletor tem um peso de 1 (um), um seletor de classe tem um peso de 10 (dez) e um seletor de id tem um peso de Cem (100). Somos capazes de combinar seletores diferentes e ser mais específicos sobre o elemento que queremos mudar.

Por exemplo:

`css p { color: blue; } p .red { color: red; }` Nosso tipo seletor p selecionará todos os elementos p em nosso documento html, mas ele terá apenas o peso de um. Em contraste, o seletor de classe tem um peso de 11, porque estamos combinando um seletor de tipo com um seletor de classe (esse seletor está combinando todos os elementos p com uma classe de vermelho). - \* As regras direcionadas diretamente sempre terão precedência sobre as regras que herdam elementos de seu ancestral. - \* A especificidade é aplicada somente quando várias declarações estão direcionando o mesmo elemento, somente então essa regra é aplicada.  
\- \* Especificidade é geralmente o motivo pelo qual algumas de suas regras de estilo não se aplicam a elementos quando você espera que elas sejam aplicadas.
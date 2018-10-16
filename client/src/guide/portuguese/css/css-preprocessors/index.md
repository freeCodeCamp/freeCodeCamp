---
title: CSS Preprocessors
localeTitle: Preprocessadores CSS
---
## Preprocessadores CSS

Os pré-processadores CSS estão se tornando cada vez mais um pilar no fluxo de trabalho dos desenvolvedores web front-end. CSS é uma linguagem incrivelmente complicada e cheia de nuances, e em um esforço para facilitar seu uso, os desenvolvedores muitas vezes recorrem a pré-processadores como SASS ou LESS.

Preprocessadores CSS compilar o código que é escrito usando um compilador especial e, em seguida, usar isso para criar um arquivo css, que pode ser refereneced pelo documento HTML principal. Ao usar qualquer pré-processador CSS, você poderá programar no CSS normal exatamente como faria se o pré-processador não estivesse no lugar, mas também tem mais opções disponíveis para você. Alguns, como o SASS, têm padrões de estilo específicos que facilitam a redação do documento, como a liberdade de omitir chaves, se você optar por fazê-lo.

Naturalmente, os pré-processadores CSS também oferecem outros recursos. Muitos dos recursos oferecidos são incrivelmente semelhantes entre os pré-processadores, com apenas pequenas variações na sintaxe. Assim, você pode escolher praticamente qualquer pessoa que desejar e será capaz de alcançar as mesmas coisas. Algumas das características mais úteis são:

### Variáveis

Um dos itens mais usados ​​em qualquer linguagem de programação é a variável, algo que o CSS não possui. Ao ter variáveis ​​à sua disposição, você pode definir um valor uma vez e reutilizá-lo durante todo o programa. Um exemplo disso no SASS seria:

```SASS
$yourcolor: #000056 
 .yourDiv { 
  color: $yourcolor; 
 } 
```

Ao declarar a variável `SASS yourcolor` do `SASS yourcolor` uma vez, agora é possível reutilizar essa mesma cor exata em todo o documento sem precisar redigitar a definição.

### rotações

Outro item comum em linguagens são os loops, algo que o CSS não possui. Os loops podem ser usados ​​para repetir as mesmas instruções várias vezes sem precisar ser reinserido várias vezes. Um exemplo com o SASS seria:

\`\` \`SASS @ para $ vfoo 35px a 85px { .margin - # {vfoo} { margin: $ vfoo 10px; } }
```
This loop saves us from having the to write the same code multiple times to change the margin size. 
 
 ### If/Else Statements 
 Yet another feature which CSS lacks are If/Else statements. These will run a set of instructions only if a given condition is true. An example of this in SASS would be: 
```

SASS largura @if (corpo)> 500px { cor de fundo: azul; } outro { cor de fundo: branco; } \`\` \` Aqui, a cor do plano de fundo mudará de cor dependendo da largura do corpo da página.

Estas são apenas algumas das principais funções dos pré-processadores CSS. Como você pode ver, os pré-processadores CSS são ferramentas incrivelmente úteis e versáteis. Muitos desenvolvedores da web os usam, e é altamente recomendado que você aprenda pelo menos um deles.

#### Mais Informações:

SASS: http://sass-lang.com/

MENOS: http://lesscss.org/

Estilete: http://stylus-lang.com/

Página do MDN: https://developer.mozilla.org/pt-BR/docs/Glossary/CSS\_preprocessor
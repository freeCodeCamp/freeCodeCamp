---
title: CSS Flexbox Tips and Tricks
localeTitle: Dicas e truques do Flexbox CSS
---
# Flexbox CSS

[O CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) nos permite formatar facilmente nosso HTML como você nunca imaginou ser possível. Com o flexbox, é possível alinhar vertical e horizontalmente com facilidade. Como o som disso? Sim eu também.

Também é fantástico para o layout geral do seu site ou aplicativo, é fácil de aprender, é bem suportado (em todos os navegadores modernos) e é ótimo para trabalhar, sem mencionar que não demora muito para se familiarizar com tudo !

## Flexbox

Aqui está uma lista das propriedades do flexbox que podem ser usadas para posicionar elementos em css:

### CSS que pode ser aplicado ao contêiner
```
display: flexbox | inline-flex; 
 flex-direction: row | row-reverse | column | column-reverse; 
 flex-wrap: nowrap | wrap | wrap-reverse; 
 flex-flow: <'flex-direction'> || <'flex-wrap'> 
 justify-content: flex-start | flex-end | center | space-between | space-around; 
 align-items: flex-start | flex-end | center | baseline | stretch; 
 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
```

### CSS que pode ser aplicado a itens / elementos no contêiner
```
order: <integer>; 
 flex-grow: <number>; /* default 0 */ 
 flex-shrink: <number>; /* default 1 */ 
 flex-basis: <length> | auto; /* default auto */ 
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 
 align-self: auto | flex-start | flex-end | center | baseline | stretch; 
```

Então, agora você tem o seu kit de ferramentas, mas você pergunta "O que eu faço com minhas ferramentas, como usá-las?", Bem, deixe-me mostrar a você.

### Mostrar Flex

`display: flex;` é só para dizer ao seu navegador, ei, eu gostaria de usar o flexbox com este container, por favor. Isso inicializará esta caixa como um contêiner flexível e aplicará algumas propriedades flexíveis padrão.

É assim que se parece com o container sem `display: flex;`

![Playground CSS sem propriedades flexíveis](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

Depois de adicionar a `display: flex;` nós obtemos o abaixo, as propriedades flexíveis padrão são aplicadas fazendo com que ele apareça como tal

![Estilo padrão de exibição do playground de CSS](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### Direção Flex

`flex-direction:` nos permite controlar como os itens no container são exibidos, você os quer da esquerda para a direita, da direita para a esquerda, de cima para baixo ou de baixo para cima? você pode fazer tudo isso facilmente com a configuração da direção flexível do contêiner.

O Flexbox aplica linha como padrão para a direção. Aqui está o que todos eles se parecem:

`flex-direction: row;`

![flex-direction: linha; exemplo](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![flex-direction: exemplo de reversão de linha](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![flex-direction: exemplo de coluna](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![flex-direction: exemplo de reversão de colunas](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### Flex Wrap

Flexbox por padrão tentará encaixar todos os elementos em uma linha, mas você pode mudar isso com a propriedade flex-wrap, isso permite que você defina se os elementos vão se espalhar ou não, existem 3 propriedades para `flex-wrap:`

`flex-wrap: nowrap` este é o padrão e vai procurar encaixar tudo em uma linha da esquerda para a direita.

`flex-wrap: wrap` isso permitirá que itens continuem criando várias linhas e da esquerda para a direita.

`flex-wrap: wrap-reverse` permite que os itens estejam em várias linhas, mas exibindo da direita para a esquerda neste momento.

### Fluxo Flex

Fluxo flexível combina o uso de `flex-wrap` e `flex-direction` em uma propriedade, é usado primeiro definindo a direção e depois o wrap.

`flex-flow: column wrap;` é um exemplo de como usar isso.

### Justifique o conteúdo

`justify-content` é uma propriedade para alinhar itens no contêiner ao longo do eixo principal (isso muda dependendo de como o conteúdo é exibido). Existem várias opções para isso e nos permite preencher qualquer espaço vazio em linhas, mas definindo como queremos "justificá-lo".

Aqui estão nossas opções quando justificamos nosso conteúdo `flex-start | flex-end | center | space-between | space-around;` .

### Alinhar itens

Alinhar itens nos permite alinhar itens ao longo do eixo cruzado. Isso permite que o conteúdo seja posicionado de muitas maneiras diferentes usando justificar o conteúdo e alinhar os itens juntos.

`align-items: flex-start | flex-end | center | baseline | stretch;`

### Alinhar Conteúdo

Isso é para alinhar itens com várias linhas, é para alinhar no eixo cruzado e não terá efeito sobre o conteúdo que é uma linha.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Jogos e Apps

[O Flexbox Defense](http://www.flexboxdefense.com/) é um jogo da web que ensina o flexbox da maneira divertida.

[O Flexbox Froggy](http://flexboxfroggy.com/) também é um jogo da web que ensina o flexbox da maneira divertida.

[O Flexbox em 5](http://flexboxin5.com/) é um aplicativo da web que permite que você veja como o flexbox funciona com alguns controles simples.

[Flexyboxes](http://the-echoplex.net/flexyboxes/) é um aplicativo que permite que você veja amostras de código e altere parâmetros para ver como o flexbox funciona visualmente.

[Flexbox Patters](http://www.flexboxpatterns.com) é um site que mostra vários exemplos de flexbox

## Documentação

[Rede de desenvolvedores da Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[Truques CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Vídeos

[Flexbox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[Exemplos Práticos de Flexbox](https://www.youtube.com/watch?v=H1lREysgdgc)

[O que o Flexbox ?!](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)
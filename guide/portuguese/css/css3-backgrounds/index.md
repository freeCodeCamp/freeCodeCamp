---
title: CSS3 Backgrounds
localeTitle: Fundos CSS3
---
## Fundos CSS3

A propriedade abreviada de `background` CSS é usada para definir múltiplas propriedades como:

`background-color` , `background-image` `background-repeat` , `background-repeat` , `background-attachment` e `background-position`

### Cor de fundo

A propriedade `background-color` especifica a cor de fundo de um elemento.

```css
   background-color : #F00; 
```

### Imagem de fundo

A propriedade `background-image` especifica uma imagem para usar como plano de fundo de um elemento. Por padrão, a imagem se repete para cobrir toda a superfície do elemento.

```css
   background-image: url("GitHub-Mark.png"); 
```

### Imagem de fundo - repetição

Por padrão, a propriedade `background-image` repetida nos eixos X e Y. Se você quiser definir um eixo, como o eixo X, use o tipo de propriedade `background-repeat` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: repeat-x; 
```

Mas às vezes você não quer ter seu background em toda a superfície, você tem que especificar digitando:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
```

### Imagem de fundo - posição

Você pode especificar a posição do plano de fundo digitando:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position : left bottom; 
```

Ele irá definir o seu fundo no canto inferior esquerdo do elemento.

### Imagem de fundo - posição fixa

Se você deseja ter uma imagem de plano de fundo que não rola com o restante da página, você pode usar `background-attachement` propriedade `background-attachement` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position: left bottom; 
   background-attachment: fixed; 
```

### Propriedade de taquigrafia

Você pode passar todas as propriedades em um `background` super-propriedade:

```css
   background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom; 
```

Quando você usa a propriedade abreviada, você deve respeitar esta ordem:

1.  Cor de fundo
2.  Imagem de fundo
3.  Fundo de repetição
4.  Anexo de fundo
5.  Posição de fundo

Não importa se uma propriedade está faltando, desde que você respeite a ordem:

```css
   background: url("GitHub-Mark.png") no-repeat left bottom; 
```

Isso funcionará mesmo se a cor e o anexo estiverem faltando.

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
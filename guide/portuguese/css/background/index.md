---
title: Background
localeTitle: fundo
---
## fundo

A propriedade background permite usar imagens e cores para criar planos de fundo para suas páginas da web.

### Cor de fundo

A propriedade da cor de fundo permite que você escolha a cor do seu elemento. Isso pode ser o plano de fundo para a página inteira ou o plano de fundo de uma seção da sua página.

*   Um elemento é um pedaço de HTML, como um cabeçalho ou parágrafo em uma página da web.

Aqui está um exemplo de como definir a cor do plano de fundo de uma página da Web para verde.

```css
  body { 
    background-color: green; 
  } 
```

![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

Aqui está um exemplo de configuração das cores para dois elementos. Isso definirá o plano de fundo do cabeçalho para roxo e o resto da página para azul.

```css
  body { 
    background-color: blue; 
  } 
  h1 { 
    background–color: purple; 
  } 
```

![twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

Na cor CSS pode ser definido de três maneiras:

*   Um nome de cor válido, como `blue`
*   Um valor hexadecimal como `#FFFFF` (este é o valor hexadecimal para branco).
*   Um valor RGB como `rgb(76,175,80)` (Esse é o valor RGB para verde claro.)

### Imagens de fundo

Você pode usar a propriedade background image para definir uma imagem como plano de fundo para um elemento. A imagem é repetida por padrão para cobrir todo o elemento.

```css
body { 
  background-image: url("barn.jpg"); 
 } 
```

![imagem](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)

Você também pode vincular fotos ou gifs que encontrar on-line usando o link deles (ou seja, do Google Images, uma pesquisa).

```css
body { 
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif"); 
 } 
```

### Imagem de fundo - a propriedade de repetição

A imagem de fundo é repetida verticalmente (para cima e para baixo) e horizontalmente (na página da web) por padrão. Você pode usar a propriedade background-repeat para repetir a imagem vertical ou horizontalmente.

Aqui está um exemplo que repete a imagem verticalmente.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-y; 
 } 
```

![vertical](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

Você pode repetir a imagem horizontalmente definindo a propriedade background-repeat para “repeat-x”.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-x; 
 } 
```

Você também pode usar a propriedade background-repeat para definir uma imagem para não repetir.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
 } 
```

![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### Imagem de fundo - a propriedade de posição

Você pode usar a propriedade position para especificar onde sua imagem estará localizada em uma página da web.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

![posição](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### Imagem de fundo - a posição fixa

Você pode usar a propriedade de anexo de plano de fundo para definir uma imagem para uma posição fixa. Uma posição fixa faz com que uma imagem não rola com o resto da página.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
  background-attachment: fixed; 
 } 
```

![fixo](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### Gradientes de fundo

Um gradiente é uma transição entre duas ou mais cores e pode ser usado via CSS semelhante a uma imagem de fundo.

A sintaxe de um fundo gradiente pode ser bastante complexa e, muitas vezes, ainda é usada com prefixos de fornecedores devido a inconsistências entre os navegadores suportados.

O [Colorzilla Gradient Editor](http://www.colorzilla.com/gradient-editor/) é uma ótima ferramenta on-line para gerar gradientes personalizados e a marcação de CSS associada.

### Plano de fundo - a propriedade de taquigrafia

Você pode escrever as propriedades de fundo em uma única linha. Isso é chamado de propriedade abreviada.

```css
body { 
  background: url("barn.jpg") no-repeat right top; 
 } 
```

Você pode deixar de fora as propriedades desnecessárias ao usar a propriedade abreviada, mas as propriedades deve ser usado em uma determinada ordem. A ordem é:

*   cor
*   imagem
*   repetir
*   anexo
*   posição

### Múltiplas Imagens de Fundo

Você pode especificar várias imagens de fundo em uma única propriedade de plano de fundo.

```css
body { 
  background: url("barn.jpg"), url("stars.jpg"), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)); 
 } 
```

A primeira imagem (ou gradiente) especificada é a mais no topo, a segunda vem depois e assim por diante. Se um dos elementos não estiver correto devido a sua URL ou sua sintaxe, a linha inteira será ignorada pelo navegador.

### Algumas propriedades básicas de fundo do CSS

As propriedades de plano de fundo do CSS são usadas para definir os efeitos de segundo plano para elementos.

Propriedades de fundo CSS: cor de fundo imagem de fundo fundo de repetição fundo de ligação posição de fundo

Você pode consultar o seguinte link para as escolas W3 para saber mais sobre o background e assuntos relacionados em CSS. [Referência de fundo para W3](https://www.w3schools.com/css/css_background.asp)

### Outros recursos

*   [Lista de valores de cor](http://cloford.com/resources/colours/500col.htm)
*   [Ferramenta de seleção de cores](http://colrd.com/create/palette/)
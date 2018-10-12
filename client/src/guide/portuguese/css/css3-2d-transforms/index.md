---
title: CSS3 2d Transforms
localeTitle: Transformações CSS3 2d
---
## Transformações CSS3 2d

As transformações CSS3 permitem que você traduza, gire, dimensione e incline elementos.

Uma transformação é um efeito que permite que um elemento mude de forma, tamanho e posição.

O CSS3 suporta transformações 2D e 3D.

## Suporte de Navegador para Transformações 2D

Os números na tabela especificam a primeira versão do navegador que suporta totalmente a propriedade.

Números seguidos por -ms-, -webkit-, -moz- ou -o- especificam a primeira versão que trabalhou com um prefixo.

| Propriedade | Chrome | IE | Firefox | Safari | Ópera | | --------------------------------------- | ---------------------- | ------------------ | ------------------- | -------------------- | -------------------------------------------- | | transformar | 36,0 4,0 -webkit- | 10,0 9,0 -ms- | 16,0 3,5 -moz- | 9,0 3,2 -Webkit- | 23,0 15,0 -webkit- 12,1 10,5 -o- | | transformação-origem (sintaxe de dois valores) | 36,0 4,0 -webkit- | 10,0 9,0 -ms- | 16,0 3,5 -moz- | 9,0 3,2 -webkit- | 23,0 15,0 -webkit- 12,1 10,5 -o- |

## Transformações 2D CSS3

Métodos:

*   `translate()`
*   `rotate()`
*   `scale()`
*   `skewX()`
*   `skewY()`
*   `matrix()`

## O método translate ()

O método `translate()` move um elemento de sua posição atual (de acordo aos parâmetros dados para o eixo X e o eixo Y).

O exemplo a seguir move o elemento `<div>` 50 pixels para a direita e 100 pixels abaixo de sua posição atual:

### Exemplo:

```css
div { 
  -ms-transform: translate(50px, 100px); /* IE 9 */ 
  -webkit-transform: translate(50px, 100px); /* Safari */ 
  transform: translate(50px, 100px); 
 } 
```

## O método rotate ()

O método `rotate()` rotaciona um elemento no sentido horário ou anti-horário de acordo com um determinado grau.

O exemplo a seguir gira o elemento `<div>` no sentido horário com 20 graus:

### Exemplo:

```css
div { 
  -ms-transform: rotate(20deg); /* IE 9 */ 
  -webkit-transform: rotate(20deg); /* Safari */ 
  transform: rotate(20deg); 
 } 
```

Usando valores negativos irá girar o elemento no sentido anti-horário.

O exemplo a seguir gira o elemento `<div>` no sentido anti-horário com 20 graus:

### Exemplo:

```css
div { 
  -ms-transform: rotate(-20deg); /* IE 9 */ 
  -webkit-transform: rotate(-20deg); /* Safari */ 
  transform: rotate(-20deg); 
 } 
```

## O método de escala ()

O método `scale()` aumenta ou diminui o tamanho de um elemento (de acordo com os parâmetros fornecidos para a largura e altura).

O exemplo a seguir aumenta o elemento `<div>` para duas vezes largura original e três vezes a sua altura original:

### Exemplo:

```css
div { 
  -ms-transform: scale(2, 3); /* IE 9 */ 
  -webkit-transform: scale(2, 3); /* Safari */ 
  transform: scale(2, 3); 
 } 
```

O exemplo a seguir diminui o elemento `<div>` para metade do original largura e altura:

### Exemplo:

```css
div { 
  -ms-transform: scale(0.5, 0.5); /* IE 9 */ 
  -webkit-transform: scale(0.5, 0.5); /* Safari */ 
  transform: scale(0.5, 0.5); 
 } 
```

## O método skewX ()

O método `skewX()` inclina um elemento ao longo do eixo X pelo ângulo dado.

O exemplo a seguir inclina o elemento `<div>` 20 graus ao longo do eixo X:

### Exemplo:

```css
div { 
  -ms-transform: skewX(20deg); /* IE 9 */ 
  -webkit-transform: skewX(20deg); /* Safari */ 
  transform: skewX(20deg); 
 } 
```

## O método skewY ()

O método `skewY()` inclina um elemento ao longo do eixo Y pelo ângulo dado.

O exemplo a seguir inclina o elemento `<div>` 20 graus ao longo do eixo Y:

### Exemplo:

```css
div { 
  -ms-transform: skewY(20deg); /* IE 9 */ 
  -webkit-transform: skewY(20deg); /* Safari */ 
  transform: skewY(20deg); 
 } 
```

## O método skew ()

O método `skew()` inclina um elemento ao longo dos eixos X e Y pelos ângulos dados.

O exemplo a seguir inclina o elemento `<div>` 20 graus ao longo do eixo X e 10 graus ao longo do eixo Y:

### Exemplo:

```css
div { 
  -ms-transform: skew(20deg, 10deg); /* IE 9 */ 
  -webkit-transform: skew(20deg, 10deg); /* Safari */ 
  transform: skew(20deg, 10deg); 
 } 
```

Se o segundo parâmetro não for especificado, ele terá um valor zero. Então, o seguinte exemplo inclina o elemento `<div>` 20 graus ao longo do eixo X:

### Exemplo:

```css
div { 
  -ms-transform: skew(20deg); /* IE 9 */ 
  -webkit-transform: skew(20deg); /* Safari */ 
  transform: skew(20deg); 
 } 
```

## O método matrix ()

O método `matrix()` combina todos os métodos de transformação 2D em um.

O método matrix () utiliza seis parâmetros, contendo funções matemáticas, que permite girar, dimensionar, mover (transladar) e inclinar elementos.

Os parâmetros são os seguintes: matriz (scaleX (), skewY (), skewX (), escalaY (), translateX (), translateY ())

### Exemplo:

```css
div { 
  -ms-transform: matrix(1, -0.3, 0, 1, 0, 0); /* IE 9 */ 
  -webkit-transform: matrix(1, -0.3, 0, 1, 0, 0); /* Safari */ 
  transform: matrix(1, -0.3, 0, 1, 0, 0); 
 } 
```

## Propriedades de Transformação CSS3

A tabela a seguir lista todas as propriedades de transformação 2D:

| Propriedade | Descrição | | ---------------- | -------------------------------------------------- ------- | | transformar | Aplica uma transformação 2D ou 3D a um elemento | | transformação-origem | Permite que você mude a posição nos elementos transformados |

## Métodos de transformação 2D

| Função | Descrição | | --------------------- | -------------------------------------------------- ----------------------- | | matriz (n, n, n, n, n) | Define uma transformação 2D, usando uma matriz de seis valores | | translate (x, y) | Define uma tradução 2D, movendo o elemento ao longo dos eixos X e Y | | translateX (n) | Define uma tradução 2D, movendo o elemento ao longo do eixo X | | translateY (n) | Define uma tradução 2D, movendo o elemento ao longo do eixo Y | | escala (x, y) | Define uma transformação em escala 2D, alterando os elementos width e height | | escalaX (n) | Define uma transformação em escala 2D, alterando a largura do elemento | | escalaY (n) | Define uma transformação em escala 2D, alterando a altura do elemento | | rodar (ângulo) | Define uma rotação 2D, o ângulo é especificado no parâmetro | | inclinação (ângulo x, ângulo y) | Define uma transformação de inclinação 2D ao longo dos eixos X e Y | | skewX (ângulo) | Define uma transformação de inclinação 2D ao longo do eixo X | | skewY (ângulo) | Define uma transformação de inclinação 2D ao longo do eixo Y |

## Mais Informações:

*   https://css-tricks.com/almanac/properties/t/transform/
*   https://www.w3schools.com/css/css3\_2dtransforms.asp
*   https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform
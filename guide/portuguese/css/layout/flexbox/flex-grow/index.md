---
title: Flex-grow
localeTitle: Flex-grow
---
# Flex-Grow

A propriedade flex-grow é uma propriedade flexbox que permite especificar a alocação de espaço livre para contêineres dentro de um contêiner flexível. Ele fornece uma solução para todo esse espaço indesejado!

Isso vai transformar seu contêiner

![](https://cdn-media-1.freecodecamp.org/imgr/lFJaBUfh.png)

# **para isso**

![](https://cdn-media-1.freecodecamp.org/imgr/4X8ITZih.png)

O que acabou de acontecer?

Bem, nós adicionamos duas coisas à sintaxe do css.

HTML

```html

<p class = "ten">1</p> 
 <p class = "twenty">2</p> 
```

CSS

```css
body { 
  display:flex; 
 } 
 
 p { 
  flex-grow: 1; 
 } 
```

Duas coisas aconteceram

1.  O contêiner pai foi convertido em um display flexível por `display:flex`
2.  O "espaço livre" remanescente foi então alocado entre os p contentores remanescentes em uma razão igual, já que cada um possui uma propriedade flex-grow de 1.

O que acontece se tivermos contêineres p com diferentes propriedades flex-grow?

Vamos ver um exemplo.

Primeiro vamos criar dois parágrafos e ativar a exibição: flex;

![](https://cdn-media-1.freecodecamp.org/imgr/wPqUgsih.png)

Observe algumas coisas

*   O esquema de cores é bom
*   Há algum espaço vazio à direita das duas caixas.

Esse espaço vazio é o "espaço livre" que será alocado para cada um dos diferentes parágrafos posteriormente, dependendo de suas propriedades flex-grow.

Para ver isso em ação, vamos dar ao primeiro uma classe de "dez" e uma propriedade de flex-grow de 1. Vamos também dar ao segundo uma classe de "vinte" e uma propriedade flex-grow de 2.

![](https://cdn-media-1.freecodecamp.org/imgr/7n0V1G4h.png)

Observe algumas coisas

1.  O tamanho do segundo não é o dobro do primeiro, apesar de ter uma propriedade flex-grow que é o dobro da primeira.
2.  Todo o espaço está cheio. (Algumas margens foram adicionadas ao lado para permitir que ele seja visto com mais clareza.)

À medida que redimensionamos a tela, também descobrimos que a primeira encolhe a duas vezes a velocidade da segunda.

![](https://cdn-media-1.freecodecamp.org/imgr/pa4grM8h.png)

#### Mais Informações:
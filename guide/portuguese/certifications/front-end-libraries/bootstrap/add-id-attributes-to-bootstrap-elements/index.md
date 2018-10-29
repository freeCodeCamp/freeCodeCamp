---
title: Add id Attributes to Bootstrap Elements
localeTitle: Adicionar atributos de identificação a elementos do bootstrap
---
## Adicionar atributos de identificação a elementos do bootstrap

O último desafio foi você adicionar uma classe aos seus elementos de botão, desta vez você tem que adicionar id (s) ao (s) div (s) que têm a classe do poço.

### Sugestão 1

Um id é declarado da seguinte forma:

```html

<element id="id(s)List"></element> 
```

### Sugestão 2

Edite as tags div que têm a classe do poço

### Dica 3

Use id (s) diferentes para ambos os poços.

### Dica 4

Dê o bem à esquerda o id da `left-well` e o bem à direita o id da `right-well` .

### Solução

Como você precisa adicionar id (s) a ambos os poços e ter ambos com um ID exclusivo, o seguinte é a solução:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well" id="left-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well" id="right-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```
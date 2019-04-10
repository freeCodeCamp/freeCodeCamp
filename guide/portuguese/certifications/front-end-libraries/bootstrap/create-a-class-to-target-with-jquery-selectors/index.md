---
title: Create a Class to Target with jQuery Selectors
localeTitle: Criar uma classe para destino com seletores jQuery
---
## Criar uma classe para destino com seletores jQuery

O último desafio foi você adicionar algumas classes aos seus elementos `html <button></button>` para estilizá-las, desta vez você é obrigado a adicionar outras classes aos botões que permitiriam que o jQuery os direcionasse.

### Sugestão

Edite as classes

### Solução

Como você precisa adicionar a classe de `target` , o seguinte é a solução:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```
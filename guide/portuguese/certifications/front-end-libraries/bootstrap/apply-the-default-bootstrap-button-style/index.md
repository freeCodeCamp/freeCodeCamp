---
title: Apply the Default Bootstrap Button Style
localeTitle: Aplicar o estilo padrão do botão de inicialização
---
## Aplicar o estilo padrão do botão de inicialização

O último desafio tinha você criando 6 botões, 3 em cada elemento do poço, desta vez você é obrigado a adicionar classes a esses botões.

### Sugestão

Uma classe é declarada usando a seguinte sintaxe:

```html

<button class="class(es)Name"></button> 
```

### Solução

Como você deve adicionar as classes `btn` e `btn-default` , o seguinte é a solução:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
        <button class="btn btn-default"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```
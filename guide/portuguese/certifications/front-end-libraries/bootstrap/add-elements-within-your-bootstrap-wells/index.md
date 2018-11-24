---
title: Add Elements within Your Bootstrap Wells
localeTitle: Adicionar elementos dentro dos seus poços de bootstrap
---
## Adicionar elementos dentro dos seus poços de bootstrap

No último desafio, você criou um div com a classe de poço, esse desafio agora requer que você adicione 3 elementos de botão em cada um dos poços.

### Sugestão

Um botão é declarado da seguinte forma:

```html

<button></button> 
```

### Solução

Como temos que declarar 3 botões em cada poço, faríamos o seguinte:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well"> 
        <button></button> 
        <button></button> 
        <button></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```
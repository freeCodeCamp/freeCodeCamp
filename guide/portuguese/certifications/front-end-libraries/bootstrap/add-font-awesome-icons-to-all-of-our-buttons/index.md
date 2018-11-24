---
title: Add Font Awesome Icons to all of our Buttons
localeTitle: Adicionar ícones de fonte impressionante para todos os nossos botões
---
## Adicionar ícones de fonte impressionante para todos os nossos botões

### Explicação do Problema

Use Font Awesome para adicionar um ícone de `info-circle` de informações ao seu botão de informações e um ícone de `trash` ao seu botão de exclusão.

#### Links Relevantes:

*   [Fonte Incrível](https://fontawesome.com/)
*   [Diferente entre Font Awesome v4 e v5](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)

### Sugestão

*   A folha de estilo do Font Awesome desta página é a versão 4.5.0, portanto, você deve usar um prefixo `fa` vez de um novo `fas` . Verifique o [link](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4) para saber mais sobre a diferença entre a v4 e a nova v5.
*   Logotipos e as classes CSS relevantes para os logotipos podem ser encontradas [aqui](https://fontawesome.com/icons?d=gallery) .
*   Adicionar um espaço entre a tag `<i>` e o texto dará um bom espaçamento.

## Alerta de spoiler!

**Solução à frente!**

### Solução:

```html

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> 
 <style> 
  h2 { 
    font-family: Lobster, Monospace; 
  } 
 
  .thick-green-border { 
    border-color: green; 
    border-width: 10px; 
    border-style: solid; 
    border-radius: 50%; 
  } 
 </style> 
 
 <div class="container-fluid"> 
  <div class="row"> 
    <div class="col-xs-8"> 
      <h2 class="text-primary text-center">CatPhotoApp</h2> 
    </div> 
    <div class="col-xs-4"> 
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
    </div> 
  </div> 
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera."> 
  <div class="row"> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i>Delete</button> 
    </div> 
  </div> 
  <p>Things cats <span class="text-danger">love:</span></p> 
  <ul> 
    <li>cat nip</li> 
    <li>laser pointers</li> 
    <li>lasagna</li> 
  </ul> 
  <p>Top 3 things cats hate:</p> 
  <ol> 
    <li>flea treatment</li> 
    <li>thunder</li> 
    <li>other cats</li> 
  </ol> 
  <form action="/submit-cat-photo"> 
    <label><input type="radio" name="indoor-outdoor"> Indoor</label> 
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label> 
    <label><input type="checkbox" name="personality"> Loving</label> 
    <label><input type="checkbox" name="personality"> Lazy</label> 
    <label><input type="checkbox" name="personality"> Crazy</label> 
    <input type="text" placeholder="cat photo URL" required> 
    <button type="submit">Submit</button> 
  </form> 
 </div> 

```
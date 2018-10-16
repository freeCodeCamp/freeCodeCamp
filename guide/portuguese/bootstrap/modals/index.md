---
title: Modals
localeTitle: Modais
---
## Modais

Os modais são pop-ups para fornecer informações importantes antes de continuar.

Para criar tais diálogos / pop-ups no topo da página atual, o Bootstrap fornece o plugin Modal.

#### Exemplo de código:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
 
 <!-- jQuery library --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
 
 <!-- Latest compiled JavaScript --> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
 </head> 
 
  <body> 
 
 <!-- Triggering the modal popup --> 
   <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Open Modal</button> 
 
  <!-- Modal popup --> 
 
   <div class="modal fade" id="myModal"> 
       <div class="modal-dialog"> 
 
  <!-- Modal Content --> 
            <div class="modal-content"> 
              <div class="modal-header"> 
                <button  type="button" data-dismiss="modal" class="close">&times;</button> 
                <h4 class="modal-title">Modal Header</h4> 
              </div> 
 
              <div class="modal-body"> 
                Do you wish to continue? 
              </div> 
 
              <div class="modal-footer"> 
                <button class="btn btn-default"  data-dismiss="modal">close</button> 
              </div> 
 
            </div> 
        </div> 
 
   </div> 
 
 </body> 
 </html> 
```

#### Entendendo os Atributos e Classes Utilizados:

a) `data-toggle = "modal"` : Abre o modal.

b) `data-target` : aponta para o ID do modal a abrir.

c) `data-dismiss="modal"` : Isso faz com que o pop-up feche quando clicado no botão fechar.

d) `.modal` classe identifica o conteúdo de `<div>` como um modal.

e) `.modal-dialog` class configura a altura e a largura apropriadas da caixa de diálogo.

f) `.modal-content` class o modal.Ele contém seções de cabeçalho, corpo e rodapé.

g) `.modal-header` class denota a seção de cabeçalho do modal (título e botão (×)).

h) `.modal-title` o cabeçalho do modal com uma altura adequada.

i) `.modal-body` classifica o corpo do modal (dialog / popup). Ele pode ter outras marcações como `<p>,<img>,<video>` etc.

j) `.modal-footer` class styles o rodapé do modal.

#### Mais Informações :

[Bootstrap Modal](https://bootstrapbay.com/blog/working-bootstrap-modal/)

Se você quiser explorar o **__Bootstrap 4.0 Latest (versão Alpha)__** : [Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.0/components/modal/)
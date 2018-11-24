---
title: Modals
---
## Modals
Modals are popups for providing important information before continuing further.  

To create such dialogs/pop-ups on the top of current page Bootstrap provides Modal plugin.

#### Code Example (Bootstrap v4.1) :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 

<!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<!-- Latest compiled JavaScript -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
 </head>
  
  <body>
    
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal popup-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
  
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  
 </body>
</html>

```

#### Understanding the Attributes and classes used :

a) `data-toggle = "modal"`  : It opens up the modal.

b) `data-target` : It points to the Id of the modal to open up.

c) `data-dismiss="modal"` : This causes the popup to close when clicked on close button.

d) `.modal` class identifies the contents of `<div>` as a modal.

e) `.modal-dialog` class sets the proper height and width of the dialog.

f) `.modal-content` class styles the modal.It contains header,body and footer sections.

g) `.modal-header` class denotes the header section of the modal (title and  (×) button). 

h) `.modal-title` class styles the header of the modal with a proper height.

i) `.modal-body` class styles the body of the modal(dialog/popup).It can have other markups like `<p>,<img>,<video>` etc.

j) `.modal-footer` class styles the footer of the modal.
  
  
#### More Information : 
[Bootstrap Modal](https://bootstrapbay.com/blog/working-bootstrap-modal/)
[Bootstrap Modal v3.3](https://getbootstrap.com/docs/3.3/javascript/)
[Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.1/components/modal/)






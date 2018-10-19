---
title: Modals
---
## Modals
Modals are popups for providing important information before continuing further.  

To create such dialogs/pop-ups on the top of current page Bootstrap provides Modal plugin.

#### Code Example :

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
<a href='https://bootstrapbay.com/blog/working-bootstrap-modal/' target='_blank' rel='nofollow'>Bootstrap Modal</a>

If you want to explore ****Bootstrap 4.0 Latest (Alpha version)**** :
<a href='https://getbootstrap.com/docs/4.0/components/modal/' target='_blank' rel='nofollow'>Bootstrap Modal v4.0</a>







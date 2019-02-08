# Bootstrap 4 Jumbotron
A jumbotron indicates a big grey box for calling extra attention to some special content or information.
It can be seen at the top of the web pages in general.


Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.

## Bootstrap Tutorial
Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.

## The following code deals with the complete code for creating a jumbotron.
Use a <div> element with class .jumbotron to create a jumbotron:

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>
  <p>This is some text.</p>      
  <p>This is another text.</p>      
</div>

</body>
</html>

# Full-width Jumbotron
If you want a full-width jumbotron without rounded borders, add the .jumbotron-fluid class and a .container or .container-fluid inside of it:

Example
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>Bootstrap Tutorial</h1> 
    <p>Bootstrap is the most popular HTML, CSS...</p> 
  </div>
</div>

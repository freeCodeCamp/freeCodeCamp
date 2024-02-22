<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery Exercises</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<!-- Exercise 1: Change Text -->
<div>
  <p id="changeText">Click the button to change this text.</p>
  <button id="changeButton">Change Text</button>
</div>

<!-- Exercise 2: Toggle Class -->
<div>
  <p id="toggleClass">This text will change color when you click the button.</p>
  <button id="toggleButton">Toggle Color</button>
</div>

<!-- Exercise 3: Show/Hide Element -->
<div>
  <button id="showButton">Show Text</button>
  <button id="hideButton">Hide Text</button>
  <p id="showHideText" style="display: none;">This text will be shown/hidden.</p>
</div>

<!-- Exercise 4: Fade In/Out Element -->
<div>
  <button id="fadeInButton">Fade In</button>
  <button id="fadeOutButton">Fade Out</button>
  <p id="fadeInOutText" style="display: none;">This text will fade in/out.</p>
</div>

<script>
// Exercise 1: Change Text
$('#changeButton').click(function() {
  $('#changeText').text('Text changed successfully!');
});

// Exercise 2: Toggle Class
$('#toggleButton').click(function() {
  $('#toggleClass').toggleClass('red-text');
});

// Exercise 3: Show/Hide Element
$('#showButton').click(function() {
  $('#showHideText').show();
});

$('#hideButton').click(function() {
  $('#showHideText').hide();
});

// Exercise 4: Fade In/Out Element
$('#fadeInButton').click(function() {
  $('#fadeInOutText').fadeIn();
});

$('#fadeOutButton').click(function() {
  $('#fadeInOutText').fadeOut();
});
</script>

<style>
.red-text {
  color: red;
}
</style>

</body>
</html>

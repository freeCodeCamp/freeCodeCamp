---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
isHidden: false
forumTopicId: 18188
---

## Description
<section id='description'>
Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.
The navigator will get the user's current longitude and latitude.
You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.
By selecting allow, you will see the text on the output phone change to your latitude and longitude.
Here's code that does this:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

First, it checks if the <code>navigator.geolocation</code> object exists. If it does, the <code>getCurrentPosition</code> method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the <code>position</code> object's values for latitude and longitude using dot notation and updates the HTML.
</section>

## Instructions
<section id='instructions'>
Add the example code inside the <code>script</code> tags to check a user's current location and insert it into the HTML.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.
    testString: assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
  - text: Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.
    testString: assert(code.match(/position\.coords\.latitude/g));
  - text: Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.
    testString: assert(code.match(/position\.coords\.longitude/g));
  - text: You should display the user&#39;s position within the <code>data</code> div element.
    testString: assert(code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>

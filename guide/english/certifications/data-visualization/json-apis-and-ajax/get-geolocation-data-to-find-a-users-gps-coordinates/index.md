---
title: Get Geolocation Data to Find A User's GPS Coordinates
---
# Get Geolocation Data to Find A User's GPS Coordinates

--
## Hints

### Hint 1
Every browser has a built in navigator that can give us this information.

The navigator will get our user's current longitude and latitude.

You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.

By selecting allow you will see the text on the output phone change to your latitude and longitude

Here's some code that does this:

```javascript
if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function(position) {

    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

  });

}
```

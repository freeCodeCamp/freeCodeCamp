---
title: How Jsonp Is Different from JSON
---
JSONP is just JSON wrapped in a callback function.

JSONP is useful for making cross domain requests, which are often otherwise forbidden by browsers for security reasons.

     // an example of JSON
     {"weapon":"nunchucks","headband":"yellow"}

     // an example of JSONP
     myCallback({"weapon":"nunchucks","headband":"yellow"});

Then to access the data stored in your JSONP, you define the callback function:

    myCallback = function(data){
      alert(data.weapon);
    };
---
title: Give Your JavaScript Slot Machine Some Stylish Images
---
We've already set up the images for you in an array called images. We can use different indexes to grab each of these.

Here's how we would set the first slot to show a different image depending on which number its random number generates:

    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
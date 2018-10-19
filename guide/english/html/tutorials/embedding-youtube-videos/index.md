---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

You've probably seen a lot of embedded videos on your favourite websites. So, how do we embed YouTube videos for our own website? Simple! In order to embed a YouTube video, we'll need an `<iframe>` element. This element allows us to embed another document in our current HTML document.

<br/>Note: Don't mix up `<iframe>` with `<frame>`! While seemingly alike, the fundamental difference is that `<iframe>` specifies an inline frame, and is used to add content, while `<frame>` divides the page into different 'frames', and is used to define layouts.
### The `<iframe>` Element

#### Usage
You can easily put your chosen video in by using the `<iframe>` element. You should also define the width and height of the actual player, so we will use attributes `height` and `width` for that.
<br/>Here's how to embed an example video.
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/v8kFT4I31es">
</iframe>
```
We've specified the video player to be 420 pixels wide and 315 pixels high, and we've taken the source from the <b>embedded</b> youtube link. This should now open up the welcome video to your favourite website's YouTube channel, `https://www.freecodecamp.org`! 
<br/>You'll need to use the embedded video link in order to actually embed and watch the video.<br/>
<br/>Alternatively, you can copy and paste the youtube embed code onto your website.


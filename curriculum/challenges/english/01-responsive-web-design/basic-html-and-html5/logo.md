---
id: 5d47f9e144cec26fdb0a6365
title: OpenCV_logo
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
OpenCV has drawing functions which let you draw simple geometric primitives. In this tutorial, we will look at methods like cv.ellipse() and cv.circle(). The main aim of this lesson is to show how to use this functions and draw openCV logo.

<code>ellipse(img, center, axes, angle, startAngle, endAngle, color)</code> where <code>img</code> is an image where the elipse is drawn, <code>center</code> - center of the elipse, <code>angle</code> is ellipse rotation angle in degrees, <code>startAngle</code> is starting angle of the elliptic arc in degrees, <code>endAngle</code> is ending angle of the elliptic arc in degrees,<code>color</code> is a color of object, and <code>thickness</code> is thickness of the ellipse arc outline, if positive. Otherwise, this indicates that a filled ellipse sector is to be drawn.

<code>circle(img, center, radius, color)</code> where <code>img</code> is an image where the circle is drawn, <code>center</code> - center of the circle, <code>radius</code> is a circle's radius, and <code>color</code> is a color of object.
</section>

## Instructions
<section id='instructions'>

You should use <code>cv.ellipse()</code> to draw a elliptical figure with the given parameters in <code>for</code>>.
Also we need to use <code>cv.circle()</code> to draw a circle in <code>for</code> too. We need it to draw centers of our figures.
</section>

## Tests
<section id='tests'>

```yml
tests:
    - text:  Use <code>cv.ellipse</code> to drow ellips on image
      testString: assert(code.match(/ellipse/g),'Use <code>cv.ellipse</code> to drow an ellips image'); 
    - text:  Use <code>cv.circle</code> to drow ellips on image
      testString: assert(code.match(/circle/g),'Use <code>cv.circle</code> to drow an ellips image'); 
```
</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html

<script type="text/javascript">

  function runSample() {

    let mat = new cv.Mat(300, 300, cv.CV_8UC3, new cv.Scalar(255, 255, 255, 255));
    let startAngles = [240.0, 0.0, -240.0];
    let endAngles = [-60.0, 300.0, 60.0];
    let colors = [new cv.Scalar(0, 0, 255, 255), new cv.Scalar(0, 255, 0, 255),new cv.Scalar(255, 0, 0, 255)];
    let centers = [new cv.Point(220, 170), new cv.Point(80, 170), new cv.Point(150, 60)];
    let circleRadius = 25;
    let whiteColor = new cv.Scalar(255, 255, 255, 255);
    let ellipseAxes = new cv.Size(50, 50);


    for (let i = 0; i < 3; ++i) {
      

    }
  
    cv.putText(mat, "OpenCV", new cv.Point(30, 270), cv.FONT_HERSHEY_PLAIN, 4, new cv.Scalar(0, 0, 0, 255), 5)
  
    cv.imshow('canvasOutput', mat);
    mat.delete();
  };
</script>

<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload='cv["onRuntimeInitialized"]=()=> { runSample() }' 
        type="text/javascript">
</script>
```
</div>
</section>

## Solution
<section id='solution'>

```html

<script type="text/javascript">

  function runSample() {
  
    
    let mat = new cv.Mat(300, 300, cv.CV_8UC3, new cv.Scalar(255, 255, 255, 255));
    let startAngles = [240.0, 0.0, -240.0];
    let endAngles = [-60.0, 300.0, 60.0];
    let colors = [new cv.Scalar(0, 0, 255, 255), new cv.Scalar(0, 255, 0, 255),new cv.Scalar(255, 0, 0, 255)];
    let centers = [new cv.Point(220, 170), new cv.Point(80, 170), new cv.Point(150, 60)];
    let circleRadius = 25;
    let whiteColor = new cv.Scalar(255, 255, 255, 255);
    let ellipseAxes = new cv.Size(50, 50);


    for (let i = 0; i < 3; ++i) {
        cv.ellipse(mat,centers[i], ellipseAxes, 0.0, startAngles[i], endAngles[i], colors[i], cv.FILLED);
        cv.circle(mat,centers[i], circleRadius, whiteColor, cv.FILLED); 
    }
  
    cv.putText(mat, "OpenCV", new cv.Point(30, 270), cv.FONT_HERSHEY_PLAIN, 4, new cv.Scalar(0, 0, 0, 255), 5)
  
    cv.imshow('canvasOutput', mat);
    mat.delete();
  };
</script>

<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload='cv["onRuntimeInitialized"]=()=> { runSample() }' 
        type="text/javascript">
</script>
```

</section>

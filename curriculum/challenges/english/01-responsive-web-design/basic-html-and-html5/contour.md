---
id: 5d4299689da0aed2a684435c
title: Contour
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
Contours can be explained simply as a curve joining all the continuous points (along the boundary), having same color or intensity. The contours are a useful tool for shape analysis and object detection and recognition. But firstly in this example we use <code>cv.Canny</code> to find edges of object.And only after that we can find contours. 
We use functions: <code>cv.findContours (image, contours, mode, method) </code> where <code>image</code> is an input image,<code>contours</code> is detect contours, each contour is stored as a vector of points <code>mode</code> is contour retrieval mode, <code>method</code> is contour approximation method, and <code>cv.drawContours(image,  contours,  contourIdx, color, thickness)</code> where <code>image</code> is an output image,<code>contours</code> is all input contours,<code>contourIdx</code> is a  parameter indicating a contour to draw, <code>color</code> is a color of the contours, <code>thickness</code> is a thickness of lines.
In this lesson we'll find a external contour of image via <code>cv.RETR_EXTERNAL</code> as <code>mode</code>.
</section>

## Instructions
<section id='instructions'>
You should use <code>cv.findContours()</code> to find contours and <code>cv.drawContours()</code> to draw contours.
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: You must have <code>cv.Canny</code> in your code
     testString: assert(code.match(/cv.Canny/g),'<code>cv.Canny</code> is not in initializes');
   - text: You need to use a <code>cv.findContours</code> to find contour on image
     testString: assert(code.match(/cv.findContours/g),' You need to use a <code>cv.findContours</code> to find contour on image');
   - text: You need to use a <code>cv.drawContours</code> to draw contour
     testString: assert(code.match(/cv.drawContours/g),'You need to use a <code>cv.drawContours</code> to draw contour');
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script type="text/javascript">
  function runSample() {
    let mat = cv.imread("imageSrc");
    let edged = new cv.Mat();
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();

    cv.Canny(mat, edged, 100, 200);
    cv.imshow("canvasCanny", edged);


    cv.imshow("canvasOutput", mat);
    edged.delete();
    contours.delete();
    hierarchy.delete();
  };
</script>

<h2>OpenCV.js</h2>
<img id="imageSrc" src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg"/>
<p></p>
<canvas id="canvasCanny" ></canvas>
<p></p>
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
    let mat = cv.imread("imageSrc");
    let edged = new cv.Mat();
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();

    cv.Canny(mat, edged, 100, 200);

    cv.imshow("canvasCanny", edged);

    cv.findContours(edged, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    cv.drawContours(mat, contours, -1, new cv.Scalar(255, 0, 0, 255),2);

    cv.imshow("canvasOutput", mat);
    edged.delete();
    contours.delete();
    hierarchy.delete();
  };
</script>

<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasCanny" ></canvas>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { runSample() }'
        type="text/javascript">
</script>
```

</section>

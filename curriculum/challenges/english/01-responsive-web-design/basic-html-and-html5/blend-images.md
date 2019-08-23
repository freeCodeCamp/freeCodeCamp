---
id: 5d3ffa56e5b42a8be2747034
title: Blend images
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
<code>cv.addWeighted()</code> method will help you blend pictures via calculating the weighted sum of two <code>cv.Mat()</code>.
Then we saying "weighted" we mean transparency of pictures. It's value vary from 0 to 1.
In this sample we are using next OpenCV function:
<code>cv.addWeighted(src1, alpha, src2, beta, gamma, dst)</code>

</section>

## Instructions
<section id='instructions'>
In the current sample we should set transparency(alpha, beta) of each picture(src1, src2), scalar which added to result(gamma) and cv.Mat() for result(dst).
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: Use <code>cv.addWeighted</code> to blend two image
     testString: assert(code.match(/cv.addWeighted/g),'to blend image');
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  function runSample() {
    let dst = new cv.Mat();
    let firstSrc = cv.imread("firstImageSrc");
    let secondSrc = cv.imread("secondImageSrc");
    let alpha = 0.5;
    let beta = 1;
    let gamma = 0.0;

    cv.imshow("canvasOutput", dst);
    firstSrc.delete();
    secondSrc.delete();
    dst.delete();
  };
</script>

<img id="firstImageSrc" src="http://bit.ly/fcc-relaxing-cat" style="width:200px;height:200px;"/>

<img id="secondImageSrc" src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" style="width:200px;height:200px;"/>

<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload= 'cv["onRuntimeInitialized"]=()=> { runSample() }'
        type="text/javascript">
</script>
```
</div>

</section>

## Solution
<section id='solution'>

```html
<script>
  function runSample() {
    let dst = new cv.Mat();
    let firstSrc = cv.imread("firstImageSrc");
    let secondSrc = cv.imread("secondImageSrc");
    let alpha = 0.5;
    let beta = 1;
    let gamma = 0.0;
    cv.addWeighted(firstSrc, alpha, secondSrc, beta, gamma, dst);
    cv.imshow("canvasOutput", dst);
    firstSrc.delete();
    secondSrc.delete();
    dst.delete();
  };
</script>

<img id="firstImageSrc" src="http://bit.ly/fcc-relaxing-cat" style="width:200px;height:200px;"/>

<img id="secondImageSrc" src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" style="width:200px;height:200px;"/>

<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload= 'cv["onRuntimeInitialized"]=()=> { runSample() }'
        type="text/javascript">
</script>
```

</section>

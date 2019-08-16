---
id: 5d568cd5b6ed021018c687fa
title: Inpaint
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
"Inpaint" method will help you restore your damaged picture via using one of the two algorithms: Fast Marching Method and algorithm based on fluid dynamics. In the current sample we are going to use Fast Marching Method(<code>cv.INPAINT_TELEA</code>): we are consider region of the picture for being inpainted. Algorithm starts from the boundary of this region and goes inside the region gradually filling everything in the boundary first. It takes a small neighbourhood around the pixel on the neigbourhood to be inpainted. This pixel is replaced by normalized weighted sum of all the known pixels in the neigbourhood.
In this sample we are using next OpenCV function:
<code>cv.inpaint(src, mask, dst, radius, method)</code> 
</section>

## Instructions
<section id='instructions'>
In the current sample we using <code>cv.line()</code> function for damage picture with black lines. You should restore picture with inpaint function.
Via drawing you can create mask for <code>cv.inpaint()</code> function. Then use "inpaint" function with source picture, created mask, and empty <code>cv.Mat()</code> for saving and showing result.
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
<canvas id="canvas"></canvas>
<img id="src" src="http://bit.ly/fcc-relaxing-cat" style="display:none"/>
<input type="button" id="myButton" value="Test" onclick="inpaint()"/>

<script type="text/javascript">

var src, srcCopy, mask, lastX, lastY;

window.onload = function()
{
  context = document.getElementById("canvas").getContext("2d");
  img = document.getElementById("src");
  context.canvas.width = img.width;
  context.canvas.height = img.height;
  context.drawImage(img, 0, 0);
};

document.getElementById("canvas").onmousedown = function(e)
{
  lastX = e.pageX - this.offsetLeft;
  lastY = e.pageY - this.offsetTop;
};

document.getElementById("canvas").onmousemove = function(e)
{
  if (lastX != undefined)
  {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    cv.line(srcCopy, {x: lastX, y: lastY}, {x: x, y: y}, [255, 255, 255, 255], 8);
    cv.line(mask, {x: lastX, y: lastY} , {x: x, y: y}, [255, 255, 255, 255], 8);
    cv.imshow("canvas", srcCopy);
    lastX = x;
    lastY = y;
  }
};

document.getElementById("canvas").onmouseup = document.getElementById("canvas").onmouseleave = function(e)
{
    lastX = undefined;
    lastY = undefined;
};

function init()
{
  srcCopy = cv.imread("src");
  for (let i = 0; i < 5; ++i) {
    let xstart = Math.floor(Math.random() * srcCopy.cols); 
    let ystart = Math.floor(Math.random() * srcCopy.rows); 
    let xend = Math.floor(Math.random() * srcCopy.cols); 
    let yend = Math.floor(Math.random() * srcCopy.rows); 
    cv.line(srcCopy, {x: xstart, y: ystart}, {x: xend, y: yend}, [0, 0, 0, 255], 2);
  }
  cv.imshow("canvas", srcCopy);
 
  src = new cv.Mat();
  cv.cvtColor(srcCopy, src, cv.COLOR_RGBA2RGB);
  mask = new cv.Mat.zeros(src.size(), cv.CV_8UC1);
}

function inpaint()
{
  let dst = new cv.Mat();

  cv.imshow("canvas", dst);
  src.delete();
  mask.delete();
  dst.delete();
}
</script>


<script async src="https://docs.opencv.org/master/opencv.js" 
        onload='cv["onRuntimeInitialized"]=()=> { init() }'  
        type="text/javascript">
</script>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<canvas id="canvas"></canvas>
<img id="src" src="http://bit.ly/fcc-relaxing-cat" style="display:none"/>
<input type="button" id="myButton" value="Test" onclick="inpaint()"/>

<script type="text/javascript">

var src, srcCopy, mask, lastX, lastY;

window.onload = function()
{
  context = document.getElementById("canvas").getContext("2d");
  img = document.getElementById("src");
  context.canvas.width = img.width;
  context.canvas.height = img.height;
  context.drawImage(img, 0, 0);
};

document.getElementById("canvas").onmousedown = function(e)
{
  lastX = e.pageX - this.offsetLeft;
  lastY = e.pageY - this.offsetTop;
};

document.getElementById("canvas").onmousemove = function(e)
{
  if (lastX != undefined)
  {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    cv.line(srcCopy, {x: lastX, y: lastY}, {x: x, y: y}, [255, 255, 255, 255], 8);
    cv.line(mask, {x: lastX, y: lastY} , {x: x, y: y}, [255, 255, 255, 255], 8);
    cv.imshow("canvas", srcCopy);
    lastX = x;
    lastY = y;
  }
};

document.getElementById("canvas").onmouseup = document.getElementById("canvas").onmouseleave = function(e)
{
    lastX = undefined;
    lastY = undefined;
};

function init()
{
  srcCopy = cv.imread("src");
  for (let i = 0; i < 10; ++i) {
    let xstart = Math.floor(Math.random() * srcCopy.cols); 
    let ystart = Math.floor(Math.random() * srcCopy.rows); 
    let xend = Math.floor(Math.random() * srcCopy.cols); 
    let yend = Math.floor(Math.random() * srcCopy.rows); 
    cv.line(srcCopy, {x: xstart, y: ystart}, {x: xend, y: yend}, [0, 0, 0, 255]);
  }
  cv.imshow("canvas", srcCopy);
 
  src = new cv.Mat();
  cv.cvtColor(srcCopy, src, cv.COLOR_RGBA2RGB);
  mask = new cv.Mat.zeros(src.size(), cv.CV_8UC1);
}

function inpaint()
{
  let dst = new cv.Mat();
  cv.inpaint(src, mask, dst, 3, cv.INPAINT_TELEA);
  cv.imshow("canvas", dst);
  src.delete();
  mask.delete();
  dst.delete();
}
</script>


<script async src="https://docs.opencv.org/master/opencv.js" 
        onload='cv["onRuntimeInitialized"]=()=> { init() }'  
        type="text/javascript">
</script>
```

</section>

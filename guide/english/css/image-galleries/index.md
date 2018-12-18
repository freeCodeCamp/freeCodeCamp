---
title: Image Galleries
---
## Image Galleries
You can use CSS to create you own image galleries.

## Image Gallery Example
```
<html>
<head>
<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: 150px;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
</head>
<body>

<div class="gallery">
  <a target="_blank" href="fjords.jpg">
    <img src="https://www.dropbox.com/s/mdj3pjh4jgyeieo/cat1.jpg?raw=1" alt="Image of staring cat" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="forest.jpg">
    <img src="https://www.dropbox.com/s/i1ow97mcl6ubxhv/cat2.jpg?raw=1" alt="Image of fat cat" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="lights.jpg">
    <img src="https://www.dropbox.com/s/h6ks8v78ncwur31/cat3.jpg?raw=1" alt="Image of frolicking cat" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="mountains.jpg">
    <img src="https://www.dropbox.com/s/zda9llgop3j9bf7/cat4.jpg?raw=1" alt="Image of wide-eyed cat" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

</body>
</html>
```
## Results:
![Gallery of Cats](https://www.dropbox.com/s/vke4gp96aiz6qtv/gallery.PNG?raw=1)
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com/css/css_image_gallery.asp

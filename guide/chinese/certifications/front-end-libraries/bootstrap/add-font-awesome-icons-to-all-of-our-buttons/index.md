---
title: Add Font Awesome Icons to all of our Buttons
localeTitle: 将Font Awesome Icons添加到我们所有的按钮中
---
## 将Font Awesome Icons添加到我们所有的按钮中

### 问题解释

使用Font Awesome将`info-circle`图标添加到信息按钮，将`trash`图标添加到删除按钮。

#### 相关链接：

*   [字体真棒](https://fontawesome.com/)
*   [Font Awesome v4和v5之间有所不同](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)

### 暗示

*   此页面的Font Awesome样式表是版本4.5.0，因此您应该使用`fa`前缀而不是新的`fas` 。查看[链接](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)以了解有关v4和新v5之间差异的更多信息。
*   可以在[此处](https://fontawesome.com/icons?d=gallery)找到徽标和徽标的相关CSS类。
*   在`<i>`标签和文本之间添加空格将使其具有良好的间距。

## 扰流板警报！

**提前解决！**

### 解：

```html

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> 
 <style> 
  h2 { 
    font-family: Lobster, Monospace; 
  } 
 
  .thick-green-border { 
    border-color: green; 
    border-width: 10px; 
    border-style: solid; 
    border-radius: 50%; 
  } 
 </style> 
 
 <div class="container-fluid"> 
  <div class="row"> 
    <div class="col-xs-8"> 
      <h2 class="text-primary text-center">CatPhotoApp</h2> 
    </div> 
    <div class="col-xs-4"> 
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
    </div> 
  </div> 
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera."> 
  <div class="row"> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i>Delete</button> 
    </div> 
  </div> 
  <p>Things cats <span class="text-danger">love:</span></p> 
  <ul> 
    <li>cat nip</li> 
    <li>laser pointers</li> 
    <li>lasagna</li> 
  </ul> 
  <p>Top 3 things cats hate:</p> 
  <ol> 
    <li>flea treatment</li> 
    <li>thunder</li> 
    <li>other cats</li> 
  </ol> 
  <form action="/submit-cat-photo"> 
    <label><input type="radio" name="indoor-outdoor"> Indoor</label> 
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label> 
    <label><input type="checkbox" name="personality"> Loving</label> 
    <label><input type="checkbox" name="personality"> Lazy</label> 
    <label><input type="checkbox" name="personality"> Crazy</label> 
    <input type="text" placeholder="cat photo URL" required> 
    <button type="submit">Submit</button> 
  </form> 
 </div> 

```
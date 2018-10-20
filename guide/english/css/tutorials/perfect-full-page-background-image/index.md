## Perfect Full Page Background Image

Creating a full page background image can be created in these 4 different, easy ways.

## Way 1:
```css
html { 
  background: url(images/bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
```

## Way 2:
```html
<img src="images/bg.jpg" id="bg" alt="">
```
```css
#bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  #bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}
```

## Way 3:
```html
<img src="images/bg.jpg" id="bg" alt="">
```
```css
#bg {
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
```

## Way 4:
```html
<div id="bg">
  <img src="images/bg.jpg" alt="">
</div>
```
```css
#bg {
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
}
#bg img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}
```

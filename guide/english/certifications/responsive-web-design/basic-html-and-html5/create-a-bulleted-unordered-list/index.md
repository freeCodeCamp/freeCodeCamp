---
title: Create a Bulleted Unordered List
---
## Create a Bulleted Unordered List

To pass the challenge the first operation you should do is to remove the `p` elements with all their content.

After that you have to implement the list: it must contains at least three `li` element inside the `ul` element and these `li` must be on the same level, not nested into each other:

Correct: 
```
<ul>
  <li></li>
  <li></li>
</ul>
```
Not correct: 
```
<ul>
  <li>
    <li>
    </li>
  </li>
</ul>
```

Good luck!

### Solution
Firstly, we need to remove the `<p>` elements and replace it with `<li>`, as well as add a third `<li>` as shown below:

#### Before removal of `<p>` and replacement with `<li>`
```html
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

#### After removal of `<p>` and replacement with `<li>`
```html
<li>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</li>
<li>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</li>
<li> Your third sentence. </li>
```
Afterwards, we need to place a `<ul>` element with a closing `<li>` tag inside these 3 `<li>` elements within the `<main>` element as shown below:

#### Before adding `<ul>` element
```html
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <li>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</li>
  <li>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</li>
  <li> Your third sentence. </li>
  
</main>
```

#### After adding `<ul>` element
```html
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
 <ul>  <!-- The <ul> element has been added  -->
  <li>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</li>
  <li>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</li>
  <li> Your third sentence. </li>
 </ul> <!-- The <ul> closing tag has been added -->
</main>
```
### Final Solution
```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
 <ul>  
  <li>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</li>
  <li>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</li>
  <li> Your third sentence. </li>
 </ul>
</main>
```

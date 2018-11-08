Add Borders Around Your Elements
Sometimes you want to have border around some image inside html code. In this case we use the "border-/.../" class which aloows to customize border formatting also.
Inserting class between <style> and </style> tag.

example:
```css
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```
To set the color of the border use:
```css
.example {
border-color: green;
}
```
(Note:-In place of green desired color can be inserted)

To set the width of the border use:
```css
.example {
border-width: 10px;
}
```
(Note:- Width of the border should be provided in pixels.)

To set the style of the border use:
```css
.example {
border-style: thick;
}
```
(Note:- To set the style of the border add the type infront of style element.)

Finally add the style class made to desired tag to apply given instructions within style block.
Now finally the created class need to be inserted within the opening tag of imag src.

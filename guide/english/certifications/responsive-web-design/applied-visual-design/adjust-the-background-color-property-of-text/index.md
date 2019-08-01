---
title: Adjust the background-color Property of Text
---
# Adjust the background-color Property of Text

---
title: Adjust the background-color Property of Text
---
# Adjust the background-color Property of Text

Background-color property: This CSS property sets the background color of any element

Syntax:

If we want to apply a background color to the entire body:

```css
body{
  background-color: *the color to be applied*;
}
```

We can specify colors in a number of ways

1. Directly naming the colors:
  ``` css
  body{
   background-color: red;
  }
  ```
  
2. Using hexadecimal codes: 
``` css
body{
   background-color: #ff0000;
  }
```

3. RGB/RGBA:
Here, r stands for the amount of red color, b for blue color, g for green color and a for alpha which specifies the level of opacity
a is optional while using RGBA. Value of a can range from 0 to 1, with 0 being the most transparent and 1 being the most opaque
The rgb values can range from 0 to 255. 
```css
body{
  background-color: rgba(255, 0,0,0.1);
}
```

Another way is using HSL which will be mentioned in detail in the upcoming challenges.

## The challenge is to change the color of h4 tag using rgba. It also requires removing 'height' attribute from h4 and adding 'padding' instead.

**Hint: Add rgba(45,45,45,0.1) to h4 tag in CSS**

<details><summary>See entire solution</summary>
<p>
  
```css
  h4{
    text-align: center;
    background-color: rgba(45,45,45,0.1);
    padding:10pxor: rgba(255, 0,0,0.1);  
  }
  ```  
</p>

</details>

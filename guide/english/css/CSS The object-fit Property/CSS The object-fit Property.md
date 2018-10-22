---
title: CSS The object-fit Property
---
## CSS The object-fit Property

The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

## The CSS object-fit Property
The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".


**Example**
```img {
    width: 200px;
    height: 400px;
}
```
We see that the image is being squeezed to fit the container of 200x400 pixels, and its original aspect ratio is destroyed.

If we use object-fit: cover; it will cut off the sides of the image, preserving the aspect ratio, and also filling in the space, like this:

**Example**
```img {
    width: 200px;
    height: 400px;
    object-fit: cover;
}
```

## All Values of The CSS object-fit Property
The object-fit property can have the following values:

```fill - This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit
   contain - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box
   cover - The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit
   none - The replaced content is not resized
   scale-down - The content is sized as if none or contain were specified (would result in a smaller concrete object size)
```
The following example demonstrates all the possible values of the object-fit property:

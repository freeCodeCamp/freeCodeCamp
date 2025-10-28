---
title: Introduction to the Learn CSS Flexbox by Building a Photo Gallery
block: learn-css-flexbox-by-building-a-photo-gallery
superBlock: 2022/responsive-web-design
---

## Introduction to the Learn CSS Flexbox by Building a Photo Gallery

A website's User Interface ("UI") has two components. First, there are the visual elements, such as colors, fonts, and images. Second, there is the placement or positioning of those elements. In Responsive Web Design, a UI layout must accommodate many different browsers and devices accessing the content.

CSS3 introduced Flexible Boxes, or flexbox, to create page layouts for a dynamic UI. It is a layout mode that arranges elements in a predictable way for different screen sizes and browsers.

Flexbox consists of a flex container and its flex items. The container is the parent element that holds the items you want to arrange. The items are the child elements inside the container. It's like the frame of your photo gallery and the photos within it.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

You can then use properties like `justify-content` and `align-items` to further customize the layout of your page. Flexbox allows you to adjust the layout dynamically, ensuring that your photos look great on any device, whether it's a small phone screen or a large desktop monitor.

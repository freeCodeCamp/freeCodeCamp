---
title: Make Typography Responsive
---
## Make Typography Responsive

For text, instead of using the absolute units ```em``` and ```px```, it is considered best practice to use viewport units when you want your elements to be relative to the size of the device's screen. The distinction between using viewport units and using percentages is that viewport units only care about the dimension of the screen and percentages only care about its parent container's dimensions.

## Hint 1
Viewport units also represent percentages. If you'd like to change the height of a paragraph element to 40% of the viewport's height, you would have this between your style tags:
```css
p {
  vh: 10vh;
}
```

## Solution
```css
<style>
    h2 {
        vw: 80vw;
    }
    p {
        vmin: 75vmin;
    }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

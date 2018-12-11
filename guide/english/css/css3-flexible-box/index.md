---
title: CSS3 Flexible Box
---
## CSS3 Flexible Box
The Flexbox model provides for an efficient way to lay out, align, and distribute space among elements within your document  - even when the viewport and the size of your elements is dynamic or unknown.

The most important idea behind the Flexbox model is that the parent container can alter its items' width/height/order to best fill the available space. A flex container expands items to fill available free space, or shrinks them to prevent overflow.<sup>1</sup>


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### Basic usage
Flexbox can be used to center any amount of given elements inside one element. Given the following HTML structure:

``` html
<div class="main-container">
  <div class="container-item">
    This is the first container item
  </div>
  <div class="container-item">
    This is the second container item
  </div>
</div>
```

The following css code will apply the Flexbox model, filling the parent's container equally with its children containers and content:

``` css
.main-container {
  display: flex;
}

.container-item {
  flex: 1;
}
```

In this example, the parent container is utilizing the property display set to the value of flex. This will allow children of the main container to make use of the flex property. 

Another basic example of using the Flexbox model is the following code - used for the purpose of centering content within a parent container:

``` css
.center-elements-inside {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
```

Let's break down this example. First we set the display property to "flex" so we can apply our flexbox properties. Next we declare the way flexbox will handle our elements. This can either be in a row or in a column. Setting it to row will align the elements horizontal inside the element. The column will align them vertical.

Now lets have a short look at "justify-content". This property declares how elements are distributed inside the parent element. We chose the "center" value. This means all elements inside this element will be centered. "Flex-start" will align everything to the left, and "flex-end" to the right.

There are three slightly more interesting options for `justify-content` you might want to try out. "space-between" will evenly space the children out across the available space, pushing the outermost children to the edges. "space-evenly" ensures the same amount of space between the items; this can look a little more centralized. "space-around" gives them equal space all around themselves, a little like a margin - two adjacent children will have double the space where they touch, and only a single amount where they're alongside the border.

`justify-content` defines the behavior of child elements on the main axis. What about vertical? This is where you'll need `align-items`, which defines how items lie on the cross-axis. Keep in mind that whether you're in a row or a column will determine what your main and your cross axis is.

`flex-start`, `center` and `flex-end` behave as before - left, center and right have become top, center and bottom. Other options are `baseline`, whereby all children will centralize themselves down a single baseline, and `stretch`, whereby they will stretch to fill the container.


#### More Information

- To get a complete understanding of Flexbox, read <a href="https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af" target='_blank' rel="nofollow">Understanding Flexbox Everything you need to know</a> on the FreeCodeCamp Medium page.

- For an interactive guide go through <a href="https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676" target="_blank" rel="nofollow">The Ultimate Guide to Flexbox — Learning Through Examples</a>

- A great visual guide to Flexbox is provided by [JavaScript Teacher](https://medium.freecodecamp.org/@js_tut) on the FreeCodeCamp Medium page: [The Complete Illustrated Flexbox Tutorial](https://medium.freecodecamp.org/the-complete-illustrated-flexbox-tutorial-d35c085dbf35).

- Yet another great visual guide that is in-depth but easy to follow can be found in <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="nofolow"> A Guide to Flexbox</a> by <a href="https://css-tricks.com" target="_blank" rel="nofolow">CSS-Tricks</a>

- I suggest working out while playing the game [Flexbox Froggy](http://flexboxfroggy.com)- [Guide](https://github.com/thomaspark/flexboxfroggy)

- <a href="https://flexbox.io/" target="_blank" rel="nofolow">A simple, free 20 video course that will help you master CSS Flexbox! by Wes Bos</a>

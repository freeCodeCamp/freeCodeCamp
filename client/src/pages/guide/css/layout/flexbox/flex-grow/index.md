---
title: Flex-grow
---
# Flex-Grow

The flex-grow property is a flexbox property that allows you to specify the allocation of free space to containers within a flex-container. It provides a solution to all that unwanted space!

It'll turn your container from this

<img src = "https://i.imgur.com/lFJaBUfh.png">

<b><h1>to this</h1></b>

<img src = "https://i.imgur.com/4X8ITZih.png">

What just happened?

Well, we added two things to the css syntax.

HTML

```html
<p class = "ten">1</p>
<p class = "twenty">2</p>
```

CSS

```css
body {
  display:flex;
}

p {
  flex-grow: 1;
}
```

Two things happened

1. The parent container was converted into a flex-display by `display:flex`
2. The remaining "free space" was then allocated among the remaining p containers in an equal ration since each has a flex-grow property of 1.

What happens if we have p containers with different flex-grow properties?

Let's see an example.

First let's create two paragraphs and enable display: flex;

<img src = "https://i.imgur.com/wPqUgsih.png">

Notice a few things

- The colour scheme is nice
- There's some empty space to the right of the two boxes.

That empty space is the "free space" that will be allocated to each of the different paragraphs later depending on their flex-grow properties.

To see this in action, let's give the first one a class of "ten" and a flex-grow property of 1. Let's also give the second one a class of "twenty" and a flex-grow property of 2.

<img src = "https://i.imgur.com/7n0V1G4h.png">

Notice a few things

1. The second one's size is not double that of the first one despite having a flex-grow property that is double that of the first.
2. The entire space is filled. ( Some margins were added to the side to enable it to be seen more clearly. )

As we resize the screen, we also find that the first one shrinks at twice the speed of the second one.

<img src = "https://i.imgur.com/pa4grM8h.png">

#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->

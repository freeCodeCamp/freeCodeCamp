---
title: Styling Links
---
## Styling Links
Links can be styled with any CSS property, such as ```color```, ```font-family```, ```font-size```, and ```padding```.
Here is an easy example:
```css
a {
    color: hotpink;
}
```

## In addition, links can be styled differently depending on what state they are in.
Links also have 4 states, and many programmers style each state differently.
The four states are:
* ```a:link```: an unvisited, unclicked link
* ```a:visited```: a visited, clicked link
* ```a:hover```: a link when the user's mouse is over it
* ```a:active```: a link when it is clicked

The `<a href="">` property is responsible for creating URLs and can be modified using a number of CSS styling properties, although it has a few by default:
1. Underline
2. Blue color

You can change these by adding or changing the `color` and `text-decoration` properties.

```css
   color: black;
   text-decoration: none;
```

You can also style the link based on interaction using these properties, also known as link states:

- a:link - a normal, unvisited link
- a:visited - a link the user has visited
- a:hover - a link when the user mouses over it
- a:active - a link the moment it is clicked

Here is some sample CSS using the 4 states:
```css
a:link { color: red; }
a:visited { color: blue; }
a:hover { color: green; }
a:active { color: blue; }
```

**Note** that there are some *ordering rules* for when you are setting the style for link states.
* ```a:hover``` MUST come after ```a:link``` and ```a:visited```
* ```a:active``` MUST come after ```a:hover```

    a:link - a normal, unvisited link
    a:visited - a link the user has visited
    a:hover - a link when the user mouses over it
    a:active - a link the moment it is clicked

```css
/* unvisited link */
a:link {
    color: red;
}

/* visited link */
a:visited {
    color: green;
}

/* mouse over link */
a:hover {
    color: hotpink;
}

/* selected link */
a:active {
    color: blue;
} 
```

#### More Information:
 
 -  [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)

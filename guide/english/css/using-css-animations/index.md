---
title: Using CSS Animations
---
## Using CSS Animations

CSS animations are a way to transition from one style configuration to another. There are two components to a CSS animation: an HTML element, and `keyframes`, which create a timeline of how the animation should look from beginning to end.

The `animation` property has the following sub-properties:
- `animation-delay`
- `animation-direction`
- `animation-duration`
- `animation-iteration-count`
- `animation-name`
- `animation-play-state`
- `animation-timing-function`
- `animation-fill-mode`

### Example

HTML:

```html
<div class="container">
    <h3> Hello World ! </h3>
</div>
```
CSS:

```css
.container {
    /* We will define the width, height and padding of the container */
    /* The text-align to center */
    width: 400px;
    height: 60px;
    padding: 32px;
    text-align: center;

    /* Use the animation `blink` to repeat infinitely for a time period of 2.5s*/
    animation-duration: 2.5s;           
    animation-iteration-count: infinite;
    animation-direction: normal;        
    animation-name: blink;              
    
    /* The same can be written shorthand as     */
    /* --------------------------------------   */
    /* animation: 2.5s infinite normal blink;   */
}
@keyframes blink {
    0%, 100% {              /* Defines the properties at these frames */
        background: #333;
        color: white;
    }

    50% {                   /* Defines the properties at these frames */
        background: #ccc;
        color: black;
        border-radius: 48px;
    }
}
```
![Imgur](https://imgur.com/sczZjwm.gif)


#### More Information:
For more deatils on CSS Animations, please visit [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

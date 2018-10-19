---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

You have probably seen embedded videos on your favorite websites on many occasions. Today we will talk about embedding YouTube videos, which is very easy to do, even if you don't have any prior knowledge of it. For this action we will use `<frame>` element, which is very useful in embedding other HTML elements. It's often used for promoting products in ads. Notice that you're not only limited to YouTube - you can also experiment with other documents.

### `<frame>` Element

#### Using
You can easily put your chosen video by using `<frame>` element. But remember, you also need to define height and width of your player, so we will use attributes `height` and `width`.

What we will need?
- Video on YouTube and URL
- `<frame>` element (don't forget to close it!)
- `width` and `height` attributes

```html
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=v8kFT4I31es">
</iframe>
```

Inserted values are recommended, but feel free to change them in a way that you would like.

#### Autoplay
What should we do if we would like to make the video play automatically? Just add to your link value `?autoplay=1`. But be careful, because it can be annoying for a lot of people visiting your webpage.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1">
</iframe>
```

---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

Probably a lot of times you have seen embedded videos on your favorite websites. Today we will talk about embedding YouTube videos, which is very easy to do, even if you don't have any knowledge about it. For this action we will use `<frame>` element, which is very useful in embedding inline frames in HTML. It's very often used for advertisements to promote products. Notice that you're not only limited to YouTube - you can also experiment with other documents.

### `<frame>` Element

#### Using
You can easily embed your chosen video by using `<frame>` element. But remember, you also need to define height and width of your player, so we will use attributes `height` and `width`.

What we will need?
- Video on YouTube and URL
- `<frame>` element (don't forget to close it!)
- `width` and `height` attributes

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/v8kFT4I31es">
</iframe>
```

Inserted values are recommended, and feel free to change them however you like.

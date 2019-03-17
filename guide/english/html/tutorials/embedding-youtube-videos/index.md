---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

Probably a lot of times you have seen embedded videos on your favorite websites. Today we will talk about embedding YouTube videos, which is very easy to do, even if you don't have any knowledge about it. For this task we will use `<frame>` element, which is very useful in embedding other HTMLs. It's very often used to promote some products as adds. Notice that you're not only limited to YouTube - you can also experiment with other documents.

### `<frame>` Element

#### Using
You can easily put your chosen video by using `<frame>` element. But remember, you also need to define height and width of your player, so we will use attributes `height` and `width`.

What we will need?
- Video on YouTube and URL
- `<frame>` element (don't forget to close it!)
- `width` and `height` attributes

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/v8kFT4I31es">
</iframe>
```

Inserted values are recommended, but feel free to change them in a way that you would like.

#### Autoplay
What should we do if we would like to make this player start playing automatically? Just add to your link value `?autoplay=1`. But be careful, because it can be annoying for a lot of people visiting your webpage.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1">
</iframe>
```

Inserted values are recommended, and feel free to change them however you like.

## YouTube Loop

Value 0 (default): The video will play only once.<br>
Value 1: The video will loop (forever).

```
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```

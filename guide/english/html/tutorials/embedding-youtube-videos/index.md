---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

You've probably seen a lot of embedded videos on your favourite websites. So, how do we embed YouTube videos for our own website? Simple! In order to embed a YouTube video, we'll need an `<iframe>` element. This element allows us to embed another document in our current HTML document. It's often used for promoting products in ads. Keep in mind that you're not only limited to YouTube - you can also experiment with other documents.

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

#### Autoplay
What should we do if we would like to make this player starting automatically playing? Just add to your link value `?autoplay=1`. But be careful, because it can be annoying for a lot of people visiting your webpage.

```html
<iframe width="420" height="315"
src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1">
</iframe>
```

## YouTube Loop

Value 0 (default): The video will play only once.<br>
Value 1: The video will loop (forever).

```
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```

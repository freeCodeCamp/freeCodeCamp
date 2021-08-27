---
id: 587d78a9367417b2b2512aea
title: 使用貝塞爾曲線讓運動更加自然
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

在這個挑戰中，我們需要給元素添加動畫來模擬雜耍中被拋接的球。 之前的挑戰中，我們學習了 `linear` 和 `ease-out` 的貝塞爾曲線描述，但這兩個都無法完美地描述雜耍球的運動。 在本關裏你需要定製貝塞爾曲線。

當 `animation-iteration-count` 值爲 infinite 時，`animation-timing-function` 會自動循環 keyframe。 由於我們是在動畫週期的中間點（`50%` 處）設置的 keyframe 規則，最終的結果是球向上和球向下是兩個同樣的動畫過程。

下面的例子模擬了雜耍球運動：

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

注意 y2 的值是大於 1 的。 雖然貝塞爾曲線是在 1*1 的座標系統內，x 值只能在 0 到 1，但是 y 值是可以大於 1 的。 這樣才能模擬雜耍球運動。

# --instructions--

把 id 爲 `green` 的元素的 `animation-timing-function` 值改成 `cubic-bezier` 函數，函數的參數 x1，y1，x2，y2 值依次爲 0.311、0.441、0.444、1.649。

# --hints--

id 爲 `green` 的元素的 `animation-timing-function` 值應爲 `cubic-bezier` 函數，函數的參數 x1，y1，x2，y2 值應爲指定值。

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

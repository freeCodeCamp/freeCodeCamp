---
title: Transition
localeTitle: 过渡
---
## 过渡

`transition`属性允许您在给定的持续时间内平滑地（从一个值到另一个值）更改属性值。 \`\`\`CSS 过渡：全部300毫秒;
```
### Transition on Several Property Values 
 
 You can change multiples property values with transition property. 
```

CSS 过渡：宽度300ms，高度2s;
```
### Specify the Speed Curve of the Transition 
 
 You can specify a speed curve on an element in transition property. 
```

CSS 过渡：高度2s线性;
```
or the property `transition-timing-function` 
```

CSS transition-timing-function：linear; \`\`\`

### `transition-timing-function`不同值

`ease` - 指定缓慢启动的转换效果，然后快速，然后缓慢结束（这是默认值） `linear` - 指定从开始到结束具有相同速度的过渡效果 `ease-in` - 指定缓慢启动的过渡效果 `ease-out` - 指定慢速结束的过渡效果 `ease-in-out` - 指定缓慢开始和结束的过渡效果 `cubic-bezier(n,n,n,n)` - 允许您在cubic-bezier函数中定义自己的值

#### 更多信息：

*   MDN文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
*   Easings参考： [Easings](http://easings.net/en)
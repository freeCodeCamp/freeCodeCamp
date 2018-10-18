---
title: Use the map Method to Extract Data from an Array
localeTitle: 使用映射方法从数组中提取数据
---
## 使用映射方法从数组中提取数据

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

array.prototype.map采用输入中的函数并返回一个数组。返回的数组包含由函数处理的元素。此函数将各个元素作为输入。

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")中级代码解决方案：

```javascript
  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) ); 
```

###代码说明： 使用ES6表示法，处理数组中的每个项目以提取标题和评级。 返回对象需要Parantheses。

#### 相关链接

*   [箭头功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
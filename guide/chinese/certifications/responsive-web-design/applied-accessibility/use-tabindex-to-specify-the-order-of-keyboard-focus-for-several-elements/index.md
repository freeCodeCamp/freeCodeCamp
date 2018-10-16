---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: 使用tabindex指定多个元素的键盘焦点顺序
---
## 使用tabindex指定多个元素的键盘焦点顺序

按照说明：

将tabindex属性设置为“1”到搜索输入，tabindex属性设置为“2”到提交输入。

第16和17行 \`\`\`CSS  
```
become: 
 
 ```css 
    <input type="search" name="search" id="search"> 
    <input type="submit" name="submit" value="Submit" id="submit"> 
```

通过这种方式，搜索输入和提交输入表单控制为选项卡顺序中的前两项。
---
title: How to Create Popups
localeTitle: 如何创建弹出窗口
---
## 如何创建弹出窗口

当您使用鼠标选择选项或按特殊功能键时，弹出窗口会弹出（显示）。

在此示例中，当您单击按钮时将显示弹出窗口，并且在您按下X选项之前将保持在屏幕上。

我们将使用`HTML` ， `CSS`和`JavaScript`构建弹出窗口

### 第1步HTML

HTML提供弹出窗口的结构

\`\`\`HTML

打开PopUp

弹出JavaScript

X
```
### Step 2 CSS 
 We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 
```

CSS .popup _main_ div { 位置：固定; 宽度：800px; 身高：400px; 边框：2px纯黑色; border-radius：5px; background-color：#fff; 左：50％; margin-left：-400px; 最高：50％; margin-top：-250px; display：none;

} .close _popup { 位置：绝对; 宽度：25px; 身高：25px; border-radius：25px; 边框：2px纯黑色; text-align：center; 右：5px; 上：5px; 游标：指针; } .close_ popup p { margin-top：5px; font-weight：400;

} 。文本{ text-align：center; font-size：30px; font-weight：400; 保证金最高：22％; } #Btn { 位置：绝对; 左：50％; 顶部：20％;

}
```
### Step 3 JavaScript 
```

JS //首先，我将初始化我的变量 //选择我们将从DOM中使用的元素 //我将在按钮中添加en事件，该事件将触发一个函数，将弹出窗口的显示样式从none更改为block

const Btn = document.getElementById（“Btn”） const PopupDiv = document.querySelector（“。popup _main_ div”） const ClosePopup = document.querySelector（“。close\_popup”） Btn.addEventListener（ '点击'，函数（）{ PopupDiv.style.display = “块” }） ClosePopup.addEventListener（ '点击'，函数（）{ PopupDiv.style.display = “无” }）

\`\`\`

实时代码： [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)
---
title: Popup Boxes
localeTitle: 弹出框
---
## 弹出框

弹出框（或对话框）是用于通知或警告用户或从用户获得输入的模态窗口。

弹出框阻止用户访问程序的其他方面，直到弹出窗口关闭，因此不应过度使用它们。

JavaScript中使用了三种不同的弹出方法： [window.alert（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) ， [window.confirm（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)和[window.prompt（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) 。

### 警报

[警报方法](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)显示不需要用户输入响应的消息。调用此函数后，将出现一个警告对话框，其中包含指定的（可选）消息。在警报消失之前，用户需要确认消息。

### 例：

`window.alert("Welcome to our website");`

![MDN警报示例](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### 确认

[confirm方法](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)类似于`window.alert()` ，但在弹出窗口中也显示一个取消按钮。按钮返回布尔值：true表示OK，false表示取消。

### 例：

```javascript
var result = window.confirm('Are you sure?'); 
 if (result === true) { 
    window.alert('Okay, if you're sure.'); 
 } else { 
    window.alert('You seem uncertain.'); 
 } 
```

![MDN确认示例](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### 提示

[提示方法](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)通常用于从用户获取文本输入。此函数可以使用两个参数，这两个参数都是可选的：要显示给用户的消息和要在文本字段中显示的默认值。

### 例：

`var age = prompt('How old are you?', '100');`

![MDN提示示例](https://mdn.mozillademos.org/files/11303/prompt.png)

### 其他设计选项：

如果您对默认的JavaScript弹出窗口不满意，可以在各种UI库中替换。例如，SweetAlert为标准JavaScript模式提供了一个很好的替代品。您可以通过CDN（内容分发网络）将其包含在HTML中并开始使用。

```HTML
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
```

语法如下： `swal(title, subtitle, messageType)`

```javascript
swal("Oops!", "Something went wrong on the page!", "error"); 
```

上面的代码将生成以下弹出窗口： ![SweetAlert示例](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9) SweetAlert绝不是标准模态的唯一替代品，但它干净且易于实现。

#### 更多信息：

*   [MDN window.alert（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
*   [MDN window.confirm（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
*   [MDN window.prompt（）](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
---
title: Window Confirm Method
localeTitle: 窗口确认方法
---
## 窗口确认方法

您可以使用`confirm`方法要求用户仔细检查网页上的决定。当您调用此方法时，浏览器将显示一个对话框，其中有两个选项，分别为“确定”和“取消”。

例如，假设有人刚刚单击了“删除”按钮。您可以运行以下代码：

```javascript
if (window.confirm("Are you sure you want to delete this item?")) { 
  // Delete the item 
 } 
```

消息“您确定要删除此项吗？”将出现在对话框中。如果用户单击OK，则confirm方法将返回`true` ，浏览器将在if语句中运行代码。如果他或她单击取消，该方法将返回`false`并且不会发生任何其他情况。这可以防止有人意外点击删除。

#### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
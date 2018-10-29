---
title: Button Tag
localeTitle: 按钮标记
---
## 按钮标记

`<button>`标记指定HTML文档上的可单击按钮。 在`<button>`标签之间，您可以放置​​内容，如文本或图像。这与使用`<input>`标签创建的按钮不同，后者仅将文本作为内容。

**句法：**

`<button type="submit">Click Here!</button>`

**Atributes：**

以下是HTML 4支持的关联属性：

| **属性** | **价值** | **它做了什么** | | --- | --- | --- | |禁用|禁用|禁用按钮| |名字|名字|指定按钮的名称。该名称用于引用HTML表单，JS等按钮 |类型|按钮或重置或提交|设置按钮的类型。 `button`类型的`button`是一个简单的可点击按钮， `submit`类型提交表单数据，而`reset`类型则重置表单数据。 | |价值|文字|设置按钮的初始值。该值与表单数据一起发送。 |

HTML 5支持以下额外属性：

| **属性** | **价值** | **它做了什么** | | --- | --- | --- | |自动对焦|自动对焦|当页面加载时，按钮是否应自动获得焦点。例如，请参阅Google。当页面完全加载时，文本框会自动获得焦点。 | |形式| form\_id |指定按钮所属的一个或多个表单。 | |形成|网址|指定按下`submit`类型按钮后发送表单数据的位置。 | | formmethod |获取或发布|指定如何发送表单数据。仅适用于`submit`类型按钮。 | | formtarget | `_blank`或`_self`或`_parent`或`_top`或framename |指定提交表单数据后显示结果的位置。 |

**例：**

```html

<html> 
  <head> 
    <title>Button Tag example</title> 
  </head> 
  <body> 
    <form> 
      First name:<br> 
      <input type="text" name="firstname" value="Free"> 
      <br> 
      Last name:<br> 
      <input type="text" name="lastname" value="CodeCamp"> 
      <br><br> 
      <input type="submit" value="Submit" formtarget="_self"> 
    </form> 
  </body> 
 </html> 
```

所有主流浏览器都支持`<button>`标签。 `<button>`标记还支持HTML中的事件属性。 **注意：**如果使用`<button>`元素，不同的浏览器可能会发送不同的值。建议指定按钮值或使用`<input>`标签在HTML表单中创建按钮。

**其他资源：**

*   其他属性：

| **属性** | **链接** | | --- | --- | | formenctype | https://www.w3schools.com/TAgs/att _button_ formenctype.asp | | formnovalidate | https://www.w3schools.com/TAgs/att _button_ formnovalidate.asp |

*   `<input>`标签：https：//www.w3schools.com/TAgs/tag\_input.asp
*   事件属性：https：//www.w3schools.com/TAgs/ref\_eventattributes.asp
*   `formtarget`属性值：https：//www.w3schools.com/TAgs/att _button_ formtarget.asp
*   HTML表格：
---
title: Forms
localeTitle: 形式
---
## ＃＃ 形式

Bootstrap框架提供了一种表单功能，程序员可以使用它来轻松创建漂亮的html表单。使用引导程序表单为每个单独的表单元素提供统一的全局样式。 Bootstrap表单为每个元素添加正确的间距和外观。

每个bootstrap表单元素都应该有一个类_表单控件_ 。这个类是bootstrao如何知道要设置样式的元素。默认情况下，具有_表单控件_类的所有文本元素（如**input** ， **textarea**和**select）**都将具有100％的宽度。 Bootstrap表单有两种类型，它们是：

*   内联表单 - 在单行上创建表单。对导航栏中的登录表单很有用
*   水平表单 - 创建一个表单，其中每个元素位于不同的行中

## 基本表格的示例

\`\`\`HTML

电子邮件地址 

密码 

文件输入 

此处的块级帮助文本示例。

对我进行检查 

提交
```
## Example of an inline form 
```

HTML

名称 

电子邮件 

发送邀请
```
## Example of horizontal form 
```

HTML

电子邮件

密码

记住账号 

登入
```
![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG) 
```

HTML

金额（以美元计）

$

.00

转账现金
```
Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive. 
 Take the following simple form: 
 
 ![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png) 
```

HTML

电子邮件地址  我们绝不会与其他任何人分享您的电子邮件。

密码 

 对我进行检查 

提交
```
Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`. 
 
 The `<input>` tag should be given a class of `form-control`. 
 
 The `<button>` tag should be given the classes of `btn btn-primary`. 
 
 #### More Information: 
 <!-- Please add any articles you think might be helpful to read before writing the article --> 
 [The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/) 
 
 ![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG) 
 
 #### Horizontal Form 
 In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`. 
```

HTML

电子邮件

密码

记住账号 

登入

\`\`\`

![横向表格](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)
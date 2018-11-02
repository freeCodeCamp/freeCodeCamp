---
title: Form Inputs
localeTitle: 表格输入
---
## 表格输入

Bootstrap支持以下表单控件：

1.  输入
2.  textarea的
3.  复选框
4.  无线电
5.  选择

## 示例代码片段

#### 1.输入

Bootstrap支持所有HTML5输入类型：文本，密码，日期时间，日期时间 - 本地，日期，月份，时间，周，数字，电子邮件，网址，搜索，电话和颜色。

**注意：如果输入的类型未正确声明，则输入将不会完全定型！**

以下示例包含两个输入元素;一个类型文本和一个类型密码：

```html

<div class="form-group"> 
  <label for="usr">Name:</label> 
  <input type="text" class="form-control" id="usr"> 
 </div> 
 <div class="form-group"> 
  <label for="pwd">Password:</label> 
  <input type="password" class="form-control" id="pwd"> 
 </div> 
```

#### 2\. Textarea

以下示例包含textarea：

```html

<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
```

#### 3.复选框

如果您希望用户从预设选项列表中选择任意数量的选项，则使用复选框。

以下示例包含三个复选框。最后一个选项被禁用：

```html

<div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 1</label> 
 </div> 
 <div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 2</label> 
 </div> 
 <div class="checkbox disabled"> 
  <label> 
  <input type="checkbox" value="" disabled>Option 3</label> 
 </div> 
```

如果希望复选框显示在同一行，请使用**.checkbox-inline**类：

```html

<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label> 
```

#### 4.收音机按钮

如果要将用户限制为预设选项列表中的一个选项，则使用单选按钮。

以下示例包含三个单选按钮。最后一个选项被禁用：

```html

<div class="radio"> 
  <label><input type="radio" name="optradio">Option 1</label> 
 </div> 
 <div class="radio"> 
  <label><input type="radio" name="optradio">Option 2</label> 
 </div> 
 <div class="radio disabled"> 
  <label><input type="radio" name="optradio" disabled>Option 3</label> 
 </div> 
```

如果希望复选框显示在同一行，请使用**.radio-inline**类：

```html

<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
```

#### 5.选择（列表）

如果要允许用户从多个选项中进行选择，则使用选择列表。

以下示例包含下拉列表（选择列表）：

```html

<div class="form-group"> 
  <label for="sel1">Select list:</label> 
  <select class="form-control" id="sel1"> 
    <option>1</option> 
    <option>2</option> 
    <option>3</option> 
    <option>4</option> 
  </select> 
 </div> 
```

## 如何使Bootstrap输入可访问

输入字段应具有标签或其他形式的标识符，例如WAI-ARIA标记以满足Web 内容可访问性指南或简称[WCAG](https://www.w3.org/WAI/tutorials/forms/) 。为了 用于屏幕阅读器准确地向用户传达哪些标签与标签的哪些输入相关联 应参考相应的输入。

这可以通过在HTML中使用`for`参数来完成：

```html

<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
```

标签`for`属性**总是**通过其**ID**引用输入字段。这告诉屏幕阅读器 这个标签绝对适用于这个输入字段，这将最大限度地减少任何正在使用的用户的混淆 一个屏幕阅读器访问一个网站。

### 更多信息：

代码示例来自[W3Schools - Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) 。
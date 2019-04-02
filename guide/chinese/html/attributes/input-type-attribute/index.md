---
title: Input Type Attribute
localeTitle: 输入类型属性
---
## 输入类型属性

input type属性指定用户应在表单中输入的输入类型。

### 文本

一行文字。

```html

    <form> 
      <label for="login">Login:</label> 
      <input type="text" name="login"> 
    </form> 
```

### 密码

一行文字。文本自动显示为一系列点或星号（取决于浏览器和操作系统）。

```html

    <form> 
      <label for="password">Password:</label> 
      <input type="password" name="password"> 
    </form> 
```

### 电子邮件

HTML检查输入是否与电子邮件地址格式匹配（某些东西）。

```html

    <form> 
      <label for="email">E-mail address:</label> 
      <input type="email" name="email"> 
    </form> 
```

### 数

仅允许数字输入。您还可以指定允许的最小值和最大值。下面的示例检查输入是1到120之间的数字。

```html

    <form> 
      <label for="age">Age:</label> 
      <input type="number" name="age" min="1" max="120"> 
    </form> 
```

### 无线电

用户只能选择一个选项。单选按钮组需要具有相同的名称属性。您可以使用`checked`属性自动选择一个选项（例如，选择值Blue下面的示例）。

```html

    <form> 
      <label><input type="radio" name="color" value="red">Red</label> 
      <label><input type="radio" name="color" value="green">Green</label> 
      <label><input type="radio" name="color" value="blue" checked>Blue</label> 
    </form> 
```

### 复选框

用户可以从复选框组中选择零个或多个选项。您也可以在此处使用`checked`属性作为一个或多个选项。

```html

    <form> 
      <label><input type="checkbox" name="lang" value="english">english</label> 
      <label><input type="checkbox" name="lang" value="spanish">spanish</label> 
      <label><input type="checkbox" name="lang" value="french">french</label> 
    </form> 
```

### 按键

输入显示为按钮，应在按钮中显示的文本在value属性中。

```html

    <form> 
      <input type="button" value="click here"> 
    </form> 
```

### 提交

显示提交按钮。应该在按钮中显示的文本是value属性。单击按钮后，HTML将执行验证，如果通过，则提交表单。

```html

    <form> 
      <input type="submit" value="SUBMIT"> 
    </form> 
```

### 重启

显示重置按钮。应该在按钮中显示的文本是value属性。单击该按钮后，表单中的所有值都将被删除。

```html

    <form> 
      <input type="reset" value="CANCEL"> 
    </form> 
```

有更多类型的元素。有关更多信息，请访问MSDN或w3schools 。
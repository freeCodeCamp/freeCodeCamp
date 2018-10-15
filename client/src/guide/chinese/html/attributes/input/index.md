---
title: Input
localeTitle: 输入
---
## 输入

HTML `<input>`标记用于表单中以声明输入元素。 它允许用户输入数据。

## 例

```html

<!DOCTYPE html> 
 <html> 
 
   <head> 
      <title>HTML input Tag</title> 
   </head> 
 
   <body> 
      <form action = "/cgi-bin/hello_get.cgi" method = "get"> 
         First name: 
            <input type = "text" name = "first_name" value = "" maxlength = "100" /> 
            <br /> 
 
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" /> 
         <input type = "submit" value = "Submit" /> 
      </form> 
   </body> 
 
 </html> 
```

在上面的示例中，有两个输入字段要求用户根据指定的标签输入其姓和名。 submit `<button type="submit">`是另一种输入类型，用于将用户输入的数据输入表单并将其发送到代码中指定的其他位置。

#### 更多信息：

[的Youtube](https://www.youtube.com/watch?v=qJ9ZkxmVf5s)

## 输入

HTML `<input>`标签有许多类型可用于输入数据。他们之中有一些是： 类型：文本（这是用于创建常规文本框的最常见类型） 类型：密码（此类型用于创建密码字段） 类型：隐藏（这是一种特殊类型的输入，未向用户显示，但用于在使用标记时将信息从一个页面传递到另一个页面）
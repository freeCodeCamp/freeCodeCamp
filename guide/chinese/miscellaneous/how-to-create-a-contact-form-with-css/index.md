---
title: How to Create a Contact Form with CSS
localeTitle: 如何使用CSS创建联系表单
---
## 如何使用CSS创建联系表单

首先，我们创建HTML元素 - 用于消息的名字，姓氏，电子邮件和文本区域的输入字段。

稍后我们应用CSS样式以使表单在视觉上吸引人。

### HTML部分

HTML部分有一个带有类`container`的div，标题为`h3` “ **Contact Form** ”

名称为**contact\_form**的表单包含以下输入字段：

*   名字
*   姓
*   电子邮件
*   信息

带有班级`center`的div，用于对齐项目中心。 `input`类型`submit`以提交表单。 在提交时检查文本字段中的`required`属性的值。

```html

<div class="container"> 
    <h3>Contact Form</h3> 
    <form action="#" name="contact_form"> 
        <label for="first_name">First Name</label> 
        <input name="first_name" type="text" required placeholder="John"/> 
        <br> 
        <label for="last_name">Last Name</label> 
        <input name="last_name" type="text" required placeholder="Doe"/> 
        <br> 
        <label for="email">Email</label> 
        <input name="email" type="email" required placeholder="you@domain.com"/> 
        <br> 
        <label for="message">Message</label><br> 
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea> 
        <div class="center"> 
            <input type="submit" value="Submit"> 
        </div> 
    </form> 
 </div> 
```

### CSS部分

```css
/* Importing the Roboto font from Google Fonts. */ 
 @import url("https://fonts.googleapis.com/css?family=Roboto:400"); 
 
 /* Set font of all elements to 'Roboto' */ 
 * { 
    font-family: 'Roboto', sans-serif; 
    font-weight: 400; 
 } 
 
 /* Remove outline of all elements on focus */ 
 *:focus { 
    outline: 0; 
 } 
 
 body { 
    background: #263238;  /* Set background color to #263238*/ 
 } 
 
 h3 { 
    text-align: center; 
 } 
 
 /* Add styles to 'container' class */ 
 .container { 
    padding: 12px 24px 24px 24px; 
    margin: 48px 12px; 
    background: #E3F2FD; 
    border-radius: 4px; 
 } 
 
 /* Add styles to 'label' selector */ 
 label { 
    font-size: 0.85em; 
    margin-left: 12px; 
 } 
 
 /* Add styles to 'input' and 'textarea' selectors */ 
 input[type=text],input[type=email], textarea { 
    width: 100%; 
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px; 
    margin-bottom: 16px; 
    resize: vertical; 
 } 
 
 /* Add styles to show 'focus' of selector */ 
 input[type=text]:focus,input[type=email]:focus, textarea:focus { 
    border: 1px solid green; 
 } 
 
 /* Add styles to the submit button */ 
 input[type=submit] { 
    background: #64B5F6; 
    margin: 0 auto; 
    outline: 0; 
    color: white; 
    border: 0; 
    padding: 12px 24px; 
    border-radius: 4px; 
    transition: all ease-in-out 0.1s; 
    position: relative; 
    display: inline-block; 
    text-align: center; 
 } 
 
 /* Add styles for 'focus' property */ 
 input[type=submit]:focus { 
    background: #A5D6A7; 
    color: whitesmoke; 
 } 
 
 /* Style 'hover' property */ 
 input[type=submit]:hover { 
    background: #2196F3; 
 } 
 
 /* Align items to center of the 'div' with the class 'center' */ 
 .center { 
    text-align: center; 
 } 
```

### 产量

![FreeCodeCamp / guides  - 联系表格](http://res.cloudinary.com/crack-jack/image/upload/v1508434398/FCC_Github_Contact_form.png)

### 更多信息：

访问[FreeCodeCamp -联系表](https://codepen.io/rakhi2104/pen/QqYOoe/)上[Codepen.io](https://codepen.io)
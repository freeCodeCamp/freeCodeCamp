---
title: Address Tag
localeTitle: 地址标签
---
## 地址标签

Bootstrap的表单控件扩展了我们的Rebooted表单样式和类。使用这些类可以选择自定义显示，以便在浏览器和设备之间进行更一致的呈现。

确保在所有输入上使用适当的类型属性（例如，电子邮件地址的电子邮件或数字信息的数字），以利用更新的输入控件，如电子邮件验证，数字选择等。

这是一个演示Bootstrap表单样式的简单示例。继续阅读有关所需类，表单布局等的文档。

#### 用法

```html

<form> 
  <div class="form-group"> 
    <label for="exampleInputEmail1">Email address</label> 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> 
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> 
  </div> 
  <div class="form-group"> 
    <label for="exampleInputPassword1">Password</label> 
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
  </div> 
  <div class="form-check"> 
    <label class="form-check-label"> 
      <input type="checkbox" class="form-check-input"> 
      Check me out 
    </label> 
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button> 
 </form> 

```
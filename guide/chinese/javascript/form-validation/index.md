---
title: Form Validation
localeTitle: 表格验证
---
## 表格验证

在客户端输入所有必要数据然后按下“提交”按钮后，通常用于在服务器上进行的表单验证。如果数据 客户输入的内容不正确或只是丢失，服务器必须将所有数据发送回客户端并请求表单 重新提交正确的信息。这真是一个漫长的过程，曾经给服务器带来了很多负担。

JavaScript提供了一种在将客户端计算机上的数据发送到Web服务器之前验证其数据的方法。表单验证通常执行两次 功能：

### 基本验证

首先，必须检查表单以确保填写所有必填字段。它只需要循环遍历表单中的每个字段， 检查数据。

### 数据格式验证

其次，必须检查输入的数据的正确形式和值。您的代码必须包含适当的逻辑来测试数据的正确性。

#### 例：

```html

<html> 
 
   <head> 
      <title>Form Validation</title> 
 
      <script type="text/javascript"> 
         <!-- 
            // Form validation code will come here. 
         //--> 
      </script> 
 
   </head> 
 
   <body> 
      <form action="/cgi-bin/test.cgi" name="myForm" onsubmit="return(validate());"> 
         <table cellspacing="2" cellpadding="2" border="1"> 
 
            <tr> 
               <td align="right">Name</td> 
               <td><input type="text" name="Name" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">EMail</td> 
               <td><input type="text" name="EMail" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Zip Code</td> 
               <td><input type="text" name="Zip" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Country</td> 
               <td> 
                  <select name="Country"> 
                     <option value="-1" selected>[choose yours]</option> 
                     <option value="1">USA</option> 
                     <option value="2">UK</option> 
                     <option value="3">INDIA</option> 
                  </select> 
               </td> 
            </tr> 
 
            <tr> 
               <td align="right"></td> 
               <td><input type="submit" value="Submit" /></td> 
            </tr> 
 
         </table> 
      </form> 
 
   </body> 
 </html> 
```

#### 产量

[在这里了解一下](https://liveweave.com/LP9eOP)

### 基本表格验证

首先让我们看看如何进行基本表单验证。在上面的表单中，我们调用validate（）来在onsubmit事件发生时验证数据。该 以下代码显示了此`validate()`函数的实现。

```html

<script type="text/javascript"> 
   // Form validation code will come here. 
   function validate() 
      { 
 
         if( document.myForm.Name.value == "" ) 
         { 
            alert( "Please provide your name!" ); 
            document.myForm.Name.focus() ; 
            return false; 
         } 
 
         if( document.myForm.EMail.value == "" ) 
         { 
            alert( "Please provide your Email!" ); 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Zip.value == "" || 
         isNaN( document.myForm.Zip.value ) || 
         document.myForm.Zip.value.length != 5 ) 
         { 
            alert( "Please provide a zip in the format #####." ); 
            document.myForm.Zip.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Country.value == "-1" ) 
         { 
            alert( "Please provide your country!" ); 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### 产量

[在这里了解一下](https://liveweave.com/pCPTnP)

### 数据格式验证

现在我们将看到如何在将输入的表单数据提交到Web服务器之前验证它们。

以下示例显示如何验证输入的电子邮件地址。电子邮件地址必须至少包含“@”符号和点（。）。此外，'@'必须 不是电子邮件地址的第一个字符，最后一个点必须至少是“@”符号后面的一个字符。

#### 例：

```html

<script type="text/javascript"> 
    function validateEmail() 
      { 
         var emailID = document.myForm.EMail.value; 
         atpos = emailID.indexOf("@"); 
         dotpos = emailID.lastIndexOf("."); 
 
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         { 
            alert("Please enter correct email ID") 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### 产量

[在这里了解一下](https://liveweave.com/nznVs6)

### HTML5表单约束

`<input>`一些常用HTML5约束是`type`属性（例如`type="password"` ）， `maxlength` ， `required`和`disabled` 。少了 常用的约束是采用JavaScript正则表达式的`pattern` attrinute。

### 验证库

验证库的示例包括：

*   [Validate.js](http://rickharrison.github.com/validate.js/)
*   [验证](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
*   [Valid8](http://unwrongest.com/projects/valid8/)

### 更多信息

*   [表格数据验证| MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
*   [约束验证| MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
*   [Tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)
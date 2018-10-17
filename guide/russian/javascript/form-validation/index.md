---
title: Form Validation
localeTitle: Проверка формы
---
## Проверка формы

Проверка правильности, обычно используемая на сервере, после того, как клиент ввел все необходимые данные, а затем нажал кнопку «Отправить». Если данные введенный клиентом, был неправильным или просто отсутствовал, сервер должен был отправить все данные обратно клиенту и запросить, чтобы форма была повторно отправлен с правильной информацией. Это был действительно длительный процесс, который ставил большую нагрузку на сервер.

JavaScript предоставляет способ проверки данных формы на компьютере клиента перед отправкой на веб-сервер. Проверка формы обычно выполняет два функции:

### Базовая проверка

Прежде всего, форма должна быть проверена, чтобы убедиться, что все обязательные поля заполнены. Для этого требуется всего лишь цикл через каждое поле в форме и проверьте данные.

### Проверка формата данных

Во-вторых, введенные данные должны быть проверены на правильную форму и значение. Ваш код должен содержать соответствующую логику для проверки правильности данных.

#### Пример:

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

#### Вывод

Смотри [здесь](https://liveweave.com/LP9eOP)

### Базовая проверка формы

Сначала давайте посмотрим, как выполнить базовую проверку формы. В приведенной выше форме мы вызываем validate () для проверки данных при возникновении события onsubmit. следующий код показывает реализацию этой функции `validate()` .

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

#### Вывод

Смотри [здесь](https://liveweave.com/pCPTnP)

### Проверка формата данных

Теперь мы увидим, как мы можем проверить наши введенные данные формы перед отправкой на веб-сервер.

В следующем примере показано, как проверить введенный адрес электронной почты. Адрес электронной почты должен содержать хотя бы знак «@» и точку (.). Кроме того, '@' должен не должен быть первым символом адреса электронной почты, а последняя точка должна быть по крайней мере одним символом после знака «@».

#### Пример:

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

#### Вывод

Смотри [здесь](https://liveweave.com/nznVs6)

### Ограничения формы HTML5

Некоторые из обычно используемых ограничений HTML5 для `<input>` - это атрибут `type` (например, `type="password"` ), `maxlength` , `required` и `disabled` . Меньше обычно используемым ограничением является `pattern` attrinute, который принимает регулярное выражение JavaScript.

### Библиотеки проверки

Примеры библиотек проверки включают:

*   [Validate.js](http://rickharrison.github.com/validate.js/)
*   [Проверка](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
*   [Valid8](http://unwrongest.com/projects/valid8/)

### Больше информации

*   [Проверка данных формы | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
*   [Проверка ограничений | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
*   [Tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)
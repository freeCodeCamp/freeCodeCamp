---
title: Form Validation
localeTitle: التحقق من صحة النموذج
---
## التحقق من صحة النموذج

التحقق من صحة النموذج المستخدم عادةً في الخادم ، بعد أن يقوم العميل بإدخال جميع البيانات الضرورية ثم الضغط على زر "إرسال". إذا كانت البيانات كان العميل غير صحيح أو كان في عداد المفقودين ببساطة ، سيكون على الخادم إرسال جميع البيانات مرة أخرى إلى العميل وطلب أن يكون النموذج إعادة إرسالها مع المعلومات الصحيحة. كانت هذه عملية طويلة تستخدم لوضع الكثير من العبء على الخادم.

تقدم JavaScript طريقة للتحقق من صحة بيانات النموذج على كمبيوتر العميل قبل إرسالها إلى خادم الويب. التحقق من صحة النموذج بشكل عام يؤدي اثنين المهام:

### التحقق الأساسي

بادئ ذي بدء ، يجب التحقق من النموذج للتأكد من ملء جميع الحقول الإلزامية. سيتطلب الأمر مجرد حلقة عبر كل حقل في النموذج و تحقق من البيانات.

### التحقق من صحة تنسيق البيانات

ثانيًا ، يجب التحقق من البيانات التي تم إدخالها للنموذج والقيمة الصحيحة. يجب أن تحتوي شفرتك على المنطق المناسب لاختبار صحة البيانات.

#### مثال:

 `
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
` 

#### انتاج |

انتبه [هنا](https://liveweave.com/LP9eOP)

### التحقق من صحة النموذج الأساسي

دعونا أولا نرى كيف نفعل التحقق من صحة النموذج الأساسي. في النموذج أعلاه ، نحن ندعو بالتحقق () للتحقق من صحة البيانات عند حدوث حدث عند الإرسال. ال التعليمة البرمجية التالية يعرض تنفيذ هذه الدالة `validate()` .

 `
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
` 

#### انتاج |

انتبه [هنا](https://liveweave.com/pCPTnP)

### التحقق من صحة تنسيق البيانات

سنرى الآن كيف يمكننا التحقق من صحة بيانات النماذج المدخلة قبل إرسالها إلى خادم الويب.

يوضح المثال التالي كيفية التحقق من صحة عنوان البريد الإلكتروني الذي تم إدخاله. يجب أن يحتوي عنوان البريد الإلكتروني على علامة "@" ونقطة (.) على الأقل. يجب أيضًا أن يكون "@" لا يكون الحرف الأول لعنوان البريد الإلكتروني ، ويجب أن تكون النقطة الأخيرة على الأقل حرفًا واحدًا بعد علامة "@".

#### مثال:

 `
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
` 

#### انتاج |

انتبه [هنا](https://liveweave.com/nznVs6)

### قيود نموذج HTML5

بعض القيود HTML5 تستخدم عادة ل `<input>` هي `type` السمة (على سبيل المثال `type="password"` )، `maxlength` ، `required` و `disabled` . أقل القيد شائع الاستخدام هو `pattern` attrinute الذي يأخذ تعبير JavaScript العادي.

### مكتبات التحقق

تتضمن أمثلة مكتبات التحقق من الصحة:

*   [Validate.js](http://rickharrison.github.com/validate.js/)
*   [التحقق من صحة](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
*   [Valid8](http://unwrongest.com/projects/valid8/)

### معلومات اكثر

*   [نموذج التحقق من صحة البيانات MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
*   [التحقق من القيود | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
*   [Tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)
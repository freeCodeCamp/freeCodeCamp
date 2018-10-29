---
title: Forms
localeTitle: إستمارات
---
## \## إستمارات

يوفر إطار Bootstrap ميزة نموذجية يمكن للمبرمج استخدامها لإنشاء نماذج html جميلة بسهولة. يمنح استخدام نموذج التمهيد كل عنصر نموذج فردي نمطًا عالميًا موحّدًا. يضيف نموذج Bootstrap التباعد الصحيح وينظر إلى كل عنصر.

يجب أن يكون لكل عنصر نموذج bootstrap عنصر _تحكم في شكل_ فئة. هذه الطبقة هي كيف يعرف bootstrao أي العناصر التي تميل إلى الأسلوب. جميع العناصر النصية مثل **المدخلات، **وجزء**** **النص** **وحدد** والذي لديه _الدرجة تحكم النموذج_ يكون العرض 100٪ افتراضيا. هناك نوعان من نماذج Bootstrap ، وهما:

*   شكل مضمن - يقوم بإنشاء النموذج في سطر واحد. مفيد لنماذج تسجيل الدخول في شريط التنقل
*   النموذج الأفقي - يقوم بإنشاء نموذج مع كل عنصر في صف مختلف

## مثال على شكل أساسي

\`\` \`أتش تي أم أل

عنوان بريد الكتروني 

كلمه السر 

إدخال الملف 

مثال على نص المساعدة على مستوى الكتلة هنا.

 تفقدني 

خضع

 `## Example of an inline form 
` 

أتش تي أم أل

اسم 

البريد الإلكتروني 

إرسال دعوة

 `## Example of horizontal form 
` 

أتش تي أم أل

البريد الإلكتروني

كلمه السر

 تذكرنى 

تسجيل الدخول

 `![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG) 
` 

أتش تي أم أل

المبلغ (بالدولار)

$

.00

تحويل النقدية

 `Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive. 
 Take the following simple form: 
 
 ![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png) 
` 

أتش تي أم أل

عنوان بريد الكتروني  لن نشارك بريدك الإلكتروني مطلقًا مع أي شخص آخر.

كلمه السر 

 تفقدني 

خضع

 ``Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`. 
 
 The `<input>` tag should be given a class of `form-control`. 
 
 The `<button>` tag should be given the classes of `btn btn-primary`. 
 
 #### More Information: 
 <!-- Please add any articles you think might be helpful to read before writing the article --> 
 [The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/) 
 
 ![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG) 
 
 #### Horizontal Form 
 In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`. 
`` 

أتش تي أم أل

البريد الإلكتروني

كلمه السر

 تذكرنى 

تسجيل الدخول

\`\` \`

![نموذج أفقي](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)
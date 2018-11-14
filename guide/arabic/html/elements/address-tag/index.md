---
title: Address Tag
localeTitle: عنوان العنوان
---
## عنوان العنوان

توسيع عناصر التحكم في نموذج Bootstrap على أنماط النماذج Rebooted مع الفئات. استخدم هذه الفئات لاختيار شاشاتها المخصصة لعرض أكثر تناسقًا عبر المتصفحات والأجهزة.

تأكد من استخدام سمة نوع مناسبة على جميع المدخلات (مثل البريد الإلكتروني لعنوان البريد الإلكتروني أو رقم للحصول على معلومات رقمية) للاستفادة من عناصر التحكم في الإدخال الأحدث مثل التحقق من البريد الإلكتروني ، واختيار الأرقام ، والمزيد.

فيما يلي مثال سريع لإظهار أنماط نموذج Bootstrap. استمر في القراءة للوثائق حول الفصول الدراسية المطلوبة ، وتخطيط النموذج ، والمزيد.

#### استعمال

 `
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
`
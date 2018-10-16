---
title: Function Composition
localeTitle: تكوين وظيفة
---## تكوين وظيفة

تكوين وظيفة هو تطبيق pointwise وظيفة واحدة إلى نتيجة أخرى. يقوم المطورون بذلك بطريقة يدوية كل يوم عندما تعمل وظائف العش:

 `compose = (fn1, fn2) => value => fn2(fn1(value)) 
` 

لكن هذا صعب القراءة. هناك طريقة أفضل باستخدام تكوين الدالة. بدلا من قراءتها من الداخل إلى الخارج:

 `add2AndSquare = (n) => square(add2(n)) 
` 

يمكننا استخدام وظيفة ترتيب أعلى لسلسلتها بطريقة مرتبة.

 `add2AndSquare = compose( add2, square) 
` 

التنفيذ البسيط للإنشاء سيكون:

 `compose = (f1, f2) => value => f2( f1(value) ); 
` 

للحصول على مزيد من المرونة ، يمكننا استخدام وظيفة reduRight:

 `compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal); 
` 

تتيح القراءة المكونة من اليسار إلى اليمين تسلسلًا واضحًا للوظائف ذات الترتيب الأعلى. أمثلة العالم الحقيقي تضيف المصادقة ، وقطع الأشجار وخصائص السياق. إنها تقنية تمكن إعادة الاستخدام على أعلى مستوى. فيما يلي بعض الأمثلة على كيفية استخدامه:

 `// example 
 const add2        = (n) => n + 2; 
 const times2      = (n) => n * 2; 
 const times2add2  = compose(add2, times2); 
 const add6        = compose(add2, add2, add2); 
 
 times2add2(2);  // 6 
 add2tiems2(2);  // 8 
 add6(2);        // 8 
` 

قد تظن أن هذه برمجة وظيفية متقدمة وليست ذات صلة ببرمجة الواجهة الأمامية. ولكنها مفيدة أيضًا في تطبيقات الصفحة الواحدة. على سبيل المثال ، يمكنك إضافة سلوك إلى مكون React باستخدام مكونات ترتيب أعلى:

 `function logProps(InputComponent) { 
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) { 
    console.log('Current props: ', this.props); 
    console.log('Next props: ', nextProps); 
  }; 
  return InputComponent; 
 } 
 
 // EnhancedComponent will log whenever props are received 
 const EnhancedComponent = logProps(InputComponent); 
` 

في تركيبة وظيفة الخلاصة تمكن reusability من وظائف على مستوى عال جدا. إذا تم تنظيم الوظائف بشكل جيد ، فإنها تمكن المطورين من خلق سلوك جديد قائم على السلوك القائم.

كما أنه يزيد من سهولة قراءة التطبيقات. بدلاً من وظائف التعشيش يمكنك مسح وظائف السلسلة وإنشاء وظائف ترتيب أعلى بأسماء ذات معنى.
---
title: Behavior Driven Development
localeTitle: تنمية السلوك مدفوعة
---
## تنمية السلوك مدفوعة

التنمية المدفوعة بالسلوك (BDD) هي عملية تطوير برمجيات انبثقت من ![التطوير المدفوع بالاختبار (TDD)](../test-driven-development/index.md) . يدمج التطوير المبني على السلوك بين التقنيات والمبادئ العامة للـ TDD مع أفكار من التصميم القائم على المجال والتحليل والتصميم الموجه للكائنات لتقديم فرق تطوير وإدارة البرامج بأدوات مشتركة وعملية مشتركة للتعاون في تطوير البرمجيات. إنها منهجية تطوير برمجيات يتم فيها تحديد وتخصيص تطبيق من خلال وصف كيفية ظهور سلوكه لمراقب خارجي.

على الرغم من أن BDD هو في الأساس فكرة عن كيفية إدارة تطوير البرمجيات من جانب المصالح التجارية والرؤية الفنية ، فإن ممارسة BDD تفترض استخدام أدوات برمجية متخصصة لدعم عملية التطوير.

على الرغم من أن هذه الأدوات غالباً ما يتم تطويرها خصيصًا للاستخدام في مشاريع BDD ، يمكن اعتبارها أشكالًا متخصصة من الأدوات التي تدعم التطوير القائم على الاختبار. الأدوات تعمل لإضافة الأتمتة إلى اللغة في كل مكان وهذا هو الموضوع الرئيسي لل BDD.

يركز BDD على:

*   من أين تبدأ في هذه العملية
*   ما لاختبار وما لا اختبار
*   كم لاختبار في دفعة واحدة
*   ما استدعاء الاختبارات
*   كيف نفهم لماذا يفشل الاختبار

في قلب BDD هو إعادة التفكير في النهج لاختبار وحدة واختبار القبول التي تنشأ بطبيعة الحال مع هذه القضايا. على سبيل المثال ، يقترح BDD أن تكون أسماء اختبار الوحدة عبارة عن جمل كاملة تبدأ بفعل مشروط ("يجب" باللغة الإنجليزية على سبيل المثال) ويجب كتابتها حسب قيمة الأعمال. يجب كتابة اختبارات القبول باستخدام إطار رشيق قياسي لقصة المستخدم: " _كدور_ أريد _ميزة_ حتى تحقق _الفائدة_ ". يجب كتابة معايير القبول من حيث السيناريوهات وتنفيذها كطبقات: معطى _السياق الأولي_ ، عند _وقوع الحدث_ ، ثم _تأكد من بعض النتائج_ .

مثال

 `Story: Returns go to stock 
 
 As a store owner 
 In order to keep track of stock 
 I want to add items back to stock when they're returned. 
 
 Scenario 1: Refunded items should be returned to stock 
 Given that a customer previously bought a black sweater from me 
 And I have three black sweaters in stock. 
 When he returns the black sweater for a refund 
 Then I should have four black sweaters in stock. 
 
 Scenario 2: Replaced items should be returned to stock 
 Given that a customer previously bought a blue garment from me 
 And I have two blue garments in stock 
 And three black garments in stock. 
 When he returns the blue garment for a replacement in black 
 Then I should have three blue garments in stock 
 And two black garments in stock. 
` 

جنبا إلى جنب مع بعض الفوائد:

1.  يمكن تتبع كل أعمال التطوير مباشرة إلى أهداف العمل.
2.  تطوير البرامج يلبي حاجة المستخدم. المستخدمون الراضين = عمل جيد.
3.  تحديد الأولويات بكفاءة - يتم تسليم ميزات الأعمال الهامة أولاً.
4.  جميع الأطراف لديها فهم مشترك للمشروع ويمكن أن تشارك في الاتصال.
5.  تضمن اللغة المشتركة للجميع (سواء كانت تقنية أو غير ذلك) رؤية شاملة لتقدم المشروع.
6.  تصميم البرامج الناشئ الذي يتطابق مع احتياجات الأعمال القادمة ويدعمها.
7.  تحسين كود الجودة يقلل من تكاليف الصيانة ويقلل من مخاطر المشروع.

## معلومات اكثر

*   ويكي على [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
*   ومن المعروف أن إطار تطوير السلوكيات المدفوعة (BDD) هو [الخيار](https://cucumber.io/) . يدعم الخيار العديد من لغات البرمجة ويمكن دمجه مع عدد من الأطر ؛ على سبيل المثال ، [Ruby on Rails](http://rubyonrails.org/) و [Spring Framework](http://spring.io/) و [Selenium](http://www.seleniumhq.org/)
*   https://inviqa.com/blog/bdd-guide
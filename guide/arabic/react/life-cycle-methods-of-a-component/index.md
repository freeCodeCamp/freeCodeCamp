---
title: Life Cycle Methods Of A Component
localeTitle: طرق دورة الحياة للمكون
---## طرق دورة الحياة للمكون

عندما نبدأ العمل مع المكونات ، نحتاج إلى تنفيذ العديد من الإجراءات لتحديث حالة أو تنفيذ بعض الإجراءات عندما يتغير شيء في هذا المكون. في هذا السيناريو ، تأتي طرق دورة حياة أحد المكونات في متناول يدك! لذلك دعونا الغوص في هذه المقالة.

بشكل عام ، يمكننا تقسيم أساليب دورة الحياة إلى **3** فئات.

1.  متزايد
2.  تحديث
3.  غير متزايد

بما أن أساليب دورة الحياة تفسيرية ، فأنا سأذكر أسماء الطريقة فقط. لا تتردد في المساهمة في هذه المقالة ، إذا لزم الأمر.

## تصاعد:

ا. `constructor()`

ب. `componentWillMount()`

ج. `render()`

د. `componentDidMount()`

## تحديث:

ا. `componentWillRecieveProps()`

ب. `shouldComponentUpdate()`

ج. `componentWillUpdate()`

د. `render()`

ه. `componentDidUpdate()`

## غير متزايد:

ا. `componentWillUnmount()`

## بعض الحقائق المثيرة للاهتمام لاحظت:

*   سيتم استدعاء `constructor` و `componentWillMount` و `componentDidMount` و `componentWillUnmount` مرة واحدة فقط خلال دورة حياة المكون.
*   لن يتم تنفيذ `componentWillUpdate` ، و `componentDidUpdate` إلا إذا كان `shouldComponentUpdate` إرجاع `shouldComponentUpdate` فقط.
*   سيتم استدعاء `componentWillUnmount()` فقط قبل إلغاء تثبيت أي مكون ، ومن ثم يمكن استخدامه لتحرير الذاكرة المستخدمة ، وإغلاق أي اتصالات إلى DB ، إلخ.

يمكن تعلم الكثير من الأشياء عن طريق الغوص في الترميز. حتى الحصول على يديك القذرة بواسطة الترميز.

ملحوظة:

> "سيتم تمكين تحذيرات الإزالة مع إصدار 16.x مستقبلي ، **ولكن** ستستمر دورات العمر للتشغيل **حتى الإصدار 17.** " 1
> 
> "حتى في الإصدار 17 ، سيظل من الممكن استخدامها ، ولكنها ستكون مستعارة ببادئة" UNSAFE\_ "للإشارة إلى أنها قد تسبب مشاكل. كما أعدنا [نصًا تلقائيًا لإعادة تسميته](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) في الشفرة الحالية." 1

وبعبارة أخرى ، ستظل أساليب دورة الحياة السابقة هذه متوفرة على النحو التالي:

*   `UNSAFE_componentWillMount`
*   `UNSAFE_componentWillReceiveProps`
*   `UNSAFE_componentWillUpdate`

## طرق دورة الحياة الجديدة

سيتم تقديم أساليب دورة الحياة الجديدة في React 17

*   `getDerivedStateFromProps` بديلاً أكثر أمانًا `componentWillReceiveProps` .
*   سيتم إضافة `getSnapshotBeforeUpdate` لدعم قراءة الخصائص بأمان من التحديثات DOM تتم

يمكن تعلم الكثير من الأشياء عن طريق الغوص في الترميز. حتى الحصول على يديك القذرة بواسطة الترميز.

### مصادر

1.  [فون ، برايان. "React v16.3.0: New lifecycles and context API". 29 مارس 2018. تم الوصول إليها: 22 مايو 2018.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### مصادر

[تحديث على التقديم المتزامن](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
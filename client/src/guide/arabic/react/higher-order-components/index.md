---
title: Higher-Order Components
localeTitle: مكونات الترتيب الأعلى
---
## مكونات الترتيب الأعلى

في React ، يكون **مكون ترتيب** مرتفع (HOC) دالة تأخذ مكونًا وتعيد مكونًا جديدًا. يستخدم المبرمجون HOCs لتحقيق **إعادة استخدام المنطق المكون** .

إذا كنت قد استخدمت `connect` Redux ، فقد عملت بالفعل مع مكونات الطلب العليا.

الفكرة الأساسية هي:

 `const EnhancedComponent = enhance(WrappedComponent); 
` 

أين:

*   `enhance` هو مكون ترتيب العليا؛
*   `WrappedComponent` هو المكون الذي تريد `WrappedComponent` ؛ و
*   `EnhancedComponent` هو المكون الجديد الذي تم إنشاؤه.

هذا يمكن أن يكون الجسم من `enhance` HOC:

 `function enhance(WrappedComponent) { 
  return class extends React.Component { 
    render() { 
      const extraProp = 'This is an injected prop!'; 
      return ( 
        <div className="Wrapper"> 
          <WrappedComponent 
            {...this.props} 
            extraProp={extraProp} 
          /> 
        </div> 
      ); 
    } 
  } 
 } 
` 

في هذه الحالة ، `enhance` إرجاع **فئة المجهول** التي تمتد `React.Component` . يقوم هذا المكون الجديد بثلاثة أشياء بسيطة:

*   التقديم `WrappedComponent` داخل عنصر `div` ؛
*   تمرير الدعائم الخاصة به إلى `WrappedComponent` ؛ و
*   `WrappedComponent` دعم إضافي إلى `WrappedComponent` .

HOCs هي مجرد نمط يستخدم قوة الطبيعة المركبة React. **يضيفون ميزات إلى أحد المكونات** . هناك الكثير من الأشياء التي يمكنك القيام بها معهم!

## موارد آخرى

*   [تفاعلات المستندات: مكونات الطلب الأعلى](https://reactjs.org/docs/higher-order-components.html)
---
title: React TypeChecking with PropTypes
localeTitle: React TypeChecking مع PropTypes
---## رد فعل PropTypes

هذه هي بمثابة طريقة للتحقق من الكتابة مع تطبيق يميل إلى النمو ، مع هذا قاعدة كبيرة جدا من الأخطاء يميل إلى تصحيح مع استخدام هذه الميزة.

## كيفية الحصول على PropTypes

بدءًا من React version 15.5 ، تم نقل هذه الميزة إلى حزمة منفصلة باسم prop-types.

لاستخدامه ، يلزم إضافته إلى المشروع باعتباره تبعية من خلال إصدار الأمر التالي في وحدة التحكم.

 `npm install --save prop-types 
` 

بعد ذلك ، هناك مجموعة كاملة من أدوات التحقق التي يمكن استخدامها للتأكد من أن البيانات التي سيستقبلها المطور صحيحة بالفعل. عند تقديم قيمة غير صالحة ، سيظهر تحذير في وحدة تحكم جافا سكريبت.

لاحظ أنه لأسباب تتعلق بالأداء يتم تحديد PropTypes المحددة فقط أثناء وضع التطوير.

أيضا على العكس من حالة المكون ، والتي يمكن التلاعب بها حسب الحاجة ، وهذه الدعائم هي للقراءة فقط.

لا يمكن تغيير القيمة بواسطة المكون.

## الجسيمات المتاحة

خوار هو مثال رمز مع المدققين المختلفة المقدمة من الحزمة ، وكيفية حقنها في المكون.

 ``import PropTypes from 'prop-types'; 
 class MyComponent extends Component{ 
    constructor(props){ 
        super(props); 
    } 
    render(){ 
        return ( 
            ... 
        ); 
    } 
 } 
 
 MyComponent.propTypes = { 
  // A prop that is a specific JS primitive. By default, these 
  // are all optional. 
  optionalArray: PropTypes.array, 
  optionalBool: PropTypes.bool, 
  optionalFunc: PropTypes.func, 
  optionalNumber: PropTypes.number, 
  optionalObject: PropTypes.object, 
  optionalString: PropTypes.string, 
  optionalSymbol: PropTypes.symbol, 
 
  // Anything that can be rendered: numbers, strings, elements or an array 
  // (or fragment) containing these types. 
  optionalNode: PropTypes.node, 
 
  // A React element as a PropType 
  optionalElement: PropTypes.element, 
 
  // Declaring that a prop is an instance of a class. This uses 
  // JS's instanceof operator. 
  optionalMessage: PropTypes.instanceOf(AnotherComponent), 
 
  // You can ensure that your prop is limited to specific values by treating 
  // it as an enum. 
  optionalEnum: PropTypes.oneOf(['News', 'Photos']), 
 
  // An object that could be one of many types 
  optionalUnion: PropTypes.oneOfType([ 
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.instanceOf(AnotherComponent) 
  ]), 
 
  // An array of a certain type 
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number), 
 
  // An object with property values of a certain type 
  optionalObjectOf: PropTypes.objectOf(PropTypes.number), 
 
  // An object taking on a particular shape 
  optionalObjectWithShape: PropTypes.shape({ 
    color: PropTypes.string, 
    fontSize: PropTypes.number 
  }), 
 
  // You can chain any of the above with `isRequired` to make sure a warning 
  // is shown if the prop isn't provided. 
  requiredFunc: PropTypes.func.isRequired, 
 
  // A value of any data type 
  requiredAny: PropTypes.any.isRequired, 
 }; 
`` 

## ضبط القيم الافتراضية

كجزء من هذه الميزة ، من الممكن أيضًا تحديد القيم الافتراضية لأي مكون محدد يتم تعريفه أثناء التطوير.

هذه تأكد من أن الدعامة سيكون لها قيمة حتى إذا لم يتم تحديدها بواسطة المكون الأصلي.

الكود أدناه يفضح كيفية استخدام هذه funcionality.

 `import React,{Component} from 'react'; 
 import PropTypes from 'prop-types'; 
 class MyComponent extends Component{ 
    constructor(props){ 
        super(props); 
    } 
    render(){ 
        return ( 
            <h3>Hello, {this.props.name}</h3> 
        ); 
    } 
 } 
 MyComponent.defaultProps = { 
  name: 'Stranger' 
 }; 
` 

لمزيد من المعلومات حول PropTypes والمستندات الأخرى على React.

انتقل إلى [الموقع الرسمي](https://reactjs.org/) وقراءة المستندات أو [Gitub Repo](https://github.com/facebook/react/)
---
title: Manage Updates with Lifecycle Methods
localeTitle: إدارة التحديثات باستخدام أساليب دورة الحياة
---
## إدارة التحديثات باستخدام أساليب دورة الحياة

يحتوي هذا التحدي على إنشاء دالات دورة حياة الزوجية و componentWillUpdate و ComponentWillReceiveProps. سيتم تزويدك بوظيفة أخرى تسمى componentDidUpdate. سنناقش كيفية استخدامك لها في كل مرحلة من مراحل دورة حياة المكونات ولماذا يجب استخدامها عند التحقق من المراحل المختلفة للمكون.

دعنا نتحدث عن الوظائف وكيف ستستخدمها. يمكن تقسيم دورات حياة المكونات إلى أربع مراحل. التهيئة -> تركيب -> تحديث -> غير المحملة. ستقع المكونات التي ستعمل معها ضمن مرحلة التحديث.

التدرج الذي يتم استدعاء هذه الدالات فيه كالتالي: componentWillReceiveProps -> componentWillUpdate -> componentDidUpdate

عندما تقوم بإنشاء componentWillReceiveProps ، سوف تتحقق هذه الوظيفة لمعرفة ما إذا كانت هناك مستلزمات جديدة يتم استلامها. إذا كان المكون قد تلقى دعائم جديدة ، فسيتم استدعاء الوظيفة وداخل الكتلة يمكنك مقارنة دولتي الدعم. ستأخذ الوظيفة في وسيطة تسمى عادة nextProps وستقوم بمقارنتها بهذا .props. يتمثل التحدي في إنشاء هذه الوظيفة باستخدام الوسيطة التي تم تمريرها nextProps. انظر الوظيفة المقدمة أدناه.

التالي في مكون دورة حياة مكون سيتم استدعاء UPUpdate ، وسوف تحقق هذه الوظيفة لمعرفة ما إذا كان هناك أي تحديثات على الدعائم أو حالة وسيتم استدعاؤها قبل يعرض المكون. لقد وفر لك التحدى بالفعل هذه الوظيفة وقام بتسجيل الخروج "المكون على وشك التحديث".

بمجرد أن يمر المكون خلال المرحلة componentWillUpdate ويعرض المكون ، سيتم استدعاء componentDidUpdate. في هذه المرحلة ، يمكنك استدعاء this.setState لتحديث أية حالات تغيير حالة حدثت خلال المرحلتين الأوليين. ملاحظة: يمكنك فقط استدعاء setState إذا قمت بالالتفاف داخل شرط ما. نظرًا لأن هذا التحدي لا يمثل سوى خدش السطح ، فإنه يريد منك تسجيل الخروج من "تحديث المكون".

بمجرد الانتهاء من تنفيذ جميع وظائف دورة الحياة ، يجب أن تشاهد بعض سجلات وحدة التحكم التي يتم عرضها. أولاً ، سترى componentWillReceiveProps يرسل لك this.props و nextProps. بعد ذلك ، سترى سجل وحدة تحكم يتيح لك معرفة ذلك componentWillUpdate. أخيرًا ، بعد عرض المكون ، سيتم استدعاء المكون "DetUpdate "وسيسجل الخروج" تم تحديث المكون ".

ملاحظة: تم إهمال المكونات التي تقوم بإنشائها وستكون متاحة للاستخدام حتى الإصدار 17. يمكنك العثور على مزيد من المعلومات حول هذه الوظائف في قسم الموارد أدناه.

 `class Dialog extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  componentWillUpdate() { 
    console.log('Component is about to update...'); 
  } 
  // change code below this line 
 
  // Create componentWillReceiveProps 
  // Pass in argument nextProps and log out the current prop and next prop 
  componentWillReceiveProps(nextProps) { 
    // Log the current property and the next property 
    console.log(this.props, nextProps) 
  } 
 
  // Create function componentDidUpdate 
  // Log out that the component has updated 
  componentDidUpdate() { 
    console.log("Component has updated") 
  } 
 
  // change code above this line 
  render() { 
    return <h1>{this.props.message}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: 'First Message' 
    }; 
    this.changeMessage = this.changeMessage.bind(this); 
  } 
  changeMessage() { 
    this.setState({ 
      message: 'Second Message' 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.changeMessage}>Update</button> 
        <Dialog message={this.state.message}/> 
      </div> 
    ); 
  } 
 }; 
` 

### مصادر

*   [رد فعل دورة حياة المكونات](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*   [تفاعل مكون دورة الحياة البصرية](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)
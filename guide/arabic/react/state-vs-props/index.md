---
title: State vs Props
localeTitle: الدولة مقابل الدعائم
---## الدولة مقابل الدعائم

عندما نبدأ العمل مع مكونات React ، فإننا نسمع بشكل متكرر فترتين. هم `state` `props` . لذلك ، في هذه المقالة سوف نستكشف ما هي تلك وكيف تختلف.

## حالة:

*   الدولة هي شيء يمتلكه المكون. إنه ينتمي إلى ذلك المكون المحدد حيث يتم تعريفه. على سبيل المثال ، عمر الشخص هو حالة ذلك الشخص.
*   الدولة قابلة للتغيير. ولكن لا يمكن تغييره إلا عن طريق ذلك العنصر الذي يملكه. لأنني لا أستطيع سوى تغيير عمري ، وليس أي شخص آخر.
*   يمكنك تغيير حالة باستخدام هذا `this.setState()`

انظر المثال أدناه للحصول على فكرة عن الحالة:

#### Person.js

 `  import React from 'react'; 
 
  class Person extends React.Component{ 
    constructor(props) { 
      super(props); 
      this.state = { 
        age:0 
      this.incrementAge = this.incrementAge.bind(this) 
    } 
 
    incrementAge(){ 
      this.setState({ 
        age:this.state.age + 1; 
      }); 
    } 
 
    render(){ 
      return( 
        <div> 
          <label>My age is: {this.state.age}</label> 
          <button onClick={this.incrementAge}>Grow me older !!<button> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
` 

في المثال أعلاه ، `age` هو مكون حالة `Person` .

## الدعائم:

*   الدعائم تشبه حجج الأسلوب. يتم تمريرها إلى مكون حيث يتم استخدام هذا المكون.
*   الدعائم غير قابلة للتغيير. هم للقراءة فقط.

انظر المثال أدناه للحصول على فكرة من الدعائم:

#### Person.js

 `  import React from 'react'; 
 
  class Person extends React.Component{ 
    render(){ 
      return( 
        <div> 
          <label>I am a {this.props.character} person.</label> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
 
  const person = <Person character = "good"></Person> 
` 

في المثال أعلاه ، `const person = <Person character = "good"></Person>` نقوم بتمرير `character = "good"` للدعم إلى مكون `Person` .

يعطي الناتج "أنا شخص جيد" ، في الحقيقة أنا.

هناك الكثير لتعلمه على State and Props. يمكن تعلم الكثير من الأشياء عن طريق الغوص في الترميز. حتى الحصول على يديك القذرة بواسطة الترميز.

اتصل بي على [twitter](https://twitter.com/getifyJr) إذا لزم الأمر.

الترميز سعيدة!
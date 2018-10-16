---
title: Use && for a More Concise Conditional
localeTitle: استخدم && من أجل شرطي أكثر موجزًا
---
## استخدم && من أجل شرطي أكثر موجزًا

المثال المعطى هو

 `{condition && <p>markup</p>} 
` 

والذي يظهر أدناه باستخدام حالة this.state.dinnerCoined boolean. إذا كان الأمر المنطقي صحيحًا ، فسيتم عرض الترميز المضمن في {} مع الشرط ، وإلا فلن يتم عرضه

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      dinnerCooked: true 
    } 
  } 
  render() { 
    return ( 
       <div> 
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed 
       </div> 
    ); 
  } 
 }; 
 
 ## Hint: 
 
 You don't have to do a full ```if/then``` statement. Just write the condition you are checking. 
 
 ## Solution: 
 
 As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing. 
` 

JSX فئة MyComponent تمتد إلى React.Component { منشئ (الدعائم) { السوبر (الدعائم)؛ this.state = { dinnerCooked: false }  
} يجعل() {  
إرجاع (

{this.state.dinnerCooked &&

# العشاء مطهو!

} // لن يتم عرض محتويات العلامة h1 العرض: صحيح } this.toggleDisplay = this.toggleDisplay.bind (this)؛ } toggleDisplay () { this.setState ({ display:! this.state.display })؛ } يجعل() { // تغيير رمز أدناه هذا الخط إرجاع (

تبديل العرض {this.state.display &&

# عرض!

}

)؛ } }؛ \`\` \` Explanation from [ReactJS.org documentation](https://reactjs.org/docs/conditional-rendering.html)

يمكنك تضمين أي تعبيرات في JSX من خلال لفها في أقواس معقوفة. وهذا يشمل جافا سكريبت المنطقي && المشغل. يمكن أن يكون سهلًا بما في ذلك أحد العناصر بشكل مشروط

يعمل ذلك لأنه في جافا سكريبت ، يتم تقييم true && expression دائمًا للتعبير ، ويتم تقييم false && expression دائمًا إلى false.

لذلك ، إذا كان الشرط صحيحًا ، فسيظهر العنصر بعد &&&hl=ar مباشرةً في الإخراج. إذا كانت خاطئة ، سوف يتجاهل React ويتخطاه.
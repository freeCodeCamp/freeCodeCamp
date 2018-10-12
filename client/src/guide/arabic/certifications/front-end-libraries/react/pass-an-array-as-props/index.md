---
title: Pass an Array as Props
localeTitle: تمرير صفيف كما الدعائم
---
## تمرير صفيف كما الدعائم

لتمرير مصفوفة كبروب ، يجب أن يتم الإعلان أولاً عن صفيف على أنه دعم "المهام" على كل مكون من المكونات التي سيتم تقديمها:

 `const List= (props) => { 
  return <p></p> 
 }; 
 
 class ToDo extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>To Do Lists</h1> 
        <h2>Today</h2> 
        <List tasks={["Walk", "Cook", "Bake"]} /> 
        <h2>Tomorrow</h2> 
        <List tasks={["Study", "Code", "Eat"]}/> 
      </div> 
    ); 
  } 
 }; 
` 

ثم ، يجب التعامل مع الدعائم داخل مكون "قائمة":

 `const List= (props) => { 
  return <p>{props.tasks.join(", ")}</p> 
 }; 
 
 // ... same as above 
` 

يتم استخدام طريقة `.join(", ")` لأخذ كل عنصر من داخل الصفيف ثم `.join(", ")` إلى سلسلة ليتم عرضها.

نحن نستخدم نموذج رد الفعل في هذا المثال لعرض المهام التي تم تمريرها بواسطة مكونين مختلفين إلى مكون مشترك يعرض HTML النهائي.
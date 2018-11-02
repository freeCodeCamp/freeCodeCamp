---
title: Render a Class Component to the DOM
localeTitle: تقديم مكون فئة إلى DOM
---
## تقديم مكون فئة إلى DOM

من المفترض أن ينتهي رمزك بالظهور على النحو التالي:

 `class TypesOfVehicles extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
          <div> 
          <h1>Types of Vehicles:</h1> 
          <Car /> 
          <Motorcycle /> 
          </div> 
        ); 
    } 
 } 
 ReactDOM.render(<TypesOfVehicles />,'node-id') 
` 

قد يكون بناء جملة ReactDOM.render خادعاً قليلاً ، تحتاج إلى استخدام أقواس المثلث عند المرور في مكون Class. كما يتم الإعلان عن المكونين الفرعيين خلف الكواليس ، مما قد يكون مربكًا إذا كنت معتادًا على جميع المتغيرات التي يتم تحديدها في محرر الشفرة ومرئية أمامك.

### ملحوظة

*   استخدم document.getElementById ('id') للحصول على نقطة الهدف

### رابط ذو صلة

*   [عناصر التقديم](https://reactjs.org/docs/rendering-elements.html)
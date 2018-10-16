---
title: Handling Data with Props in React
localeTitle: التعامل مع البيانات مع الدعائم في رد الفعل
---
## التعامل مع البيانات مع الدعائم في رد الفعل

توفر الدعائم طريقة لتمرير البيانات والوصول إليها في مكونات React.

يتم تمرير البيانات إلى مكونات React كصفة في JSX.

 `<MyComponent someAttribute={data.value} /> 
` 

في JSX ، تشير الأقواس المتعرجة إلى تعبير JavaScript والذي يجب أن يعرض قيمة. يتم الوصول إلى البيانات التي تم تمريرها عبر الدعائم في المكون المحدد.

 `const MyComponent = props => { 
  <p>{props.someAttribute}</p> 
 }; 
` 

الآن دعونا نمشي على سبيل المثال في CodePen.

### ابدء

إذا لم تكن قد قمت بذلك بالفعل ، [فاشترك واشترك في حساب CodePen مجاني](https://codepen.io/accounts/signup/user/free) .

قم بإنشاء قلم جديد بتحديد "إنشاء"> "قلم جديد" بجوار صورة ملف تعريف CodePen الخاص بك.

بعد ذلك سنقوم بإضافة المكتبات المناسبة لتقديم مكونات React.

افتح جزء إعدادات JavaScript عن طريق تحديد "الإعدادات"> "JavaScript". اختر "Babel" ضمن "JavaScript Preprocessor".

التالي دعونا نضيف مكتبات React الخاصة بنا. ضمن "جافا سكريبت الخارجي" ، حدد القائمة المنسدلة "Quick-add" وأضف مكتبات "React" و "React DOM".

### باستخدام الدعائم

أولاً ، دعنا نحدد بعض البيانات الوهمية في ملف جافا سكريبت الخاص بنا.

 `const blogData = { 
  title: 'My blog title', 
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.' 
 }; 
` 

بعد ذلك ، دعنا نحدد مكونات مدونتنا.

 `const Heading = () => { 
  return ( 
    <h1>My Blog</h1> 
  ); 
 }; 
 
 const Blog = props => { 
  return ( 
    <div> 
      <h2>{props.title}</h2> 
      <p>{props.body}</p> 
    </div> 
  ); 
 }; 
` 

لاحظنا كيف استخدمنا الكائن المرخص لتقديم قيم العنوان والجسد التي سيتم تمريرها إلى مكون المدونة. الدعائم للقراءة فقط أو غير قابلة للتغيير ، لذلك لا داعي للقلق بشأن تغيير قيم الدعائم.

قبل أن نكتب مكوّن التطبيق لدينا ، نحتاج إلى حماية المكون الذي نستخدمه لتحديد نوع المتغير الذي سينتقل إلى كل دعم. سنحدد ذلك باستخدام React.PropTypes. أضف ما يلي إلى ملف JavaScript الخاص بك.

 `Blog.propTypes = { 
  title: React.PropTypes.string, 
  body: React.PropTypes.string 
 }; 
` 

هنا نقوم بتعريف أن البيانات التي يتم تمريرها إلى مكون المدونة ستكون سلاسل لكل من العنوان والجسم. تحقق من [وثائق](https://reactjs.org/docs/typechecking-with-proptypes.html) React للحصول على قائمة بجميع propTypes.

الآن ، دعنا نضع هذا معًا في أحد مكونات التطبيق وننزل بياناتنا.

 `const App = props => { 
  return ( 
    <div> 
      <Heading /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
    </div> 
  ); 
 }; 
` 

أخيرًا ، دعنا نعرض تطبيقنا (تأكد من إضافة علامة `<div>` جذر إلى ملف HTML):

 `ReactDOM.render( 
  <App />, 
  document.getElementById('root') 
 ); 
` 

الآن يجب أن تشاهد مكونات المدونة الخاصة بنا مصحوبة ببيانات وهمية يتم تمريرها عبر الدعائم.

يمكنك رؤية مثال CodePen [هنا](https://codepen.io/trey-davis/pen/MvdZGX) .
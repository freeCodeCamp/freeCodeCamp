---
title: Review Using Props with Stateless Functional Components
localeTitle: استعراض استخدام الدعائم مع مكونات وظيفية عديمة الحالة
---
## استعراض استخدام الدعائم مع مكونات وظيفية عديمة الحالة

### إشارة

*   المكون الوظيفي (المجهول عديم الحالة) هو مجرد وظيفة جافا سكريبت عادي يأخذ الدعائم كوسيطة ويعيد عنصر تفاعل.
*   استخدم `Component.defaultProps` لتعيين الأدوات الافتراضية.
*   استخدم `Component.propTypes` لتعيين أنواع الدعائم.

### حل

 `const Camper = props => (<p>{props.name}</p>); 
 
 Camper.defaultProps = { 
  name: 'CamperBot' 
 }; 
 
 Camper.propTypes = { 
  name: PropTypes.string.isRequired 
 }; 
` 

### رابط ذو صلة

*   [فحص مع PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
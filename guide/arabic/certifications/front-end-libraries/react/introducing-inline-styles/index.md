---
title: Introducing Inline Styles
localeTitle: إدخال الأنماط الداخلية
---
## إدخال الأنماط الداخلية

## حل

يمكن أن يكون هذا الأمر صعبًا قليلاً لأن JSX يشبه إلى حد بعيد HTML ولكن **ليس نفسه** .

لنستعرض الخطوات حتى تعرف الفرق. قم أولاً بتعيين علامة النمط على **كائن JavaScript** .

 `class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
` 

الآن لديك تعيين علامة النمط الخاص بك إلى كائن فارغ. لاحظ كيف أن هناك مجموعتين من الأقواس المتعرجة. هذا اختلاف مهم بين JSX و HTML.

ثانيًا ، لنقم بتعيين اللون إلى اللون الأحمر.

 `class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red' }}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
` 

أخيرًا ، لنقم بتعيين حجم الخط إلى 72 بكسل.

### المفسد

 `class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red', fontSize: '72'}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
` 

لاحظ كيف أن سمة **JSX** هي **camelCase** . هذا اختلاف مهم آخر يجب تذكره حول JSX. بالإضافة إلى ذلك ، ربما لاحظت عدم وجود وحدة. في JSX ، عند تعيين سمة fontSize ، تكون **الوحدة اختيارية** وسيتم تعيينها تلقائيًا على px إذا لم يتم تعيينها يدويًا.
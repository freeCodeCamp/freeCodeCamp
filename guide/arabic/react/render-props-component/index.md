---
title: Render Props Component
localeTitle: تقديم الدعائم مكون
---
## تقديم الدعائم مكون

الدعائم Render هو نمط React المتقدمة ، ولكن في غاية البساطة!

### مثال

هذا مثال على كيفية استخدام تقديم دعم لوظيفة تبديل.

 `import React, { PureComponent } from "react"; 
 
 class Toggle extends PureComponent { 
  state = { 
    on: false 
  }; 
 
  toggle = () => { 
    this.setState({ 
      on: !this.state.on 
    }); 
  }; 
 
  render() { 
    const { children } = this.props; 
    return children({ 
      on: this.state.on, 
      toggle: this.toggle 
    }); 
  } 
 } 
 
 export default Toggle; 
` 

هذا المكون تبديل سيعود انها الأطفال `state.on` وتبديل وظيفة. والتي يمكن استخدامها في مكونات الطفل.

يمكن استخدام Toggle كالتالي:

 `<Toggle> 
  {({ on, toggle }) => ( 
    <Fragment> 
      <button onClick={toggle}>Show / Hide</button> 
      {on && <h1>I can be toggled on or off!</h1>} 
    </Fragment> 
  )} 
 </Toggle> 
` 

كما ترى ، يمكن استخدام وظيفة التبديل من خلال زر الطفل لتبديل بعض المحتوى. إذا كان صحيحًا ، فسيتم عرض علامة h1 بخلاف ذلك.

## موارد آخرى

*   [رد فعل المستندات: تقديم الدعائم](https://reactjs.org/docs/render-props.html)
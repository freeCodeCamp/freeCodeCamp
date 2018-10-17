---
title: Render Conditionally from Props
localeTitle: تجعل مشروط من الدعائم
---
## تجعل مشروط من الدعائم

هذا هو التحدي صعبة بعض الشيء ولكن من السهل على الرغم من.

## حل

تغيير `handleClick()` مع العبارة `handleClick()` المناسبة.

 `handleClick() { 
  this.setState({ 
    counter: this.state.counter + 1 
  }); 
 } 
` 

في `render()` استخدام أسلوب `Math.random()` كما جاء في وصف التحدي وكتابة التعبير الثلاثي لتمرير `props` في مكون **نتائج.**

 ` let expression = Math.random() > .5; 
 
 {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> } 
` 

ثم تقديم الدعائم `fiftyFifty` في مكون النتائج.

 `  <h1> 
  { 
    this.props.fiftyFifty 
  } 
  </h1> 
`
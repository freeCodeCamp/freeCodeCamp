---
title: Use Array.filter() to Dynamically Filter an Array
localeTitle: استخدم Array.filter () Dynamically تصفية صفيف
---
## استخدم Array.filter () Dynamically تصفية صفيف

## تلميح 1:

استخدم `.filter()` لإنشاء مصفوفة جديدة تعرض فقط للمستخدمين عبر الإنترنت.

`this.state.users.filter(i => i.online == true)`

## تلميح 2:

استخدم `.map()` من التمرين السابق السابق لسرد المستخدمين عبر الإنترنت ومنحهم مفتاحًا فريدًا.

`usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)`

## حل:

ستقوم كلتا الطريقتين معاً بتصفية المصفوفة أولاً ثم سردها بشكل فردي.

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      users: [ 
        { 
          username: 'Jeff', 
          online: true 
        }, 
        { 
          username: 'Alan', 
          online: false 
        }, 
        { 
          username: 'Mary', 
          online: true 
        }, 
        { 
          username: 'Jim', 
          online: false 
        }, 
        { 
          username: 'Sara', 
          online: true 
        }, 
        { 
          username: 'Laura', 
          online: true 
        } 
      ] 
    } 
  } 
  render() { 
    const usersOnline = this.state.users.filter(i => i.online == true); // change code here 
    const renderOnline = usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>); // change code here 
    return ( 
       <div> 
         <h1>Current Online Users:</h1> 
         <ul> 
           {renderOnline} 
         </ul> 
       </div> 
    ); 
  } 
 }; 
`
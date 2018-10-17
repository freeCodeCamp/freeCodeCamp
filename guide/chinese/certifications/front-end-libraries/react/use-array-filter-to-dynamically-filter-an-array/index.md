---
title: Use Array.filter() to Dynamically Filter an Array
localeTitle: 使用Array.filter（）动态过滤数组
---
## 使用Array.filter（）动态过滤数组

## 提示1：

使用`.filter()`创建仅在线显示用户的新阵列。

`this.state.users.filter(i => i.online == true)`

## 提示2：

使用上一个练习之前的`.map()`来列出在线用户并为他们提供一个唯一的密钥。

`usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>)`

## 解：

两种方法组合将首先筛选出数组，然后单独列出它们。

```jsx
class MyComponent extends React.Component { 
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

```
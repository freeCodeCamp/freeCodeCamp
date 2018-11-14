---
title: Use const for Action Types
localeTitle: 将const用于Action Types
---
## 将const用于Action Types

### 使用const for Action Types比使用字符串有很大的优势。

**意外错误的字符串可能会导致错误。**

您可以在您的动作创建者中正确拼写`type: 'LOGIN'`但拼错`type: 'LOGN'`减速器中的`type: 'LOGN'` ，如下所示。
```
const loginUser = () => { 
  return { 
    type: 'LOGIN' 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case 'LOGN': 
      return { 
        authenticated: true 
      } 
 
    case 'LOGOUT': 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 
```

通过对Action Type使用const，如果你的字符串被拼错了也没关系，因为reducer的switch语句和Action Type都引用了相同的`const` 。使用`const`还可以引导代码编辑器在输入`const`建议`const` ，从而减少错误拼写`const`的可能性。

下面显示的代码将起作用。
```
const LOGIN = 'blahblahblah'; 
 const LOGOUT = 'wahwahwahwah'; 
 
 const loginUser = () => { 
  return { 
    type: LOGIN 
  } 
 }; 
 
 const logoutUser = () => { 
  return { 
    type: LOGOUT 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case LOGIN: 
      return { 
        authenticated: true 
      } 
 
    case LOGOUT: 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 

```
---
title: Restrict Possible Usernames
localeTitle: 限制可能的用户名
---
## 限制可能的用户名

## 解：

```javascript
let username = "JackOfAllTrades"; 
 let userCheck = /^[az]{2,}\d*$/i; 
 let result = userCheck.test(username); 
```

## 说明：

1.  用户名中唯一的数字必须在最后。 `\d$` 最后可以有零个或多个。 `*`

```javascript
/\d*$/; 
```

2.  用户名字母可以是小写和大写。 `i`

```javascript
/\d*$/i; 
```

3.  用户名长度必须至少为两个字符。 `{2,}` 双字母用户名只能使用字母字母。 `^[az]`

```javascript
/^[az]{2,}\d*$/i; 

```
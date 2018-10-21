---
title: Testing with Chaijs
localeTitle: 用Chaijs测试
---
[Chai](http://chaijs.com)是Node.js的测试库。

### 安装

您可以通过npm在项目中安装Chai。
```
npm install chai 
```

##### 专家提示

使用\*作为版本标记在_package.json的_ devDependencies中添加Chai。这样，您始终拥有最新版本。
```
"devDependencies": { 
  "chai": "*" 
 } 
```

### 如何使用

#### 断言

您可以使用_assert_来检查您的测试是否表现良好。
```
var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }; 
 
 assert.typeOf(foo, 'string'); // without optional message 
 assert.typeOf(foo, 'string', 'foo is a string'); // with optional message 
 assert.equal(foo, 'bar', 'foo equal `bar`'); 
 assert.lengthOf(foo, 3, 'foo`s value has a length of 3'); 
 assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
```

### 更多信息：

*   `help chai assert`
*   `help chai expectations`
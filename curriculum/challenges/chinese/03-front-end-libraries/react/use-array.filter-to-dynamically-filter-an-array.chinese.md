---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Array.filter（）动态过滤数组
---

## Description
<section id="description"> <code>map</code>数组方法是一个强大的工具，在使用React时经常会使用它。另一种与<code>map</code>相关的方法是<code>filter</code> ，它根据条件过滤数组的内容，然后返回一个新数组。例如，如果您的所有用户都具有<code>online</code>属性（可以设置为<code>true</code>或<code>false</code> ，则可以通过以下方式仅过滤那些在线用户： <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions">在代码编辑器中， <code>MyComponent</code>的<code>state</code>是用一组用户初始化的。有些用户在线，有些则没有。过滤数组，以便只查看在线用户。要执行此操作，请首先使用<code>filter</code>返回仅包含<code>online</code>属性为<code>true</code>的用户的新数组。然后，在<code>renderOnline</code>变量中，映射已过滤的数组，并为包含其<code>username</code>文本的每个用户返回<code>li</code>元素。确保包括一个独特的<code>key</code> ，就像在最后的挑战中一样。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
    const usersOnline = null; // change code here
    const renderOnline = null; // change code here
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

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

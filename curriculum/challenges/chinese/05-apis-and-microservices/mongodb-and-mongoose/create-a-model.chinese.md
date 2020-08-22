---
id: 587d7fb6367417b2b2512c07
title: Create a Model
localeTitle: 创建一个模型
challengeType: 2
---

## Description
<section id='description'> <code>0</code>首先，我们需要一个Schema。每个模式都映射到MongoDB集合。它定义了该集合中文档的形状。 <code>0</code>模式是模型的构建块。它们可以嵌套来创建复杂的模型，但在这种情况下，我们会保持简单。 <code>0</code>模型允许您创建对象的实例，称为文档。 <code>0</code>创建一个拥有此原型的人： 
<code>- Person Prototype -</code> 
<code>--------------------</code> 
<code>name : string [required]</code> 
<code>age : number</code> 
<code>favoriteFoods : array of strings (*)</code> <code>0</code>使用mongoose基本模式类型。如果需要，还可以添加<code>0</code>个字段，使用简单的验证器，如required或unique， <code>0</code>并设置默认值。请参阅<a href='http://mongoosejs.com/docs/guide.html'>mongoose文档</a> 。 
[C] RUD第一部分 - 创建<code>0</code>注意：Glitch是一个真实的服务器，在真实服务器中，与db的交互发生在处理函数中。当某些事件发生时执行这些功能（例如某人在您的API上命中端点）。我们将在这些练习中遵循相同的方法。 done（）函数是一个回调，告诉我们在完成插入，搜索，更新或删除等异步操作后我们可以继续。它遵循Node约定，应该在成功时调用done（null，data），或者在出错时调用（err）。 <code>0</code>警告 - 与远程服务交互时，可能会发生错误！ 
<code>/* Example */</code> 
<code>var someFunc = function(done) {</code> 
<code>//... do something (risky) ...</code> 
<code>if(error) return done(error);</code> 
<code>done(null, result);</code> 
<code>};</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 从mongoose模式创建实例应该会成功
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

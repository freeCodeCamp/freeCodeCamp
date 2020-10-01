---
id: bad87fee1348bd9aedf08835
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
title: 创建一组复选框
---

## Description
<section id='description'>
<code>checkboxes</code>（复选框）就好比多项选择题，正确答案有多个。
复选框是<code>input</code>选择框的另一种类型。
每一个复选框都应该嵌套在它自己的<code>label</code>（标签）元素中。
所有关联的复选框应该拥有相同的<code>name</code>属性。
最佳实践是在<code>label</code>元素上设置<code>for</code>属性，让其值与复选框的<code>id</code>属性值相等，这样就在<code>label</code>元素和它的子元素复选框之间创建了一种链接关系。例如：
下面是一个复选框的例子：
<code>&#60;label for="loving"&#62;&#60;input id="loving" type="checkbox" name="personality"&#62; Loving&#60;/label&#62;</code>
</section>

## Instructions
<section id='instructions'>
给表单添加三个复选框，每个复选框都被嵌套进<code>label</code>元素中，并且它的<code>name</code>属性均为<code>personality</code>，它们的内容可以随意指定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '表单应该有三个复选框。'
    testString: assert($('input[type="checkbox"]').length > 2);
  - text: '每个复选框都应该被嵌套进<code>label</code>元素中。'
    testString: assert($('label > input[type="checkbox"]:only-child').length > 2);
  - text: '确保<code>label</code>元素有结束标记。'
    testString: assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length);
  - text: '设置复选框的<code>name</code>属性均为<code>personality</code>。'
    testString: assert($('label > input[type="checkbox"]').filter('[name="personality"]').length > 2);
  - text: '每个复选框都应该在 <code>form</code> 标签内。'
    testString: assert($('label').parent().get(0).tagName.match('FORM'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
<p>点击查看更多<a href="#">猫咪图片</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
  <p>猫咪最喜欢的三件东西：</p>
  <ul>
    <li>猫薄荷</li>
    <li>激光笔</li>
    <li>千层饼</li>
  </ul>
  <p>猫咪最讨厌的三件东西：</p>
  <ol>
    <li>跳蚤</li>
    <li>打雷</li>
    <li>同类</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor">室内</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor">室外</label><br>
    <input type="text" placeholder="猫咪图片地址" required>
    <button type="submit">提交</button>
  </form>
</main>
```



</div>



</section>

## Solution
<section id='solution'>
</section>
              
---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNWKvuR'
forumTopicId: 16822
localeTitle: 创建一组单选按钮
---

## Description
<section id='description'>
<code>radio buttons</code>（单选按钮）就好比单项选择题，正确答案只有一个。
单选按钮是<code>input</code>选择框的一种类型。
每一个单选按钮都应该嵌套在它自己的<code>label</code>（标签）元素中。
所有关联的单选按钮应该拥有相同的<code>name</code>属性。
下面是一个单选按钮的例子：

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

最佳实践是在<code>label</code>元素上设置for属性，让其值与单选按钮的<code>id</code>属性值相等，这样就在<code>label</code>元素和它的子元素单选按钮之间创建了一种链接关系。例如：

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

</section>

## Instructions
<section id='instructions'>
给表单添加两个单选按钮，一个叫<code>indoor</code>，另一个叫<code>outdoor</code>，单选按钮的 <code>name</code> 为 <code>indoor-outdoor</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '页面上应该有两个单选按钮元素。'
    testString: assert($('input[type="radio"]').length > 1);
  - text: '设置单选按钮的<code>name</code>属性为<code>indoor-outdoor</code>。'
    testString: assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
  - text: '每一个单选按钮都应该嵌套进它自己的<code>label</code>元素中。'
    testString: assert($('label > input[type="radio"]:only-child').length > 1);
  - text: '每一个<code>label</code>元素都有结束标记。'
    testString: assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length));
  - text: '其中一个<code>label</code>元素的文本为<code>indoor</code>。'
    testString: assert($("label").text().match(/indoor/gi));
  - text: '其中一个<code>label</code>元素的文本为<code>outdoor</code>。'
    testString: assert($("label").text().match(/outdoor/gi));
  - text: '所有的单选按钮都应该包含在<code>form</code>表单中。'
    testString: assert($("label").parent().get(0).tagName.match('FORM'));

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
              
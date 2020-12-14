---
id: bad87dee1348bd9aede07836
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
title: 使用 id 属性来设定元素的样式
---

## Description
<section id='description'>
通过<code>id</code>属性，你可以做一些很酷的事情，例如，就像 class 一样，你可以使用 CSS 来设置他们的样式
可是，<code>id</code>不可以重用，只应用于一个元素上。同时，在 CSS 里，<code>id</code>的优先级要高于<code>class</code>，如果一个元素同时应用了<code>class</code>和<code>id</code>，并设置样式有冲突，会优先应用<code>id</code>的样式。
选择<code>id</code>为<code>cat-photo-element</code>的元素，并设置它的背景样式为<code>green</code>，可以在<code>style</code>标签里这样写：

```css
#cat-photo-element {
  background-color: green;
}
```

注意在<code>style</code>标签里，声明 class 的时候必须在名字前插入<code>.</code>符号。同样，在声明 id 的时候，也必须在名字前插入<code>#</code>符号。
</section>

## Instructions
<section id='instructions'>
尝试给含有<code>cat-photo-form</code>id属性的<code>form</code>表单的背景颜色设置为<code>green</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '设置<code>form</code>元素的 id 为<code>cat-photo-form</code>。'
    testString: assert($("form").attr("id") === "cat-photo-form");
  - text: '<code>form</code>元素应该含有<code>background-color</code>css 属性并且值为 <code>green</code>。'
    testString: assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)");
  - text: '确保<code>form</code>元素含有<code>id</code>属性。'
    testString: assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0);
  - text: '不要在<code>form</code>元素上添加其他<code>class</code>属性或者<code>style</code>行内样式。'
    testString: assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
  <div class="silver-background">
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
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor">室内</label>
    <label><input type="radio" name="indoor-outdoor">室外</label><br>
    <label><input type="checkbox" name="personality">忠诚</label>
    <label><input type="checkbox" name="personality">懒惰</label>
    <label><input type="checkbox" name="personality">积极</label><br>
    <input type="text" placeholder="猫咪图片地址" required>
    <button type="submit">提交</button>
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
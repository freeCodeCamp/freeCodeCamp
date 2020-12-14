---
id: 587d7790367417b2b2512ab0
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
title: 使用 tabindex 将键盘焦点添加到元素中
---

## Description
<section id='description'>
HTML 的<code>tabindex</code>属性有三个不同与标签焦点的功能。当它在标签上时，表示标签可以获得焦点。它的值可以是零、负整数及正整数，并决定了标签的行为。
当用户在页面中使用 tab 键时，有些标签，如：链接、表单控件，可以自动获得焦点。它们获得焦点的顺序与它们出现在文档流中的顺序一致。我们可以通过将<code>tabindex</code>属性值设为 0，来给其他标签赋予相同的功能，如：<code>div</code>、<code>span</code>、<code>p</code>等。举个例子：
<code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code>
<strong>注意：</strong><br><code>tabindex</code>属性值为负整数（通常为 -1）的标签也是有焦点的，只是不可以通过 tab 键来获得焦点。这种方法通常用于以编程的方式使内容获得焦点（如：激活用于弹出框的<code>div</code>标签），但是它超出了当前挑战的范围。
</section>

## Instructions
<section id='instructions'>
Camper Cat 新建了一个调查，用来收集他的用户的信息。他知道输入框可以自动获得键盘焦点，但他希望确保当键盘用户切换标签时，焦点可以停留在指示文字上。请给<code>p</code>标签添加<code>tabindex</code>属性，并将它的值设置为 0。注意：使用<code>tabindex</code>属性可以使 CSS 伪类<code>:focus</code>在<code>p</code>标签上生效。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该为表单中的<code>p</code>标签添加<code>tabindex</code>属性。'
    testString: assert($('p').attr('tabindex'));
  - text: '你应该将<code>p</code>标签的<code>tabindex</code>属性值设置为 0。'
    testString: assert($('p').attr('tabindex') == '0');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>
      
      
      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>
      
      
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
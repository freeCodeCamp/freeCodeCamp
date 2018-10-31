---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用tabindex将键盘焦点添加到元素
---

## Description
<section id="description"> HTML <code>tabindex</code>属性有三个与元素键盘焦点相关的不同功能。当它在标签上时，它表示可以关注元素。值（一个正数，负数或零的整数）决定了行为。当用户在页面中进行选项卡时，某些元素（如链接和表单控件）会自动接收键盘焦点。它与HTML源标记中的元素的顺序相同。通过在其上放置<code>tabindex=&quot;0&quot;</code>属性，可以将相同的功能赋予其他元素，例如<code>div</code> ， <code>span</code>和<code>p</code> 。这是一个例子： <code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code> <strong>注意</strong> <br>负<code>tabindex</code>值（通常为-1）表示元素是可聚焦的，但键盘无法访问。此方法通常用于以编程方式将焦点集中到内容上（例如，当激活用于弹出窗口的<code>div</code>时），并且超出了这些挑战的范围。 </section>

## Instructions
<section id="instructions"> Camper Cat创建了一项新调查，以收集有关其用户的信息。他知道输入字段会自动获得键盘焦点，但他希望确保键盘用户在指示项目时暂停指示。将<code>tabindex</code>属性添加到<code>p</code>标记并将其值设置为“0”。奖金 - 使用<code>tabindex</code>还可以使CSS伪类<code>:focus</code>在<code>p</code>标签上工作。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该将<code>tabindex</code>属性添加到包含表单指令的<code>p</code>标记。
    testString: 'assert($("p").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the <code>p</code> tag that holds the form instructions.");'
  - text: 您的代码应将<code>p</code>标记上的<code>tabindex</code>属性设置为值0。
    testString: 'assert($("p").attr("tabindex") == "0", "Your code should set the <code>tabindex</code> attribute on the <code>p</code> tag to a value of 0.");'

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

```js
// solution required
```
</section>

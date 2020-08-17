---
id: 5c6c06847491271903d37cfd
title: Use the value attribute with Radio Buttons and Checkboxes
challengeType: 0
forumTopicId: 301099
localeTitle: 使用单选框和复选框的 value 属性
---

## Description
<section id='description'>
当表单提交时，包括 options 已选值在内的数据会发送给服务端。<code>radio</code>和<code>checkbox</code>的<code>value</code>值决定了发送到服务端的实际内容。

例如：

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

在这里，有两个 <code>radio</code> 单选框。如果当用户提交表单时 <code>indoor</code>  选项被选中，表单数据会包含：<code>indoor-outdoor=indoor</code>。也就是 "indoor" 单选框的 <code>name</code> 和 <code>value</code> 属性。

如果没写 <code>value</code> 属性，会使用默认值做为表单数据提交，也就是 <code>on</code>。在这种情况下，如果用户点击 "indoor" 选项然后提交表单，表单数据的值为 <code>indoor-outdoor=on</code>，这可能并没有什么意义。因此最好将 <code>value</code> 属性设置一些有意义的内容。
</section>

## Instructions
<section id='instructions'>
给每一个<code>radio</code>和<code>checkbox</code>输入框添加<code>value</code>属性。请把每个<code>input</code>对应的<code>label</code>文本转换为小写（如 Outdoor 应转换为 outdoor），设置其为 value 的值（即 <code>value="outdoor"</code>）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '一个单选按钮应该包含 <code>indoor</code> 的 <code>value</code> 属性。'
    testString: assert($('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']").length > 0);
  - text: '一个单选按钮应该包含 <code>outdoor</code> 的 <code>value</code> 属性。'
    testString: assert($('label:contains("Outdoor") > input[type="radio"]').filter("[value='outdoor']").length > 0);
  - text: '一个复选框应该包含 <code>loving</code> 的 <code>value</code> 属性。'
    testString: assert($('label:contains("Loving") > input[type="checkbox"]').filter("[value='loving']").length > 0);
  - text: '一个复选框应该包含 <code>lazy</code> 的 <code>value</code> 属性。'
    testString: assert($('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']").length > 0);
  - text: '一个复选框应该包含 <code>lazy</code> 的 <code>energetic</code> 属性。'
    testString: assert($('label:contains("Energetic") > input[type="checkbox"]').filter("[value='energetic']").length > 0);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>点击查看更多<a href="#">猫咪照片</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一个可爱的橘猫躺在地上"></a>
  
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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
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

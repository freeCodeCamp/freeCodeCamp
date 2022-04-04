---
id: 587d778b367417b2b2512aa7
title: 將單選按鈕包裹在 fieldset 元素中以獲得更好的可訪問性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

接下來的表單主題是關於單選按鈕的可訪問性。 在上一個挑戰中，每個單選按鈕都有一個包含 `for` 屬性的 `label` 標籤，這些屬性值指向相關選項的 `id`。 然而單選按鈕通常成組出現，而且用戶必須選擇其中一項。

`fieldset` 標籤包裹整組單選按鈕，實現這個功能。 它經常使用 `legend` 標籤來提供分組的描述，以便屏幕閱讀器用戶會閱讀 `fieldset` 元素中的每個選項。

當選項的含義很明確時，如“性別選擇”，`fieldset` 與 `legend` 標籤可以省略。 這時，使用包含 `for` 屬性的 `label` 標籤就足夠了。

舉個例子：

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

當用戶使用郵件註冊時，Camper Cat 想知道他們的忍者等級。 他添加了一組單選按鈕，並從我們之前的課程中吸取了教訓，爲每個選項使用帶有 `for` 屬性的 `label` 標籤。 Camper Cat 加油！ 然而，他仍然需要一些幫助。 請將包含單選按鈕組的 `div` 標籤替換爲 `fieldset` 標籤；將 `p` 標籤替換爲 `legend` 標籤。

# --hints--

應存在 1 個 `fieldset` 標籤包含單選按鈕組。

```js
assert($('fieldset').length == 1);
```

確保 `fieldset` 標籤是閉合的。

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

應存在 1 個包含詢問用戶忍者等級內容文字的 `legend` 標籤。

```js
assert($('legend').length == 1);
```

不應存在 `div` 標籤。

```js
assert($('div').length == 0);
```

不應存在包含詢問用戶忍者等級內容文字的 `p` 標籤。

```js
assert($('p').length == 4);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>

      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

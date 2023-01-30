---
id: 5e601c0d5ac9d0ecd8b94afe
title: 美式英語英式英語轉換器
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

構建一個 JavaScript 全棧應用，在功能上與 <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a> 類似。 可以採用下面的任意一種方式完成這個挑戰：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用您選擇的站點生成器來完成項目。 並確保包含了我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

-   所有邏輯都可以進入 `/components/translator.js`
-   在 `/routes/api.js` 中完成 `/api/translate` 路由
-   在 `tests/1_unit-tests.js` 和 `tests/2_functional-tests.js` 中創建所有單元/功能測試
-   查看 `/components` 中的 JavaScript 文件以獲取應用程序應該翻譯的條款以及不同的拼寫
-   在 `.env` 文件中將 `NODE_ENV` 設置爲 `test`（沒有引號），在 Replit 上運行測試
-   使用 `npm run test` 命令在 console 中運行測試。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），並輸入“open shell”，打開 Replit 控制檯

在 `tests/1_unit-tests.js` 中寫下以下測試：

-   將 `Mangoes are my favorite fruit.` 轉換成英式英語
-   將 `I ate yogurt for breakfast.` 轉換成英式英語
-   將 `We had a party at my friend's condo.` 轉換成英式英語
-   將 `Can you toss this in the trashcan for me?` 轉換成英式英語
-   將 `The parking lot was full.` 轉換成英式英語
-   將 `Like a high tech Rube Goldberg machine.` 轉換成英式英語
-   將 `To play hooky means to skip class or work.` 轉換成英式英語
-   將 `No Mr. Bond, I expect you to die.` 轉換成英式英語
-   將 `Dr. Grosh will see you now.` 轉換成英式英語
-   將 `Lunch is at 12:15 today.` 轉換成英式英語
-   將 `We watched the footie match for a while.` 轉換成美式英語
-   將 `Paracetamol takes up to an hour to work.` 轉換成美式英語
-   將 `First, caramelise the onions.` 轉換成美式英語
-   將 `I spent the bank holiday at the funfair.` 轉換成美式英語
-   將 `I had a bicky then went to the chippy.` 轉換成美式英語
-   將 `I've just got bits and bobs in my bum bag.` 轉換成美式英語
-   將 `The car boot sale at Boxted Airfield was called off.` 轉換成美式英語
-   將 `Have you met Mrs Kalyani?` 轉換成美式英語
-   將 `Prof Joyner of King's College, London.` 轉換成美式英語
-   將 `Tea time is usually around 4 or 4.30.` 轉換成美式英語
-   將 `Mangoes are my favorite fruit.` 裏的轉換高亮
-   將 `I ate yogurt for breakfast.` 裏的轉換高亮
-   將 `We watched the footie match for a while.` 裏的轉換高亮
-   將 `Paracetamol takes up to an hour to work.` 裏的轉換高亮

在 `tests/2_functional-tests.js` 中編寫下以下測試：

-   翻譯文本字段和本地化字段：POST 請求到 `/api/translate`
-   翻譯文本字段和無效的本地化字段：POST 請求到 `/api/translate`
-   翻譯缺失的文本字段：POST 請求到 `/api/translate`
-   翻譯缺失的本地化字段：POST 請求到 `/api/translate`
-   翻譯空的文本：POST 請求到 `/api/translate`
-   翻譯無需翻譯的文本：POST 請求到 `/api/translate`

# --hints--

你應該提交你自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

可以向 `/api/translate` 發送 `POST` 請求，對請求體內的 `text` 文本進行翻譯， `locale` 字段可以是 `american-to-british` 或 `british-to-american`。 返回的對象應該包含提交的 `text` 以及翻譯的文本 `translation`。

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/translate` 路由應該可以處理用英美方式英語寫的時間。 例如，十點半英式英語寫爲 “10.30”，而美式英語寫爲 “10:30”。 `span` 元素應該包裹整個時間字符串，即 `<span class="highlight">10:30</span>`。

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

`/api/translate` 路由也應該處理美式英語和英式英語中頭銜/尊稱的縮寫方式。 例如，Doctor Wright 在英式英語中縮寫爲 “Dr Wright”，在美式英語中縮寫爲 “Dr. Wright"”。 請參閱 `/components/american-to-british-titles.js`，瞭解程序應當處理的不同標題。

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

將任何翻譯過的拼寫或條目放在 `<span class="highlight">...</span>` 標籤內以使其顯示爲綠色。

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

如果缺少一個或多個必填字段，返回 `{ error: 'Required field(s) missing' }`。

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

如果 `text` 爲空，返回 `{ error: 'No text to translate' }`。

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

如果 `locale` 與兩個指定的 locales 都不匹配，返回 `{ error: 'Invalid value for locale field' }`。

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

如果 `text` 不需要翻譯，返回的 `translation` 值爲`"Everything looks good to me!"`。

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

所有 24 項單元測試都已完成並通過。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

所有 6 項功能測試都已完成並通過。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

---
id: 587d8249367417b2b2512c41
title: 公制 - 英制轉換器
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

構建一個 JavaScript 全棧應用，在功能上與 <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a> 類似。 可以採用下面的任意一種方式完成這個挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
- 使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

- 在 `/controllers/convertHandler.js` 中完成必要的轉換邏輯
- 在 `/routes/api.js` 中完成必要的路由
- 複製 `sample.env` 文件到 `.env` 並按需設置變量
- 在 `.env` 文件中取消註釋 `NODE_ENV=test` 來運行測試
- 使用 `npm run test` 命令在 console 中運行測試。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），並輸入“open shell”，打開 Replit 控制檯

在 `tests/1_unit-tests.js` 中寫下以下測試：

- `convertHandler` 應該正確地讀取整個數字輸入。
- `convertHandler` 應該正確地讀取一個十進制數字輸入。
- `convertHandler` 應該正確地讀取一個分數輸入。
- `convertHandler` 應該正確地讀取一個帶小數點的分數輸入。
- `convertHandler` 當輸入雙分數時應該返回錯誤（`3/2/3`）。
- `convertHandler` 在沒有提供數字輸入時應該默認爲 `1`。
- `convertHandler` 應該正確地讀取每個有效的單位輸入。
- `convertHandler` 在輸入無效單位時應返回錯誤。
- `convertHandler` 在輸入有效單位時應返回正確的單位。
- `convertHandler` 應該正確返回每個有效輸入單位的拼寫字符串。
- `convertHandler` 應該正確地將 `gal` 轉換爲 `L`。
- `convertHandler` 應該正確地將 `L` 轉換爲 `gal`。
- `convertHandler` 應該正確地將 `mi` 轉換爲 `km`。
- `convertHandler` 應該正確地將 `km` 轉換爲 `mi`。
- `convertHandler` 應該正確地將 `lbs` 轉換爲 `kg`。
- `convertHandler` 應該正確地將 `kg` 轉換爲 `lbs`。

在 `tests/2_functional-tests.js` 中編寫下以下測試：

- 轉換一個有效的輸入例如 `10L`：`GET` 請求到 `/api/convert`。
- 轉換一個無效的輸入例如 `32g`：`GET` 請求到 `/api/convert`。
- 轉換一個無效的數字例如 `3/7.2/4kg`：`GET` 請求到 `/api/convert`。
- 轉換一個無效的數字和單位例如 `3/7.2/4kilomegagram`：`GET` 請求到 `/api/convert`。
- 轉換時沒有數字，例如 `kg`：`GET` 請求到 `/api/convert`。

# --hints--

你可以提交你自己的項目，而不是示例的 URL。

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

通過 `GET` 請求 `/api/convert`，傳入數字和單位的單個參數，可以將其轉換。 （提示：通過尋找第一個字符的索引來分割輸入，這將標記單位的開始）

```js

```

你可以將 `'gal'` 轉換爲 `'L'`，反之亦然。 （1 gal 轉換爲 3.78541 L）

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

你可以將 `'lbs'` 轉換爲 `'kg'`，反之亦然。 （1 lbs 轉換爲 0.453592 kg）

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

你可以將 `'mi'` 轉換爲 `'km'` 反之亦然。 （1 mi 轉換爲 1.60934 km）

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

所有輸入單位以大寫和小寫形式都應該被接受，但在 `initUnit` 和 `returnUnit` 中應以小寫形式返回，升除外，應將其表示爲大寫的 `'L'`。

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

如果測量單位無效，返回將爲 `'invalid unit'`。

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

如果數字無效，返回將爲 `'invalid number'`。

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

如果單位和數字都無效，返回將爲 `'invalid number and unit'`。

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

你可以在參數中使用分數、小數或小數分數（例如 5、1/2、2.5/6），如果沒有提供任何內容，則默認值爲 1。

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

你的返回將包含 `initNum`、`initUnit`、`returnNum`、`returnUnit` 和 `string` 拼寫單位格式 `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'`，結果四捨五入爲 5 位小數。

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

所有 16 項單元測試都已完成並通過。

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
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

所有 5 項功能測試都已完成並通過。

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
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

---
id: 587d8249367417b2b2512c41
title: 公制 - 英制转换器
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

构建一个 JavaScript 全栈应用，在功能上与 <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a> 类似。 可以采用下面的任意一种方式完成这个挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成你的项目。
- 使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

# --instructions--

- 在 `/controllers/convertHandler.js` 中完成必要的转换逻辑
- 在 `/routes/api.js` 中完成必要的路由
- 复制 `sample.env` 文件到 `.env` 并按需设置变量
- 在 `.env` 文件中取消注释 `NODE_ENV=test` 来运行测试
- 使用 `npm run test` 命令在 console 中运行测试。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），并输入“open shell”，打开 Replit 控制台

在 `tests/1_unit-tests.js` 中写下以下测试：

- `convertHandler` 应该正确地读取整个数字输入。
- `convertHandler` 应该正确地读取一个十进制数字输入。
- `convertHandler` 应该正确地读取一个分数输入。
- `convertHandler` 应该正确地读取一个带小数点的分数输入。
- `convertHandler` 当输入双分数时应该返回错误（`3/2/3`）。
- `convertHandler` 在没有提供数字输入时应该默认为 `1`。
- `convertHandler` 应该正确地读取每个有效的单位输入。
- `convertHandler` 在输入无效单位时应返回错误。
- `convertHandler` 在输入有效单位时应返回正确的单位。
- `convertHandler` 应该正确返回每个有效输入单位的拼写字符串。
- `convertHandler` 应该正确地将 `gal` 转换为 `L`。
- `convertHandler` 应该正确地将 `L` 转换为 `gal`。
- `convertHandler` 应该正确地将 `mi` 转换为 `km`。
- `convertHandler` 应该正确地将 `km` 转换为 `mi`。
- `convertHandler` 应该正确地将 `lbs` 转换为 `kg`。
- `convertHandler` 应该正确地将 `kg` 转换为 `lbs`。

在 `tests/2_functional-tests.js` 中编写下以下测试：

- 转换一个有效的输入例如 `10L`：`GET` 请求到 `/api/convert`。
- 转换一个无效的输入例如 `32g`：`GET` 请求到 `/api/convert`。
- 转换一个无效的数字例如 `3/7.2/4kg`：`GET` 请求到 `/api/convert`。
- 转换一个无效的数字和单位例如 `3/7.2/4kilomegagram`：`GET` 请求到 `/api/convert`。
- 转换时没有数字，例如 `kg`：`GET` 请求到 `/api/convert`。

# --hints--

你可以提交你自己的项目，而不是示例的 URL。

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

通过 `GET` 请求 `/api/convert`，传入数字和单位的单个参数，可以将其转换。 （提示：通过寻找第一个字符的索引来分割输入，这将标记单位的开始）

```js

```

你可以将 `'gal'` 转换为 `'L'`，反之亦然。 （1 gal 转换为 3.78541 L）

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

你可以将 `'lbs'` 转换为 `'kg'`，反之亦然。 （1 lbs 转换为 0.453592 kg）

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

你可以将 `'mi'` 转换为 `'km'` 反之亦然。 （1 mi 转换为 1.60934 km）

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

所有输入单位以大写和小写形式都应该被接受，但在 `initUnit` 和 `returnUnit` 中应以小写形式返回，升除外，应将其表示为大写的 `'L'`。

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

如果测量单位无效，返回将为 `'invalid unit'`。

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

如果数字无效，返回将为 `'invalid number'`。

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

如果单位和数字都无效，返回将为 `'invalid number and unit'`。

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

你可以在参数中使用分数、小数或小数分数（例如 5、1/2、2.5/6），如果没有提供任何内容，则默认值为 1。

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

你的返回将包含 `initNum`、`initUnit`、`returnNum`、`returnUnit` 和 `string` 拼写单位格式 `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'`，结果四舍五入为 5 位小数。

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

所有 16 项单元测试都已完成并通过。

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

所有 5 项功能测试都已完成并通过。

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

---
id: bd7158d8c442eddfaeb5bd17
title: 構建一個 JavaScript 計算器
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--
**注意:** **已知React 18 在這個項目的測試中不兼容 (見[issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a>.

實現以下的用戶故事並且通過所有的測試用例。 使用你需要的任何庫和第三方API。 使用你自己的個人風格樣式。

你可以使用HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, 和 jQuery來完成這個項目。 你應該使用一個前端框架（比如像是React）因爲這個部分是有關於學習前端框架的。 不推薦使用以上沒有列出的其他技術，不然風險自擔。 我們正着手支持其他前端框架像是Angular和Vue，但是現在還不支持他們。 我們將會接受並且努力修復所有使用推薦的技術棧在這個項目中出現的問題。 編程愉快！

**User Story #1:** My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.

**User Story #2:** My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.

**User Story #3:** My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**User Story #4:** My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.

**User Story #5:** My calculator should contain a clickable element with an `id="clear"`.

**User Story #6:** My calculator should contain an element to display values with a corresponding `id="display"`.

**User Story #7:** At any time, pressing the `clear` button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.

**User Story #8:** As I input numbers, I should be able to see my input in the element with the id of `display`.

**User Story #9:** In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit `=`, the correct result should be shown in the element with the id of `display`.

**User Story #10:** When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

**User Story #11:** When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.

**User Story #12:** I should be able to perform any operation (`+`, `-`, `*`, `/`) on numbers containing decimal points.

**User Story #13:** If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (`-`) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. `5 * 7`); if `5 * - 5 =` is entered, the result should be `-25` (i.e. `5 * (-5)`).

**User Story #14:** Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.

**User Story #15:** My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like `2 / 7` with reasonable precision to at least 4 decimal places).

**Note On Calculator Logic:** It should be noted that there are two main schools of thought on calculator input logic: <dfn>immediate execution logic</dfn> and <dfn>formula logic</dfn>. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

**EXAMPLE:** `3 + 5 x 6 - 2 / 4 =`

-   **立即執行邏輯：** `11.5`
-   **公式／表達式邏輯：** `32.5`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>創建你的新項目，點擊 `Save` 即可創建你的新項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且該項目所有測試運行通過，請提交項目的 URL。

# --solutions--

```js
// solution required
```

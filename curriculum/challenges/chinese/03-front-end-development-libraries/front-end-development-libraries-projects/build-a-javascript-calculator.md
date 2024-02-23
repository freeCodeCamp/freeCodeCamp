---
id: bd7158d8c442eddfaeb5bd17
title: 构建一个 JavaScript 计算器
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--
**注意:** **已知React 18 在这个项目的测试中不兼容 (见[issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a>.

实现以下的用户故事并且通过所有的测试用例。 使用你需要的任何库和第三方API。 使用你自己的个人风格样式。

你可以使用HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, 和 jQuery来完成这个项目。 你应该使用一个前端框架（比如像是React）因为这个部分是有关于学习前端框架的。 不推荐使用以上没有列出的其他技术，不然风险自担。 我们正着手支持其他前端框架像是Angular和Vue，但是现在还不支持他们。 我们将会接受并且努力修复所有使用推荐的技术栈在这个项目中出现的问题。 编程愉快！

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

-   **立即执行逻辑：** `11.5`
-   **公式／表达式逻辑：** `32.5`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>创建你的新项目，点击 `Save` 即可创建你的新项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```

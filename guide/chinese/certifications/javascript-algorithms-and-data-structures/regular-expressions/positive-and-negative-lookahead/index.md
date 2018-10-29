---
title: Positive and Negative Lookahead
localeTitle: 积极和消极的前瞻
---
## 积极和消极的前瞻

*   记得使用2个`lookaheads`来检查字符串中的模式。第一个`lookahead`与示例中给出的非常相似 - '（？= \\ w {3,6}）' - 只有`lower-number` 3对于我们的测试用例来说太低了，并且`upper-number`是完全不必要的。第一个`lookahead`仅用于查找由一定数量的字符组成的字符串。必须使用第二个`lookahead`来检查字符串末尾的连续数值。
    
*   第二个`lookahead`也类似于示例中给出的 - `(?=\D*\d)` - 但是，也必须修改此表达式以传递所有测试用例。请记住指定要在字符串末尾显示的确切数字量。
    

## 方案：

```javascript
let sampleWord = "astronaut"; 
 let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
 let result = pwRegex.test(sampleWord); 

```
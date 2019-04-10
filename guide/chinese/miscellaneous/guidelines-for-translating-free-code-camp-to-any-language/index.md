---
title: Guidelines for Translating Free Code Camp to Any Language
localeTitle: 将免费代码营翻译成任何语言的指南
---
非常感谢您对翻译FreeCodeCamp的兴趣。建议您阅读本文档，共同努力将FreeCodeCamp带给全世界越来越多的人。

## 如何为翻译做贡献？

您可以通过多种方式协作翻译。每次翻译工作通常都遵循以下工作流程。

> _专业提示：您可以根据自己的兴趣为工作流程中的任何或所有以下阶段做出贡献。_

*   [审查另一位翻译的工作](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3) 。
*   [创建`Translation`问题以跟踪进度](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4) 。
*   [实施翻译](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5) 。
*   [创建Pull请求以将Translations添加到代码库](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## 指南和资源

### 一般准则

*   尽量不要太正式但不要太随意，只是为了保持友好。
*   为了使目标语言的母语人士更容易理解内容（想想那些不会说英语的人），尽可能多地翻译，只有在国家/地区广泛使用时才尝试使用英语单词说出目标语言的地方。

### 词汇表

如果所有使用相同语言的翻译人员创建一个词汇表，显示FreeCodeCamp挑战中使用的英语单词翻译，则效率很高。有时翻译某些术语的方式不止一种，区域差异可能会产生混淆（例如，西班牙语与西班牙语和拉丁美洲语之间或加拿大和法国使用的法语之间的某些术语可能不同）。要民主！通过投票选择最合适的翻译并记录结果。这种记录的一个例子可以在这里找到： [FreeCodeCamp Glossary（英语到西班牙语）](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0)使用聊天室讨论词汇表，所以没有人会错过任何东西。

### 如果您需要Google翻译工具包的帮助

您可以通过使用Google翻译工具包找到自动化翻译流程的帮助，请参阅： [西班牙语指南](https://github.com/vtamara/fcc_trad)

### 创建FreeCodeCamp的测试实例

随着翻译的推进，看到最终产品可以帮助您保持积极性。这就是为什么创建一个FreeCodeCamp的测试实例是个好主意，你可以在其中包含你正在使用的语言翻译的最新变化，并使用FreeCodeCamp包括那些变化。为西班牙语版本的FreeCodeCamp创建了以下测试实例： [入门](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json) 。要创建测试实例，请执行以下步骤：

1.  按照“ [贡献”页面](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md)的说明，确保您可以看到正在运行的英文实例
2.  打开[支持的Languages.js](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js)并添加实例的语言。（例如`es: 'Spanish'` ），重新启动您的实例。
3.  使用您的语言前缀更改网址（例如，对于西班牙语， `/en/challenges/` to `/es/challenges/` ），如果页面已翻译，您应该能够看到它。
4.  查找语言文件，尝试搜索存储库中的关键字，您可以在`/seed/challenges/`下找到所有挑战，例如，“ _[入门”](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_页面位于`freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  快乐翻译！
6.  在提交PR之前，请确保在提交中**不要**包含`supported-lamguages.js` （ `$ git reset -- common/utils/supported-languages.js` ）
7.  最后但并非最不重要，请确保遵循“ [贡献者指南”中的](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)所有规则。
8.  谢谢你的贡献！

### 参考

*   [FreeCodeCamp源代码的文档。](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [提取请求贡献](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [帮助文件使用Google Translator Toolkit翻译FreeCodeCamp的挑战和指示。](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [贡献者指南](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

如果您觉得它很有用，您可以将这些说明翻译成您的语言，并为您的翻译团队进行调整（例如，请参阅[原文为西班牙语。](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md) ）

_本指南基于[此文章](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md) 。_
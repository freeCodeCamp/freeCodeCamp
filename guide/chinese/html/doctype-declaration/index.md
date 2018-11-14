---
title: Doctype Declaration
localeTitle: Doctype声明
---
## Doctype声明

HTML文档类型声明（也称为`DOCTYPE` ）是每个HTML或XHTML文档中所需的第一行代码。 `DOCTYPE`声明是向Web浏览器发出的关于页面编写的HTML版本的指令。这确保了不同Web浏览器以相同的方式解析网页。

在HTML 4.01中， `DOCTYPE`声明引用文档类型定义（DTD）。 DTD定义XML文档的结构和合法元素。因为HTML 4.01基于标准通用标记语言（SGML），所以需要在`DOCTYPE`声明中引用DTD。

此外，HTML 4.01的doctypes需要声明`strict` ， `transitional`或`frameset` DTD，每个DTD具有不同的用例，如下所述。

*   **严格的DTD** ：用于_排除_ W3C在CSS支持增长时期望逐步淘汰的属性和元素的网页
*   **Transitional DTD** ：用于_包含_ W3C期望在CSS支持增长时逐步淘汰的属性和元素的网页
*   **框架集DTD** ：用于带框架的网页

相比之下，HTML5 `DOCTYPE`的声明要简单得多：它不再需要引用DTD，因为它不再基于SGML。有关HTML 4.01和HTML5 `DOCTYPE`之间的比较，请参阅下面的示例。

### 例子

HTML5及更高版本的Doctype语法：

```html

<!DOCTYPE html> 
```

严格HTML 4.01的Doctype语法：

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
```

过渡HTML 4.01的Doctype语法：

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
```

框架集HTML 4.01的Doctype语法：

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> 
```

## 历史

在HTML形成期间，Web标准尚未达成一致。浏览器供应商将以他们想要的任何方式构建新功能。竞争浏览器几乎没有什么问题。结果是Web开发人员不得不选择一个浏览器来开发他们的网站。这意味着网站无法在不受支持的浏览器中呈现。这种情况无法继续下去。

W3C（万维网联盟）编写了一套Web标准来处理这种情况。所有浏览器供应商和Web开发人员都应遵守这些标准。这将确保网站在各种浏览器中都能很好地呈现。标准要求的变化与现有的一些做法完全不同。坚持这些将破坏现有的非标准兼容网站。

为了解决这个问题，供应商开始将渲染模式编程到他们的浏览器中。 Web开发人员需要在HTML文档的顶部添加doctype声明。 doctype声明将告诉浏览器该文档使用哪种呈现模式。浏览器通常可以使用三种独立的渲染模式。 **完全标准模式**根据W3C Web标准呈现页面。 **Quirks模式**以非标准兼容的方式呈现页面。 **几乎标准模式**接近完全标准模式，但支持少量怪癖。

在HTML5的现代时代，Web标准在所有主流浏览器中都得到了完全实现。网站通常以符合标准的方式开发。因此，HTML5 doctype声明仅用于告诉浏览器以完全标准模式呈现文档。

## 用法

Doctype声明必须是HTML文档中的第一行代码，除了注释之外，如果需要，它可以在它之前。对于现代HTML5文档，doctype声明应如下所示：

`<!DOCTYPE html>`

#### 更多信息：

虽然不再普遍使用，但是以前版本的HTML还有其他几种doctype声明类型。还有XML文档的特定版本。要阅读有关这些内容的更多信息，并查看每个代码示例，请查看[Wikipedia文章](https://en.wikipedia.org/wiki/Document_type_declaration) 。

[W3的一张纸条](https://www.w3.org/QA/Tips/Doctype)

[MDN词汇表条目](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

[W3Schools的](https://www.w3schools.com/tags/tag_doctype.asp)

[快速解释“怪癖模式”和“标准模式”](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)
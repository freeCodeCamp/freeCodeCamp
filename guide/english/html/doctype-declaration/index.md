---
title: Doctype Declaration
---
## Doctype Declaration

The HTML document type declaration, also known as `DOCTYPE`, is the first line of code required in every HTML or XHTML document. The `DOCTYPE` declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.

In HTML 4.01, the `DOCTYPE` declaration refers to a document type definition (DTD). A DTD defines the structure and the legal elements of an XML document. Because HTML 4.01 was based on the Standard Generalised Markup Language (SGML), referring to a DTD in the `DOCTYPE` declaration was necessary.

Additionally, doctypes for HTML 4.01 required the declaration of either `strict`, `transitional`, or `frameset` DTD, each with a different use case as outlined below.

- **Strict DTD**: Used for web pages that *exclude* attributes and elements that W3C expects to phase out as CSS support grows
- **Transitional DTD**: Used for web pages that *include* attributes and elements that W3C expects to phase out as CSS support grows
- **Frameset DTD**: Used for web pages with frames

In contrast, the declaration of HTML5 `DOCTYPE` is much simpler: it no longer requires a reference to DTDs as it is no longer based on SGML. See the examples below for a comparison between HTML 4.01 and HTML5 `DOCTYPE`s.

### Examples

Doctype syntax for HTML5 and beyond:
```html
<!DOCTYPE html>
```

Doctype syntax for strict HTML 4.01:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Doctype syntax for transitional HTML 4.01:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```


Doctype syntax for frameset HTML 4.01:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## History

During the formative years of HTML, web standards were not agreed upon yet. Browser vendors would build new features in whatever way they wanted. There was little concern for competing browsers. The result was that web developers had to choose a browser to develop their sites for. This meant that sites would not render well in unsupported browsers. This situation could not continue.

The W3C (World Wide Web Consortium) wrote a set of web standards to handle this situation. All browser vendors and web developers should adhere to these standards. This would ensure that websites would render well across browsers. The changes required by the standards were quite different from some existing practices. Adhering to them would break existing non standards compliant websites.

To handle this problem, vendors began programming rendering modes in to their browsers. Web developers would need to add a doctype declaration to the top of an HTML document. The doctype declaration would tell the browser which rendering mode to use for that document. Three separate rendering modes were generally available across browsers. **Full standards mode** renders pages according to the W3C web standards. **Quirks mode** renders pages in a non standards compliant way. **Almost standards mode** is close to full standards mode, but features support for a small number of quirks.

In the modern age of HTML5, web standards are fully implemented in all major browsers. Web sites are generally developed in a standards compliant way. Because of this the HTML5 doctype declaration only exists to tell the browser to render the document in full standards mode.

## Usage

The Doctype Declaration must be the very first line of code in an HTML document, aside from comments, which can go before it if needed. For modern HTML5 documents the doctype declaration should be as follows:

`<!DOCTYPE html>`

#### More Information:

While no longer in general use, there are several other doctype declaration types from previous versions of HTML. There are also specific versions for XML documents. To read more about these, and to see code examples for each, take a look at the [Wikipedia article](https://en.wikipedia.org/wiki/Document_type_declaration).

[A note from the W3](https://www.w3.org/QA/Tips/Doctype)

[MDN Glossary entry](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

[W3Schools](https://www.w3schools.com/tags/tag_doctype.asp)

[A quick explanation of "Quirks Mode" and "Standards Mode"](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)

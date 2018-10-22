---
title: Extensible Markup Language (XML)
---
## Extensible Markup Language (XML)

XML stands for eXtensible Markup Language. It is extensible, because it does not use a predefined set of tags for identifying structural components, instead, it provides a mechanism for defining such sets of tags. The main purpose of the language is to share the data. Unlike HTML, in XML there is no predefined set of tags and tags specify meaning, rather than the presentation.
The format is both Machine and Human Readable.

 ## Syntax of XML
  XML syntax refers to the rules that determine how an XML application can be written. The XML syntax is very straight forward, and this makes XML very easy to learn. When all syntax is correct the xml document is said to be "well formed.".
  XML documents must contain one root element that is the parent of all other elements:
  
```
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```  
#### Elements
##### XML must have a root element, be properly nested, elements must have closing tags
Above syntax shows the root element which is necessary while creating an XML code. This can be shown by the example:-
```
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```
In this example 'note' is the root element.

#### Attributes & Tags
Attributes values must be quoted and tags are case sensitive.

## Advantages and Disadvantages of XML  
### Advantages of using XML:
    * Simplicity - XML documents are ordinary text files that can be created and edited with any text editor.
    * Vendor independence
    * Platform independence
    * Extensive infrastructure

#### The following are areas that can be simiplified with XML: 
1. data sharing
2. data transport
3. platform changes
4. data availability
  
### Disadvantages of using XML:
   * Verbose and cumbersome syntax
   * Highly inefficient storage

It became a W3C Recommendation in February 1998.

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)

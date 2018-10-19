---
title: Extensible Markup Language (XML)
---
## Extensible Markup Language (XML)

  XML stands for eXtensible Markup Language. It is extensible, because it does not use a predefined set of tags for identifying structural components; instead, it provides a mechanism for defining such sets of tags. In XML, tags specify meaning rather than presentation, and the main purpose of the language is to share data: XML is a format that is both human- and machine-readable.
  XML became a W3C Recommendation as early as February, 1998.
  
 ## Syntax of XML
  XML syntax refers to the rules that determine how an XML application can be written. The XML syntax is very straight forward, and this    makes XML very easy to learn.
#### Sample XML snippet:
```
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```  
#### XML must have a root element 
XML documents must contain one root element that is the parent of all other elements: 
```
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```
In the above example 'note' is the root element.
 
## Advantages of using XML:
* Simplicity - XML documents are ordinary text files that can be created and edited with any text editor.
* Vendor independence - XML can be read and written with non-proprietary systems
* Platform independence - XML can be used to share data between systems
* Extensive infrastructure - XML-based databases, HTML transformations ([XSLT](https://www.w3schools.com/xml/xml_xslt.asp)), query languages ([XQuery](https://www.w3schools.com/xml/xml_xquery.asp), [XPath](https://www.w3schools.com/xml/xml_xpath.asp)), and more extend what is possible XML.
  
## Disadvantages of using XML:
* Verbose and cumbersome syntax
* Highly inefficient storage  

## XML vs. HTML

There are a few differences between XML and HTML: XML was designed to carry information and focuses on modeling that information for transmission; HTML displays information, with a focus on presentation and display. As mentioned before, XML does not use a predefined set of tags. XML tags are user defined, often with the help of an [XML Schema](https://www.w3schools.com/xml/xml_schema.asp).

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)

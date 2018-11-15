---
title: Extensible Markup Language (XML)
---
## Extensible Markup Language (XML)

  XML stands for eXtensible Markup Language. It is extensible, because it does not use a predefined set of tags for identifying structural components. Instead, it provides a mechanism for defining such sets of tags. The main purpose of the language is to share data. Unlike HTML, in XML there is no predefined set of tags and tags specify meaning, rather than the presentation.
  
 ## Syntax of XML
  XML syntax refers to the rules that determine how an XML application can be written. XML syntax is very straight forward, and this makes XML very easy to learn.

  XML documents must contain one root element that is the parent of all other elements:
  
```
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```  
#### XML must have a root element 
The above syntax shows the root element which is necessary while writing XML code. This is shown in the following example:-
```
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```
In this example, 'note' is the root element.
 
  
  * Advantages of using XML:
    * Simplicity - XML documents are ordinary text files that can be created and edited with any text editor.
    * Vendor independence
    * Platform independence
    * Extensive infrastructure
  
 * Disadvantages of using XML:
   * Verbose and cumbersome syntax
   * Highly inefficient storage  

In Computer Language, eXtensible Markup Language(XML) is that which defines a set or block of Rules which are later used for Encoding documents in such a format that is both human and machine readable.

There are two primary differences between XML and HTML: 
1. XML was designed to describe data; whereas, HTML was designed to display data. 
2. HTML uses predefined tags while XML uses user defined tags.

XML helps simplify: 
1. data sharing
2. data transport
3. platform changes
4. data availability

It became a W3C Recommendation as early as in February 1998!

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)

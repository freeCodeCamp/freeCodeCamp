---
title: Extensible Markup Language (XML)
---
## Extensible Markup Language (XML)

  XML stands for eXtensible Markup Language. It is extensible, because it does not use a predefined set of tags for identifying structural components, instead, it provides a mechanism for defining such sets of tags. The main purpose of the language is to share the data. Unlike HTML, in XML there is no predefined set of tags and tags specify meaning, rather than the presentation.
  
 ## Syntax of XML
  XML syntax refers to the rules that determine how an XML application can be written. The XML syntax is very straight forward, and this    makes XML very easy to learn.
  XML documents must contain one root element that is the parent of all other elements:
  
```
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```  
#### XML must have a root element 
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
 
  
  * Advantages of using XML:
    * Simplicity - XML documents are ordinary text files that can be created and edited with any text editor.
    * Vendor independence
    * Platform independence
    * Extensive infrastructure
  
 * Disadvantages of using XML:
   * Verbose and cumbersome syntax
   * Highly inefficient storage  

In Computer Language, eXtensible Markup Language(XML) is that which defines a set or block of Rules which are later used for Encoding documents in such a Format which is both Machine and Human Readable.

There is a main thing between XML and HTML which makes them different from each other. It is that XML was designed to carry a particular information and focuses on that informaion only. And HTML focuses on displaying that particular Information like design and all these stuff regarding the information.

Also XML does not uses a predefined tags as used by HTML. It uses user defined tags.

The following are areas that can be simiplified with XML: 
1. data sharing
2. data transport
3. platform changes
4. data availability

And it's main achievement was that it became a W3C Recommendation as early as in February 1998.

XML for Android:
Actually many of the android beginners feel that it's compulsory to learn xml for android but it's not necessary to do so because the xml used in android is pretty simple.It is somewhat like a command line interface and if you still don't seem convinced just see some sample codes but I'm not telling you to leave it just learn some basics for a day or two and you're good to go.

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)

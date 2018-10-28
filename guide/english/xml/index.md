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

### Applications of XML

The essence of why extensible markup languages are necessary is explained at Markup language (for example, see Markup language § XML) and at Standard Generalized Markup Language.

Hundreds of document formats using XML syntax have been developed, including RSS, Atom, SOAP, SVG, and XHTML. XML-based formats have become the default for many office-productivity tools, including Microsoft Office (Office Open XML), OpenOffice.org and LibreOffice (OpenDocument), and Apple's iWork{citation needed}. XML has also provided the base language for communication protocols such as XMPP. Applications for the Microsoft .NET Framework use XML files for configuration. Apple has an implementation of a registry based on XML.[8]

Many industry data standards, e.g. HL7, OTA, FpML, MISMO, NIEM, etc. are based on XML and the rich features of the XML schema specification. Many of these standards are quite complex and it is not uncommon for a specification to comprise several thousand pages.

In publishing, DITA is an XML industry data standard. XML is used extensively to underpin various publishing formats.

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)

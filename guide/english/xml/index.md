---
title: Extensible Markup Language (XML)
---
## Extensible Markup Language (XML)

  XML stands for eXtensible Markup Language. It is extensible, because it does not use a predefined set of tags for identifying structural components; instead, it provides a mechanism for defining such sets of tags. In XML, tags specify meaning rather than presentation, and the main purpose of the language is to share data: XML is a format that is both human- and machine-readable.  XML was designed to be self-descriptive.  XML became a W3C Recommendation as early as February, 1998.

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

XML was replaced by JSON as the main language for transferring data but XML is still widely used to create user interfaces for Android, JavaFX and general GUI design due to its expressive quality. The following example is a view created with a framework called SAPUI5 that uses XML:
```
          <m:FlexBox wrap="NoWrap" fitContainer="true" alignItems="Center" class="sapUiTinyMarginEnd">
            <m:Title text="{products>Name}" wrapping="true" class="sapUiTinyMarginEnd"/>
          </m:FlexBox>
```
As you can see, XML is quite similar to HTML, but the difference lies in the functionality.

There is a main thing between XML and HTML which makes them different from each other. It is that XML was designed to carry a particular information and focuses on that informaion only. And HTML focuses on displaying that particular Information like design and all these stuff regarding the information.

There are two primary differences between XML and HTML:
1. XML was designed to describe data; whereas, HTML was designed to display data.
2. HTML uses predefined tags while XML uses user defined tags.

XML helps simplify:
1. data sharing
2. data transport
3. platform changes
4. data availability

It became a W3C Recommendation as early as in February 1998!


## Transform to HTML with XSL
  As mentioned above, XML is primarirly used to carry data, but there are some scenarios where you to represent the information in more user friendly way.
  For this we have XSLT(eXtensible Stylesheet Language Transformations) or simply XSL, with help of it we can represent the XML data in HTML.
  XML + XSL = HTML

### More information

* [XML Introduction](https://developer.mozilla.org/en-US/docs/XML_introduction)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)
* [Introduction to XSL](https://www.w3schools.com/xml/xsl_intro.asp)

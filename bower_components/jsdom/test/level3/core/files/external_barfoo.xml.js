/*<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html [
<!ENTITY ent1 SYSTEM 'external_foo.ent'>
<!ENTITY ent2 SYSTEM 'external_foobr.ent'>
<!ENTITY ent3 SYSTEM 'external_widget.ent'>
<!ENTITY ent5 PUBLIC "entityURI" "entityFile" NDATA notation1>
<!ELEMENT html (head, body)>
<!ATTLIST html xmlns CDATA #IMPLIED>
<!ELEMENT head (title,script*)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT script (#PCDATA)>
<!ATTLIST script 
     src CDATA #IMPLIED
     type CDATA #IMPLIED
     charset CDATA #IMPLIED>
<!ELEMENT body (p*)>
<!ATTLIST body onload CDATA #IMPLIED>
<!ELEMENT p (#PCDATA|br)*>
<!ATTLIST p xml:base CDATA #IMPLIED
            xmlns CDATA #IMPLIED>
<!ELEMENT br EMPTY>
<!NOTATION notation1 PUBLIC "notation1File">
]>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<title>external entity encoding sample</title>
</head>
<body onload="parent.loadComplete()">
<p>bar&ent2;&ent1;</p>
<p xml:base="http://www.example.com/bogus_base">bar&ent2;&ent1;</p>
&ent3;
</body>
</html>*/

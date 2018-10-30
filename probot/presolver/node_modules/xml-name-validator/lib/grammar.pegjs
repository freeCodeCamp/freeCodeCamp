// http://www.w3.org/TR/xml/#NT-Name

NameStartChar = ":" / [A-Z] / "_" / [a-z] / [\u00C0-\u00D6] / [\u00D8-\u00F6] / [\u00F8-\u02FF] / [\u0370-\u037D] /
                [\u037F-\u1FFF] / [\u200C-\u200D] / [\u2070-\u218F] / [\u2C00-\u2FEF] / [\u3001-\uD7FF] /
                [\uF900-\uFDCF] / [\uFDF0-\uFFFD] / [\uD800-\uDB7F][\uDC00-\uDFFF] ;

// last clause above produced by https://mothereff.in/regexpu#%2F%5B%5Cu%7B10000%7D-%5Cu%7BEFFFF%7D%5D%2Fu

NameChar = NameStartChar / "-" / "." / [0-9] / "\u00B7" / [\u0300-\u036F] / [\u203F-\u2040] ;

Name = NameStartChar NameChar* ;

// http://www.w3.org/TR/xml-names/#NT-QName

QName = PrefixedName
      / UnprefixedName ;

PrefixedName = Prefix ":" LocalPart ;

UnprefixedName = LocalPart ;

Prefix = NCName ;

LocalPart = NCName ;

// http://www.w3.org/TR/xml-names/#NT-NCName
// Same as Name productions but removing the ":" from NCNameStartChar

NCNameStartChar = [A-Z] / "_" / [a-z] / [\u00C0-\u00D6] / [\u00D8-\u00F6] / [\u00F8-\u02FF] / [\u0370-\u037D] /
                  [\u037F-\u1FFF] / [\u200C-\u200D] / [\u2070-\u218F] / [\u2C00-\u2FEF] / [\u3001-\uD7FF] /
                  [\uF900-\uFDCF] / [\uFDF0-\uFFFD] / [\uD800-\uDB7F][\uDC00-\uDFFF] ;

NCNameChar = NCNameStartChar / "-" / "." / [0-9] / "\u00B7" / [\u0300-\u036F] / [\u203F-\u2040] ;

NCName = NCNameStartChar NCNameChar* ;

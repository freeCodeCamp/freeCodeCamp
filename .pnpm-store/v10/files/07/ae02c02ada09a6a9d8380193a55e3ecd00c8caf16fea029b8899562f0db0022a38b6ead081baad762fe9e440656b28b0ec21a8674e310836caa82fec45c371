{{## def.checkMissingProperty:_properties:
  {{~ _properties:$propertyKey:$i }}
    {{?$i}} || {{?}}
    {{
      var $prop = it.util.getProperty($propertyKey)
        , $useData = $data + $prop;
    }}
    ( ({{# def.noPropertyInData }}) && (missing{{=$lvl}} = {{= it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) }}) )
  {{~}}
#}}


{{## def.errorMissingProperty:_error:
  {{
    var $propertyPath = 'missing' + $lvl
      , $missingProperty = '\' + ' + $propertyPath + ' + \'';
    if (it.opts._errorDataPathProperty) {
      it.errorPath = it.opts.jsonPointers
                      ? it.util.getPathExpr($currentErrorPath,  $propertyPath, true)
                      : $currentErrorPath + ' + ' + $propertyPath;
    }
  }}
  {{# def.error:_error }}
#}}


{{## def.allErrorsMissingProperty:_error:
  {{
    var $prop = it.util.getProperty($propertyKey)
      , $missingProperty = it.util.escapeQuotes($propertyKey)
      , $useData = $data + $prop;
    if (it.opts._errorDataPathProperty) {
      it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
    }
  }}
  if ({{# def.noPropertyInData }}) {
    {{# def.addError:_error }}
  }
#}}

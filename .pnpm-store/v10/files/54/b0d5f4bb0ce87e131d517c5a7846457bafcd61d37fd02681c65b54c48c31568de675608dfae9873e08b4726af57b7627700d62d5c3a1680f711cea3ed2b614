{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.$data }}

{{
  var $i = 'i' + $lvl
    , $vSchema = 'schema' + $lvl;
}}

{{? !$isData }}
  var {{=$vSchema}} = validate.schema{{=$schemaPath}};
{{?}}
var {{=$valid}};

{{?$isData}}{{# def.check$dataIsArray }}{{?}}

{{=$valid}} = false;

for (var {{=$i}}=0; {{=$i}}<{{=$vSchema}}.length; {{=$i}}++)
  if (equal({{=$data}}, {{=$vSchema}}[{{=$i}}])) {
    {{=$valid}} = true;
    break;
  }

{{? $isData }}  }  {{?}}

{{# def.checkError:'enum' }}

{{? $breakOnError }} else { {{?}}

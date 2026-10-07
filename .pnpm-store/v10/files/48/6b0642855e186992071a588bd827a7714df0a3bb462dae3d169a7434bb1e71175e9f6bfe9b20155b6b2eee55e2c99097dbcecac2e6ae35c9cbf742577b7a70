{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.$data }}

{{
  var $regexp = $isData
                ? '(new RegExp(' + $schemaValue + '))'
                : it.usePattern($schema);
}}

if ({{# def.$dataNotType:'string' }} !{{=$regexp}}.test({{=$data}}) ) {
  {{# def.error:'pattern' }}
} {{? $breakOnError }} else { {{?}}

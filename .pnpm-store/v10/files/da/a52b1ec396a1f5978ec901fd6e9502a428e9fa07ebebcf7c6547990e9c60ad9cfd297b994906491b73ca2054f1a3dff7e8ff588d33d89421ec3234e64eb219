{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.$data }}

{{# def.numberKeyword }}

{{ var $op = $keyword == 'maxItems' ? '>' : '<'; }}
if ({{# def.$dataNotType:'number' }} {{=$data}}.length {{=$op}} {{=$schemaValue}}) {
  {{ var $errorKeyword = $keyword; }}
  {{# def.error:'_limitItems' }}
} {{? $breakOnError }} else { {{?}}

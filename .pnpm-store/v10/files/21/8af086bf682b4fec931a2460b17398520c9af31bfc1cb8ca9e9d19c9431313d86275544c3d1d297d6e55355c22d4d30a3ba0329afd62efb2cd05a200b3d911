{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.$data }}

{{# def.numberKeyword }}

{{ var $op = $keyword == 'maxLength' ? '>' : '<'; }}
if ({{# def.$dataNotType:'number' }} {{# def.strLength }} {{=$op}} {{=$schemaValue}}) {
  {{ var $errorKeyword = $keyword; }}
  {{# def.error:'_limitLength' }}
} {{? $breakOnError }} else { {{?}}

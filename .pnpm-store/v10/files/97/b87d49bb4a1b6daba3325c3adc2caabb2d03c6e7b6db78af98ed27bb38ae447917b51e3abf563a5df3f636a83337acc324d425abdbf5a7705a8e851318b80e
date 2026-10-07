{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.$data }}

{{## def.setExclusiveLimit:
  $exclusive = true;
  $errorKeyword = $exclusiveKeyword;
  $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
#}}

{{
  var $isMax = $keyword == 'maximum'
    , $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum'
    , $schemaExcl = it.schema[$exclusiveKeyword]
    , $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data
    , $op = $isMax ? '<' : '>'
    , $notOp = $isMax ? '>' : '<'
    , $errorKeyword = undefined;

  if (!($isData || typeof $schema == 'number' || $schema === undefined)) {
    throw new Error($keyword + ' must be number');
  }
  if (!($isDataExcl || $schemaExcl === undefined
                    || typeof $schemaExcl == 'number'
                    || typeof $schemaExcl == 'boolean')) {
    throw new Error($exclusiveKeyword + ' must be number or boolean');
  }
}}

{{? $isDataExcl }}
  {{
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr)
      , $exclusive = 'exclusive' + $lvl
      , $exclType = 'exclType' + $lvl
      , $exclIsNumber = 'exclIsNumber' + $lvl
      , $opExpr = 'op' + $lvl
      , $opStr = '\' + ' + $opExpr + ' + \'';
  }}
  var schemaExcl{{=$lvl}} = {{=$schemaValueExcl}};
  {{ $schemaValueExcl = 'schemaExcl' + $lvl; }}

  var {{=$exclusive}};
  var {{=$exclType}} = typeof {{=$schemaValueExcl}};
  if ({{=$exclType}} != 'boolean' && {{=$exclType}} != 'undefined' && {{=$exclType}} != 'number') {
    {{ var $errorKeyword = $exclusiveKeyword; }}
    {{# def.error:'_exclusiveLimit' }}
  } else if ({{# def.$dataNotType:'number' }}
            {{=$exclType}} == 'number'
              ? (
                  ({{=$exclusive}} = {{=$schemaValue}} === undefined || {{=$schemaValueExcl}} {{=$op}}= {{=$schemaValue}})
                    ? {{=$data}} {{=$notOp}}= {{=$schemaValueExcl}}
                    : {{=$data}} {{=$notOp}} {{=$schemaValue}}
                )
              : (
                  ({{=$exclusive}} = {{=$schemaValueExcl}} === true)
                    ? {{=$data}} {{=$notOp}}= {{=$schemaValue}}
                    : {{=$data}} {{=$notOp}} {{=$schemaValue}}
                )
            || {{=$data}} !== {{=$data}}) {
    var op{{=$lvl}} = {{=$exclusive}} ? '{{=$op}}' : '{{=$op}}=';
    {{
      if ($schema === undefined) {
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaValueExcl;
        $isData = $isDataExcl;
      }
    }}
{{??}}
  {{
    var $exclIsNumber = typeof $schemaExcl == 'number'
      , $opStr = $op;  /*used in error*/
  }}

  {{? $exclIsNumber && $isData }}
    {{ var $opExpr = '\'' + $opStr + '\''; /*used in error*/ }}
    if ({{# def.$dataNotType:'number' }}
        ( {{=$schemaValue}} === undefined
          || {{=$schemaExcl}} {{=$op}}= {{=$schemaValue}}
            ? {{=$data}} {{=$notOp}}= {{=$schemaExcl}}
            : {{=$data}} {{=$notOp}} {{=$schemaValue}} )
        || {{=$data}} !== {{=$data}}) {
  {{??}}
    {{
      if ($exclIsNumber && $schema === undefined) {
          {{# def.setExclusiveLimit }}
          $schemaValue = $schemaExcl;
          $notOp += '=';
      } else {
        if ($exclIsNumber)
          $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);

        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
          {{# def.setExclusiveLimit }}
          $notOp += '=';
        } else {
          $exclusive = false;
          $opStr += '=';
        }
      }

      var $opExpr = '\'' + $opStr + '\''; /*used in error*/
    }}

    if ({{# def.$dataNotType:'number' }}
        {{=$data}} {{=$notOp}} {{=$schemaValue}}
        || {{=$data}} !== {{=$data}}) {
  {{?}}
{{?}}
    {{ $errorKeyword = $errorKeyword || $keyword; }}
    {{# def.error:'_limit' }}
  } {{? $breakOnError }} else { {{?}}

{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.setupNextLevel }}

{{
  var $currentBaseId = $it.baseId
    , $prevValid = 'prevValid' + $lvl
    , $passingSchemas = 'passingSchemas' + $lvl;
}}

var {{=$errs}} = errors
  , {{=$prevValid}} = false
  , {{=$valid}} = false
  , {{=$passingSchemas}} = null;

{{# def.setCompositeRule }}

{{~ $schema:$sch:$i }}
  {{? {{# def.nonEmptySchema:$sch }} }}
    {{
      $it.schema = $sch;
      $it.schemaPath = $schemaPath + '[' + $i + ']';
      $it.errSchemaPath = $errSchemaPath + '/' + $i;
    }}

    {{# def.insertSubschemaCode }}
  {{??}}
    var {{=$nextValid}} = true;
  {{?}}

  {{? $i }}
    if ({{=$nextValid}} && {{=$prevValid}}) {
      {{=$valid}} = false;
      {{=$passingSchemas}} = [{{=$passingSchemas}}, {{=$i}}];
    } else {
    {{ $closingBraces += '}'; }}
  {{?}}

    if ({{=$nextValid}}) {
      {{=$valid}} = {{=$prevValid}} = true;
      {{=$passingSchemas}} = {{=$i}};
    }
{{~}}

{{# def.resetCompositeRule }}

{{= $closingBraces }}

if (!{{=$valid}}) {
  {{# def.extraError:'oneOf' }}
} else {
  {{# def.resetErrors }}
{{? it.opts.allErrors }} } {{?}}

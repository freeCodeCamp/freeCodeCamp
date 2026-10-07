{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}
{{# def.setupNextLevel }}

{{? {{# def.nonEmptySchema:$schema }} }}
  {{
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
  }}

  var {{=$errs}} = errors;

  {{# def.setCompositeRule }}

  {{
    $it.createErrors = false;
    var $allErrorsOption;
    if ($it.opts.allErrors) {
      $allErrorsOption = $it.opts.allErrors;
      $it.opts.allErrors = false;
    }
  }}
  {{= it.validate($it) }}
  {{
    $it.createErrors = true;
    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
  }}

  {{# def.resetCompositeRule }}

  if ({{=$nextValid}}) {
    {{# def.error:'not' }}
  } else {
    {{# def.resetErrors }}
  {{? it.opts.allErrors }} } {{?}}
{{??}}
  {{# def.addError:'not' }}
  {{? $breakOnError}}
    if (false) {
  {{?}}
{{?}}

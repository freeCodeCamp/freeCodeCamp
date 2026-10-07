{{# def.definitions }}
{{# def.errors }}
{{# def.setupKeyword }}

{{## def._validateRef:_v:
  {{? it.opts.passContext }}
    {{=_v}}.call(this,
  {{??}}
    {{=_v}}(
  {{?}}
    {{=$data}}, {{# def.dataPath }}{{# def.passParentData }}, rootData)
#}}

{{ var $async, $refCode; }}
{{? $schema == '#' || $schema == '#/' }}
  {{
    if (it.isRoot) {
      $async = it.async;
      $refCode = 'validate';
    } else {
      $async = it.root.schema.$async === true;
      $refCode = 'root.refVal[0]';
    }
  }}
{{??}}
  {{ var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot); }}
  {{? $refVal === undefined }}
    {{ var $message = it.MissingRefError.message(it.baseId, $schema); }}
    {{? it.opts.missingRefs == 'fail' }}
      {{ it.logger.error($message); }}
      {{# def.error:'$ref' }}
      {{? $breakOnError }} if (false) { {{?}}
    {{?? it.opts.missingRefs == 'ignore' }}
      {{ it.logger.warn($message); }}
      {{? $breakOnError }} if (true) { {{?}}
    {{??}}
      {{ throw new it.MissingRefError(it.baseId, $schema, $message); }}
    {{?}}
  {{?? $refVal.inline }}
    {{# def.setupNextLevel }}
    {{
      $it.schema = $refVal.schema;
      $it.schemaPath = '';
      $it.errSchemaPath = $schema;
    }}
    {{ var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code); }}
    {{= $code }}
    {{? $breakOnError}}
      if ({{=$nextValid}}) {
    {{?}}
  {{??}}
    {{
      $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
      $refCode = $refVal.code;
    }}
  {{?}}
{{?}}

{{? $refCode }}
  {{# def.beginDefOut}}
    {{# def._validateRef:$refCode }}
  {{# def.storeDefOut:__callValidate }}

  {{? $async }}
    {{ if (!it.async) throw new Error('async schema referenced by sync schema'); }}
    {{? $breakOnError }} var {{=$valid}}; {{?}}
    try {
      await {{=__callValidate}};
      {{? $breakOnError }} {{=$valid}} = true; {{?}}
    } catch (e) {
      if (!(e instanceof ValidationError)) throw e;
      if (vErrors === null) vErrors = e.errors;
      else vErrors = vErrors.concat(e.errors);
      errors = vErrors.length;
      {{? $breakOnError }} {{=$valid}} = false; {{?}}
    }
    {{? $breakOnError }} if ({{=$valid}}) { {{?}}
  {{??}}
    if (!{{=__callValidate}}) {
      if (vErrors === null) vErrors = {{=$refCode}}.errors;
      else vErrors = vErrors.concat({{=$refCode}}.errors);
      errors = vErrors.length;
    } {{? $breakOnError }} else { {{?}}
  {{?}}
{{?}}

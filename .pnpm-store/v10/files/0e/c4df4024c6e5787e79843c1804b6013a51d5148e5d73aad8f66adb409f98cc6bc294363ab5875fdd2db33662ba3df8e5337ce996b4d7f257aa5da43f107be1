{{## def.assignDefault:
  {{? it.compositeRule }}
    {{
      if (it.opts.strictDefaults) {
        var $defaultMsg = 'default is ignored for: ' + $passData;
        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
        else throw new Error($defaultMsg);
      }
    }}
  {{??}}
    if ({{=$passData}} === undefined
      {{? it.opts.useDefaults == 'empty' }}
        || {{=$passData}} === null
        || {{=$passData}} === ''
      {{?}}
    )
      {{=$passData}} = {{? it.opts.useDefaults == 'shared' }}
                         {{= it.useDefault($sch.default) }}
                       {{??}}
                         {{= JSON.stringify($sch.default) }}
                       {{?}};
  {{?}}
#}}


{{## def.defaultProperties:
  {{
    var $schema = it.schema.properties
      , $schemaKeys = Object.keys($schema); }}
  {{~ $schemaKeys:$propertyKey }}
    {{ var $sch = $schema[$propertyKey]; }}
    {{? $sch.default !== undefined }}
      {{ var $passData = $data + it.util.getProperty($propertyKey); }}
      {{# def.assignDefault }}
    {{?}}
  {{~}}
#}}


{{## def.defaultItems:
  {{~ it.schema.items:$sch:$i }}
    {{? $sch.default !== undefined }}
      {{ var $passData = $data + '[' + $i + ']'; }}
      {{# def.assignDefault }}
    {{?}}
  {{~}}
#}}

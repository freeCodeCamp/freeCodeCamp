'use strict';
module.exports = function generate_patternRequired(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $key = 'key' + $lvl,
    $idx = 'idx' + $lvl,
    $matched = 'patternMatched' + $lvl,
    $dataProperties = 'dataProperties' + $lvl,
    $closingBraces = '',
    $ownProperties = it.opts.ownProperties;
  out += 'var ' + ($valid) + ' = true;';
  if ($ownProperties) {
    out += ' var ' + ($dataProperties) + ' = undefined;';
  }
  var arr1 = $schema;
  if (arr1) {
    var $pProperty, i1 = -1,
      l1 = arr1.length - 1;
    while (i1 < l1) {
      $pProperty = arr1[i1 += 1];
      out += ' var ' + ($matched) + ' = false;  ';
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      out += ' ' + ($matched) + ' = ' + (it.usePattern($pProperty)) + '.test(' + ($key) + '); if (' + ($matched) + ') break; } ';
      var $missingPattern = it.util.escapeQuotes($pProperty);
      out += ' if (!' + ($matched) + ') { ' + ($valid) + ' = false;  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('patternRequired') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingPattern: \'' + ($missingPattern) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should have property matching pattern \\\'' + ($missingPattern) + '\\\'\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  out += '' + ($closingBraces);
  return out;
}

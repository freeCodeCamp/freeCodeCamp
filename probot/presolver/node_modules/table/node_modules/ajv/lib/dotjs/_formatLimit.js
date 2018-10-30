'use strict';
module.exports = function generate__formatLimit(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  out += 'var ' + ($valid) + ' = undefined;';
  if (it.opts.format === false) {
    out += ' ' + ($valid) + ' = true; ';
    return out;
  }
  var $schemaFormat = it.schema.format,
    $isDataFormat = it.opts.v5 && $schemaFormat.$data,
    $closingBraces = '';
  if ($isDataFormat) {
    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
      $format = 'format' + $lvl,
      $compare = 'compare' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValueFormat) + '] , ' + ($compare) + ' = ' + ($format) + ' && ' + ($format) + '.compare;';
  } else {
    var $format = it.formats[$schemaFormat];
    if (!($format && $format.compare)) {
      out += '  ' + ($valid) + ' = true; ';
      return out;
    }
    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
  }
  var $isMax = $keyword == 'formatMaximum',
    $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.v5 && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $result = 'result' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && ' + ($schemaValueExcl) + ' !== undefined) { ' + ($valid) + ' = false; ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }  ';
    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; var ' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true; if (' + ($valid) + ' === undefined) { ' + ($valid) + ' = ' + ($exclusive) + ' ? ' + ($result) + ' ' + ($op) + ' 0 : ' + ($result) + ' ' + ($op) + '= 0; } if (!' + ($valid) + ') var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
      $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; if (' + ($valid) + ' === undefined) ' + ($valid) + ' = ' + ($result) + ' ' + ($op);
    if (!$exclusive) {
      out += '=';
    }
    out += ' 0;';
  }
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' , exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '}';
  return out;
}

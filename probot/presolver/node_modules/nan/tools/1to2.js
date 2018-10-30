#!/usr/bin/env node
/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

var commander = require('commander'),
    fs = require('fs'),
    glob = require('glob'),
    groups = [],
    total = 0,
    warning1 = '/* ERROR: Rewrite using Buffer */\n',
    warning2 = '\\/\\* ERROR\\: Rewrite using Buffer \\*\\/\\n',
    length,
    i;

fs.readFile(__dirname + '/package.json', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  commander
      .version(JSON.parse(data).version)
      .usage('[options] <file ...>')
      .parse(process.argv);

  if (!process.argv.slice(2).length) {
    commander.outputHelp();
  }
});

/* construct strings representing regular expressions
   each expression contains a unique group allowing for identification of the match
   the index of this key group, relative to the regular expression in question,
    is indicated by the first array member */

/* simple substistutions, key group is the entire match, 0 */
groups.push([0, [
  '_NAN_',
  'NODE_SET_METHOD',
  'NODE_SET_PROTOTYPE_METHOD',
  'NanAsciiString',
  'NanEscapeScope',
  'NanReturnValue',
  'NanUcs2String'].join('|')]);

/* substitutions of parameterless macros, key group is 1 */
groups.push([1, ['(', [
  'NanEscapableScope',
  'NanReturnNull',
  'NanReturnUndefined',
  'NanScope'].join('|'), ')\\(\\)'].join('')]);

/* replace TryCatch with NanTryCatch once, gobbling possible namespace, key group 2 */
groups.push([2, '(?:(?:v8\\:\\:)?|(Nan)?)(TryCatch)']);

/* NanNew("string") will likely not fail a ToLocalChecked(), key group 1 */ 
groups.push([1, ['(NanNew)', '(\\("[^\\"]*"[^\\)]*\\))(?!\\.ToLocalChecked\\(\\))'].join('')]);

/* Removed v8 APIs, warn that the code needs rewriting using node::Buffer, key group 2 */
groups.push([2, ['(', warning2, ')?', '^.*?(', [
      'GetIndexedPropertiesExternalArrayDataLength',
      'GetIndexedPropertiesExternalArrayData',
      'GetIndexedPropertiesExternalArrayDataType',
      'GetIndexedPropertiesPixelData',
      'GetIndexedPropertiesPixelDataLength',
      'HasIndexedPropertiesInExternalArrayData',
      'HasIndexedPropertiesInPixelData',
      'SetIndexedPropertiesToExternalArrayData',
      'SetIndexedPropertiesToPixelData'].join('|'), ')'].join('')]);

/* No need for NanScope in V8-exposed methods, key group 2 */
groups.push([2, ['((', [
      'NAN_METHOD',
      'NAN_GETTER',
      'NAN_SETTER',
      'NAN_PROPERTY_GETTER',
      'NAN_PROPERTY_SETTER',
      'NAN_PROPERTY_ENUMERATOR',
      'NAN_PROPERTY_DELETER',
      'NAN_PROPERTY_QUERY',
      'NAN_INDEX_GETTER',
      'NAN_INDEX_SETTER',
      'NAN_INDEX_ENUMERATOR',
      'NAN_INDEX_DELETER',
      'NAN_INDEX_QUERY'].join('|'), ')\\([^\\)]*\\)\\s*\\{)\\s*NanScope\\(\\)\\s*;'].join('')]);

/* v8::Value::ToXXXXXXX returns v8::MaybeLocal<T>, key group 3 */
groups.push([3, ['([\\s\\(\\)])([^\\s\\(\\)]+)->(', [
      'Boolean',
      'Number',
      'String',
      'Object',
      'Integer',
      'Uint32',
      'Int32'].join('|'), ')\\('].join('')]);

/* v8::Value::XXXXXXXValue returns v8::Maybe<T>, key group 3 */
groups.push([3, ['([\\s\\(\\)])([^\\s\\(\\)]+)->((?:', [
      'Boolean',
      'Number',
      'Integer',
      'Uint32',
      'Int32'].join('|'), ')Value)\\('].join('')]);

/* NAN_WEAK_CALLBACK macro was removed, write out callback definition, key group 1 */
groups.push([1, '(NAN_WEAK_CALLBACK)\\(([^\\s\\)]+)\\)']);

/* node::ObjectWrap and v8::Persistent have been replaced with Nan implementations, key group 1 */
groups.push([1, ['(', [
  'NanDisposePersistent',
  'NanObjectWrapHandle'].join('|'), ')\\s*\\(\\s*([^\\s\\)]+)'].join('')]);

/* Since NanPersistent there is no need for NanMakeWeakPersistent, key group 1 */
groups.push([1, '(NanMakeWeakPersistent)\\s*\\(\\s*([^\\s,]+)\\s*,\\s*']);

/* Many methods of v8::Object and others now return v8::MaybeLocal<T>, key group 3 */
groups.push([3, ['([\\s])([^\\s]+)->(', [
  'GetEndColumn',
  'GetFunction',
  'GetLineNumber',
  'NewInstance',
  'GetPropertyNames',
  'GetOwnPropertyNames',
  'GetSourceLine',
  'GetStartColumn',
  'ObjectProtoToString',
  'ToArrayIndex',
  'ToDetailString',
  'CallAsConstructor',
  'CallAsFunction',
  'CloneElementAt',
  'Delete',
  'ForceSet',
  'Get',
  'GetPropertyAttributes',
  'GetRealNamedProperty',
  'GetRealNamedPropertyInPrototypeChain',
  'Has',
  'HasOwnProperty',
  'HasRealIndexedProperty',
  'HasRealNamedCallbackProperty',
  'HasRealNamedProperty',
  'Set',
  'SetAccessor',
  'SetIndexedPropertyHandler',
  'SetNamedPropertyHandler',
  'SetPrototype'].join('|'), ')\\('].join('')]);

/* You should get an error if any of these fail anyways,
   or handle the error better, it is indicated either way, key group 2 */
groups.push([2, ['NanNew(<(?:v8\\:\\:)?(', ['Date', 'String', 'RegExp'].join('|'), ')>)(\\([^\\)]*\\))(?!\\.ToLocalChecked\\(\\))'].join('')]);

/* v8::Value::Equals now returns a v8::Maybe, key group 3 */
groups.push([3, '([\\s\\(\\)])([^\\s\\(\\)]+)->(Equals)\\(([^\\s\\)]+)']);

/* NanPersistent makes this unnecessary, key group 1 */
groups.push([1, '(NanAssignPersistent)(?:<v8\\:\\:[^>]+>)?\\(([^,]+),\\s*']);

/* args has been renamed to info, key group 2 */
groups.push([2, '(\\W)(args)(\\W)'])

/* node::ObjectWrap was replaced with NanObjectWrap, key group 2 */
groups.push([2, '(\\W)(?:node\\:\\:)?(ObjectWrap)(\\W)']);

/* v8::Persistent was replaced with NanPersistent, key group 2 */
groups.push([2, '(\\W)(?:v8\\:\\:)?(Persistent)(\\W)']);

/* counts the number of capturing groups in a well-formed regular expression,
   ignoring non-capturing groups and escaped parentheses */
function groupcount(s) {
  var positive = s.match(/\((?!\?)/g),
      negative = s.match(/\\\(/g);
  return (positive ? positive.length : 0) - (negative ? negative.length : 0);
}

/* compute the absolute position of each key group in the joined master RegExp */
for (i = 1, length = groups.length; i < length; i++) {
	total += groupcount(groups[i - 1][1]);
	groups[i][0] += total;
}

/* create the master RegExp, whis is the union of all the groups' expressions */
master = new RegExp(groups.map(function (a) { return a[1]; }).join('|'), 'gm');

/* replacement function for String.replace, receives 21 arguments */
function replace() {
	/* simple expressions */
      switch (arguments[groups[0][0]]) {
        case '_NAN_':
          return 'NAN_';
        case 'NODE_SET_METHOD':
          return 'NanSetMethod';
        case 'NODE_SET_PROTOTYPE_METHOD':
          return 'NanSetPrototypeMethod';
        case 'NanAsciiString':
          return 'NanUtf8String';
        case 'NanEscapeScope':
          return 'scope.Escape';
        case 'NanReturnNull':
          return 'info.GetReturnValue().SetNull';
        case 'NanReturnValue':
          return 'info.GetReturnValue().Set';
        case 'NanUcs2String':
          return 'v8::String::Value';
        default:
      }

      /* macros without arguments */
      switch (arguments[groups[1][0]]) {
        case 'NanEscapableScope':
          return 'NanEscapableScope scope'
        case 'NanReturnUndefined':
          return 'return';
        case 'NanScope':
          return 'NanScope scope';
        default:
      }

      /* TryCatch, emulate negative backref */
      if (arguments[groups[2][0]] === 'TryCatch') {
        return arguments[groups[2][0] - 1] ? arguments[0] : 'NanTryCatch';
      }

      /* NanNew("foo") --> NanNew("foo").ToLocalChecked() */
      if (arguments[groups[3][0]] === 'NanNew') {
        return [arguments[0], '.ToLocalChecked()'].join('');
      }

      /* insert warning for removed functions as comment on new line above */
      switch (arguments[groups[4][0]]) {
        case 'GetIndexedPropertiesExternalArrayData':
        case 'GetIndexedPropertiesExternalArrayDataLength':
        case 'GetIndexedPropertiesExternalArrayDataType':
        case 'GetIndexedPropertiesPixelData':
        case 'GetIndexedPropertiesPixelDataLength':
        case 'HasIndexedPropertiesInExternalArrayData':
        case 'HasIndexedPropertiesInPixelData':
        case 'SetIndexedPropertiesToExternalArrayData':
        case 'SetIndexedPropertiesToPixelData':
          return arguments[groups[4][0] - 1] ? arguments[0] : [warning1, arguments[0]].join('');
        default:
      }

     /* remove unnecessary NanScope() */
      switch (arguments[groups[5][0]]) {
        case 'NAN_GETTER':
        case 'NAN_METHOD':
        case 'NAN_SETTER':
        case 'NAN_INDEX_DELETER':
        case 'NAN_INDEX_ENUMERATOR':
        case 'NAN_INDEX_GETTER':
        case 'NAN_INDEX_QUERY':
        case 'NAN_INDEX_SETTER':
        case 'NAN_PROPERTY_DELETER':
        case 'NAN_PROPERTY_ENUMERATOR':
        case 'NAN_PROPERTY_GETTER':
        case 'NAN_PROPERTY_QUERY':
        case 'NAN_PROPERTY_SETTER':
          return arguments[groups[5][0] - 1];
        default:
      }

      /* Value converstion */
      switch (arguments[groups[6][0]]) {
        case 'Boolean':
        case 'Int32':
        case 'Integer':
        case 'Number':
        case 'Object':
        case 'String':
        case 'Uint32':
          return [arguments[groups[6][0] - 2], 'NanTo<v8::', arguments[groups[6][0]], '>(',  arguments[groups[6][0] - 1]].join('');
        default:
      }

      /* other value conversion */
      switch (arguments[groups[7][0]]) {
        case 'BooleanValue':
          return [arguments[groups[7][0] - 2], 'NanTo<bool>(', arguments[groups[7][0] - 1]].join('');
        case 'Int32Value':
          return [arguments[groups[7][0] - 2], 'NanTo<int32_t>(', arguments[groups[7][0] - 1]].join('');
        case 'IntegerValue':
          return [arguments[groups[7][0] - 2], 'NanTo<int64_t>(', arguments[groups[7][0] - 1]].join('');
        case 'Uint32Value':
          return [arguments[groups[7][0] - 2], 'NanTo<uint32_t>(', arguments[groups[7][0] - 1]].join('');
        default:
      }

      /* NAN_WEAK_CALLBACK */
      if (arguments[groups[8][0]] === 'NAN_WEAK_CALLBACK') {
        return ['template<typename T>\nvoid ',
          arguments[groups[8][0] + 1], '(const NanWeakCallbackInfo<T> &data)'].join('');
      }

      /* use methods on NAN classes instead */
      switch (arguments[groups[9][0]]) {
        case 'NanDisposePersistent':
          return [arguments[groups[9][0] + 1], '.Reset('].join('');
        case 'NanObjectWrapHandle':
          return [arguments[groups[9][0] + 1], '->handle('].join('');
        default:
      }

      /* use method on NanPersistent instead */
      if (arguments[groups[10][0]] === 'NanMakeWeakPersistent') {
        return arguments[groups[10][0] + 1] + '.SetWeak(';
      }

      /* These return Maybes, the upper ones take no arguments */
      switch (arguments[groups[11][0]]) {
        case 'GetEndColumn':
        case 'GetFunction':
        case 'GetLineNumber':
        case 'GetOwnPropertyNames':
        case 'GetPropertyNames':
        case 'GetSourceLine':
        case 'GetStartColumn':
        case 'NewInstance':
        case 'ObjectProtoToString':
        case 'ToArrayIndex':
        case 'ToDetailString':
          return [arguments[groups[11][0] - 2], 'Nan', arguments[groups[11][0]], '(', arguments[groups[11][0] - 1]].join('');
        case 'CallAsConstructor':
        case 'CallAsFunction':
        case 'CloneElementAt':
        case 'Delete':
        case 'ForceSet':
        case 'Get':
        case 'GetPropertyAttributes':
        case 'GetRealNamedProperty':
        case 'GetRealNamedPropertyInPrototypeChain':
        case 'Has':
        case 'HasOwnProperty':
        case 'HasRealIndexedProperty':
        case 'HasRealNamedCallbackProperty':
        case 'HasRealNamedProperty':
        case 'Set':
        case 'SetAccessor':
        case 'SetIndexedPropertyHandler':
        case 'SetNamedPropertyHandler':
        case 'SetPrototype':
          return [arguments[groups[11][0] - 2], 'Nan', arguments[groups[11][0]], '(', arguments[groups[11][0] - 1], ', '].join('');
        default:
      }

      /* Automatic ToLocalChecked(), take it or leave it */
      switch (arguments[groups[12][0]]) {
        case 'Date':
        case 'String':
        case 'RegExp':
          return ['NanNew', arguments[groups[12][0] - 1], arguments[groups[12][0] + 1], '.ToLocalChecked()'].join('');
        default:
      }

      /* NanEquals is now required for uniformity */
      if (arguments[groups[13][0]] === 'Equals') {
        return [arguments[groups[13][0] - 1], 'NanEquals(', arguments[groups[13][0] - 1], ', ', arguments[groups[13][0] + 1]].join('');
      }

      /* use method on replacement class instead */
      if (arguments[groups[14][0]] === 'NanAssignPersistent') {
        return [arguments[groups[14][0] + 1], '.Reset('].join('');
      }

      /* args --> info */
      if (arguments[groups[15][0]] === 'args') {
        return [arguments[groups[15][0] - 1], 'info', arguments[groups[15][0] + 1]].join('');
      }

      /* ObjectWrap --> NanObjectWrap */
      if (arguments[groups[16][0]] === 'ObjectWrap') {
        return [arguments[groups[16][0] - 1], 'NanObjectWrap', arguments[groups[16][0] + 1]].join('');
      }

      /* Persistent --> NanPersistent */
      if (arguments[groups[17][0]] === 'Persistent') {
        return [arguments[groups[17][0] - 1], 'NanPersistent', arguments[groups[17][0] + 1]].join('');
      }

      /* This should not happen. A switch is probably missing a case if it does. */
      throw 'Unhandled match: ' + arguments[0];
}

/* reads a file, runs replacement and writes it back */
function processFile(file) {
  fs.readFile(file, {encoding: 'utf8'}, function (err, data) {
    if (err) {
      throw err;
    }

    /* run replacement twice, might need more runs */
    fs.writeFile(file, data.replace(master, replace).replace(master, replace), function (err) {
      if (err) {
        throw err;
      }
    });
  });
}

/* process file names from command line and process the identified files */
for (i = 2, length = process.argv.length; i < length; i++) {
  glob(process.argv[i], function (err, matches) {
    if (err) {
      throw err;
    }
    matches.forEach(processFile);
  });
}

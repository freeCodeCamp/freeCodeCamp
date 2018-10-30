'use strict';

var compileSchema = require('./compile')
  , resolve = require('./compile/resolve')
  , Cache = require('./cache')
  , SchemaObject = require('./compile/schema_obj')
  , stableStringify = require('json-stable-stringify')
  , formats = require('./compile/formats')
  , rules = require('./compile/rules')
  , v5 = require('./v5')
  , util = require('./compile/util')
  , async = require('./async')
  , co = require('co');

module.exports = Ajv;

Ajv.prototype.compileAsync = async.compile;

var customKeyword = require('./keyword');
Ajv.prototype.addKeyword = customKeyword.add;
Ajv.prototype.getKeyword = customKeyword.get;
Ajv.prototype.removeKeyword = customKeyword.remove;
Ajv.ValidationError = require('./compile/validation_error');

var META_SCHEMA_ID = 'http://json-schema.org/draft-04/schema';
var SCHEMA_URI_FORMAT = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i;
function SCHEMA_URI_FORMAT_FUNC(str) {
  return SCHEMA_URI_FORMAT.test(str);
}

var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes' ];

/**
 * Creates validator instance.
 * Usage: `Ajv(opts)`
 * @param {Object} opts optional options
 * @return {Object} ajv instance
 */
function Ajv(opts) {
  if (!(this instanceof Ajv)) return new Ajv(opts);
  var self = this;

  opts = this._opts = util.copy(opts) || {};
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = formats(opts.format);
  this._cache = opts.cache || new Cache;
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = rules();

  // this is done on purpose, so that methods are bound to the instance
  // (without using bind) so that they can be used without the instance
  this.validate = validate;
  this.compile = compile;
  this.addSchema = addSchema;
  this.addMetaSchema = addMetaSchema;
  this.validateSchema = validateSchema;
  this.getSchema = getSchema;
  this.removeSchema = removeSchema;
  this.addFormat = addFormat;
  this.errorsText = errorsText;

  this._addSchema = _addSchema;
  this._compile = _compile;

  opts.loopRequired = opts.loopRequired || Infinity;
  if (opts.async || opts.transpile) async.setup(opts);
  if (opts.beautify === true) opts.beautify = { indent_size: 2 };
  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
  this._metaOpts = getMetaSchemaOptions();

  if (opts.formats) addInitialFormats();
  addDraft4MetaSchema();
  if (opts.v5) v5.enable(this);
  if (typeof opts.meta == 'object') addMetaSchema(opts.meta);
  addInitialSchemas();


  /**
   * Validate data using schema
   * Schema will be compiled and cached (using serialized JSON as key. [json-stable-stringify](https://github.com/substack/json-stable-stringify) is used to serialize.
   * @param  {String|Object} schemaKeyRef key, ref or schema object
   * @param  {Any} data to be validated
   * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
   */
  function validate(schemaKeyRef, data) {
    var v;
    if (typeof schemaKeyRef == 'string') {
      v = getSchema(schemaKeyRef);
      if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
    } else {
      var schemaObj = _addSchema(schemaKeyRef);
      v = schemaObj.validate || _compile(schemaObj);
    }

    var valid = v(data);
    if (v.$async === true)
      return self._opts.async == '*' ? co(valid) : valid;
    self.errors = v.errors;
    return valid;
  }


  /**
   * Create validating function for passed schema.
   * @param  {Object} schema schema object
   * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
   * @return {Function} validating function
   */
  function compile(schema, _meta) {
    var schemaObj = _addSchema(schema, undefined, _meta);
    return schemaObj.validate || _compile(schemaObj);
  }


  /**
   * Adds schema to the instance.
   * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
   * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
   * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
   * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
   */
  function addSchema(schema, key, _skipValidation, _meta) {
    if (Array.isArray(schema)){
      for (var i=0; i<schema.length; i++) addSchema(schema[i], undefined, _skipValidation, _meta);
      return;
    }
    // can key/id have # inside?
    key = resolve.normalizeId(key || schema.id);
    checkUnique(key);
    self._schemas[key] = _addSchema(schema, _skipValidation, _meta, true);
  }


  /**
   * Add schema that will be used to validate other schemas
   * options in META_IGNORE_OPTIONS are alway set to false
   * @param {Object} schema schema object
   * @param {String} key optional schema key
   * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
   */
  function addMetaSchema(schema, key, skipValidation) {
    addSchema(schema, key, skipValidation, true);
  }


  /**
   * Validate schema
   * @param {Object} schema schema to validate
   * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
   * @return {Boolean} true if schema is valid
   */
  function validateSchema(schema, throwOrLogError) {
    var $schema = schema.$schema || self._opts.defaultMeta || defaultMeta();
    var currentUriFormat = self._formats.uri;
    self._formats.uri = typeof currentUriFormat == 'function'
                        ? SCHEMA_URI_FORMAT_FUNC
                        : SCHEMA_URI_FORMAT;
    var valid;
    try { valid = validate($schema, schema); }
    finally { self._formats.uri = currentUriFormat; }
    if (!valid && throwOrLogError) {
      var message = 'schema is invalid: ' + errorsText();
      if (self._opts.validateSchema == 'log') console.error(message);
      else throw new Error(message);
    }
    return valid;
  }


  function defaultMeta() {
    var meta = self._opts.meta;
    self._opts.defaultMeta = typeof meta == 'object'
                              ? meta.id || meta
                              : self._opts.v5
                                ? v5.META_SCHEMA_ID
                                : META_SCHEMA_ID;
    return self._opts.defaultMeta;
  }


  /**
   * Get compiled schema from the instance by `key` or `ref`.
   * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
   * @return {Function} schema validating function (with property `schema`).
   */
  function getSchema(keyRef) {
    var schemaObj = _getSchemaObj(keyRef);
    switch (typeof schemaObj) {
      case 'object': return schemaObj.validate || _compile(schemaObj);
      case 'string': return getSchema(schemaObj);
      case 'undefined': return _getSchemaFragment(keyRef);
    }
  }


  function _getSchemaFragment(ref) {
    var res = resolve.schema.call(self, { schema: {} }, ref);
    if (res) {
      var schema = res.schema
        , root = res.root
        , baseId = res.baseId;
      var v = compileSchema.call(self, schema, root, undefined, baseId);
      self._fragments[ref] = new SchemaObject({
        ref: ref,
        fragment: true,
        schema: schema,
        root: root,
        baseId: baseId,
        validate: v
      });
      return v;
    }
  }


  function _getSchemaObj(keyRef) {
    keyRef = resolve.normalizeId(keyRef);
    return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
  }


  /**
   * Remove cached schema(s).
   * If no parameter is passed all schemas but meta-schemas are removed.
   * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
   * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
   * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
   */
  function removeSchema(schemaKeyRef) {
    if (schemaKeyRef instanceof RegExp) {
      _removeAllSchemas(self._schemas, schemaKeyRef);
      _removeAllSchemas(self._refs, schemaKeyRef);
      return;
    }
    switch (typeof schemaKeyRef) {
      case 'undefined':
        _removeAllSchemas(self._schemas);
        _removeAllSchemas(self._refs);
        self._cache.clear();
        return;
      case 'string':
        var schemaObj = _getSchemaObj(schemaKeyRef);
        if (schemaObj) self._cache.del(schemaObj.jsonStr);
        delete self._schemas[schemaKeyRef];
        delete self._refs[schemaKeyRef];
        return;
      case 'object':
        var jsonStr = stableStringify(schemaKeyRef);
        self._cache.del(jsonStr);
        var id = schemaKeyRef.id;
        if (id) {
          id = resolve.normalizeId(id);
          delete self._schemas[id];
          delete self._refs[id];
        }
    }
  }


  function _removeAllSchemas(schemas, regex) {
    for (var keyRef in schemas) {
      var schemaObj = schemas[keyRef];
      if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
        self._cache.del(schemaObj.jsonStr);
        delete schemas[keyRef];
      }
    }
  }


  function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
    if (typeof schema != 'object') throw new Error('schema should be object');
    var jsonStr = stableStringify(schema);
    var cached = self._cache.get(jsonStr);
    if (cached) return cached;

    shouldAddSchema = shouldAddSchema || self._opts.addUsedSchema !== false;

    var id = resolve.normalizeId(schema.id);
    if (id && shouldAddSchema) checkUnique(id);

    var willValidate = self._opts.validateSchema !== false && !skipValidation;
    var recursiveMeta;
    if (willValidate && !(recursiveMeta = schema.id && schema.id == schema.$schema))
      validateSchema(schema, true);

    var localRefs = resolve.ids.call(self, schema);

    var schemaObj = new SchemaObject({
      id: id,
      schema: schema,
      localRefs: localRefs,
      jsonStr: jsonStr,
      meta: meta
    });

    if (id[0] != '#' && shouldAddSchema) self._refs[id] = schemaObj;
    self._cache.put(jsonStr, schemaObj);

    if (willValidate && recursiveMeta) validateSchema(schema, true);

    return schemaObj;
  }


  function _compile(schemaObj, root) {
    if (schemaObj.compiling) {
      schemaObj.validate = callValidate;
      callValidate.schema = schemaObj.schema;
      callValidate.errors = null;
      callValidate.root = root ? root : callValidate;
      if (schemaObj.schema.$async === true)
        callValidate.$async = true;
      return callValidate;
    }
    schemaObj.compiling = true;

    var currentOpts;
    if (schemaObj.meta) {
      currentOpts = self._opts;
      self._opts = self._metaOpts;
    }

    var v;
    try { v = compileSchema.call(self, schemaObj.schema, root, schemaObj.localRefs); }
    finally {
      schemaObj.compiling = false;
      if (schemaObj.meta) self._opts = currentOpts;
    }

    schemaObj.validate = v;
    schemaObj.refs = v.refs;
    schemaObj.refVal = v.refVal;
    schemaObj.root = v.root;
    return v;


    function callValidate() {
      var _validate = schemaObj.validate;
      var result = _validate.apply(null, arguments);
      callValidate.errors = _validate.errors;
      return result;
    }
  }


  /**
   * Convert array of error message objects to string
   * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
   * @param  {Object} options optional options with properties `separator` and `dataVar`.
   * @return {String} human readable string with all errors descriptions
   */
  function errorsText(errors, options) {
    errors = errors || self.errors;
    if (!errors) return 'No errors';
    options = options || {};
    var separator = options.separator === undefined ? ', ' : options.separator;
    var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

    var text = '';
    for (var i=0; i<errors.length; i++) {
      var e = errors[i];
      if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
    }
    return text.slice(0, -separator.length);
  }


  /**
   * Add custom format
   * @param {String} name format name
   * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
   */
  function addFormat(name, format) {
    if (typeof format == 'string') format = new RegExp(format);
    self._formats[name] = format;
  }


  function addDraft4MetaSchema() {
    if (self._opts.meta !== false) {
      var metaSchema = require('./refs/json-schema-draft-04.json');
      addMetaSchema(metaSchema, META_SCHEMA_ID, true);
      self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
    }
  }


  function addInitialSchemas() {
    var optsSchemas = self._opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) addSchema(optsSchemas);
    else for (var key in optsSchemas) addSchema(optsSchemas[key], key);
  }


  function addInitialFormats() {
    for (var name in self._opts.formats) {
      var format = self._opts.formats[name];
      addFormat(name, format);
    }
  }


  function checkUnique(id) {
    if (self._schemas[id] || self._refs[id])
      throw new Error('schema with key or id "' + id + '" already exists');
  }


  function getMetaSchemaOptions() {
    var metaOpts = util.copy(self._opts);
    for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
      delete metaOpts[META_IGNORE_OPTIONS[i]];
    return metaOpts;
  }
}

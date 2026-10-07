/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var inspect = function inspect() {};

if (process.env.NODE_ENV !== "production") {
  var formattersInstalled = false;
  /**
   * Installs a Chrome Developer Tools custom formatter for Relay proxy objects
   * returned by StoreInspector.inspect.
   *
   * bit.ly/object-formatters
   */

  var installDevtoolFormatters = function installDevtoolFormatters() {
    var _window$devtoolsForma;

    if (formattersInstalled) {
      return;
    }

    formattersInstalled = true;

    if (window.devtoolsFormatters == null) {
      window.devtoolsFormatters = [];
    }

    if (!Array.isArray(window.devtoolsFormatters)) {
      return;
    } // eslint-disable-next-line no-console


    console.info('Make sure to select "Enable custom formatters" in the Chrome ' + 'Developer Tools settings, tab "Preferences" under the "Console" ' + 'section.');

    (_window$devtoolsForma = window.devtoolsFormatters).push.apply(_window$devtoolsForma, (0, _toConsumableArray2["default"])(createFormatters()));
  };

  var createFormatters = function createFormatters() {
    var listStyle = {
      style: 'list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal'
    };
    var keyStyle = {
      style: 'rgb(136, 19, 145)'
    };
    var nullStyle = {
      style: 'color: #777'
    };

    var reference = function reference(object, config) {
      return object == null ? ['span', nullStyle, 'undefined'] : ['object', {
        object: object,
        config: config
      }];
    };

    var renderRecordHeader = function renderRecordHeader(record) {
      return ['span', {
        style: 'font-style: italic'
      }, record.__typename, ['span', nullStyle, ' {id: "', record.__id, '", …}']];
    };

    var isRecord = function isRecord(o) {
      return o != null && typeof o.__id === 'string';
    };

    var RecordEntry = function RecordEntry(key, value) {
      this.key = key;
      this.value = value;
    };

    var renderRecordEntries = function renderRecordEntries(record) {
      var children = Object.keys(record).map(function (key) {
        return ['li', {}, ['object', {
          object: new RecordEntry(key, record[key])
        }]];
      });
      return ['ol', listStyle].concat((0, _toConsumableArray2["default"])(children));
    };

    var recordFormatter = {
      header: function header(obj) {
        if (!isRecord(obj)) {
          return null;
        }

        return renderRecordHeader(obj);
      },
      hasBody: function hasBody(obj) {
        return true;
      },
      body: function body(obj) {
        return renderRecordEntries(obj);
      }
    };
    var recordEntryFormatter = {
      header: function header(obj) {
        if (obj instanceof RecordEntry) {
          var value = isRecord(obj.value) ? renderRecordHeader(obj.value) : reference(obj.value);
          return ['span', keyStyle, obj.key, ': ', value];
        }

        return null;
      },
      hasBody: function hasBody(obj) {
        return isRecord(obj.value);
      },
      body: function body(obj) {
        return renderRecordEntries(obj.value);
      }
    };
    return [recordFormatter, recordEntryFormatter];
  };

  var getWrappedRecord = function getWrappedRecord(source, dataID) {
    var record = source.get(dataID);

    if (record == null) {
      return record;
    }

    return new Proxy((0, _objectSpread2["default"])({}, record), {
      get: function get(target, prop) {
        var value = target[prop];

        if (value == null) {
          return value;
        }

        if (typeof value === 'object') {
          if (typeof value.__ref === 'string') {
            return getWrappedRecord(source, value.__ref);
          }

          if (Array.isArray(value.__refs)) {
            // $FlowFixMe[incompatible-call]
            return value.__refs.map(function (ref) {
              return getWrappedRecord(source, ref);
            });
          }
        }

        return value;
      }
    });
  };

  inspect = function inspect(environment, dataID) {
    installDevtoolFormatters();
    return getWrappedRecord(environment.getStore().getSource(), dataID !== null && dataID !== void 0 ? dataID : 'client:root');
  };
}

module.exports = {
  inspect: inspect
};